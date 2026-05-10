'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

export function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Row: Centered alignment between text block and visual assembly */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Column: Badge, Heading, and Subtext */}
          <div className="flex-[1.4] flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
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
              <h1 className="text-[32px] lg:text-[64px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1B1B1B]">
                Understand Your Lab Results Right Now.{' '}
                <span className="relative mt-2 lg:mt-0 inline-block px-2 text-white">
                  <span className="absolute inset-0 -skew-x-2 rounded bg-brand-blue" />
                  <span className="relative">No Waiting!</span>
                </span>
              </h1>
            </div>
            <div className="text-[16px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]">
              <p className="lg:whitespace-nowrap">
                Upload your laboratory results and get a clear interpretation in
                minutes.
              </p>
              <p className="mt-4 italic text-[14px]">
                AI-assisted interpretation, not a medical diagnosis.
              </p>
            </div>{' '}
          </div>

          {/* Right Column: Dashboard Visual nested in Circle */}
          <div className="relative flex-1 min-h-[400px] lg:min-h-[540px] flex items-center justify-center lg:justify-end">
            {/* Circle Wrapper - Responsive size */}
            <div className="relative h-[320px] w-[320px] lg:h-[540px] lg:w-[540px] flex items-center justify-center scale-90 sm:scale-100 lg:scale-100">
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
              {/* Floating File Icon - Responsive size */}
              <div className="absolute bottom-[2%] right-[2%] lg:bottom-[8%] lg:right-[5%] z-20 w-12 h-12 lg:w-20 lg:h-20 flex items-center justify-center">
                <div className="relative w-full h-full p-2 bg-white rounded-full shadow-md border border-slate-100 lg:shadow-none lg:border-none flex items-center justify-center">
                  <Image
                    src="/assets/docs.svg"
                    alt="Note icon"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {/* Dashboard Content - Centered in the circle */}{' '}
              <div className="relative flex flex-col items-center gap-0 z-10 w-full max-w-[240px] lg:max-w-[380px]">
                {/* User Reports Sidebar - Hidden or adjusted on mobile */}
                <div className="absolute -left-4 lg:-left-6 top-0 bottom-0 z-20 flex w-[50px] lg:w-[84px] flex-col gap-1.5 lg:gap-2 rounded-lg lg:rounded-xl bg-white p-1 lg:p-2 shadow-lg ring-1 ring-slate-100 transform -translate-x-full">
                  {[
                    '/User-Report-Images/woman-with-laptop.png',
                    '/User-Report-Images/successful-entrepreneur.png',
                    '/User-Report-Images/african-american-student.png',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="relative flex-1 w-full overflow-hidden rounded-md lg:rounded-lg"
                    >
                      <Image
                        src={src}
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex flex-1 w-full flex-col items-center justify-center rounded-md lg:rounded-lg bg-[#E8F0F9] text-center text-[8px] lg:text-[14px] font-medium leading-tight text-brand-blue">
                    User
                    <br />
                    Reports
                  </div>
                </div>

                {/* Dashboard Card with Fading Bottom Edge */}
                <div className="relative z-10 w-full">
                  {/* Container with fading gradient and mask for the border/bg */}
                  <div
                    className="rounded-t-[16px] lg:rounded-t-[24px] p-4 lg:p-8 pb-8 lg:pb-12 flex flex-col gap-2 lg:gap-3 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                    style={{
                      borderWidth: '3px 3px 0px 3px',
                      borderStyle: 'solid',
                      borderColor: 'transparent',
                      backgroundImage:
                        'linear-gradient(to bottom, white, white, transparent), linear-gradient(180deg, #1565C0 0%, #F2F2F2 73.08%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="flex h-6 w-6 lg:h-10 lg:w-10 items-center justify-center">
                        <Image
                          src="/assets/ai-scan.svg"
                          alt="AI Scan"
                          width={24}
                          height={24}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-[10px] lg:text-sm font-bold text-slate-900 leading-tight">
                        Advanced Intelligent Analysis
                      </span>
                    </div>

                    <div className="space-y-2 lg:space-y-3">
                      <div className="flex gap-2 lg:gap-3">
                        <div className="h-2 lg:h-4 w-[100px] lg:w-[180px] rounded-full bg-[#E8F0F9]" />
                        <div className="h-2 lg:h-4 w-[40px] lg:w-[80px] rounded-full bg-[#E8F0F9]" />
                      </div>
                      <div className="flex gap-2 lg:gap-3">
                        <div className="h-2 lg:h-4 w-[40px] lg:w-[80px] rounded-full bg-[#E8F0F9]" />
                        <div className="h-2 lg:h-4 w-[40px] lg:w-[80px] rounded-full bg-[#E8F0F9]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1 lg:gap-2 rounded-full bg-[#FFFFFE33] px-2 lg:px-4 py-1 lg:py-2 text-[#F59E0B] shadow-[0_2px_0_0_#1B1B1B14]">
                      <Image
                        src="/assets/key.svg"
                        alt="Key icon"
                        width={12}
                        height={12}
                        className="lg:w-[18px] lg:h-[18px]"
                      />
                      <span className="text-[6px] lg:text-[10px] font-bold uppercase tracking-[0.2em]">
                        Key Findings
                      </span>
                    </div>

                    {/* Recommendations inside the fading container flow */}
                    <div className="flex items-center gap-1 lg:gap-2 rounded-full bg-[#FFFFFE33] px-2 lg:px-4 py-1 lg:py-2 text-emerald-500 shadow-[0_2px_0_0_#1B1B1B14]">
                      <Image
                        src="/assets/recommendation.svg"
                        alt="Recommendation icon"
                        width={12}
                        height={12}
                        className="lg:w-[18px] lg:h-[18px]"
                      />
                      <span className="text-[6px] lg:text-[10px] font-bold uppercase tracking-[0.2em]">
                        Recommendations
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="z-20 mt-2 lg:mt-4 w-full">
                  <Button className="w-full rounded-lg lg:rounded-xl bg-brand-blue py-4 lg:py-7 text-[10px] lg:text-sm font-bold text-white shadow-lg hover:bg-brand-blue transition-all">
                    Get Started
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      size={14}
                      className="ml-1 lg:ml-2"
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
