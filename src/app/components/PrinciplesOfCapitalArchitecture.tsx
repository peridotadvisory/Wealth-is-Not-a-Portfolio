const principles = [
  {
    number: "PRINCIPLE I",
    title: "Calibration Over Standardization",
    description:
      "Capital systems should not be one-size-fits-all. Growth needs, income requirements, liquidity demands, and time horizons differ materially across investors.",
  },
  {
    number: "PRINCIPLE II",
    title: "Structure Before Performance",
    description:
      "A well-designed system prioritizes integrity, access, and continuity before optimizing for output.",
  },
  {
    number: "PRINCIPLE III",
    title: "Multiple Engines, Distinct Roles",
    description:
      "Capital should be organized by function. Different engines should serve liquidity, stability, optionality, and growth rather than forcing one engine to do everything.",
  },
  {
    number: "PRINCIPLE IV",
    title: "Liquidity as Strategic Optionality",
    description:
      "Liquidity is not idle capital. It is what allows a system to respond, endure, and deploy when conditions become favorable.",
  },
  {
    number: "PRINCIPLE V",
    title: "Continuity as the Basis of Compounding",
    description:
      "Compounding does not depend on return alone. It depends on whether the system can remain intact long enough to capture and retain those returns.",
  },
];

export function PrinciplesOfCapitalArchitecture() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-8">
          Principles of Capital Architecture
        </h2>

        <p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]/80 leading-relaxed text-center max-w-4xl mx-auto mb-16">
          Capital architecture is the practice of designing systems that can
          endure, adapt, and compound across changing conditions. These
          principles guide that design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#f4efe6] border border-[#b8a66a]/15 rounded-lg p-6 md:p-8"
            >
              <p className="font-['Inter'] text-xs uppercase tracking-[0.16em] text-[#b8a66a] mb-3">
                {principle.number}
              </p>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#0f2e26] mb-4">
                {principle.title}
              </h3>
              <p className="font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#0f2e26] rounded-lg p-8 md:p-10">
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#f4efe6] italic leading-relaxed">
            These principles do not guarantee returns. They improve the odds
            that the system can survive long enough to capture them.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#1a1a1a]/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">
          9
        </span>
      </div>
    </section>
  );
}
