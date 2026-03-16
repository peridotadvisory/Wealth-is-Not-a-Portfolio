export function ReturnEngineDiversification() {
  const portfolioData = [
    { source: "Public Equities", value: 60 },
    { source: "Bonds", value: 30 },
    { source: "Alternatives", value: 10 },
  ];

  const systemData = [
    { source: "Public Equities", value: 25 },
    { source: "Enterprise Capital", value: 20 },
    { source: "Private Credit", value: 15 },
    { source: "Structural Assets", value: 15 },
    { source: "Income Strategies", value: 10 },
    { source: "Bonds", value: 10 },
    { source: "Opportunistic", value: 5 },
  ];

  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          Return Engine Diversification
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Traditional portfolios diversify across assets. Capital systems diversify across return mechanisms.
            </p>
            <p>
              An asset is a claim on future cash flows. A return mechanism is the structural reason those cash flows exist. Public equities derive returns from earnings growth and multiple expansion. Private businesses derive returns from operational improvement and strategic positioning. Private credit derives returns from contractual yield and structural seniority.
            </p>
            <p>
              These are fundamentally different engines. They respond to different forces. They fail for different reasons. A capital system builds exposure to multiple mechanisms, not merely multiple assets within the same mechanism.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              The portfolio-only approach concentrates risk in market-based mechanisms. When sentiment shifts, all market-based returns decline in tandem. The system approach distributes risk across mechanisms that do not share common failure modes.
            </p>
            <p>
              This is not about maximizing the number of holdings. It is about ensuring that no single mechanism represents catastrophic exposure. A portfolio with 1,000 stocks is still a single-engine system if all 1,000 depend on the same return mechanism.
            </p>
            <p>
              Return engine diversification is the difference between fragility and resilience.
            </p>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#e8e2d4] p-8 md:p-12 rounded-lg">
          {/* Portfolio Only */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center">
              Portfolio Only
            </h3>
            
            <div className="space-y-3 mb-8">
              {portfolioData.map((item, index) => (
                <div key={item.source}>
                  <div className="flex justify-between mb-1">
                    <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]">{item.source}</span>
                    <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">{item.value}%</span>
                  </div>
                  <div className="h-3 bg-white rounded overflow-hidden">
                    <div 
                      className="h-full bg-[#1a1a1a]" 
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded">
              <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a] text-center">
                <span className="font-medium">3</span> return sources<br />
                <span className="text-[#1a1a1a]/60">All market-dependent</span>
              </p>
            </div>
          </div>

          {/* Capital System */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center">
              Capital System
            </h3>
            
            <div className="space-y-3 mb-8">
              {systemData.map((item, index) => (
                <div key={item.source}>
                  <div className="flex justify-between mb-1">
                    <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]">{item.source}</span>
                    <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">{item.value}%</span>
                  </div>
                  <div className="h-3 bg-white rounded overflow-hidden">
                    <div 
                      className="h-full" 
                      style={{ 
                        width: `${item.value}%`,
                        backgroundColor: index < 2 ? '#0f2e26' : index < 5 ? '#b8a66a' : '#1a1a1a'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded">
              <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a] text-center">
                <span className="font-medium">7</span> return sources<br />
                <span className="text-[#1a1a1a]/60">Multiple independent mechanisms</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]/70 leading-relaxed">
            More return sources means fewer single points of failure. 
            The goal is not complexity—it is redundancy.
          </p>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          11
        </div>
      </div>
    </div>
  );
}
