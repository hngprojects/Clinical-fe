'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Amara Okafor',
    role: 'Chief Medical Officer',
    pic: '/Frame 2147230223.png',
  },
  {
    name: 'Dr. Sandra Jordan',
    role: 'CEO & Co-founder',
    pic: '/Frame 2147230224.png',
  },
  {
    name: 'Dr. John Fidelis',
    role: 'Head of Engineering',
    pic: '/Frame 2147230225.png',
  },
  { name: 'Sadiq Usman', role: 'Head of Design', pic: '/Frame 2147230227.png' },
  {
    name: 'Dr. Farouk Sadiq',
    role: 'Clinical Lead',
    pic: '/Frame 2147230226.png',
  },
  { name: 'Fatima Gowon', role: 'Head of AI', pic: '/Frame 2147230228.png' },
];

export default function AboutTeam() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 flex w-full flex-col items-center lg:items-start text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-6 flex items-center gap-2"
      >
        <div className="h-3.5 w-3.5 shrink-0 bg-[#F59E0B]" />
        <h3 className="text-xl font-medium uppercase text-[#F59E0B]">
          THE TEAM
        </h3>
      </motion.div>

      <div className="flex w-full flex-col items-center lg:items-start justify-start gap-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[32px] lg:text-[40px] font-bold leading-tight text-[#1B1B1B]"
        >
          People behind the platform
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group flex w-full max-w-[320px] flex-col overflow-hidden rounded-xl border border-[#F0F0F0] bg-white shadow-sm mx-auto lg:mx-0 transition-all hover:shadow-md"
            >
              <div className="relative h-[400px] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={member.pic}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex h-20 flex-col items-start justify-center px-6 py-2">
                <p className="text-base font-semibold leading-8 text-[#1B1B1B]">
                  {member.name}
                </p>
                <p className="text-sm font-normal leading-6 text-[#1565C0]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
