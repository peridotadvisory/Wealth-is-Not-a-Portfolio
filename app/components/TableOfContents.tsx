export function TableOfContents() {
  const contents = [
    { section: "01", title: "Executive Summary", page: 3 },
    { section: "02", title: "The Portfolio Illusion", page: 4 },
    { section: "03", title: "Market Fragility", page: 5 },
    { section: "04", title: "The Golf Swing Analogy", page: 6 },
    { section: "05", title: "Family Office Capital Systems", page: 7 },
    { section: "06", title: "The Enduring Value Framework", page: 8 },
    { section: "07", title: "Principles of Capital Architecture", page: 9 },
    { section: "08", title: "Capital Architecture", page: 10 },
    { section: "09", title: "Return Engine Diversification", page: 11 },
    { section: "10", title: "Competitive Returns Without Fragility", page: 12 },
    { section: "11", title: "Implications for Entrepreneurs", page: 13 },
    { section: "12", title: "Key Insights", page: 14 },
    { section: "13", title: "Conclusion", page: 15 },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 md:px-8 py-24">
      <div className="max-w-3xl w-full">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1a1a1a] mb-16 md:mb-20">
          Table of Contents
        </h2>
        
        <div className="space-y-6">
          {contents.map((item) => (
            <div key={item.section} className="flex items-baseline border-b border-[#e8e2d4] pb-3">
              <span className="font-['Inter'] text-sm text-[#b8a66a] mr-6 font-medium">
                {item.section}
              </span>
              <span className="font-['Inter'] text-base md:text-lg text-[#1a1a1a] flex-1">
                {item.title}
              </span>
              <span className="font-['Inter'] text-sm text-[#1a1a1a]/60 ml-4">
                {item.page}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative arc element */}
        <svg className="mt-16 w-48 h-12 mx-auto opacity-30" viewBox="0 0 200 50" preserveAspectRatio="xMidYMid meet">
          <path
            d="M 10 40 Q 100 10 190 40"
            fill="none"
            stroke="#b8a66a"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
