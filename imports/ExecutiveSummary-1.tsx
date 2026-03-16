export function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-5xl text-[#1a1a1a] mb-16">
          Executive Summary
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              For decades, institutional finance has operated under a simple premise: wealth is built through portfolio construction. Allocate across asset classes, rebalance periodically, and trust in mean reversion. The logic is elegant. The results, however, tell a different story.
            </p>
            <p>
              The 2000s saw equities return virtually nothing for a decade. The 2008 financial crisis erased trillions in coordinated collapse. The 2022 rate shock demonstrated that even the classic "60/40" portfolio offers no reliable hedge when correlations converge.
            </p>
            <p>
              The traditional portfolio is not a capital system. It is a single-engine aircraft flying through turbulent skies. When that engine fails, there is no backup.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              Family offices, by contrast, operate differently. They do not manage portfolios. They architect capital systems—networks of uncorrelated return engines designed to produce compounding growth across cycles, not despite volatility, but through it.
            </p>
            <p>
              This paper introduces the Enduring Value Framework (EVF), a capital system architecture that separates wealth preservation from wealth creation, structural capital from market capital, and liquidity from long-term compounding.
            </p>
            <p>
              The EVF is not a product. It is a design philosophy for entrepreneurs, executives, and families who recognize that durability matters more than any single year's performance.
            </p>
          </div>
        </div>

        {/* Callout Quote */}
        <div className="bg-[#e8e2d4] border-l-4 border-[#b8a66a] p-12 my-16">
          <blockquote className="font-['Playfair_Display'] text-3xl text-[#0f2e26] leading-relaxed italic">
            "Wealth is not a portfolio.<br />
            It is a capital system."
          </blockquote>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          3
        </div>
      </div>
    </div>
  );
}
