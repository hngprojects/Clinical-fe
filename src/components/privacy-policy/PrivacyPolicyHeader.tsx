'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  HEADERBACKGROUND_PATTERN,
  PRIVACY_POLICY_LAST_UPDATE,
} from '@/lib/constants';

const headerTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function PrivacyPolicyHeader() {
  return (
    <header className="relative w-full h-[260px] lg:h-[300px] bg-[#11519A] flex items-center justify-center overflow-hidden">
      {HEADERBACKGROUND_PATTERN.map((pattern) => (
        <Image
          key={pattern.type}
          src={pattern.src}
          alt=""
          quality={75}
          fill
          className={`object-cover ${pattern.visibility}`}
        />
      ))}

      <motion.div
        className="absolute text-center space-y-6"
        variants={headerTextVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[32px] font-semibold text-white leading-[41.6px] tracking-[-0.64px] md:text-[40px] md:leading-12 md:tracking-[-0.8px]"
          variants={headerItemVariants}
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          className="font-medium leading-6 tracking-[-0.16px] text-white"
          variants={headerItemVariants}
        >
          Last Updated, {PRIVACY_POLICY_LAST_UPDATE}
        </motion.p>
      </motion.div>
    </header>
  );
}
