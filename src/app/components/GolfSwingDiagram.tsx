export function GolfSwingDiagram() {
  return (
    <div className="w-full h-[60vh] md:h-[65vh] flex items-center justify-center">
      <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Swing arc path */}
        <defs>
          <linearGradient id="swingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8a66a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#b8a66a" stopOpacity="1" />
            <stop offset="100%" stopColor="#b8a66a" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        <path
          d="M 100 400 Q 500 80 900 400"
          fill="none"
          stroke="url(#swingGradient)"
          strokeWidth="4"
          className="drop-shadow-[0_0_20px_rgba(184,166,106,0.5)]"
        />

        {/* Arc points and labels */}
        {/* Backswing */}
        <circle cx="100" cy="400" r="12" fill="#b8a66a" />
        <text x="100" y="455" textAnchor="middle" className="font-['Inter'] text-[20px] md:text-[22px] fill-[#f4efe6]">
          Backswing
        </text>
        <text x="100" y="485" textAnchor="middle" className="font-['Inter'] text-[18px] md:text-[20px] fill-[#b8a66a]">
          Volatility
        </text>

        {/* Impact */}
        <circle cx="500" cy="80" r="16" fill="#b8a66a" className="drop-shadow-[0_0_20px_rgba(184,166,106,0.9)]" />
        <text x="500" y="50" textAnchor="middle" className="font-['Inter'] text-[20px] md:text-[22px] fill-[#f4efe6]">
          Impact
        </text>
        <text x="500" y="25" textAnchor="middle" className="font-['Inter'] text-[18px] md:text-[20px] fill-[#b8a66a]">
          Opportunity
        </text>

        {/* Follow-through */}
        <circle cx="900" cy="400" r="12" fill="#b8a66a" />
        <text x="900" y="455" textAnchor="middle" className="font-['Inter'] text-[20px] md:text-[22px] fill-[#f4efe6]">
          Follow-Through
        </text>
        <text x="900" y="485" textAnchor="middle" className="font-['Inter'] text-[18px] md:text-[20px] fill-[#b8a66a]">
          Compounding
        </text>
      </svg>
    </div>
  );
}
