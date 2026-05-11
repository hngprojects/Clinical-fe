export interface StepCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export function StepCard({ number, title, description, index }: StepCardProps) {
  const isRightSide = index % 2 === 0;

  return (
    <div
      className={`
      relative w-full max-w-[520px] mx-auto lg:max-w-none
      bg-white rounded-[24px] lg:rounded-[32px] 
      border-[0.5px] border-[#1B1B1B]/20
      shadow-[0px_0px_30px_0px_rgba(0,0,0,0.12)]
      p-3 lg:p-4 pt-[72px] lg:pt-[84px]
      transition-all duration-500
      ${isRightSide ? 'rotate-1 lg:-rotate-1' : '-rotate-1 lg:rotate-1'}
    `}
    >
      <div className="absolute top-5 lg:top-6 left-1/2 -translate-x-1/2 z-20 w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] bg-white rounded-full flex items-center justify-center border-[1px] border-[#1565C0]/30 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
        <div className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] bg-[#1565C0] rounded-full" />
      </div>

      <div className="bg-[#E8F0F9] rounded-[20px] lg:rounded-[24px] p-6 lg:p-10 flex flex-col items-start h-full">
        <div className="p-2.5 bg-[#1B1B1B] rounded inline-flex justify-center items-center mb-6">
          <div className="text-white text-5xl lg:text-6xl font-medium font-['Inter'] leading-[1] lg:leading-[65px]">
            {number}
          </div>
        </div>
        <h3 className="text-[#1B1B1B] text-2xl lg:text-4xl font-bold mb-3 font-['Inter'] leading-tight">
          {title}
        </h3>
        <p className="text-[#1B1B1B] text-base lg:text-[20px] font-normal leading-relaxed text-left font-['Inter']">
          {description}
        </p>
      </div>
    </div>
  );
}
