'use client';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import {
  CONTACT_US,
  COOKIES,
  DATA_COLLECTED,
  DATA_USE,
  INTRODUCTION,
  YOUR_RIGHTS,
} from '@/lib/constants';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="privacy-policy-content-block"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedList({ items }: { items: string[] }) {
  return (
    <motion.ul
      className="list-disc list-inside space-y-1"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
    >
      {items.map((item) => (
        <motion.li key={item} variants={listItemVariants}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

function AnimatedSeparator() {
  return (
    <motion.div
      className="seperator"
      style={{ transformOrigin: 'left' }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
    />
  );
}

export default function PrivacyPolicyContent() {
  return (
    <div className="py-14 px-4 bg-bg-secondary md:py-20">
      <motion.div
        className="py-6 px-5 bg-bg-primary flex flex-col gap-8 rounded-[20px] border-[0.5px] border-outline-border-subtle max-w-310 mx-auto"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
      >
        <AnimatedSection>
          <h2>{INTRODUCTION.title}</h2>
          <p>{INTRODUCTION.content}</p>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <h2>{DATA_COLLECTED.title}</h2>
          <p>{DATA_COLLECTED.content}</p>
          <div>
            {DATA_COLLECTED.dataCollectedType.map((dataType) => (
              <div key={dataType.title} className="space-y-1">
                <h3>{dataType.title}</h3>
                <AnimatedList items={dataType.content} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <h2>{DATA_USE.title}</h2>
          <p>{DATA_USE.content}</p>
          <AnimatedList items={DATA_USE.uses} />
          <p>{DATA_USE.footerContent}</p>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <h2>{COOKIES.title}</h2>
          <p>{COOKIES.content}</p>
          <AnimatedList items={COOKIES.uses} />
          <p>{COOKIES.footerContent}</p>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <h2>{YOUR_RIGHTS.title}</h2>
          <p>{YOUR_RIGHTS.content}</p>
          <AnimatedList items={YOUR_RIGHTS.rights} />
          <p>{YOUR_RIGHTS.footerContent}</p>
        </AnimatedSection>

        <AnimatedSeparator />

        <AnimatedSection>
          <h2>{CONTACT_US.title}</h2>
          <p>{CONTACT_US.content}</p>
          <AnimatedList items={CONTACT_US.contactInfo} />
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
