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
              Portfolio theory assumes that markets are mean-reverting over sufficiently long time horizons. And in aggregate, this is true. But aggregates conceal critical details.
            </p>
            <p>
              Individual investors do not experience "the long run" as a statistical abstraction. They experience it as a sequence of discrete periods—some prosperous, others catastrophic. A portfolio that loses 50% requires a 100% gain just to return to breakeven. Compounding does not forgive deep drawdowns.
            </p>
            <p>
              The past quarter-century has delivered three systemic shocks that revealed the fragility inherent in portfolio-only strategies. Each shock followed a similar pattern: correlations converge, diversification disappears, and capital erodes in synchronized fashion.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              What distinguished those who survived from those who did not was not superior market timing or better asset selection. It was the presence of capital engines independent of market sentiment.
            </p>
            <p>
              Operating businesses. Cash-flowing real estate. Private credit with structural protections. These are not "alternative investments." They are structural capital—assets that generate returns through mechanisms other than price appreciation.
            </p>
            <p>
              The families and institutions that endured these shocks did so because they had built systems, not portfolios.
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
