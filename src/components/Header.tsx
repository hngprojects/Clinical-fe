'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '/how-it-works' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F5F5F5] bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="relative h-8 w-[120px] lg:h-10 lg:w-[140px]">
            <Image
              src="/clinsight-logo.svg"
              alt="Clinsight Logo"
              fill
              sizes="(max-width: 1024px) 120px, 140px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Download Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex w-[226px] h-[46.1px] items-center justify-center gap-4 rounded-[12px] border border-[#D0D0D0] bg-[#FFFFFE] px-4 py-3 text-xs font-bold text-slate-900 transition-all hover:bg-slate-50 cursor-pointer">
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

        {/* Mobile Menu Toggle */}
        <button
          className="flex lg:hidden items-center justify-center p-2 text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HugeiconsIcon icon={Cancel01Icon} size={24} />
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 16H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 z-40 border-b border-[#F5F5F5] bg-white p-6 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="flex w-full h-[56px] items-center justify-center gap-4 rounded-[12px] border border-[#D0D0D0] bg-[#FFFFFE] px-4 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/google-play icon.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/assets/apple-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <span>Download Clinsight</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
