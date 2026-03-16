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
            The Enduring Value Framework (EVF) is a design philosophy for structuring capital systems that endure across market regimes.
          </p>
          <p>
            Rather than focusing solely on portfolio allocation, EVF emphasizes capital architecture — integrating enterprise capital, market investments, structural capital, liquidity, and opportunistic strategies into a resilient financial system.
          </p>
          <p>
            Peridot Advisory works with entrepreneurs and families to design and implement capital systems built for long-term durability and generational continuity.
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
