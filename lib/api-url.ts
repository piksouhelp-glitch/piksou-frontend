export const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://api.piksou.com"

export function buildApiUrl(path: string): string {
  const base = API_BASE_URL.replace(/\/$/, "")
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalizedPath}`
}
