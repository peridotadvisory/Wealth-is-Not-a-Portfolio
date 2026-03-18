export function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          Executive Summary
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
  <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      For decades, institutional finance has operated under a simple premise: wealth is built through portfolio construction. Allocate across asset classes. Diversify. Rebalance. The logic is elegant. But it assumes something critical: that diversification alone can sustain a complete wealth system across all conditions.
    </p>
    <p>
      It also assumes something equally important, but less visible: that a standardized level of market return is sufficient to support accumulation, distribution, and legacy objectives across a wide range of time horizons and individual circumstances.
    </p>
    <p>
      In practice, this is rarely the case. Capital requirements vary. Time horizons differ. Income needs are not uniform. And the sequence in which returns occur can materially alter outcomes.
    </p>
  </div>

  <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      Two investors with identical average returns can experience materially different results depending on timing, withdrawals, and external pressures. Yet the traditional model applies a largely uniform solution.
    </p>
    <p>
      This creates a structural mismatch: the system is standardized, while the realities it is meant to support are not.
    </p>
    <p>
      The Enduring Value Framework begins from a different premise: wealth is not a portfolio. It is a coordinated capital system. Compounding does not depend solely on return. It depends on continuity. And continuity depends on structure.
    </p>
  </div>
</div>

        {/* Callout Quote */}
        <div className="bg-[#e8e2d4] border-l-4 border-[#b8a66a] p-8 md:p-12 my-16">
          <blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0f2e26] leading-relaxed italic">
            "Compounding is not a function of return alone.<br />
It is a function of continuity."
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
