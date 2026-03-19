export function ReturnEngineDiversification() {
  return (
    <section className="min-h-screen bg-[#f4efe6] px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#0f2e26] mb-10">
          Return Engine Diversification
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Traditional portfolios diversify across assets. Capital systems
              diversify across failure modes.
            </p>
            <p>
              That distinction matters. Two holdings may have different names,
              sectors, or wrappers, yet still depend on the same underlying
              return environment. In that case, they are diversified in form,
              but not in mechanism.
            </p>
            <p>
              The Enduring Value Framework seeks multiple engines, not multiple
              wrappers. Public markets, enterprise cash flow, structural income,
              private credit, and opportunistic deployment do not fail for the
              same reasons or on the same timetable.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              This is why regime leadership rotates. Different environments
              reward different forms of capital. A one-engine system must be
              correct repeatedly. A multi-engine system can remain functional
              while leadership changes.
            </p>
            <p>
              The objective is not complexity for its own sake. It is
              resilience through differentiated mechanisms.
            </p>
            <p>
              More engines do not automatically create strength. But more
              independent engines can materially reduce catastrophic dependence
              on any single source of return.
            </p>
          </div>
        </div>

        <div className="bg-white/50 border border-[#b8a66a]/20 rounded-lg p-4 md:p-6 shadow-sm mb-8">
          <img
            src={`${import.meta.env.BASE_URL}images/charts/capital-systems-market-regimes.png`}
            alt="Capital Systems Across Market Regimes"
            className="w-full h-auto rounded-md"
          />
          <p className="mt-4 font-['Inter'] text-sm text-[#1a1a1a]/60">
            Different capital engines lead in different environments.
            Diversified capital systems are designed to operate across regimes.
          </p>
        </div>

        <p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]/70 leading-relaxed">
          Different capital engines lead in different environments. Diversified capital systems are designed to operate across regimes.<br></br>
          The goal is not more holdings. It is fewer single points of failure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#1a1a1a]/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">
          11
        </span>
      </div>
    </section>
  );
}
