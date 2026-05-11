'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function AboutHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <motion.section
      className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col items-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="relative inline-flex flex-col items-center"
      >
        <h1 className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 text-[40px] font-bold tracking-tight text-[#1B1B1B] md:text-[64px] md:leading-[1.2]">
          <span className="whitespace-nowrap">
            <span className="relative">
              Making lab
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                className="pointer-events-none absolute -bottom-[6px] lg:-bottom-[10px] left-0 z-0 h-[15px] lg:h-[25px] w-full origin-left"
              >
                <Image
                  src="/Vector.png"
                  alt=""
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </motion.div>
            </span>{' '}
            results
          </span>
          <span className="inline-flex h-[50px] lg:h-[80px] items-center justify-center bg-[#1565C0] px-4 text-white md:px-6">
            Human.
          </span>
        </h1>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-12 max-w-[842px] text-[18px] lg:text-[20px] font-normal leading-relaxed text-[#5E5E5E]"
      >
        Clinsights simplifies complex lab results, so you can focus on your
        health. Clinsight was built to bridge the gap between complex medical
        reports and the people who deserve to understand them - with clarity,
        empathy, and clinical rigor.
      </motion.p>
    </motion.section>
  );
}
