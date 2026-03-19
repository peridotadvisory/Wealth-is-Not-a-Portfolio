export function GolfSwingAnalogy() {
  return (
    <section className="min-h-screen bg-[#0f2e26] px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#f4efe6] mb-10">
          Structure Before Performance
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
            <h3 className="font-['Playfair_Display'] text-3xl text-[#f4efe6] mb-4">
              Backswing
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
              Structure begins before force. In golf, the backswing creates
              sequence, positioning, and control. In capital systems, liquidity,
              stability, and access play the same role.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
            <h3 className="font-['Playfair_Display'] text-3xl text-[#f4efe6] mb-4">
              Impact
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
              Impact is where force transfers. In capital design, this is where
              well-positioned capital meets opportunity. Without sequencing,
              force is wasted. With sequencing, output becomes repeatable.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
            <h3 className="font-['Playfair_Display'] text-3xl text-[#f4efe6] mb-4">
              Follow-through
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/80 leading-relaxed">
              Follow-through is what converts contact into distance. In capital
              systems, compounding only persists when the system remains intact
              after deployment. Continuity is what turns a good decision into
              lasting progress.
            </p>
          </div>
        </div>

        <div className="max-w-4xl">
          <p className="font-['Inter'] text-base md:text-lg text-[#f4efe6]/70 leading-relaxed italic">
            A golf swing is not raw force. It is sequencing. The same is true
            of capital. Return without structure is unstable. Compounding is
            return multiplied by continuity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-white/10 flex justify-end">
        <span className="font-['Inter'] text-sm md:text-base text-[#f4efe6]/60">
          6
        </span>
      </div>
    </section>
  );
}
