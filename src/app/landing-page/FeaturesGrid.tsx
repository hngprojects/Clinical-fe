'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className="relative overflow-hidden bg-[#11519A] py-16 lg:py-24 text-white">
      {/* Background Design SVG - Top Right */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 opacity-50 lg:opacity-100">
        <Image
          src="/assets/section-design.svg"
          alt=""
          width={400}
          height={500}
          className="w-[200px] lg:w-[400px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 lg:mb-20 flex flex-col items-start lg:items-center text-left lg:text-center">
          <div className="mb-6 lg:mb-10 flex w-fit h-auto items-center justify-center gap-2 rounded-[64px] bg-[#FFFFFE14] px-4 py-2 text-white">
            <span className="h-2 w-2 rounded-sm bg-white" />
            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">
              Clarity, End to End
            </span>
          </div>

          <h2 className="mb-4 lg:mb-6 max-w-3xl text-[32px] lg:text-[40px] font-bold lg:leading-[1.2] lg:tracking-[-0.02em]">
            Everything You Need <br className="hidden lg:block" />
            to <span className="text-[#F59E0B]">Understand</span> Your Results
          </h2>

          <p className="max-w-2xl text-[16px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#FFFFFE]">
            Clinsight transforms complex laboratory data into structured,
            easy-to-understand insights using AI.
          </p>
        </div>

        {/* Features Grid - 6 individual cards with #1B1B1B52 bg and left border */}
        <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GRID_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(27, 27, 27, 0.45)',
                borderColor: '#F59E0B',
              }}
              className="flex h-auto min-h-[180px] lg:h-[231px] flex-col gap-4 lg:gap-5 border-l-2 border-[#FFFFFE] bg-[#1B1B1B52] p-6 lg:p-8 transition-colors duration-300 cursor-default"
            >
              <div className="flex h-6 w-6 items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col gap-2 lg:gap-3">
                <h3 className="text-lg lg:text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-[13px] lg:text-sm leading-relaxed opacity-70">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
