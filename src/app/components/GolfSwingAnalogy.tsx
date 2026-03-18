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
  Structure begins before force. In golf, the backswing creates sequence, positioning, and control. In capital systems, liquidity, stability, and access play the same role.
</p>
          </div>

          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#b8a66a] mb-4">
              Impact
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
  Impact is where force transfers. In capital design, this is where well-positioned capital meets opportunity. Without sequencing, force is wasted. With sequencing, output becomes repeatable.
</p>
          </div>

          <div className="text-center">
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#b8a66a] mb-4">
              Follow-through
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
  Follow-through is what converts contact into distance. In capital systems, compounding only persists when the system remains intact after deployment. Continuity is what turns a good decision into lasting progress.
</p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
          <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/70 leading-relaxed italic">
  A golf swing is not raw force. It is sequencing. The same is true of capital. Return without structure is unstable. Compounding is return multiplied by continuity.
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
