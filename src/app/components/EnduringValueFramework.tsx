import { EVFDiagram } from "./EVFDiagram";

export function EnduringValueFramework() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          The Enduring Value Framework
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
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

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
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

        {/* EVF Signature Diagram */}
        <div className="my-16 md:my-20">
          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#0f2e26] mb-8 text-center">
            The Enduring Value Framework
          </h3>
          <EVFDiagram />
          <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/70 text-center mt-8 max-w-3xl mx-auto italic">
            Capital flows through the arc of market cycles. The foundation layer provides stability. 
            The growth engines pursue opportunity. Together, they form a system designed to endure.
          </p>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          8
        </div>
      </div>
    </div>
  );
}
