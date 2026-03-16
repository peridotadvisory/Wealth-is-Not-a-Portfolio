export function GolfSwingAnalogy() {
  return (
    <div className="min-h-screen bg-[#0f2e26] px-8 py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="font-['Playfair_Display'] text-5xl text-[#e8e2d4] mb-16 text-center">
          The Golf Swing Analogy
        </h2>

        {/* Main swing arc visualization */}
        <div className="relative h-96 mb-16">
          <svg viewBox="0 0 1000 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Swing arc path */}
            <defs>
              <linearGradient id="swingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8a66a" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#b8a66a" stopOpacity="1" />
                <stop offset="100%" stopColor="#b8a66a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            <path
              d="M 100 350 Q 500 50 900 350"
              fill="none"
              stroke="url(#swingGradient)"
              strokeWidth="4"
              className="drop-shadow-[0_0_20px_rgba(184,166,106,0.5)]"
            />

            {/* Arc points and labels */}
            {/* Backswing */}
            <circle cx="100" cy="350" r="8" fill="#b8a66a" />
            <text x="100" y="390" textAnchor="middle" className="font-['Inter'] text-sm fill-[#e8e2d4]">
              Backswing
            </text>
            <text x="100" y="410" textAnchor="middle" className="font-['Inter'] text-xs fill-[#b8a66a]">
              Volatility
            </text>

            {/* Impact */}
            <circle cx="500" cy="50" r="12" fill="#b8a66a" className="drop-shadow-[0_0_15px_rgba(184,166,106,0.8)]" />
            <text x="500" y="30" textAnchor="middle" className="font-['Inter'] text-sm fill-[#e8e2d4]">
              Impact
            </text>
            <text x="500" y="15" textAnchor="middle" className="font-['Inter'] text-xs fill-[#b8a66a]">
              Opportunity
            </text>

            {/* Follow-through */}
            <circle cx="900" cy="350" r="8" fill="#b8a66a" />
            <text x="900" y="390" textAnchor="middle" className="font-['Inter'] text-sm fill-[#e8e2d4]">
              Follow-through
            </text>
            <text x="900" y="410" textAnchor="middle" className="font-['Inter'] text-xs fill-[#b8a66a]">
              Compounding
            </text>
          </svg>
        </div>

        {/* Explanatory text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#b8a66a] mb-4">
              Backswing
            </h3>
            <p className="font-['Inter'] text-sm text-[#e8e2d4]/80 leading-relaxed">
              Markets move. Volatility is not a failure of strategy—it is the precondition for opportunity. The backswing prepares the system.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#b8a66a] mb-4">
              Impact
            </h3>
            <p className="font-['Inter'] text-sm text-[#e8e2d4]/80 leading-relaxed">
              The moment of contact. Capital deployed at inflection points. This is where disciplined systems outperform reactive portfolios.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl text-[#b8a66a] mb-4">
              Follow-through
            </h3>
            <p className="font-['Inter'] text-sm text-[#e8e2d4]/80 leading-relaxed">
              Compounding takes over. The follow-through is not optional—it is what transforms a swing into distance. Systems complete the arc.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="font-['Inter'] text-base text-[#e8e2d4]/70 leading-relaxed italic">
            A golf swing is not three separate motions. It is one continuous system. 
            Remove any phase, and the ball goes nowhere. The same is true of capital.
          </p>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#e8e2d4]/40">
          6
        </div>
      </div>
    </div>
  );
}
