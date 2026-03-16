interface PageHeaderProps {
  pageNumber: number;
  sectionTitle?: string;
}

export function PageHeader({ pageNumber, sectionTitle }: PageHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#e8e2d4] px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-['Inter'] text-xs text-[#1a1a1a]/60 uppercase tracking-wider">
          Peridot Advisory
        </div>
        {sectionTitle && (
          <div className="font-['Inter'] text-xs text-[#1a1a1a]/40">
            {sectionTitle}
          </div>
        )}
        <div className="font-['Inter'] text-xs text-[#1a1a1a]/60">
          {pageNumber}
        </div>
      </div>
    </div>
  );
}
