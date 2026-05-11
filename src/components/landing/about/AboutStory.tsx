'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function AboutStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="container mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="flex w-full lg:max-w-2xl flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-xl font-medium uppercase text-[#F59E0B]"
        >
          <span className="h-3.5 w-3.5 shrink-0 bg-[#F59E0B]" />
          OUR STORY
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-[32px] lg:text-[40px] font-bold leading-tight tracking-tight text-[#1B1B1B]"
        >
          Built by clinicians,
          <br />
          engineers, and patients.
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-6 text-base lg:text-[18px] font-normal leading-relaxed text-[#5E5E5E]"
        >
          <p>
            Clinsights started after our founders watched family members leave
            clinics holding lab printouts they couldn&apos;t read. Doctors were
            stretched thin. Patients were left guessing.
          </p>
          <p>
            We assembled a team of physicians, product managers, and product
            designers to build a tool that explains lab results the way a
            trusted doctor would — calmly, clearly, and honestly.
          </p>
          <p>
            Today, we serve thousands of patients and a growing network of
            board-certified clinicians who review cases on demand.
          </p>
        </motion.div>
      </div>

      <div className="flex w-full lg:w-auto items-center justify-center gap-4 sm:gap-6">
        <div className="flex flex-col gap-4 sm:gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative h-[160px] w-[190px] sm:h-[199px] sm:w-[236px] overflow-hidden rounded-xl bg-gray-100 shadow-md"
          >
            <Image
              src="/front-view-smiley-female-doctor-clinic 1.png"
              alt="Doctor"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative h-[160px] w-[190px] sm:h-[199px] sm:w-[236px] overflow-hidden rounded-xl bg-gray-100 shadow-md"
          >
            <Image
              src="/side-view-illustrator-drawing-tablet 1.png"
              alt="Illustrator"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative h-[200px] w-[230px] sm:h-[264px] sm:w-[286px] overflow-hidden rounded-xl bg-gray-100 shadow-md"
          >
            <Image
              src="/image 121.png"
              alt="MRI scan"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative h-[200px] w-[230px] sm:h-[264px] sm:w-[286px] overflow-hidden rounded-xl bg-gray-100 shadow-md"
          >
            <Image
              src="/doctor-nurse-helping-wheelchair-user 1.png"
              alt="Wheelchair help"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
