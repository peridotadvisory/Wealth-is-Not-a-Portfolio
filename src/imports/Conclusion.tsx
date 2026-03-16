export function Conclusion() {
  return (
    <div className="min-h-screen bg-[#0f2e26] px-8 py-24 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Decorative arc */}
        <svg viewBox="0 0 400 100" className="w-full max-w-md mx-auto mb-16 opacity-40">
          <path
            d="M 50 80 Q 200 20 350 80"
            fill="none"
            stroke="#b8a66a"
            strokeWidth="2"
            className="drop-shadow-[0_0_10px_rgba(184,166,106,0.5)]"
          />
        </svg>

        {/* Main message */}
        <h2 className="font-['Playfair_Display'] text-6xl md:text-7xl text-[#e8e2d4] mb-8 tracking-wide">
          Capital systems endure.
        </h2>

        <div className="w-32 h-px bg-[#b8a66a] mx-auto mb-12" />

        <p className="font-['Inter'] text-xl text-[#e8e2d4]/70 leading-relaxed max-w-2xl mx-auto mb-24">
          Portfolios are optimized for efficiency. Systems are optimized for survival. 
          In the long run, survival is the only efficiency that matters.
        </p>

        {/* Footer branding */}
        <div className="border-t border-[#b8a66a]/30 pt-12">
          <p className="font-['Playfair_Display'] text-3xl text-[#e8e2d4] mb-4">
            Peridot Advisory
          </p>
          <p className="font-['Inter'] text-base text-[#b8a66a] tracking-widest uppercase mb-12">
            Capital Architecture for Enduring Wealth
          </p>

          {/* Contact placeholder */}
          <div className="font-['Inter'] text-sm text-[#e8e2d4]/50 space-y-1">
            <p>www.peridotadvisory.com</p>
            <p>research@peridotadvisory.com</p>
          </div>
        </div>

        {/* Arc decoration bottom */}
        <svg viewBox="0 0 200 50" className="w-48 mx-auto mt-16 opacity-20">
          <path
            d="M 20 40 Q 100 10 180 40"
            fill="none"
            stroke="#b8a66a"
            strokeWidth="1.5"
          />
        </svg>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#e8e2d4]/40">
          14
        </div>
      </div>
    </div>
  );
}
