export function ImplicationsForEntrepreneurs() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-12 md:mb-16">
          Implications for Entrepreneurs
        </h2>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
  <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      Entrepreneurs live with asymmetric liquidity needs. Their capital reality is different from that of a salaried investor following a generic suitability model.
    </p>
    <p>
      Before exit, the business itself functions as a capital system: concentrated, dynamic, operationally driven, and deeply tied to judgment, timing, and control.
    </p>
    <p>
      After exit, the default recommendation is often to replace that system with a diversified portfolio. This advice is not wrong, but it is incomplete.
    </p>
  </div>

  <div className="space-y-6 font-['Inter'] text-base md:text-lg text-[#1a1a1a] leading-relaxed">
    <p>
      Role-based capital matters more. Entrepreneurs often need liquidity, optionality, income flexibility, and growth exposure to coexist inside one architecture. Enterprise volatility changes what durable capital design should look like.
    </p>
    <p>
      The question is not simply how to preserve proceeds. The question is how to reconstruct a coordinated capital system that can continue compounding without forcing all capital into a single market-dependent role.
    </p>
  </div>
</div>

        {/* Transition Diagram */}
        <div className="bg-[#e8e2d4] p-8 md:p-12 rounded-lg mb-16">
          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#0f2e26] mb-12 text-center">
            The Entrepreneur's Capital Evolution
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Operating Business */}
            <div className="flex-1 max-w-xs w-full">
              <div className="bg-[#0f2e26] p-8 rounded-lg text-center mb-4">
                <div className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#f4efe6] mb-2">
                  Phase I
                </div>
                <div className="font-['Inter'] text-base md:text-lg text-[#b8a66a]">
                  Operating Business
                </div>
              </div>
              <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/70 text-center">
                Single concentrated return engine. High conviction. Operational control.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 rotate-90 md:rotate-0">
              <svg viewBox="0 0 60 40" className="w-12 h-8 md:w-16 md:h-10">
                <path d="M 5 20 L 40 20 M 30 10 L 40 20 L 30 30" fill="none" stroke="#b8a66a" strokeWidth="2" />
              </svg>
            </div>

            {/* Traditional Portfolio */}
            <div className="flex-1 max-w-xs w-full">
              <div className="bg-[#1a1a1a] p-8 rounded-lg text-center mb-4">
                <div className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#f4efe6] mb-2">
                  Phase II
                </div>
                <div className="font-['Inter'] text-base md:text-lg text-[#b8a66a]">
                  Traditional Portfolio
                </div>
              </div>
              <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/70 text-center">
                Diversified market exposure. Passive allocation. Single engine (markets).
              </p>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 rotate-90 md:rotate-0">
              <svg viewBox="0 0 60 40" className="w-12 h-8 md:w-16 md:h-10">
                <path d="M 5 20 L 40 20 M 30 10 L 40 20 L 30 30" fill="none" stroke="#b8a66a" strokeWidth="2" />
              </svg>
            </div>

            {/* Capital System */}
            <div className="flex-1 max-w-xs w-full">
              <div className="bg-[#b8a66a] p-8 rounded-lg text-center mb-4">
                <div className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] mb-2">
                  Phase III
                </div>
                <div className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]">
                  Capital System
                </div>
              </div>
              <p className="font-['Inter'] text-sm md:text-base text-[#1a1a1a]/70 text-center">
                Multiple return engines. Enterprise + markets + structure. System architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="border-l-4 border-[#b8a66a] pl-6 md:pl-8 max-w-4xl mx-auto">
         <p className="font-['Inter'] text-lg md:text-xl text-[#1a1a1a] leading-relaxed mb-4">
  The transition from Phase I to Phase II is common. The transition from Phase II to Phase III is where enduring architecture begins.
</p>
<p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]/70 leading-relaxed">
  Most post-exit planning stops at diversification. EVF extends the work further: role-based allocation, structural stability, and multiple engines designed to continue compounding after liquidity is created.
</p>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          13
        </div>
      </div>
    </div>
  );
}
