'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { motion } from 'framer-motion';

export function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <section className="relative overflow-x-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Column */}
          <motion.div
            className="flex-[1.4] flex flex-col items-center lg:items-start gap-6 text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-2 rounded-full bg-[#F5F5F5] p-1 pr-4 whitespace-nowrap"
            >
              <div className="flex -space-x-2 overflow-hidden flex-shrink-0">
                {[
                  '/Clinsight-Users/handsome-man.jpg',
                  '/User-Report-Images/successful-entrepreneur.png',
                  '/Clinsight-Users/curly-haired-woman.jpg',
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt="User"
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-brand-blue">
                Join 1,000+ users already using Clinsight
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <h1 className="text-[26px] sm:text-[42px] lg:text-[64px] font-bold leading-[1.1] sm:leading-[1.2] tracking-[-0.02em] text-[#1B1B1B]">
                Understand Your Lab Results Right Now.{' '}
                <span className="relative mt-2 lg:mt-0 inline-block px-2 text-white">
                  <span className="absolute inset-0 -skew-x-2 rounded bg-brand-blue" />
                  <span className="relative">No Waiting!</span>
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-xl text-[16px] sm:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]"
            >
              <p>
                Upload your laboratory results and get a clear interpretation in
                minutes.
              </p>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="italic text-[13px] sm:text-[14px] text-[#5E5E5E]">
                AI-assisted interpretation, not a medical diagnosis.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative flex-1 min-h-[420px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {/* Circle Wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-[340px] w-[340px] sm:h-[450px] sm:w-[450px] lg:h-[540px] lg:w-[540px] flex items-center justify-center"
            >
              {/* Background Circle */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src="/assets/outer-inner-circle.svg"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 450px, 540px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating File Icon */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-[8%] right-[10%] lg:bottom-[5%] lg:right-[8%] z-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center"
              >
                <div className="relative w-full h-full p-2 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center">
                  <Image
                    src="/assets/docs.svg"
                    alt="Note icon"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Dashboard Content */}
              <div className="relative flex flex-col items-center gap-0 z-10 w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[380px]">
                {/* User Reports Sidebar */}
                <div className="absolute -left-3 sm:-left-4 lg:-left-6 top-0 bottom-0 z-20 flex w-[40px] sm:w-[60px] lg:w-[84px] flex-col gap-1.5 lg:gap-2 rounded-lg lg:rounded-xl bg-white p-1 lg:p-2 shadow-lg ring-1 ring-slate-100 transform -translate-x-full">
                  {[
                    '/User-Report-Images/woman-with-laptop.png',
                    '/User-Report-Images/successful-entrepreneur.png',
                    '/User-Report-Images/african-american-student.png',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="relative flex-1 w-full overflow-hidden rounded-md lg:rounded-lg"
                    >
                      <Image
                        src={src}
                        alt="User"
                        fill
                        sizes="(max-width: 640px) 40px, (max-width: 1024px) 60px, 84px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex flex-1 w-full flex-col items-center justify-center rounded-md lg:rounded-lg bg-[#E8F0F9] text-center text-[7px] sm:text-[10px] lg:text-[14px] font-medium leading-tight text-brand-blue">
                    User
                    <br />
                    Reports
                  </div>
                </div>

                {/* Dashboard Card */}
                <div className="relative z-10 w-full">
                  <div
                    className="rounded-t-[16px] lg:rounded-t-[24px] p-4 sm:p-6 lg:p-8 pb-8 lg:pb-12 flex flex-col gap-2 lg:gap-3 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                    style={{
                      borderWidth: '3px 3px 0px 3px',
                      borderStyle: 'solid',
                      borderColor: 'transparent',
                      backgroundImage:
                        'linear-gradient(to bottom, white, white, transparent), linear-gradient(180deg, #1565C0 0%, #F2F2F2 73.08%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="flex h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10 items-center justify-center">
                        <Image
                          src="/assets/ai-scan.svg"
                          alt="AI Scan"
                          width={24}
                          height={24}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-[9px] sm:text-[12px] lg:text-sm font-bold text-slate-900 leading-tight">
                        Advanced Intelligent Analysis
                      </span>
                    </div>

                    <div className="space-y-2 lg:space-y-3">
                      <div className="flex gap-2 lg:gap-3">
                        <div className="h-1.5 sm:h-3 w-[80px] sm:w-[140px] lg:w-[180px] rounded-full bg-[#E8F0F9]" />
                        <div className="h-1.5 sm:h-3 w-[30px] sm:w-[60px] lg:w-[80px] rounded-full bg-[#E8F0F9]" />
                      </div>
                      <div className="flex gap-2 lg:gap-3">
                        <div className="h-1.5 sm:h-3 w-[30px] sm:w-[60px] lg:w-[80px] rounded-full bg-[#E8F0F9]" />
                        <div className="h-1.5 sm:h-3 w-[30px] sm:w-[60px] lg:w-[80px] rounded-full bg-[#E8F0F9]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1 lg:gap-2 rounded-full bg-[#FFFFFE33] px-2 lg:px-4 py-1 lg:py-2 text-[#F59E0B] shadow-[0_2px_0_0_#1B1B1B14]">
                      <Image
                        src="/assets/key.svg"
                        alt="Key icon"
                        width={12}
                        height={12}
                        className="w-2.5 h-2.5 sm:w-[14px] sm:h-[14px] lg:w-[18px] lg:h-[18px]"
                      />
                      <span className="text-[5px] sm:text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em]">
                        Key Findings
                      </span>
                    </div>

                    <div className="flex items-center gap-1 lg:gap-2 rounded-full bg-[#FFFFFE33] px-2 lg:px-4 py-1 lg:py-2 text-emerald-500 shadow-[0_2px_0_0_#1B1B1B14]">
                      <Image
                        src="/assets/recommendation.svg"
                        alt="Recommendation icon"
                        width={12}
                        height={12}
                        className="w-2.5 h-2.5 sm:w-[14px] sm:h-[14px] lg:w-[18px] lg:h-[18px]"
                      />
                      <span className="text-[5px] sm:text-[8px] lg:text-[10px] font-bold uppercase tracking-[0.2em]">
                        Recommendations
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="z-20 -mt-6 lg:-mt-10 w-full px-2 sm:px-4 lg:px-0">
                  <Button className="w-full rounded-lg lg:rounded-xl bg-brand-blue py-3 sm:py-5 lg:py-7 text-[9px] sm:text-[12px] lg:text-sm font-bold text-white shadow-lg hover:bg-brand-blue transition-all">
                    Get Started
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      size={14}
                      className="ml-1 lg:ml-2"
                    />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* end: Right Column */}
        </div>
      </div>
    </section>
  );
}
