interface PrincipleBlockProps {
  number: string;
  title: string;
  description: string;
}

export function PrincipleBlock({ number, title, description }: PrincipleBlockProps) {
  return (
    <div className="border-l-4 border-[#b8a66a] pl-6 md:pl-8">
      <div className="font-['Inter'] text-sm text-[#b8a66a] mb-2 tracking-wider">
        {number}
      </div>
      <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1a1a1a] mb-4">
        {title}
      </h3>
      <p className="font-['Inter'] text-base md:text-lg text-[#1a1a1a]/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
