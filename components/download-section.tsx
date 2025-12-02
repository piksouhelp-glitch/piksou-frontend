"use client"

export default function DownloadSection() {
  return (
    <section className="section-padding market-section relative overflow-hidden" id="download">
      {/* Floating tropical elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl opacity-20">🌺</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20">🥥</div>
        <div className="absolute bottom-20 left-1/4 text-3xl opacity-20">🌴</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-palm-shadow dark:text-sugarcane-green mb-4 handwritten">
            Pret pou ekonomi sak semenn?
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-mango-yellow via-sunset-orange to-ocean-blue mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-palm-shadow dark:text-gray-300 mb-8">
            Download PikSou now and start comparing deals instantly!
            <br />
            <span className="creole-text text-2xl"> Mo pou ede ou ekonomi! </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href="https://apps.apple.com/gh/app/piksou/id6755356394"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-14 w-auto opacity-90 hover:opacity-100"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.piksou.piksou"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src="/images/google-play-badge.svg"
                alt="Get it on Google Play"
                className="h-14 w-auto opacity-90 hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
