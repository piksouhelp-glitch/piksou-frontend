export interface Category {
  id: string
  name: string
  name_fr: string
  description: string
  description_fr: string
  icon: string | null
  image: string
  is_active: boolean
  active_deal_count: number
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  name_fr: string
  productname: string
  productname_fr: string
  description: string
  description_fr: string
  image: string
  category: Category
  category_display: string
  brand: string
  weight: string | null
  unit: string | null
  nutritional_info: string | null
  ingredients: string | null
  allergens: string | null
  storage_instructions: string | null
  country_of_origin: string | null
  created_at: string
  updated_at: string
}

export interface Store {
  id: string
  name: string
  description: string
  logo: string
  website: string
  contact_email: string
  contact_phone: string
  business_hours: string | null
  is_active: boolean
  locations: unknown[]
  locations_count: number
  active_deal_count: number
  created_at: string
  updated_at: string
}

export interface Brochure {
  id: string
  title: string
  description: string
  store: Store
  image: string | null
  start_date: string
  end_date: string
  is_active: boolean
  active_deals_count: number
  page_count: number
  created_at: string
  updated_at: string
}

export interface Deal {
  id: string
  image?: string
  product: Product
  store: Store
  location: unknown | null
  brochure: Brochure
  original_price: string
  discounted_price: string
  discount_percentage: string
  deal_type: string
  quantity_required: number
  deal_conditions: {
    notes: string | null
  }
  start_date: string
  end_date: string
  status: string
  created_at: string
  updated_at: string
  is_saved: boolean
  is_purchased: boolean
}

export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface HomePublicResponse {
  categories: Category[]
  latest_deals: Deal[]
  top_deals: Deal[] | PaginatedResponse<Deal>
  stores: Store[]
}

function extractDeals(value: Deal[] | PaginatedResponse<Deal>): Deal[] {
  return Array.isArray(value) ? value : value?.results ?? []
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

type SupportMessagePayload = Record<string, string>

class ApiService {
  private async fetchRoute<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(path, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...options.headers,
        },
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const message =
          (errorData as { error?: string; detail?: string }).error ||
          (errorData as { error?: string; detail?: string }).detail ||
          `HTTP error! status: ${response.status}`
        throw new Error(message)
      }

      const data = (await response.json()) as T
      return { data, success: true }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Request failed"
      console.error(`API request failed (${path}):`, message)
      return { error: message, success: false }
    }
  }

  async sendSupportMessage(
    payload: SupportMessagePayload,
    token?: string
  ): Promise<ApiResponse<unknown>> {
    return this.fetchRoute("/api/support/messages", {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: JSON.stringify(payload),
    })
  }

  async getHomePublicData(): Promise<ApiResponse<HomePublicResponse>> {
    return this.fetchRoute<HomePublicResponse>("/api/products/home")
  }

  async getTopDeals(): Promise<ApiResponse<Deal[]>> {
    const result = await this.getHomePublicData()
    if (result.success && result.data) {
      return { data: extractDeals(result.data.top_deals), success: true }
    }
    return { error: result.error, success: false }
  }

  async getCategories(): Promise<ApiResponse<Category[]>> {
    const result = await this.getHomePublicData()
    if (result.success && result.data) {
      return { data: result.data.categories, success: true }
    }
    return { error: result.error, success: false }
  }

  async getStores(): Promise<ApiResponse<Store[]>> {
    const result = await this.getHomePublicData()
    if (result.success && result.data) {
      return { data: result.data.stores, success: true }
    }
    return { error: result.error, success: false }
  }
}

export const apiService = new ApiService()
