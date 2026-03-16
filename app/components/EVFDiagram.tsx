export function EVFDiagram() {
  return (
    <div className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center px-4 md:px-8">
      <svg 
        viewBox="0 0 1200 800" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Golf swing arc overlay */}
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8a66a" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#b8a66a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#b8a66a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Main arc path */}
        <path
          d="M 150 650 Q 600 100 1050 650"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="3"
          className="drop-shadow-[0_0_20px_rgba(184,166,106,0.4)]"
        />

        {/* Arc labels */}
        <g className="fill-[#b8a66a]">
          {/* Backswing */}
          <circle cx="150" cy="650" r="8" fill="#b8a66a" />
          <text x="150" y="690" textAnchor="middle" className="font-['Inter'] text-[18px] md:text-[20px]">
            Backswing
          </text>
          <text x="150" y="715" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px] opacity-70">
            Volatility
          </text>

          {/* Impact */}
          <circle cx="600" cy="100" r="12" fill="#b8a66a" className="drop-shadow-[0_0_15px_rgba(184,166,106,0.8)]" />
          <text x="600" y="75" textAnchor="middle" className="font-['Inter'] text-[18px] md:text-[20px]">
            Impact
          </text>
          <text x="600" y="50" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px] opacity-70">
            Opportunity
          </text>

          {/* Follow-Through */}
          <circle cx="1050" cy="650" r="8" fill="#b8a66a" />
          <text x="1050" y="690" textAnchor="middle" className="font-['Inter'] text-[18px] md:text-[20px]">
            Follow-Through
          </text>
          <text x="1050" y="715" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px] opacity-70">
            Compounding
          </text>
        </g>

        {/* Foundation Layer - Solid base */}
        <rect x="200" y="520" width="800" height="200" fill="#0f2e26" opacity="0.15" rx="8" />
        
        <text x="600" y="485" textAnchor="middle" className="font-['Inter'] text-[20px] md:text-[24px] fill-[#0f2e26] font-medium tracking-wider">
          FOUNDATION LAYER
        </text>

        {/* Foundation nodes */}
        <g className="fill-[#0f2e26]">
          {/* Liquidity */}
          <circle cx="300" cy="620" r="50" fill="white" stroke="#0f2e26" strokeWidth="2" />
          <text x="300" y="615" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Liquidity
          </text>

          {/* Structural Capital */}
          <circle cx="500" cy="620" r="50" fill="white" stroke="#0f2e26" strokeWidth="2" />
          <text x="500" y="610" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Structural
          </text>
          <text x="500" y="630" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Capital
          </text>

          {/* Risk Protection */}
          <circle cx="700" cy="620" r="50" fill="white" stroke="#0f2e26" strokeWidth="2" />
          <text x="700" y="615" textAnchor="middle" className="font-['Inter'] text-[14px] md:text-[16px]">
            Risk
          </text>
          <text x="700" y="633" textAnchor="middle" className="font-['Inter'] text-[14px] md:text-[16px]">
            Protection
          </text>

          {/* Continuity Planning */}
          <circle cx="900" cy="620" r="50" fill="white" stroke="#0f2e26" strokeWidth="2" />
          <text x="900" y="615" textAnchor="middle" className="font-['Inter'] text-[14px] md:text-[16px]">
            Continuity
          </text>
          <text x="900" y="633" textAnchor="middle" className="font-['Inter'] text-[14px] md:text-[16px]">
            Planning
          </text>
        </g>

        {/* Growth Engines Layer */}
        <text x="600" y="235" textAnchor="middle" className="font-['Inter'] text-[20px] md:text-[24px] fill-[#b8a66a] font-medium tracking-wider">
          GROWTH ENGINES
        </text>

        {/* Growth engine nodes */}
        <g className="fill-[#b8a66a]">
          {/* Enterprise Capital */}
          <circle cx="300" cy="340" r="50" fill="white" stroke="#b8a66a" strokeWidth="3" />
          <text x="300" y="335" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Enterprise
          </text>
          <text x="300" y="355" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Capital
          </text>

          {/* Market Capital */}
          <circle cx="500" cy="340" r="50" fill="white" stroke="#b8a66a" strokeWidth="3" />
          <text x="500" y="335" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Market
          </text>
          <text x="500" y="355" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Capital
          </text>

          {/* Private Credit */}
          <circle cx="700" cy="340" r="50" fill="white" stroke="#b8a66a" strokeWidth="3" />
          <text x="700" y="335" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Private
          </text>
          <text x="700" y="355" textAnchor="middle" className="font-['Inter'] text-[16px] md:text-[18px]">
            Credit
          </text>

          {/* Opportunistic Strategies */}
          <circle cx="900" cy="340" r="50" fill="white" stroke="#b8a66a" strokeWidth="3" />
          <text x="900" y="330" textAnchor="middle" className="font-['Inter'] text-[14px] md:text-[16px]">
            Opportunistic
          </text>
          <text x="900" y="350" textAnchor="middle" className="font-['Inter'] text-[14px] md:text-[16px]">
            Strategies
          </text>
        </g>

        {/* Connection lines from growth to foundation */}
        <g stroke="#c6b27d" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
          <line x1="300" y1="390" x2="300" y2="570" />
          <line x1="500" y1="390" x2="500" y2="570" />
          <line x1="700" y1="390" x2="700" y2="570" />
          <line x1="900" y1="390" x2="900" y2="570" />
        </g>
      </svg>
    </div>
  );
}
