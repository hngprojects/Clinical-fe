'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function AboutValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full pt-12 lg:pt-20 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-12 mb-8 flex items-center justify-center lg:justify-start gap-2"
      >
        <span className="h-3.5 w-3.5 shrink-0 bg-[#F59E0B]" />
        <span className="text-xl font-medium uppercase text-[#F59E0B]">
          OUR VALUES
        </span>
      </motion.div>

      <div className="w-full bg-[#FAFAFA] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center lg:items-start justify-between gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center lg:justify-start text-center lg:text-left"
          >
            <motion.div
              initial={{ rotate: -45, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-[20px] -top-[20px] h-11 w-10 md:-left-[35px] md:-top-[25px] lg:-left-[45px]"
            >
              <Image
                src="/Highlight_05.svg"
                alt="Highlight"
                fill
                className="object-contain"
              />
            </motion.div>
            <h2 className="text-[32px] lg:text-[40px] font-bold leading-tight text-[#1B1B1B]">
              What guides every decision made
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex w-full flex-wrap items-center justify-center lg:justify-between gap-6"
          >
            {[
              {
                title: 'Empathy',
                text: 'We design for the worried patient, not the spec sheet.',
                icon: '/Frame 2147230208.svg',
                bg: 'bg-[#E8F0F9]',
              },
              {
                title: 'Privacy',
                text: 'Your medical data stays yours, encrypted and safe.',
                icon: '/security-check.svg',
                bg: 'bg-[#DEF6E7]',
              },
              {
                title: 'Clarity',
                text: 'Plain language always wins over medical jargon.',
                icon: '/artificial-intelligence-08.svg',
                bg: 'bg-[#CC34FF1A]',
              },
              {
                title: 'Rigor',
                text: 'Every workflow is reviewed by licensed clinicians.',
                icon: '/stethoscope-02.svg',
                bg: 'bg-[#F4F4F4]',
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                }}
                className="flex h-[240px] w-full max-w-[256px] flex-col items-start justify-start gap-3.5 rounded-xl bg-white p-7 shadow-sm outline outline-1 outline-[#EFEFEF] transition-shadow cursor-default"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-xl font-semibold leading-8 text-[#1B1B1B]">
                  {card.title}
                </h3>
                <p className="text-base font-normal leading-6 text-[#1B1B1B]/75">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
