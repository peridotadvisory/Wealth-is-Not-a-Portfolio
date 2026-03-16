import { GolfSwingDiagram } from "./GolfSwingDiagram";

export function GolfSwingAnalogy() {
  return (
    <div className="min-h-screen bg-[#0f2e26] px-6 md:px-12 py-16 md:py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#f4efe6] mb-12 md:mb-16 text-center">
          The Golf Swing Analogy
        </h2>

        {/* Main swing arc visualization */}
        <GolfSwingDiagram />

        {/* Explanatory text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#b8a66a] mb-4">
              Backswing
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
              Markets move. Volatility is not a failure of strategy—it is the precondition for opportunity. The backswing prepares the system.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#b8a66a] mb-4">
              Impact
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
              The moment of contact. Capital deployed at inflection points. This is where disciplined systems outperform reactive portfolios.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#b8a66a] mb-4">
              Follow-through
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
              Compounding takes over. The follow-through is not optional—it is what transforms a swing into distance. Systems complete the arc.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
          <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/70 leading-relaxed italic">
            A golf swing is not three separate motions. It is one continuous system. 
            Remove any phase, and the ball goes nowhere. The same is true of capital.
          </p>
        </div>

        {/* Page number */}
        <div className="text-center mt-12 font-['Inter'] text-sm text-[#f4efe6]/40">
          6
        </div>
      </div>
    </div>
  );
}
