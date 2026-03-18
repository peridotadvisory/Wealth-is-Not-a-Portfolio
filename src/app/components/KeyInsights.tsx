export function KeyInsights() {
  const insights = [
  {
    title: "Wealth is a coordinated capital system",
    description: "Enduring wealth is not a collection of holdings. It is capital organized intentionally across distinct roles and mechanisms.",
    icon: "🏛️"
  },
  {
    title: "Continuity matters more than isolated returns",
    description: "Outcomes are shaped not only by average return, but by whether the system can remain intact through stress, need, and opportunity.",
    icon: "⏳"
  },
  {
    title: "Multiple engines reduce systemic fragility",
    description: "Diversification is strongest when it reduces shared failure modes rather than merely increasing the number of holdings.",
    icon: "⚙️"
  },
  {
    title: "Architecture determines endurance",
    description: "Structure governs whether capital can function, adapt, and compound across changing market and life conditions.",
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
  Separate foundation, stability, and expansion so each layer can serve its intended role.
</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
  Calibrate the system to the investor’s actual needs rather than assuming standardized growth and withdrawal patterns.
</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
  Preserve liquidity and optionality so stress does not automatically become forced action.
</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
  Diversify across mechanisms and failure modes, not just securities, sectors, or wrappers.
</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
  Accept volatility where the system can bear it, rather than demanding every engine behave like a reserve asset.
</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#b8a66a] rounded-full mt-2 flex-shrink-0" />
                <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
  Design for continuity first, because continuity is what allows compounding to persist.
</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Thought */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed italic mb-6">
            "The systems that endure are not those that avoid all stress.
They are those that are built to remain intact through it."
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
