import { PrincipleBlock } from "./PrincipleBlock";

export function PrinciplesOfCapitalArchitecture() {
 const principles = [
  {
    number: "PRINCIPLE I",
    title: "Calibration Over Standardization",
    description: "Capital systems should not be one-size-fits-all. Growth needs, income requirements, liquidity demands, and time horizons differ materially across investors."
  },
  {
    number: "PRINCIPLE II",
    title: "Structure Before Performance",
    description: "A well-designed system prioritizes integrity, access, and continuity before optimizing for output."
  },
  {
    number: "PRINCIPLE III",
    title: "Multiple Engines, Distinct Roles",
    description: "Capital should be organized by function. Different engines should serve liquidity, stability, optionality, and growth rather than forcing one engine to do everything."
  },
  {
    number: "PRINCIPLE IV",
    title: "Liquidity as Strategic Optionality",
    description: "Liquidity is not idle capital. It is what allows a system to respond, endure, and deploy when conditions become favorable."
  },
  {
    number: "PRINCIPLE V",
    title: "Continuity as the Basis of Compounding",
    description: "Compounding does not depend on return alone. It depends on whether the system can remain intact long enough to capture and retain those returns."
  },
];
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          Principles of Capital Architecture
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]/80 leading-relaxed text-center">
  Capital architecture is the practice of designing systems that can endure, adapt, and compound across changing conditions. These principles guide that design.
</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-16 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <PrincipleBlock
              key={index}
              number={principle.number}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-16 md:mt-20 bg-[#e8e2d4] p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
          <p className="font-['Playfair_Display'] text-xl md:text-2xl text-[#0f2e26] leading-relaxed italic text-center">
            "These principles do not guarantee returns. 
            They guarantee that the system can survive long enough to capture them."
          </p>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          9
        </div>
      </div>
    </div>
  );
}
