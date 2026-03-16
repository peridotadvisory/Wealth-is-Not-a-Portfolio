export function Cover() {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#0f2e26]">
      {/* Golfer silhouette with glowing arc */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505794718076-13e166c01a33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmZXIlMjBzaWxob3VldHRlJTIwc3Vuc2V0JTIwZHJhbWF0aWN8ZW58MXx8fHwxNzczNjA2MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Golfer at sunset"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2e26] via-transparent to-[#0f2e26]" />
      </div>

      {/* Glowing arc overlay */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-40" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8a66a" stopOpacity="0" />
            <stop offset="50%" stopColor="#b8a66a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#b8a66a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 100 700 Q 500 200 900 700"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="3"
          className="drop-shadow-[0_0_20px_rgba(184,166,106,0.6)]"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl text-[#f4efe6] mb-6 tracking-wide leading-tight">
          WEALTH IS NOT A PORTFOLIO
        </h1>
        <p className="font-['Inter'] text-xl md:text-2xl text-[#b8a66a] mb-16 tracking-wide">
          The Enduring Value Framework for Capital System Design
        </p>
        
        <div className="border-t border-[#b8a66a]/30 pt-8 mt-16">
          <p className="font-['Inter'] text-lg text-[#f4efe6]/80 mb-4">
            Peridot Advisory
          </p>
          <p className="font-['Inter'] text-sm text-[#b8a66a]/70 tracking-widest uppercase">
            Capital Architecture for Enduring Wealth
          </p>
        </div>
      </div>

      {/* Bottom quote */}
      <div className="absolute bottom-12 left-0 right-0 text-center px-8">
        <p className="font-['Inter'] text-sm md:text-base text-[#f4efe6]/60 italic max-w-2xl mx-auto">
          "Markets require a swing.<br />
          Capital systems make the swing survivable."
        </p>
      </div>
    </div>
  );
}
