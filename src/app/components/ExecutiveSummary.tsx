export function ExecutiveSummary() {
  return (
    <section className="min-h-screen bg-[#f4efe6] px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#0f2e26] mb-10">
          Executive Summary
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              For decades, institutional finance has operated under a simple
              premise: wealth is built through portfolio construction. Allocate
              across asset classes. Diversify. Rebalance. The logic is elegant.
              But it assumes something critical: that diversification alone can
              sustain a complete wealth system across all conditions.
            </p>
            <p>
              It also assumes something equally important, but less visible:
              that a standardized level of market return is sufficient to
              support accumulation, distribution, and legacy objectives across a
              wide range of time horizons and individual circumstances.
            </p>
            <p>
              In practice, this is rarely the case. Capital requirements vary.
              Time horizons differ. Income needs are not uniform. And the
              sequence in which returns occur can materially alter outcomes.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Two investors with identical average returns can experience
              materially different results depending on timing, withdrawals, and
              external pressures. Yet the traditional model applies a largely
              uniform solution.
            </p>
            <p>
              This creates a structural mismatch: the system is standardized,
              while the realities it is meant to support are not.
            </p>
            <p>
              The Enduring Value Framework begins from a different premise:
              wealth is not a portfolio. It is a coordinated capital system.
              Compounding does not depend solely on return. It depends on
              continuity. And continuity depends on structure.
            </p>
          </div>
        </div>

        <div className="bg-white/50 border border-[#b8a66a]/20 rounded-lg p-8 md:p-10 max-w-4xl">
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0f2e26] italic leading-relaxed">
            Compounding is not a function of return alone.
            <br />
            It is a function of continuity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#1a1a1a]/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">
          3
        </span>
      </div>
    </section>
  );
}
