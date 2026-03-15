export function CapitalArchitecture() {
  return (
    <div className="min-h-screen bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-5xl text-[#1a1a1a] mb-16">
          Capital Architecture
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              Architecture is the practice of designing systems that serve a purpose. Buildings are designed to shelter. Bridges are designed to connect. Capital systems are designed to compound.
            </p>
            <p>
              A well-architected capital system has three defining characteristics:
            </p>
            <p>
              <span className="font-medium">Modularity.</span> Each engine can be replaced, upgraded, or scaled without disrupting the entire system. No single component is load-bearing.
            </p>
            <p>
              <span className="font-medium">Redundancy.</span> Multiple engines provide overlapping capabilities. If one fails, others compensate. The system degrades gracefully rather than collapsing.
            </p>
          </div>

          <div className="space-y-6 font-['Inter'] text-base text-[#1a1a1a] leading-relaxed">
            <p>
              <span className="font-medium">Adaptability.</span> The system can reconfigure itself in response to changing conditions. What works in a bull market differs from what works in a credit crisis. The architecture must accommodate both.
            </p>
            <p>
              This stands in contrast to the portfolio model, which is monolithic. A portfolio is a single structure. Change one allocation, and the entire risk profile shifts. There is no modularity, no redundancy, no adaptability.
            </p>
            <p>
              Capital architecture recognizes that wealth is not a static asset. It is a dynamic system that must evolve across decades, across generations, across market regimes.
            </p>
          </div>
        </div>

        {/* Modular Diagram */}
        <div className="bg-[#e8e2d4] p-12 rounded-lg">
          <svg viewBox="0 0 1200 600" className="w-full">
            {/* Central System Hub */}
            <rect x="500" y="250" width="200" height="100" fill="white" stroke="#1a1a1a" strokeWidth="2" />
            <text x="600" y="290" textAnchor="middle" className="font-['Inter'] text-sm fill-[#1a1a1a]">
              Capital System
            </text>
            <text x="600" y="310" textAnchor="middle" className="font-['Inter'] text-xs fill-[#1a1a1a]/60">
              (Orchestration Layer)
            </text>

            {/* Engine modules */}
            {/* Top Left - Enterprise */}
            <rect x="100" y="50" width="150" height="80" fill="#0f2e26" />
            <text x="175" y="85" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Enterprise
            </text>
            <text x="175" y="105" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Capital
            </text>
            <line x1="250" y1="90" x2="500" y2="280" stroke="#b8a66a" strokeWidth="2" />

            {/* Top Right - Markets */}
            <rect x="950" y="50" width="150" height="80" fill="#0f2e26" />
            <text x="1025" y="85" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Market
            </text>
            <text x="1025" y="105" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Capital
            </text>
            <line x1="950" y1="90" x2="700" y2="280" stroke="#b8a66a" strokeWidth="2" />

            {/* Middle Left - Structural */}
            <rect x="50" y="260" width="150" height="80" fill="#0f2e26" />
            <text x="125" y="295" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Structural
            </text>
            <text x="125" y="315" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Capital
            </text>
            <line x1="200" y1="300" x2="500" y2="300" stroke="#b8a66a" strokeWidth="2" />

            {/* Middle Right - Income */}
            <rect x="1000" y="260" width="150" height="80" fill="#0f2e26" />
            <text x="1075" y="295" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Income
            </text>
            <text x="1075" y="315" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Engines
            </text>
            <line x1="1000" y1="300" x2="700" y2="300" stroke="#b8a66a" strokeWidth="2" />

            {/* Bottom Left - Credit */}
            <rect x="100" y="470" width="150" height="80" fill="#0f2e26" />
            <text x="175" y="505" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Credit
            </text>
            <text x="175" y="525" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Strategies
            </text>
            <line x1="250" y1="510" x2="500" y2="350" stroke="#b8a66a" strokeWidth="2" />

            {/* Bottom Right - Liquidity */}
            <rect x="950" y="470" width="150" height="80" fill="#0f2e26" />
            <text x="1025" y="505" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Liquidity
            </text>
            <text x="1025" y="525" textAnchor="middle" className="font-['Inter'] text-xs fill-[#e8e2d4]">
              Reserves
            </text>
            <line x1="950" y1="510" x2="700" y2="350" stroke="#b8a66a" strokeWidth="2" />

            {/* Flow indicators */}
            <circle cx="350" cy="180" r="6" fill="#b8a66a" />
            <circle cx="850" cy="180" r="6" fill="#b8a66a" />
            <circle cx="350" cy="300" r="6" fill="#b8a66a" />
            <circle cx="850" cy="300" r="6" fill="#b8a66a" />
            <circle cx="350" cy="420" r="6" fill="#b8a66a" />
            <circle cx="850" cy="420" r="6" fill="#b8a66a" />
          </svg>

          <p className="font-['Inter'] text-sm text-[#1a1a1a]/70 text-center mt-8 max-w-3xl mx-auto">
            Each module operates independently. Capital flows are managed at the system level. 
            Individual engines can be added, removed, or recalibrated without destabilizing the whole.
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
