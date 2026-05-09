'use client';

import Image from 'next/image';

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
        <div className="mb-12 lg:mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8 lg:gap-20">
            <div className="flex w-fit items-center gap-2 rounded-full bg-[#FFFFFE] px-4 py-2 shadow-sm border border-slate-50">
              <span className="h-2 w-2 rounded-sm bg-[#F59E0B]" />
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                Clarity, simplified
              </span>
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-bold leading-[1.1] tracking-tight text-[#1B1B1B] text-left">
              How <span className="text-brand-blue">Clinsight</span> Works
            </h2>
          </div>

          <div className="flex flex-col items-start lg:justify-end">
            <p className="max-w-lg text-[16px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E] lg:ml-auto text-left">
              Through intelligent analysis and expert validation, Clinsight turn
              complex data into structured insights you can understand and act
              on.
            </p>
          </div>
        </div>

        {/* Mobile Layout: Vertical List of Steps */}
        <div className="flex flex-col gap-6 lg:hidden">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="w-full rounded-2xl shadow-sm overflow-hidden"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Desktop Layout: Mosaic Grid */}
        <div className="hidden lg:flex gap-8 items-stretch">
          {/* Left: Image 1 with button overlaid at the bottom */}
          <div className="relative flex-shrink-0 w-[380px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/image-1.1.jpg"
              alt="Step 1"
              fill
              className="object-cover"
            />
            {/* Button overlaid at bottom of image */}
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
          </div>

          {/* Right: Images 2, 3 top row — Image 4 full width below */}
          <div className="flex flex-col gap-8 flex-1">
            {/* Top row: Image 2 and Image 3 */}
            <div className="flex gap-8 flex-1">
              <div className="overflow-hidden rounded-2xl shadow-sm flex-1">
                <Image
                  src="/image-2.jpg"
                  alt="Step 2"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm flex-1">
                <Image
                  src="/image-3.jpg"
                  alt="Step 3"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom: Image 4 full width */}
            <div className="overflow-hidden rounded-2xl shadow-sm flex-1">
              <Image
                src="/image-4.1.jpg"
                alt="Step 4"
                width={1000}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
