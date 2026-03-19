const insights = [
  {
    title: "Wealth is a coordinated capital system",
    description:
      "Enduring wealth is not a collection of holdings. It is capital organized intentionally across distinct roles and mechanisms.",
    icon: "🏛️",
  },
  {
    title: "Continuity matters more than isolated returns",
    description:
      "Outcomes are shaped not only by average return, but by whether the system can remain intact through stress, need, and opportunity.",
    icon: "⏳",
  },
  {
    title: "Multiple engines reduce systemic fragility",
    description:
      "Diversification is strongest when it reduces shared failure modes rather than merely increasing the number of holdings.",
    icon: "⚙️",
  },
  {
    title: "Architecture determines endurance",
    description:
      "Structure governs whether capital can function, adapt, and compound across changing market and life conditions.",
    icon: "🏗️",
  },
];

export function KeyInsights() {
  return (
    <section className="min-h-screen bg-[#0f2e26] px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#f4efe6] mb-6">
            Key Insights
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed max-w-3xl">
            The Enduring Value Framework reframes wealth as a coordinated
            capital system designed to endure, adapt, and compound through
            changing environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="bg-[#f4efe6]/8 border border-[#f4efe6]/15 rounded-lg p-6 md:p-8"
            >
              <div className="text-3xl mb-4">{insight.icon}</div>
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#f4efe6] mb-4">
                {insight.title}
              </h3>
              <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/85 leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#f4efe6] mb-6">
            The Enduring Value Framework in Practice
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-4">
            <div className="bg-[#1a4338] rounded-lg p-5">
              <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                Separate foundation, stability, and expansion so each layer can
                serve its intended role.
              </p>
            </div>
            <div className="bg-[#1a4338] rounded-lg p-5">
              <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                Calibrate the system to the investor&rsquo;s actual needs rather
                than assuming standardized growth and withdrawal patterns.
              </p>
            </div>
            <div className="bg-[#1a4338] rounded-lg p-5">
              <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                Preserve liquidity and optionality so stress does not
                automatically become forced action.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#1a4338] rounded-lg p-5">
              <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                Diversify across mechanisms and failure modes, not just
                securities, sectors, or wrappers.
              </p>
            </div>
            <div className="bg-[#1a4338] rounded-lg p-5">
              <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                Accept volatility where the system can bear it, rather than
                demanding every engine behave like a reserve asset.
              </p>
            </div>
            <div className="bg-[#1a4338] rounded-lg p-5">
              <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/90 leading-relaxed">
                Design for continuity first, because continuity is what allows
                compounding to persist.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f4efe6]/15 pt-10">
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#f4efe6] italic leading-relaxed max-w-4xl">
            The systems that endure are not those that avoid all stress. They
            are those that are built to remain intact through it.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#f4efe6]/15 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#f4efe6]/60">
          14
        </span>
      </div>
    </section>
  );
}