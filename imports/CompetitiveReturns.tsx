export function CompetitiveReturns() {
  return (
    <div className="min-h-screen bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-5xl text-[#1a1a1a] mb-16">
          Competitive Returns Without Fragility
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              The conventional wisdom in finance is that higher returns require accepting higher risk. This is true within a portfolio framework. It is not true within a capital system framework.
            </p>
            <p>
              Risk, in the portfolio model, is measured as volatility. More volatility equals more risk. But volatility is not the same as fragility. Volatility is short-term price fluctuation. Fragility is structural vulnerability to permanent loss.
            </p>
            <p>
              A capital system can tolerate high volatility in individual engines because the system as a whole is not dependent on any single engine's performance at any given moment. A portfolio cannot tolerate volatility in the same way, because it has no structural redundancy.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              This distinction is critical. Capital systems can pursue concentrated, high-conviction opportunities in the growth layer while maintaining stability in the foundation layer. The portfolio model forces a choice: either accept fragility through concentration, or accept mediocrity through over-diversification.
            </p>
            <p>
              The result is that well-designed capital systems can achieve competitive returns without the fragility that typically accompanies them. Not by eliminating volatility, but by building architectures that can absorb it.
            </p>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="bg-[#0f2e26] p-16 my-16 rounded-lg">
          <blockquote className="font-['Playfair_Display'] text-4xl text-[#e8e2d4] leading-relaxed text-center italic">
            "Durability of compounding matters more than maximizing any single year's return."
          </blockquote>
        </div>

        {/* Three Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="border-l-4 border-[#b8a66a] pl-6">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#1a1a1a] mb-4">
              Principle I
            </h3>
            <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
              Volatility is acceptable when it does not threaten system integrity. Build foundations that allow growth layers to swing.
            </p>
          </div>

          <div className="border-l-4 border-[#b8a66a] pl-6">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#1a1a1a] mb-4">
              Principle II
            </h3>
            <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
              Returns are maximized not by taking more risk, but by structuring risk so that failures do not compound.
            </p>
          </div>

          <div className="border-l-4 border-[#b8a66a] pl-6">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#1a1a1a] mb-4">
              Principle III
            </h3>
            <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
              Compounding is a function of time. Any strategy that risks interrupting the compounding sequence—no matter how attractive—is suspect.
            </p>
          </div>
        </div>

        {/* Comparative insight */}
        <div className="mt-16 bg-[#e8e2d4] p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-3">
                Portfolio Model
              </h4>
              <p className="font-['Inter'] text-sm text-[#1a1a1a]/70 leading-relaxed">
                Optimize for Sharpe ratio. Minimize volatility. Accept mediocre returns as the cost of stability. Suffer catastrophic drawdowns during tail events.
              </p>
            </div>
            <div>
              <h4 className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-3">
                Capital System Model
              </h4>
              <p className="font-['Inter'] text-sm text-[#1a1a1a]/70 leading-relaxed">
                Optimize for durability. Accept volatility in growth engines. Pursue asymmetric opportunities. Maintain system stability through structural redundancy.
              </p>
            </div>
          </div>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          11
        </div>
      </div>
    </div>
  );
}
