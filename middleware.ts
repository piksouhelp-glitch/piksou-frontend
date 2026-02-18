import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") || ""
  const hostname = hostHeader.split(":")[0].toLowerCase()
  const url = request.nextUrl.clone()

  // Skip local development hosts
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return NextResponse.next()
  }

  if (hostname.startsWith("partner.")) {
    const path = url.pathname

    // Exposes /partners route on partner subdomain
    if (path === "/") {
      url.pathname = "/partners"
      return NextResponse.rewrite(url)
    }

    if (path === "/partners") {
      url.pathname = "/"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
}
