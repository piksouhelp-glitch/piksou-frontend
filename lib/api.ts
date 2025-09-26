const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://api.piksou.com"

// TypeScript interfaces based on the API response structure
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
    locations: any[]
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
    product: Product
    store: Store
    location: any | null
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

export interface HomePublicResponse {
    categories: Category[]
    latest_deals: Deal[]
    top_deals: Deal[]
    stores: Store[]
}

export interface ApiResponse<T> {
    data?: T
    error?: string
    success: boolean
}

class ApiService {
    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<ApiResponse<T>> {
        try {
            const url = `${BASE_URL}${endpoint}`
            console.log("Making API request to:", url)

            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    ...options.headers,
                },
                ...options,
            })

            console.log("Response status:", response.status)
            console.log("Response headers:", response.headers)

            if (!response.ok) {
                let errorMessage = `HTTP error! status: ${response.status}`
                try {
                    const errorData = await response.json()
                    errorMessage = errorData.detail || errorData.message || errorMessage
                } catch (parseError) {
                    console.warn("Could not parse error response as JSON")
                }
                throw new Error(errorMessage)
            }

            const data = await response.json()
            console.log("API response received:", data)
            return { data, success: true }
        } catch (error: any) {
            console.error("API request failed:", {
                message: error.message,
                name: error.name,
                stack: error.stack,
                endpoint: `${BASE_URL}${endpoint}`
            })

            // Provide more specific error messages
            let userMessage = error.message
            if (error.message === "Failed to fetch") {
                userMessage = "Unable to connect to the server. Please check your internet connection and try again."
            } else if (error.message.includes("CORS")) {
                userMessage = "Server configuration issue. Please try again later."
            }

            return { error: userMessage, success: false }
        }
    }

    // Support messages (existing functionality)
    async sendSupportMessage(payload: any, token?: string) {
        return this.request("api/support/messages/", {
            method: "POST",
            headers: token ? { Authorization: `Bearer ${token}` } : {},
            body: JSON.stringify(payload),
        })
    }

    // New endpoints for deals
    async getHomePublicData(): Promise<ApiResponse<HomePublicResponse>> {
        // Try direct API first, then fallback to our proxy
        try {
            const directResult = await this.request<HomePublicResponse>("api/products/home-public/")
            if (directResult.success) {
                return directResult
            }
        } catch (error) {
            console.warn("Direct API failed, trying proxy:", error)
        }

        // Fallback to our Next.js API route
        try {
            const response = await fetch('/api/deals', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error(`Proxy API error: ${response.status}`)
            }

            const data = await response.json()
            return { data, success: true }
        } catch (error: any) {
            console.error("Both direct and proxy API failed:", error)
            return { error: "Unable to fetch deals. Please try again later.", success: false }
        }
    }

    async getTopDeals(): Promise<ApiResponse<Deal[]>> {
        const result = await this.getHomePublicData()
        if (result.success && result.data) {
            return { data: result.data.top_deals, success: true }
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
