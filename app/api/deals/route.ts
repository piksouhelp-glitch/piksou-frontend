import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const response = await fetch('https://api.piksou.com/api/products/home-public/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            // Add cache control
            next: { revalidate: 300 } // Cache for 5 minutes
        })

        if (!response.ok) {
            console.error('API response not ok:', response.status, response.statusText)
            return NextResponse.json(
                { error: 'Failed to fetch deals from external API' },
                { status: response.status }
            )
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error('Error fetching deals:', error)
        return NextResponse.json(
            { error: 'Internal server error while fetching deals' },
            { status: 500 }
        )
    }
}
