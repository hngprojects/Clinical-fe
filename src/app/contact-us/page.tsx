'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import {
  AppleIcon,
  Mail01Icon,
  Call02Icon,
  Location01Icon,
  Clock01Icon,
  CheckmarkCircle02Icon,
  PlayStoreIcon,
} from '@hugeicons/react';

import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function ContactUsPage() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className={`${inter.variable} ${playfairDisplay.variable} min-h-screen bg-[#f5f7fb] text-gray-800`}
    >
      {/* HEADER */}
      <header className="w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Image src="/Subtract.png" alt="logo" width={20} height={20} />

            <span className="text-xl font-bold text-[#1565C0]">Clinsights</span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden gap-8 text-sm md:flex">
            <Link href="/">About</Link>
            <Link href="/">How it Works</Link>
          </nav>

          {/* DESKTOP BUTTON */}
          <button className="hidden items-center gap-3 rounded-lg border px-5 py-2.5 text-sm md:flex">
            <AppleIcon size={16} />
            <PlayStoreIcon size={16} className="text-[#34A853]" />
            <span>Download App</span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 flex-col items-center justify-center gap-1 md:hidden"
          >
            <span className="h-[2px] w-6 bg-black"></span>
            <span className="h-[2px] w-4 bg-black"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="flex flex-col gap-4 px-6 pb-6 md:hidden">
            <Link href="/">About</Link>
            <Link href="/">How it Works</Link>

            <button className="flex items-center gap-3 rounded-lg border px-4 py-2 text-sm">
              <AppleIcon size={16} />
              <PlayStoreIcon size={16} className="text-[#34A853]" />
              <span>Download App</span>
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="mx-auto flex max-w-[851px] flex-col items-center gap-5 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          We’d love to{' '}
          <span className="inline-block rounded bg-[#1565C0] px-2 py-1 text-white">
            hear from you.
          </span>
        </h1>

        <p className="max-w-2xl text-gray-500">
          Questions, concerns, or partnership inquiries? We’d love to hear from
          you. Our team replies within one business day.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[1.4fr_0.8fr]">
        {/* FORM */}
        <div className="w-full rounded-[12px] border border-gray-200 bg-white p-[30px] shadow-sm">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-900">
              Send us a message
            </h2>

            <p className="text-sm text-gray-500">
              Fill out the form and we’ll reach shortly.
            </p>
          </div>

          <form className="mt-[30px] flex flex-col gap-[30px]">
            {/* FIRST NAME */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-900">
                First name <span>*</span>
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="h-[52px] w-full rounded-[10px] border border-gray-300 px-4 text-sm outline-none focus:border-[#1565C0]"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-900">
                Email <span>*</span>
              </label>

              <input
                type="email"
                placeholder="you@email.com"
                className="h-[52px] w-full rounded-[10px] border border-gray-300 px-4 text-sm outline-none focus:border-[#1565C0]"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-900">
                Message <span>*</span>
              </label>

              <textarea
                rows={5}
                placeholder="Tell us a little about what you need..."
                className="min-h-[140px] w-full rounded-[10px] border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#1565C0]"
              />
            </div>

            {/* CHECKBOX */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />

              <p className="text-sm leading-6 text-gray-500">
                I agree to the information collection statement and Privacy
                Policy.
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="h-[52px] w-full rounded-[10px] bg-[#1565C0] text-sm font-medium text-white hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-4">
          {/* CONTACT CARD */}
          <div className="rounded-[12px] border border-gray-200 bg-white p-[20px] shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Reach us directly
            </h3>

            <div className="mt-5 flex flex-col gap-5 text-sm text-gray-600">
              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E8F0F9] text-[#1565C0]">
                  <Mail01Icon size={16} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p>hello@clinsight.com</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E8F0F9] text-[#1565C0]">
                  <Call02Icon size={16} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p>+234 806 - 442 - 0669</p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E8F0F9] text-[#1565C0]">
                  <Location01Icon size={16} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">Headquarters</p>
                  <p>Wuse Zone 4</p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E8F0F9] text-[#1565C0]">
                  <Clock01Icon size={16} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">Hours</p>
                  <p>Mon - Fri: 8am - 7pm WAT</p>
                  <p>Sat: 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* EMERGENCY CARD */}
          <div className="rounded-[12px] bg-[#E8F0F9] p-[20px]">
            <div className="flex flex-col gap-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#1565C0] shadow-sm">
                <CheckmarkCircle02Icon size={18} />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Medical emergency?
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Clinsight is not for emergencies. Call 911 or use your local
                  emergency number immediately if you need urgent care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative w-full overflow-hidden bg-[#11519A] text-white">
        {/* BACKGROUND CIRCLES */}
        <div className="absolute -bottom-[120px] -right-[120px]">
          <div className="relative h-[420px] w-[420px] rounded-full bg-[#2D6BC0]/30">
            <div className="absolute inset-[45px] rounded-full border-[28px] border-[#4C82CB]/30"></div>

            <div className="absolute inset-[105px] rounded-full border-[18px] border-[#6C9ADD]/25"></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-8 lg:px-[100px] lg:py-[80px]">
          {/* CONTENT */}
          <div className="flex flex-col gap-10 px-4 py-6 lg:px-10">
            {/* BRAND */}
            <div className="flex items-center gap-3">
              <Image
                src="/Subtract.png"
                alt="logo"
                width={28}
                height={28}
                className="rounded-full bg-white p-1"
              />

              <h3 className="font-playfair text-[31px] font-medium">
                Clinsights
              </h3>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-10 border-t border-[#3B82F6]/60 pt-6 lg:flex-row lg:justify-between">
              <p className="max-w-[320px] text-sm leading-6 text-blue-100">
                ClinSight helps you turns complex medical reports into clear,
                simple explanations you can actually understand.
              </p>

              <div className="flex flex-col gap-8 text-sm sm:flex-row sm:gap-16">
                <div>
                  <h4 className="font-semibold text-white">Platform</h4>

                  <ul className="mt-4 space-y-3 text-blue-100">
                    <li>How It Works</li>
                    <li>For Doctors</li>
                    <li>Join Waitlist</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Company</h4>

                  <ul className="mt-4 space-y-3 text-blue-100">
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Legal</h4>

                  <ul className="mt-4 space-y-3 text-blue-100">
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-2 border-t border-white/30 px-2 py-3 text-xs text-blue-100">
            ©2026. All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
