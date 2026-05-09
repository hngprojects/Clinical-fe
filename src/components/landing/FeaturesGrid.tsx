'use client';

import Image from 'next/image';

const GRID_FEATURES = [
  {
    title: 'Simple Summaries',
    description:
      'Clear, structured breakdowns that translate complex lab values into information you can easily understand at a glance.',
    icon: '/assets/note.svg',
  },
  {
    title: 'Next Steps Guidance',
    description:
      'Personalized recommendations that help you understand what to do next based on your results and overall health context.',
    icon: '/assets/step-into-rounded.svg',
  },
  {
    title: 'On Demand Professional',
    description:
      'Request professional review when needed, ensuring your results are validated and clearly explained by a qualified expert.',
    icon: '/assets/stethoscope.svg',
  },
  {
    title: 'Smart Filtering',
    description:
      'Find the right specialist quickly with intelligent filtering based on your specific condition and health needs.',
    icon: '/assets/level.svg',
  },
  {
    title: 'Abnormal Value Detection',
    description:
      'Automatically identifies values outside the normal range, drawing your attention to what may require further review.',
    icon: '/assets/alert.svg',
  },
  {
    title: 'Risk Level Indicators',
    description:
      'Visual markers that help you understand the severity of your results and prioritize the right actions.',
    icon: '/assets/margin.svg',
  },
];

export function FeaturesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#11519A] py-24 text-white">
      {/* Background Design SVG - Top Right */}
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <Image
          src="/assets/section-design.svg"
          alt=""
          width={400}
          height={500}
        />
      </div>

      <div className="container mx-auto px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-10 flex w-[220px] h-[42px] items-center justify-center gap-2 rounded-[64px] bg-[#FFFFFE14] px-4 py-2 text-white">
            <span className="h-2 w-2 rounded-sm bg-white" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Clarity, End to End
            </span>
          </div>

          <h2 className="mb-6 max-w-3xl text-[48px] font-bold leading-tight tracking-tight">
            Everything You Need <br />
            to <span className="text-[#F59E0B]">Understand</span> Your Results
          </h2>

          <p className="max-w-2xl text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#FFFFFE]">
            Clinsight transforms complex laboratory data into structured,
            easy-to-understand insights using AI, with optional doctor
            validation for added confidence.
          </p>
        </div>

        {/* Features Grid - 6 individual cards with #1B1B1B52 bg and left border */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GRID_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex h-[231px] flex-col gap-5 border-l-2 border-[#FFFFFE] bg-[#1B1B1B52] p-8"
            >
              <div className="flex h-6 w-6 items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm leading-relaxed opacity-70">
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
