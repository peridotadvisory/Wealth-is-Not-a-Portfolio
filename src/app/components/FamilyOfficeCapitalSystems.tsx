export function FamilyOfficeCapitalSystems() {
  const engines = [
    { name: "Enterprise Capital", x: 500, y: 200 },
    { name: "Market Capital", x: 350, y: 350 },
    { name: "Structural Capital", x: 650, y: 350 },
    { name: "Income Engines", x: 300, y: 500 },
    { name: "Liquidity", x: 700, y: 500 },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-5xl text-[#1a1a1a] mb-16">
          Family Office Capital Systems
        </h2>

        <div className="mb-16">
          <p className="font-['Inter'] text-xl text-[#1a1a1a] leading-relaxed max-w-4xl mx-auto text-center mb-16">
            Family offices do not manage portfolios. They manage capital systems.
          </p>

          {/* Multi-engine diagram */}
          <div className="flex justify-center mb-16">
            <svg viewBox="0 0 1000 700" className="w-full max-w-4xl">
              {/* Connection lines */}
              <g opacity="0.2">
                {engines.map((engine, i) => (
                  engines.slice(i + 1).map((target, j) => (
                    <line
                      key={`${i}-${j}`}
                      x1={engine.x}
                      y1={engine.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                    />
                  ))
                ))}
              </g>

              {/* Engine circles */}
              {engines.map((engine, index) => (
                <g key={engine.name}>
                  <circle
                    cx={engine.x}
                    cy={engine.y}
                    r="80"
                    fill="white"
                    stroke={index === 0 ? "#b8a66a" : "#0f2e26"}
                    strokeWidth={index === 0 ? "3" : "2"}
                  />
                  <text
                    x={engine.x}
                    y={engine.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-['Inter'] text-sm fill-[#1a1a1a]"
                  >
                    <tspan x={engine.x} dy="-0.3em">{engine.name.split(' ')[0]}</tspan>
                    <tspan x={engine.x} dy="1.2em">{engine.name.split(' ')[1]}</tspan>
                  </text>
                </g>
              ))}

              {/* Center hub */}
              <circle cx="500" cy="400" r="15" fill="#b8a66a" opacity="0.3" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-3">
                Enterprise Capital
              </h3>
              <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
                Operating businesses, private equity stakes, and direct ownership. These generate returns independent of public market sentiment.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-3">
                Market Capital
              </h3>
              <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
                Public equities, bonds, and liquid alternatives. Exposure to market beta, but sized appropriately within the broader system.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-3">
                Structural Capital
              </h3>
              <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
                Real assets with embedded cash flows. Infrastructure, real estate, intellectual property. Value created through structure, not speculation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-3">
                Income Engines
              </h3>
              <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
                Private credit, royalties, and yield-generating instruments. Designed for stability and distribution, not growth.
              </p>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="font-['Inter'] font-medium text-lg text-[#1a1a1a] mb-3">
                Liquidity
              </h3>
              <p className="font-['Inter'] text-sm text-[#1a1a1a]/80 leading-relaxed">
                Not merely cash on hand, but optionality. The capacity to deploy capital when others cannot. Liquidity is the fuel for opportunistic deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="border-l-4 border-[#b8a66a] pl-8 mt-16 max-w-3xl mx-auto">
          <p className="font-['Playfair_Display'] text-2xl text-[#1a1a1a] italic leading-relaxed">
            Each engine operates on a different cycle. When one falters, others stabilize the system. 
            This is not diversification through correlation math. It is diversification through mechanism.
          </p>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#1a1a1a]/40">
          7
        </div>
      </div>
    </div>
  );
}
