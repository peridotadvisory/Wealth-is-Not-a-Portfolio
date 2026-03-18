export function MarketFragility() {
  const crises = [
    { year: "2000", event: "Lost Decade", description: "Equities return near zero for 10 years" },
    { year: "2008", event: "Financial Crisis", description: "Coordinated collapse across asset classes" },
    { year: "2022", event: "Rate Shock", description: "60/40 portfolio worst year in decades" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          Market Fragility
        </h2>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
  <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      The portfolio recovery story is real. Markets do recover over time. But drawdowns still matter, because investors do not experience return series as clean long-term averages. They experience them as a sequence.
    </p>
    <p>
      That sequence matters. A portfolio that declines sharply must recover from a smaller capital base. A 50% loss requires a 100% gain just to return to breakeven. Compounding does not ignore deep interruptions.
    </p>
    <p>
      This is why path dependence matters. The order in which returns occur can materially shape outcomes, especially when withdrawals, liquidity needs, or outside pressures are present.
    </p>
  </div>

  <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      Fragility is exposed when too many responsibilities are placed on one engine. When growth capital is also expected to fund liquidity, income, lifestyle, and opportunity, market stress becomes system stress.
    </p>
    <p>
      What distinguished those who endured past dislocations was not simply better selection or better timing. It was the presence of capital engines not dependent on market repricing alone.
    </p>
    <p>
      Structural capital, income-producing assets, liquidity reserves, and non-market-dependent cash flows do not eliminate stress. But they reduce the likelihood that stress becomes forced liquidation.
    </p>
  </div>
</div>

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#e8e2d4]" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {crises.map((crisis, index) => (
              <div key={crisis.year} className="relative">
                <div className="bg-white px-4 inline-block">
                  <div className="w-4 h-4 rounded-full bg-[#b8a66a] mx-auto mb-6" />
                </div>
                
                <div className="bg-[#e8e2d4] p-6 rounded">
                  <div className="font-['Playfair_Display'] text-3xl text-[#0f2e26] mb-2">
                    {crisis.year}
                  </div>
                  <div className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-2">
                    {crisis.event}
                  </div>
                  <div className="font-['Inter'] text-sm text-[#1a1a1a]/70">
                    {crisis.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          5
        </div>
      </div>
    </div>
  );
}
