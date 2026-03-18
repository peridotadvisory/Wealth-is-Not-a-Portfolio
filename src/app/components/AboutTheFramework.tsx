export function AboutTheFramework() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Top divider */}
        <div className="w-24 h-px bg-[#b8a66a] mx-auto mb-12" />

        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 text-center">
          About the Enduring Value Framework
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
          <p>
  The Enduring Value Framework (EVF) is a capital design philosophy for entrepreneurs, executives, and families seeking enduring architecture rather than portfolio management alone.
</p>
<p>
  It expands the aperture beyond portfolio theory by organizing capital across foundation, stability, and expansion—each serving a distinct role inside a coordinated system.
</p>
<p>
  Peridot Advisory uses this framework to help design capital systems built for durability, adaptability, and long-term continuity.
</p>
        </div>

        {/* Bottom divider */}
        <div className="w-24 h-px bg-[#b8a66a] mx-auto mt-12" />

        {/* Decorative arc */}
        <svg viewBox="0 0 200 50" className="w-48 h-12 mx-auto mt-12 opacity-30">
          <path
            d="M 10 40 Q 100 10 190 40"
            fill="none"
            stroke="#b8a66a"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
