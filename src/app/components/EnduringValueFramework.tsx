export function EnduringValueFramework() {
  return (
    <div className="min-h-screen bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-5xl text-[#1a1a1a] mb-16">
          The Enduring Value Framework
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              The Enduring Value Framework is not a set of investment products. It is an architectural philosophy for organizing capital into systems that compound across cycles.
            </p>
            <p>
              The framework is built in two layers: a foundation layer designed for protection and optionality, and a growth layer designed for compounding and opportunity capture.
            </p>
            <p>
              The foundation layer does not seek maximum returns. It seeks resilience. It provides liquidity when markets seize. It generates income when growth stalls. It holds structural capital that maintains value independent of sentiment.
            </p>
            <p>
              The growth layer operates differently. It takes concentrated positions. It deploys capital into enterprises. It accepts volatility as the cost of asymmetric opportunity.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              Together, these layers create a system that can withstand drawdowns without abandoning growth. The foundation stabilizes. The growth layer compounds. Neither alone is sufficient.
            </p>
            <p>
              This is the essential insight: wealth is not preserved by avoiding risk. It is preserved by building systems that can absorb risk in one layer while capturing opportunity in another.
            </p>
            <p>
              The EVF separates what must be protected from what should be deployed. It acknowledges that volatility is not the enemy—fragility is.
            </p>
          </div>
        </div>

        {/* Layered Architecture Diagram */}
        <div className="bg-[#e8e2d4] p-12 rounded-lg">
          <h3 className="font-['Playfair_Display'] text-3xl text-[#0f2e26] mb-12 text-center">
            Capital Architecture Layers
          </h3>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Growth Layer */}
            <div className="space-y-2">
              <div className="bg-[#0f2e26] text-[#e8e2d4] px-6 py-3 font-['Inter'] text-sm uppercase tracking-wider">
                Growth Layer
              </div>
              
              <div className="bg-white p-4 border-l-4 border-[#0f2e26]">
                <div className="font-['Inter'] font-medium text-sm text-[#1a1a1a] mb-2">
                  Tactical Strategies
                </div>
                <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
                  Opportunistic deployment, concentrated positions
                </div>
              </div>

              <div className="bg-white p-4 border-l-4 border-[#0f2e26]">
                <div className="font-['Inter'] font-medium text-sm text-[#1a1a1a] mb-2">
                  Credit Engines
                </div>
                <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
                  Private credit, distressed opportunities
                </div>
              </div>

              <div className="bg-white p-4 border-l-4 border-[#0f2e26]">
                <div className="font-['Inter'] font-medium text-sm text-[#1a1a1a] mb-2">
                  Market Capital
                </div>
                <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
                  Public equities, liquid alternatives
                </div>
              </div>

              <div className="bg-white p-4 border-l-4 border-[#0f2e26]">
                <div className="font-['Inter'] font-medium text-sm text-[#1a1a1a] mb-2">
                  Enterprise Capital
                </div>
                <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
                  Operating businesses, private equity
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 border-t-2 border-[#b8a66a] border-dashed" />
              <svg viewBox="0 0 100 30" className="w-24 h-8">
                <path d="M 10 15 Q 50 5 90 15" fill="none" stroke="#b8a66a" strokeWidth="2" />
              </svg>
              <div className="flex-1 border-t-2 border-[#b8a66a] border-dashed" />
            </div>

            {/* Foundation Layer */}
            <div className="space-y-2">
              <div className="bg-[#b8a66a] text-[#1a1a1a] px-6 py-3 font-['Inter'] text-sm uppercase tracking-wider">
                Foundation Layer
              </div>

              <div className="bg-white p-4 border-l-4 border-[#b8a66a]">
                <div className="font-['Inter'] font-medium text-sm text-[#1a1a1a] mb-2">
                  Structural Capital
                </div>
                <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
                  Real assets, infrastructure, IP
                </div>
              </div>

              <div className="bg-white p-4 border-l-4 border-[#b8a66a]">
                <div className="font-['Inter'] font-medium text-sm text-[#1a1a1a] mb-2">
                  Liquidity
                </div>
                <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
                  Dry powder, deployment optionality
                </div>
              </div>

              <div className="bg-white p-4 border-l-4 border-[#b8a66a]">
                <div className="font-['Inter'] font-medium text-sm text-[#1a1a1a] mb-2">
                  Risk Protection
                </div>
                <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
                  Hedges, insurance, tail risk management
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          8
        </div>
      </div>
    </div>
  );
}
