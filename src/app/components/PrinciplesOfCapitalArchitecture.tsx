import { PrincipleBlock } from "./PrincipleBlock";

export function PrinciplesOfCapitalArchitecture() {
  const principles = [
    {
      number: "PRINCIPLE I",
      title: "Multiple Return Engines",
      description: "Wealth systems should generate returns from multiple independent sources rather than relying on a single market engine."
    },
    {
      number: "PRINCIPLE II",
      title: "Structural Resilience Before Optimization",
      description: "The foundation of a capital system should prioritize durability before maximizing returns."
    },
    {
      number: "PRINCIPLE III",
      title: "Liquidity as Strategic Optionality",
      description: "Liquidity allows capital systems to adapt and deploy during periods of opportunity."
    },
    {
      number: "PRINCIPLE IV",
      title: "Volatility as a Deployment Mechanism",
      description: "Market fluctuations create the conditions for disciplined capital deployment."
    },
    {
      number: "PRINCIPLE V",
      title: "Enterprise Capital as the Primary Wealth Engine",
      description: "Operating businesses remain the most powerful engine of long-term wealth creation."
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
            Capital architecture is the practice of designing financial systems that endure. 
            These principles guide the construction of capital systems built for long-term durability.
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
