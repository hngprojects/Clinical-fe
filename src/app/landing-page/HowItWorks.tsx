'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: 1,
    title: 'Upload your lab result',
    description:
      'Easily upload your hard-to-understand report as a PDF or image in seconds.',
    image: '/image-1.jpg',
  },
  {
    number: 2,
    title: 'AI analyzes your data',
    description:
      'Our system extracts and interprets your lab values instantly.',
    image: '/image-2.1.jpg',
  },
  {
    number: 3,
    title: 'Get clear explanations',
    description:
      'See a simple, structured breakdown of what your results mean.',
    image: '/image-3.1.jpg',
  },
  {
    number: 4,
    title: 'Next Step You Can Act On',
    description:
      'AI gives you a detailed guide on the next steps to take concerning results.',
    image: '/image-4.jpg',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-24" id="how-it-works">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 flex flex-col items-start gap-6 text-left">
          <div className="flex w-fit items-center gap-2 rounded-full bg-[#FFFFFE] px-4 py-2 border border-slate-50 shadow-sm">
            <span className="h-2 w-2 rounded-sm bg-[#F59E0B]" />
            <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-wider">
              Clarity, simplified
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center w-full">
            <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.1] tracking-tight text-[#1B1B1B]">
              How <span className="text-brand-blue">Clinsight</span> Works
            </h2>
            <p className="max-w-lg lg:mx-0 lg:max-w-xl text-[14px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]">
              Through intelligent analysis and expert validation, Clinsight
              turns complex data into structured insights you can understand and
              act on.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-10 lg:hidden">
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: step.number * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-100">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-8 items-stretch">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0 w-[380px] rounded-[24px] p-4 flex flex-col shadow-sm"
            style={{
              background:
                'linear-gradient(180deg, #FFFFFE 79.32%, #E8F0F9 134.62%)',
            }}
          >
            <div className="flex flex-col h-full pb-16">
              {/* Image — centered with horizontal padding matching the text inset */}
              <div className="px-3 w-full flex-1 min-h-[300px]">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden shadow-sm">
                  <Image
                    src="/image-1.1.1.jpg"
                    alt="Clinsight Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Icon + Title */}
              <div className="mt-6 flex items-start gap-3">
                <Image
                  src="/mynaui_one-waves-solid.svg"
                  alt="Step 1"
                  width={32}
                  height={32}
                  className="mt-1 flex-shrink-0"
                />
                <h3 className="text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#1B1B1B]">
                  Upload your lab result
                </h3>
              </div>

              {/* Paragraph — indented to align with title text */}
              <p className="mt-2 text-[16px] font-medium leading-[1.5] tracking-[-0.01em] text-[#5E5E5E] pl-[44px]">
                Easily upload your hard-to-understand report as a PDF or image
                in seconds.
              </p>
            </div>

            {/* Download button overlaid at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)]">
              <button className="flex w-full h-[46px] items-center justify-center gap-4 rounded-[12px] border border-[#D0D0D0] bg-[#FFFFFE] px-4 py-3 text-xs font-bold text-slate-900 transition-all hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/google-play icon.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                  <Image
                    src="/assets/apple-icon.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
                <span>Download Clinsight</span>
              </button>
            </div>
          </motion.div>

          {/* Right Side Stack */}
          <div className="flex flex-col gap-8 flex-1">
            {/* Top row: Image 2 and Image 3 */}
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex-1 h-[310px] rounded-[24px] p-2 shadow-sm"
                style={{
                  background:
                    'linear-gradient(180deg, #FFFFFE 79.32%, #E8F0F9 134.62%)',
                }}
              >
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <Image
                    src="/image-2.jpg"
                    alt="AI analysis"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex-1 h-[310px] rounded-[24px] p-2 shadow-sm"
                style={{
                  background:
                    'linear-gradient(180deg, #FFFFFE 79.32%, #E8F0F9 134.62%)',
                }}
              >
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <Image
                    src="/image-3.jpg"
                    alt="Clear explanations"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Bottom: Image 4 full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-[24px] overflow-hidden shadow-sm"
            >
              <Image
                src="/image-4.1.jpg"
                alt="Actionable insights"
                width={1000}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
