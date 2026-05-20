import { NextResponse } from "next/server"
import { buildApiUrl } from "@/lib/api-url"

export async function GET() {
  try {
    const response = await fetch(buildApiUrl("/api/products/home/"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      console.error("API response not ok:", response.status, response.statusText)
      return NextResponse.json(
        { error: "Failed to fetch home data" },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching home data:", error)
    return NextResponse.json(
      { error: "Internal server error while fetching home data" },
      { status: 500 }
    )
  }
}
