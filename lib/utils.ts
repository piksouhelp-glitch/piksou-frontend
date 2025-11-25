import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Deal } from "./api"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Diversifies deals to avoid duplicates and ensure variety across stores and categories
 * @param deals - Array of all available deals
 * @param maxDeals - Maximum number of deals to return (default: 4)
 * @returns Array of diversified deals
 */
export function diversifyDeals(deals: Deal[], maxDeals: number = 4): Deal[] {
  if (deals.length === 0) return []

  // Group deals by store and category for better distribution
  const storeGroups = new Map<string, Deal[]>()
  const categoryGroups = new Map<string, Deal[]>()
  const productGroups = new Map<string, Deal[]>()

  // Group deals by store
  deals.forEach(deal => {
    const storeId = deal.store.id
    if (!storeGroups.has(storeId)) {
      storeGroups.set(storeId, [])
    }
    storeGroups.get(storeId)!.push(deal)
  })

  // Group deals by category
  deals.forEach(deal => {
    const categoryId = deal.product.category.id
    if (!categoryGroups.has(categoryId)) {
      categoryGroups.set(categoryId, [])
    }
    categoryGroups.get(categoryId)!.push(deal)
  })

  // Group deals by product to avoid same product from different stores
  deals.forEach(deal => {
    const productId = deal.product.id
    if (!productGroups.has(productId)) {
      productGroups.set(productId, [])
    }
    productGroups.get(productId)!.push(deal)
  })

  const selectedDeals: Deal[] = []
  const usedStores = new Set<string>()
  const usedCategories = new Set<string>()
  const usedProducts = new Set<string>()

  // First pass: Try to get one deal from each store and category
  const storeIds = Array.from(storeGroups.keys())
  const categoryIds = Array.from(categoryGroups.keys())

  // Sort stores and categories by number of deals (more deals = more variety)
  storeIds.sort((a, b) => storeGroups.get(b)!.length - storeGroups.get(a)!.length)
  categoryIds.sort((a, b) => categoryGroups.get(b)!.length - categoryGroups.get(a)!.length)

  // Try to select deals ensuring diversity
  for (let i = 0; i < maxDeals && selectedDeals.length < maxDeals; i++) {
    let bestDeal: Deal | null = null
    let bestScore = -1

    // Score each available deal based on diversity criteria
    for (const deal of deals) {
      if (selectedDeals.some(selected => selected.id === deal.id)) continue

      let score = 0

      // Prefer deals from unused stores
      if (!usedStores.has(deal.store.id)) score += 10

      // Prefer deals from unused categories
      if (!usedCategories.has(deal.product.category.id)) score += 8

      // Prefer deals from unused products
      if (!usedProducts.has(deal.product.id)) score += 15

      // Prefer deals with higher discount percentages
      const discount = parseFloat(deal.discount_percentage)
      score += discount * 0.1

      // Prefer deals with better ratings (if available) or newer deals
      const daysSinceCreated = (Date.now() - new Date(deal.created_at).getTime()) / (1000 * 60 * 60 * 24)
      score += Math.max(0, 30 - daysSinceCreated) * 0.1

      if (score > bestScore) {
        bestScore = score
        bestDeal = deal
      }
    }

    if (bestDeal) {
      selectedDeals.push(bestDeal)
      usedStores.add(bestDeal.store.id)
      usedCategories.add(bestDeal.product.category.id)
      usedProducts.add(bestDeal.product.id)
    }
  }

  // If we still need more deals and have some remaining, fill with best remaining deals
  if (selectedDeals.length < maxDeals) {
    const remainingDeals = deals.filter(deal =>
      !selectedDeals.some(selected => selected.id === deal.id)
    )

    // Sort remaining deals by discount percentage and recency
    remainingDeals.sort((a, b) => {
      const discountA = parseFloat(a.discount_percentage)
      const discountB = parseFloat(b.discount_percentage)
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()

      if (Math.abs(discountA - discountB) > 5) {
        return discountB - discountA // Higher discount first
      }
      return dateB - dateA // Newer deals first
    })

    const needed = maxDeals - selectedDeals.length
    selectedDeals.push(...remainingDeals.slice(0, needed))
  }

  return selectedDeals
}

export function getStoreInitials(name: string, maxChars: number = 2): string {
  if (!name) return "ST"

  const initials = name
    .trim()
    .split(/\s+/)
    .map(part => part.charAt(0))
    .join("")
    .slice(0, Math.max(1, maxChars))
    .toUpperCase()

  return initials || "ST"
}