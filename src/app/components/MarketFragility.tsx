export function MarketFragility() {
  const crises = [
    {
      year: "2000",
      event: "Lost Decade",
      description: "Equities returned near zero for roughly 10 years.",
    },
    {
      year: "2008",
      event: "Financial Crisis",
      description: "Coordinated collapse across major market exposures.",
    },
    {
      year: "2022",
      event: "Rate Shock",
      description: "The 60/40 portfolio had one of its worst years in decades.",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#0f2e26] mb-10">
          Market Fragility
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              The portfolio recovery story is real. Markets do recover over
              time. But drawdowns still matter, because investors do not
              experience return series as clean long-term averages. They
              experience them as a sequence.
            </p>
            <p>
              That sequence matters. A portfolio that declines sharply must
              recover from a smaller capital base. A 50% loss requires a 100%
              gain just to return to breakeven. Compounding does not ignore deep
              interruptions.
            </p>
            <p>
              This is why path dependence matters. The order in which returns
              occur can materially shape outcomes, especially when withdrawals,
              liquidity needs, or outside pressures are present.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Fragility is exposed when too many responsibilities are placed on
              one engine. When growth capital is also expected to fund
              liquidity, income, lifestyle, and opportunity, market stress
              becomes system stress.
            </p>
            <p>
              What distinguished those who endured past dislocations was not
              simply better selection or better timing. It was the presence of
              capital engines not dependent on market repricing alone.
            </p>
            <p>
              Structural capital, income-producing assets, liquidity reserves,
              and non-market-dependent cash flows do not eliminate stress. But
              they reduce the likelihood that stress becomes forced liquidation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {crises.map((crisis) => (
            <div
              key={crisis.year}
              className="border border-[#b8a66a]/25 rounded-lg bg-[#f4efe6] p-6"
            >
              <p className="font-['Inter'] text-sm uppercase tracking-[0.16em] text-[#b8a66a] mb-3">
                {crisis.year}
              </p>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#0f2e26] mb-3">
                {crisis.event}
              </h3>
              <p className="font-['Inter'] text-base text-[#1a1a1a]/80 leading-relaxed">
                {crisis.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#1a1a1a]/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">
          5
        </span>
      </div>
    </section>
  );
}