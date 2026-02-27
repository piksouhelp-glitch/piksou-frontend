"use client"

import { useEffect, useState } from "react"

const IOS_URL = "https://apps.apple.com/gh/app/piksou/id6755356394"
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.piksou.piksou"

const STRINGS = {
  en: {
    opening: "Opening PiKSou on your device…",
    fallbackPrompt: "If you're not redirected, choose your store:",
    appStore: "Open in Apple App Store",
    playStore: "Open in Google Play Store",
  },
  fr: {
    opening: "Ouverture de PiKSou sur votre appareil…",
    fallbackPrompt: "Si vous n'êtes pas redirigé, choisissez votre boutique :",
    appStore: "Ouvrir sur l'App Store",
    playStore: "Ouvrir sur Google Play",
  },
} as const

interface AppSmartLinkClientProps {
  locale?: "en" | "fr"
}

export function AppSmartLinkClient({ locale = "en" }: AppSmartLinkClientProps) {
  const [showFallback, setShowFallback] = useState(false)
  const t = STRINGS[locale]

  useEffect(() => {
    if (typeof window === "undefined") return

    const ua: string =
      navigator.userAgent ||
      (navigator as { vendor?: string }).vendor ||
      (window as { opera?: string }).opera ||
      ""

    const isAndroid = /android/i.test(ua)
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as { MSStream?: unknown }).MSStream

    if (isIOS) {
      window.location.replace(IOS_URL)
    } else if (isAndroid) {
      window.location.replace(ANDROID_URL)
    } else {
      setShowFallback(true)
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-lg font-medium">{t.opening}</p>

      {showFallback && (
        <div className="mt-4 space-y-2">
          <p>{t.fallbackPrompt}</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
            <a
              href={IOS_URL}
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.appStore}
            </a>
            <a
              href={ANDROID_URL}
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.playStore}
            </a>
          </div>
        </div>
      )}
    </main>
  )
}
