export function PortfolioIllusion() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          The Portfolio Illusion
        </h2>

        <div className="space-y-10">
  <div className="max-w-4xl space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      Modern portfolio theory introduced a powerful idea: diversification can reduce risk without sacrificing return. This insight reshaped finance. But it rests on an assumption that becomes fragile under real-world conditions: that asset classes remain meaningfully uncorrelated.
    </p>
    <p>
      In practice, they do not. During periods of genuine stress, correlations converge. Equities decline. Credit tightens. Liquidity contracts. Assets that typically behave independently begin to move together.
    </p>
    <p>
      This is not an anomaly. It is a structural feature of how markets operate under pressure. What appears diversified in stable conditions becomes synchronized in stress.
    </p>
    <p>
      This is the portfolio illusion: the belief that owning multiple asset classes creates independence, when in reality they are often expressions of the same underlying risk.
    </p>
    <p>
      A portfolio is not a system of independent engines. It is a collection of exposures influenced by a shared environment. In favorable conditions, this distinction is easy to overlook. In adverse conditions, it becomes decisive.
    </p>
  </div>

  <div className="bg-[#f4efe6] border border-[#b8a66a]/20 rounded-lg p-6 md:p-8 shadow-sm">
    <div className="mb-6">
      <p className="font-['Inter'] text-xs md:text-sm uppercase tracking-[0.18em] text-[#b8a66a] mb-2">
        Exhibit A
      </p>
      <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] mb-3">
        The Portfolio Argument
      </h3>
      <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/70 leading-relaxed max-w-3xl">
        Markets often recover over time. The Enduring Value Framework does not reject this principle. It asks a different question: can the investor’s broader capital system remain functional during the path of that recovery?
      </p>
    </div>

    <div className="relative bg-white rounded-lg border border-[#e8e2d4] overflow-hidden">
      <img
        src="/images/charts/exhibit-a-portfolio-argument.jpg"
        alt="Exhibit A: The Portfolio Argument"
        className="w-full h-auto"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-white border border-[#e8e2d4] rounded-lg p-4">
        <p className="font-['Inter'] text-xs uppercase tracking-[0.14em] text-[#0f2e26] mb-2">
          Traditional takeaway
        </p>
        <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a] leading-relaxed">
          Stay invested.
        </p>
      </div>

      <div className="bg-white border border-[#e8e2d4] rounded-lg p-4">
        <p className="font-['Inter'] text-xs uppercase tracking-[0.14em] text-[#0f2e26] mb-2">
          EVF question
        </p>
        <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a] leading-relaxed">
          What supports the investor during the decline?
        </p>
      </div>
    </div>

    <p className="mt-4 font-['Inter'] text-sm text-[#1a1a1a]/60">
      Exhibit A: The traditional portfolio argument, reframed through EVF.
    </p>
  </div>

  <div className="max-w-4xl space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      For decades, charts like this have been used to reinforce a valuable lesson: markets are volatile, but disciplined investors are often rewarded for remaining invested.
    </p>
    <p>
      That lesson is not wrong. Behavioral discipline matters. Long-term participation matters. But the chart answers only one question: what happens to markets over time?
    </p>
    <p>
      It does not answer a more important one: what happens to the investor during that time? Because while markets may recover, the path still matters. Income needs do not pause. Liquidity requirements do not disappear. Opportunities do not wait. Business obligations do not suspend.
    </p>
    <div className="bg-[#e8e2d4] border-l-4 border-[#b8a66a] p-6 md:p-8">
      <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0f2e26] italic leading-relaxed">
        A portfolio may recover. A system must endure.
      </p>
    </div>
    <p>
      This is the limitation of the traditional framing. It assumes that capital can remain fully invested, uninterrupted, and untouched throughout the cycle. In practice, this is rarely true.
    </p>
    <p>
      When pressure is introduced, outcomes are no longer determined by averages alone. They are determined by structure.
    </p>
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
