export function ImplicationsForEntrepreneurs() {
  const phases = [
    {
      phase: "Phase I",
      title: "Operating Business",
      description:
        "Single concentrated return engine. High conviction. Operational control.",
    },
    {
      phase: "Phase II",
      title: "Traditional Portfolio",
      description:
        "Diversified market exposure. Passive allocation. Single engine (markets).",
    },
    {
      phase: "Phase III",
      title: "Capital System",
      description:
        "Multiple return engines. Enterprise + markets + structure. System architecture.",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#0f2e26] mb-10">
          Implications for Entrepreneurs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Entrepreneurs live with asymmetric liquidity needs. Their capital
              reality is different from that of a salaried investor following a
              generic suitability model.
            </p>
            <p>
              Before exit, the business itself functions as a capital system:
              concentrated, dynamic, operationally driven, and deeply tied to
              judgment, timing, and control.
            </p>
            <p>
              After exit, the default recommendation is often to replace that
              system with a diversified portfolio. This advice is not wrong, but
              it is incomplete.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Role-based capital matters more. Entrepreneurs often need
              liquidity, optionality, income flexibility, and growth exposure to
              coexist inside one architecture. Enterprise volatility changes
              what durable capital design should look like.
            </p>
            <p>
              The question is not simply how to preserve proceeds. The question
              is how to reconstruct a coordinated capital system that can
              continue compounding without forcing all capital into a single
              market-dependent role.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {phases.map((item, index) => (
            <div
              key={item.phase}
              className="relative rounded-lg border border-[#b8a66a]/20 bg-[#f4efe6] p-6"
            >
              <p className="font-['Inter'] text-xs uppercase tracking-[0.16em] text-[#b8a66a] mb-3">
                {item.phase}
              </p>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#0f2e26] mb-4">
                {item.title}
              </h3>
              <p className="font-['Inter'] text-base text-[#1a1a1a]/80 leading-relaxed">
                {item.description}
              </p>
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#b8a66a] text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#0f2e26] rounded-lg p-8 md:p-10">
          <p className="font-['Inter'] text-lg md:text-xl text-[#f4efe6] leading-relaxed mb-4">
            The transition from Phase I to Phase II is common. The transition
            from Phase II to Phase III is where enduring architecture begins.
          </p>
          <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/75 leading-relaxed">
            Most post-exit planning stops at diversification. EVF extends the
            work further: role-based allocation, structural stability, and
            multiple engines designed to continue compounding after liquidity is
            created.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#1a1a1a]/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">
          13
        </span>
      </div>
    </section>
  );
}