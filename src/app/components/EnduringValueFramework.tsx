import { EVFDiagram } from "./EVFDiagram";

export function EnduringValueFramework() {
  return (
    <section className="min-h-screen bg-[#f4efe6] px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#0f2e26] mb-10">
          The Enduring Value Framework
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              The Enduring Value Framework is not an allocation model. It is a
              system design for organizing capital across distinct roles.
            </p>
            <p>
              The framework is built in three coordinated layers: foundation
              architecture, stability engines, and expansion engines.
            </p>
            <p>
              Foundation architecture governs structural integrity. It
              determines whether capital can endure. Stability engines provide
              access, income, resilience, and optionality. Expansion engines
              pursue growth, asymmetry, and long-term progression.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              These components are layered intentionally. They are not
              interchangeable. A growth engine should not be asked to perform
              the role of a reserve system, and a reserve system should not be
              burdened with the expectations of a concentrated growth engine.
            </p>
            <p>
              Structure determines whether the system remains intact across
              environments. The objective is not simply to maximize output. It
              is to ensure that capital can continue functioning, adapting, and
              compounding across time.
            </p>
            <p>This is the shift from portfolio construction to capital architecture.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#b8a66a]/20 p-6 md:p-10 shadow-sm">
          <EVFDiagram />
          <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/70 text-center mt-8 max-w-3xl mx-auto italic">
            Foundation preserves integrity. Stability preserves function.
            Expansion pursues progression. Together, they form a coordinated
            system designed to endure across environments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#1a1a1a]/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">
          8
        </span>
      </div>
    </section>
  );
}