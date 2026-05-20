import { NextRequest, NextResponse } from "next/server"
import { buildApiUrl } from "@/lib/api-url"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const authHeader = request.headers.get("authorization")

    const response = await fetch(buildApiUrl("/api/support/messages/"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(authHeader ? { Authorization: authHeader } : {}),
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return NextResponse.json(
        { error: errorData.detail || "Failed to submit support message" },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error submitting support message:", error)
    return NextResponse.json(
      { error: "Internal server error while submitting support message" },
      { status: 500 }
    )
  }
}
