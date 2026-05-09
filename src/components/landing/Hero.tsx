'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-16 lg:pb-24">
      <div className="container mx-auto px-12">
        {/* Main Row: Centered alignment between text block and visual assembly */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Column: Badge, Heading, and Subtext */}
          <div className="flex-[1.4] flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 rounded-full bg-[#F5F5F5] p-1 pr-4">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="relative h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <Image
                    src="/Clinsight-Users/handsome-man.jpg"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <Image
                    src="/User-Report-Images/successful-entrepreneur.png"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <Image
                    src="/Clinsight-Users/curly-haired-woman.jpg"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-[11px] font-bold text-brand-blue">
                Join 1,000+ users already using Clinsight
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[52px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1B1B1B]">
                Understand Your Laboratory Results
              </h1>
              <h1 className="text-[52px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1B1B1B]">
                in{' '}
                <span className="relative inline-block px-3 text-white">
                  <span className="absolute inset-0 -skew-x-2 rounded bg-brand-blue" />
                  <span className="relative">Seconds.</span>
                </span>
              </h1>
            </div>

            <p className="max-w-md text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]">
              Clinsight helps you turns complex medical reports into clear,
              simple explanations you can actually understand.
            </p>
          </div>

          {/* Right Column: Dashboard Visual nested in Circle */}
          <div className="relative flex-1 min-h-[600px] flex items-center justify-end">
            {/* Circle Wrapper - Fixed 600px */}
            <div className="relative h-[600px] w-[600px] flex items-center justify-center">
              {/* Background Circle Asset */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src="/assets/outer-inner-circle.svg"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Dashboard Content - Centered in the circle */}
              <div className="relative flex flex-col items-center gap-0 z-10 w-full max-w-[380px]">
                {/* User Reports Sidebar */}
                <div className="absolute -left-6 top-0 bottom-0 z-20 flex w-[84px] flex-col gap-2 rounded-xl bg-white p-2 shadow-lg ring-1 ring-slate-100 transform -translate-x-full">
                  {[
                    '/User-Report-Images/woman-with-laptop.png',
                    '/User-Report-Images/successful-entrepreneur.png',
                    '/User-Report-Images/african-american-student.png',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="relative flex-1 w-full overflow-hidden rounded-lg"
                    >
                      <Image
                        src={src}
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex flex-1 w-full flex-col items-center justify-center rounded-lg bg-[#E8F0F9] text-center text-[14px] font-medium leading-tight text-brand-blue">
                    User
                    <br />
                    Reports
                  </div>
                </div>

                {/* Dashboard Card with Fading Bottom Edge */}
                <div className="relative z-10 w-full">
                  {/* Container with fading gradient and mask for the border/bg */}
                  <div className="rounded-t-[24px] border-x border-t border-brand-blue bg-gradient-to-b from-white via-white to-transparent p-8 pb-12 flex flex-col gap-3 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center">
                        <Image
                          src="/assets/ai-scan.svg"
                          alt="AI Scan"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-900 leading-tight">
                        Advanced Intelligent Analysis
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-4 w-[180px] rounded-full bg-[#E8F0F9]" />
                        <div className="h-4 w-[80px] rounded-full bg-[#E8F0F9]" />
                      </div>
                      <div className="flex gap-3">
                        <div className="h-4 w-[80px] rounded-full bg-[#E8F0F9]" />
                        <div className="h-4 w-[80px] rounded-full bg-[#E8F0F9]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-[#FFFFFE33] px-4 py-2 text-[#F59E0B] shadow-[0_2px_0_0_#1B1B1B14]">
                      <Image
                        src="/assets/key.svg"
                        alt="Key icon"
                        width={18}
                        height={18}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        Key Findings
                      </span>
                    </div>

                    {/* Recommendations inside the fading container flow */}
                    <div className="flex items-center gap-2 rounded-full bg-[#FFFFFE33] px-4 py-2 text-emerald-500 shadow-[0_2px_0_0_#1B1B1B14]">
                      <Image
                        src="/assets/recommendation.svg"
                        alt="Recommendation icon"
                        width={18}
                        height={18}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        Recommendations
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="z-20 mt-4 w-full">
                  <Button className="w-full rounded-xl bg-brand-blue py-7 text-sm font-bold text-white shadow-lg hover:bg-brand-blue transition-all">
                    Continue with a Doctor
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      size={18}
                      className="ml-2"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
