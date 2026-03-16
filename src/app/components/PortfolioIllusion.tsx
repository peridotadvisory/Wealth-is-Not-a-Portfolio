export function PortfolioIllusion() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          The Portfolio Illusion
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              The modern portfolio is a construction of elegant mathematics. Harry Markowitz won a Nobel Prize for demonstrating that diversification across uncorrelated assets can reduce risk without sacrificing returns. His insight was foundational. But it carried an assumption that no longer holds.
            </p>
            <p>
              The assumption was this: asset classes remain meaningfully uncorrelated over time. Equities zig when bonds zag. Alternatives provide true diversification. But in practice, when markets experience genuine stress, correlations converge. Everything falls together.
            </p>
            <p>
              A portfolio is not a system of independent engines. It is a collection of instruments powered by the same underlying force: market sentiment. When sentiment shifts, the entire structure moves in unison.
            </p>
            <p>
              This is the portfolio illusion: the belief that owning multiple asset classes constitutes true diversification, when in reality, you have simply built a multi-asset exposure to a single risk factor.
            </p>
          </div>

          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-full max-w-sm">
              {/* Traditional Portfolio Diagram */}
              <div className="relative">
                <svg viewBox="0 0 300 300" className="w-full">
                  {/* Circle segments */}
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    fill="none"
                    stroke="#0f2e26"
                    strokeWidth="40"
                    strokeDasharray="188 440"
                    transform="rotate(-90 150 150)"
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="40"
                    strokeDasharray="125 440"
                    strokeDashoffset="-188"
                    transform="rotate(-90 150 150)"
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    fill="none"
                    stroke="#b8a66a"
                    strokeWidth="40"
                    strokeDasharray="127 440"
                    strokeDashoffset="-313"
                    transform="rotate(-90 150 150)"
                  />
                  
                  {/* Center text */}
                  <text
                    x="150"
                    y="140"
                    textAnchor="middle"
                    className="font-['Inter'] text-xs fill-[#1a1a1a]/60"
                  >
                    Traditional
                  </text>
                  <text
                    x="150"
                    y="160"
                    textAnchor="middle"
                    className="font-['Inter'] text-xs fill-[#1a1a1a]/60"
                  >
                    Portfolio
                  </text>
                </svg>

                {/* Labels */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#0f2e26]" />
                    <span className="font-['Inter'] text-sm text-[#1a1a1a]">Equities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#1a1a1a]" />
                    <span className="font-['Inter'] text-sm text-[#1a1a1a]">Bonds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#b8a66a]" />
                    <span className="font-['Inter'] text-sm text-[#1a1a1a]">Alternatives</span>
                  </div>
                </div>

                {/* Annotation */}
                <div className="mt-8 text-center">
                  <p className="font-['Inter'] text-sm italic text-[#b8a66a]">
                    "Multiple assets, one engine."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          4
        </div>
      </div>
    </div>
  );
}
