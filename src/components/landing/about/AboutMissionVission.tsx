'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function AboutMissionVision() {
  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 flex w-full flex-col gap-20 lg:gap-32 py-12 lg:py-20">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <motion.div
          variants={slideInLeft}
          className="w-full lg:max-w-xl rounded-[40px] lg:rounded-[64px] bg-[#E8F0F9] p-4 lg:p-6"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] lg:rounded-[48px]">
            <Image
              src="/image 125.png"
              alt="Mission - Medical staff"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          variants={slideInRight}
          className="flex w-full flex-col items-center lg:items-start text-center lg:text-left gap-5 lg:max-w-xl"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E8F0F9] p-3">
            <Image
              src="/mynaui_target-solid.svg"
              alt="Target icon"
              width={40}
              height={40}
            />
          </div>
          <p className="text-lg font-medium uppercase text-[#1B1B1B]">
            OUR MISSION
          </p>
          <h2 className="text-[32px] lg:text-[40px] font-bold leading-tight text-[#1B1B1B]">
            Clarity for every patient.
          </h2>
          <p className="text-base lg:text-[18px] font-normal leading-relaxed text-[#5E5E5E]">
            We turn AI lab reports into plain-language summaries so that anyone
            regardless of medical background can confidently understand what
            their results mean.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
      >
        <motion.div
          variants={slideInLeft}
          className="flex w-full flex-col items-center lg:items-start text-center lg:text-left gap-5 lg:max-w-xl"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#DEF6E7] p-3">
            <Image src="/gg_eye.svg" alt="Eye icon" width={40} height={40} />
          </div>
          <p className="text-lg font-medium uppercase text-[#1B1B1B]">
            OUR VISION
          </p>
          <h2 className="text-[32px] lg:text-[40px] font-bold leading-tight text-[#1B1B1B]">
            A world without medical confusion.
          </h2>
          <p className="text-base lg:text-[18px] font-normal leading-relaxed text-[#5E5E5E]">
            We imagine a future where every test result is paired with an
            explanation so patients actually understand, and a clinician they
            can reach in minutes.
          </p>
        </motion.div>
        <motion.div
          variants={slideInRight}
          className="w-full lg:max-w-xl rounded-[40px] lg:rounded-[64px] bg-[#E8F0F9] p-4 lg:p-6"
        >
          <div className="relative aspect-[627/492] w-full overflow-hidden rounded-[24px] lg:rounded-[48px]">
            <Image
              src="/image 126.png"
              alt="Vision - Hands forming a heart"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
