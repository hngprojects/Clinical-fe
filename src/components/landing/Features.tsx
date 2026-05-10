'use client';

import Image from 'next/image';

const FEATURES = [
  {
    title: 'AI Analysis',
    description:
      'Advanced intelligent models analyze your lab data with precision, identifying patterns, flagging abnormalities, and breaking down complex values into clear, structured insights you can easily understand.',
    icon: '/assets/bot.svg',
    bgColor: 'bg-[#E8F0F9]',
    iconColor: 'text-[#1565C0]',
  },
  {
    title: 'Clear Result Breakdown',
    description:
      'Understand complex lab results through simplified explanations, highlighted abnormalities, and structured summaries designed to make medical information easier to read and act on.',
    icon: '/assets/analytics-up.svg',
    bgColor: 'bg-[#FEF0DA]',
    iconColor: 'text-[#F59E0B]',
  },
  {
    title: 'Actionable Insights',
    description:
      'Move beyond confusing laboratory data with insights specifically tailored to your results. This would include what each value means, what requires attention, and practical next steps to support your health.',
    icon: '/assets/notepad.svg',
    bgColor: 'bg-[#DEF6E7]',
    iconColor: 'text-[#10B981]',
  },
];

export function Features() {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-10 items-start">
          {/* Row 1, Col 1: Badge */}
          <div className="flex items-center lg:h-full">
            <div className="flex w-fit items-center gap-2 rounded-full bg-[#FFFFFE] px-4 py-2 border border-slate-50">
              <span className="h-2 w-2 rounded-sm bg-[#F59E0B]" />
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                Clarity, simplified
              </span>
            </div>
          </div>

          {/* Row 1, Col 2: Subtext */}
          <div className="flex items-center">
            <p className="max-w-lg text-[16px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E] text-left">
              Clinsight transforms complex laboratory data into structured,
              easy-to-understand insights using AI.
            </p>
          </div>

          {/* Row 2, Col 1: Heading */}
          <div className="flex items-start">
            <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.1] tracking-tight text-[#1B1B1B] text-left">
              Structured <span className="text-brand-blue">Insights</span> for
              Every Lab Result
            </h2>
          </div>

          {/* Row 2, Col 2: App Store Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            {/* App Store Button */}
            <button className="flex w-[160px] lg:w-[180px] h-[50px] lg:h-[55px] items-center gap-2 rounded-[12px] bg-[#1B1B1B] px-4 lg:px-6 py-2 text-white transition-opacity hover:opacity-80 cursor-pointer">
              <Image
                src="/assets/apple-icon.svg"
                alt="App Store"
                width={20}
                height={20}
              />
              <div className="flex flex-col items-start leading-none gap-1">
                <span className="text-[8px] lg:text-[10px] opacity-70">
                  Available on the
                </span>
                <span className="text-xs lg:text-sm font-bold">App Store</span>
              </div>
            </button>
            {/* Google Play Button */}
            <button className="flex w-[160px] lg:w-[180px] h-[50px] lg:h-[55px] items-center gap-2 rounded-[12px] bg-[#1B1B1B] px-4 lg:px-6 py-2 text-white transition-opacity hover:opacity-80 cursor-pointer">
              <Image
                src="/assets/google-play icon.svg"
                alt="Google Play"
                width={20}
                height={20}
              />
              <div className="flex flex-col items-start leading-none gap-1">
                <span className="text-[8px] lg:text-[10px] opacity-70">
                  Get it on
                </span>
                <span className="text-xs lg:text-sm font-bold">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-6 rounded-[24px] border border-slate-50 bg-white p-4 shadow-sm transition-shadow hover:shadow-md h-auto lg:h-[375px]"
            >
              <div
                className={`flex h-[148px] w-full items-center justify-center rounded-2xl ${feature.bgColor} p-8`}
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-6 px-4 pb-4">
                <h3 className="text-xl font-bold text-[#1B1B1B]">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#5E5E5E]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
