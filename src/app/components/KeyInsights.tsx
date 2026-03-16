export function KeyInsights() {
  const insights = [
    {
      title: "Wealth is a system",
      description: "Not a collection of assets. A capital system is designed to compound across cycles through multiple independent return mechanisms.",
      icon: "🏛️"
    },
    {
      title: "Volatility is part of growth",
      description: "Volatility is not the enemy—fragility is. Well-designed systems can tolerate volatility in growth engines while maintaining foundation stability.",
      icon: "📈"
    },
    {
      title: "Multiple engines increase durability",
      description: "Diversification across return mechanisms—not just asset classes—creates redundancy. When one engine falters, others compensate.",
      icon: "⚙️"
    },
    {
      title: "Capital architecture matters",
      description: "Structure determines outcomes. The same assets organized as a portfolio versus organized as a system produce fundamentally different risk profiles.",
      icon: "🏗️"
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          Key Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {insights.map((insight, index) => (
            <div key={index} className="bg-[#e8e2d4] p-6 md:p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{insight.icon}</div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] mb-3">
                    {insight.title}
                  </h3>
                  <p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]/80 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Points */}
        <div className="bg-[#0f2e26] p-8 md:p-12 rounded-lg mb-16">
          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#f4efe6] mb-8 text-center">
            The Enduring Value Framework in Practice
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                  Separate foundation capital from growth capital. The foundation provides stability; the growth layer pursues compounding.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                  Build multiple return engines with uncorrelated failure modes. Enterprise capital, structural assets, income strategies, market exposure.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                  Maintain liquidity for opportunistic deployment. Dry powder is not idle capital—it is optionality.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                  Accept volatility in individual engines as long as the system remains stable. Focus on durability, not smoothness.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                  Design for modularity. Each engine should be replaceable or upgradable without disrupting the entire system.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                  Optimize for compounding over decades, not performance over quarters. Time is the ultimate advantage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Thought */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed italic mb-6">
            "The families and institutions that endure across generations do not do so by avoiding risk. 
            They do so by building systems that can absorb it."
          </p>
          <div className="w-24 h-px bg-[#b8a66a] mx-auto" />
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          14
        </div>
      </div>
    </div>
  );
}
