import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partner with PiKSou - Grow Your Business in Mauritius",
  description:
    "Join PiKSou's partner program to increase store visibility, access analytics insights, and drive orders from Mauritius's top grocery comparison platform.",
  openGraph: {
    title: "Partner with PiKSou - Grow Your Business",
    description:
      "Join PiKSou's partner program for increased visibility, analytics, and direct orders.",
    url: "https://piksou.mu/partners",
  },
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
