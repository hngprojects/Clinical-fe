'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-12">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="relative h-10 w-[140px]">
            <Image
              src="/clinsight-logo.svg"
              alt="Clinsight Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

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

        <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
}
