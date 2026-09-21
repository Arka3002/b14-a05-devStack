import bannerStack from "../assets/banner-stack.png"

const Hero = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3 rounded-lg text-white font-medium text-sm bg-linear-to-r from-orange-500 to-pink-500 hover:opacity-95 transition-opacity shadow-sm cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-lg text-slate-700 font-medium text-sm bg-white border border-gray-200 hover:bg-slate-50 transition-colors cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: Isometric Stack Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerStack}
            alt="Development Stack Illustration"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-sm"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero