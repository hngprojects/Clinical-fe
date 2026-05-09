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
    title: 'Medical Expert Support',
    description:
      'Get guidance from qualified healthcare professionals who help interpret your results, answer your questions, and provide clarity so you can make informed health decisions with confidence.',
    icon: '/assets/doctor.svg',
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
    <section className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-12">
        {/* Section Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-20">
            <div className="flex w-fit items-center gap-2 rounded-full bg-[#FFFFFE] px-4 py-2  border-slate-50">
              <span className="h-2 w-2 rounded-sm bg-[#F59E0B]" />
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                Clarity, simplified
              </span>
            </div>
            <h2 className="text-[40px] font-bold leading-[1.1] tracking-tight text-[#1B1B1B]">
              Structured <span className="text-brand-blue">Insights</span> for
              Every Lab Result
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:items-start lg:justify-end">
            <p className="max-w-lg text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E] lg:ml-auto text-left">
              Clinsight transforms complex laboratory data into structured,
              easy-to-understand insights using AI, with optional doctor
              validation for added confidence.
            </p>

            <div className="flex items-center gap-4 lg:ml-auto lg:w-full lg:max-w-md lg:justify-start">
              {/* App Store Button with SVG Asset */}
              <button className="flex w-[180px] h-[55px] items-center gap-2 rounded-[12px] bg-[#1B1B1B] px-6 py-2 text-white transition-opacity hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/apple-icon.svg"
                  alt="App Store"
                  width={20}
                  height={20}
                />
                <div className="flex flex-col items-start leading-none gap-1">
                  <span className="text-[10px] opacity-70">
                    Available on the
                  </span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </button>
              {/* Google Play Button with SVG Asset */}
              <button className="flex w-[180px] h-[55px] items-center gap-2 rounded-[12px] bg-[#1B1B1B] px-6 py-2 text-white transition-opacity hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/google-play icon.svg"
                  alt="Google Play"
                  width={20}
                  height={20}
                />
                <div className="flex flex-col items-start leading-none gap-1">
                  <span className="text-[10px] opacity-70">Get it on</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex h-[375px] flex-col gap-6 rounded-[24px] border border-slate-50 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`flex h-[148px] w-full items-center justify-center rounded-2xl ${feature.bgColor} px-[128px] py-8`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-6 px-4 pb-4">
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
