'use client';

import Link from 'next/link';
import Image from 'next/image';

const FOOTER_LINKS = {
  platform: [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'For Doctors', href: '#become-a-doctor' },
    { name: 'Join Waitlist', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#11519A] pt-12 pb-10 text-white">
      {/* Background Image Asset - Right Side */}
      <div className="absolute top-0 right-0 h-full w-1/2 pointer-events-none z-0">
        <Image
          src="/assets/footer-bg-image.svg"
          alt=""
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="container mx-auto px-12 relative z-10">
        {/* Tier 1: Logo only */}
        <div className="mb-8">
          <div className="relative h-10 w-[140px]">
            <Image
              src="/clinsight-logo.svg"
              alt="Clinsight Logo"
              fill
              className="object-contain object-left brightness-0 invert"
            />
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 w-full mb-12" />

        {/* Tier 2: Text on Left, 3 Columns of Links on Right */}
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between items-start">
          {/* Left: Brand Description */}
          <div className="flex flex-col gap-6 max-w-sm text-left">
            <p className="text-sm leading-relaxed opacity-80">
              Clinsight helps you turns complex medical reports into clear,
              simple explanations you can actually understand.
            </p>
          </div>

          {/* Right: Links Grid (3 Columns) - 40px gap */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-10">
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-nowrap">
                Platform
              </h4>
              <ul className="flex flex-col gap-6 text-nowrap">
                {FOOTER_LINKS.platform.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-nowrap">
                Company
              </h4>
              <ul className="flex flex-col gap-6 text-nowrap">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-nowrap">
                Legal
              </h4>
              <ul className="flex flex-col gap-6 text-nowrap">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 w-full mt-20 mb-8" />

        {/* Tier 3: All rights reserved - Left aligned with dynamic year */}
        <div className="flex items-center lg:justify-start text-left">
          <p className="text-xs opacity-50">
            ©{new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
