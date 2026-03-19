const architectureLayers = [
  {
    label: "Foundation",
    title: "Preserve Structural Integrity",
    description:
      "Governance, access, liquidity design, legal structure, tax coordination, and risk boundaries establish whether the system can endure before performance is even considered.",
  },
  {
    label: "Stability",
    title: "Preserve Function",
    description:
      "Stable capital engines support income, reserves, flexibility, and operational continuity so the system is not forced into compromised decisions during stress.",
  },
  {
    label: "Expansion",
    title: "Pursue Progression",
    description:
      "Growth-oriented capital is deployed where asymmetry, conviction, and structural advantage justify risk without compromising the integrity of the whole system.",
  },
];

export function CapitalArchitecture() {
  return (
    <section className="min-h-screen bg-[#f4efe6] px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#0f2e26] mb-10">
          Capital Architecture
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Architecture is the difference between owning capital and
              organizing capital. Ownership tells you what is there. Architecture
              tells you how it works together.
            </p>
            <p>
              This distinction matters because wealth systems do not fail only
              from bad investments. They also fail from poor coordination:
              insufficient liquidity, unstable income design, concentration in
              the wrong role, or the absence of reserves when flexibility is
              required most.
            </p>
            <p>
              Capital architecture addresses those failures upstream. It begins
              by assigning responsibilities clearly, then arranging capital so
              those responsibilities can be fulfilled across changing
              conditions.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
            <p>
              Under EVF, architecture is not decorative language. It is the
              practical design of continuity: what preserves the system, what
              keeps it functioning, and what allows it to grow.
            </p>
            <p>
              That is why the sequence matters. Foundation comes before
              stability. Stability comes before expansion. When that order is
              inverted, fragility is introduced even when performance appears
              strong.
            </p>
            <p>
              The goal is not simply to own high-quality assets. It is to build
              a capital system where quality, timing, access, and role are all
              coordinated intentionally.
            </p>
          </div>
        </div>

        <div className="space-y-6 mb-16">
          {architectureLayers.map((layer, index) => (
            <div
              key={layer.label}
              className="bg-white border border-[#b8a66a]/15 rounded-lg p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 md:gap-8 items-start">
                <div>
                  <p className="font-['Inter'] text-xs uppercase tracking-[0.18em] text-[#b8a66a] mb-2">
                    Layer {index + 1}
                  </p>
                  <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0f2e26]">
                    {layer.label}
                  </h3>
                </div>

                <div>
                  <h4 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1a1a1a] mb-3">
                    {layer.title}
                  </h4>
                  <p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/50 border border-[#b8a66a]/20 rounded-lg p-8 md:p-10 max-w-5xl">
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#0f2e26] italic leading-relaxed">
            Capital architecture is the disciplined arrangement of capital so
            that integrity, function, and growth can coexist without forcing one
            engine to do everything.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-[#1a1a1a]/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/60">
          10
        </span>
      </div>
    </section>
  );
}
