'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowRight02Icon,
  Brain02Icon,
  SearchList02Icon,
  StarsIcon,
} from '@hugeicons/core-free-icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-16 lg:pb-24">
      <div className="container mx-auto px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-[1.4] flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 rounded-full bg-[#F5F5F5] p-1 pr-4">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="relative h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <Image
                    src="/User-Report-Images/woman-with-laptop.png"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <Image
                    src="/User-Report-Images/african-american-student.png"
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

            <p className="max-w-md text-base leading-relaxed text-slate-600">
              Clinsight helps you turns complex medical reports into clear,
              simple explanations you can actually understand.
            </p>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute -left-3 top-0 bottom-0 z-20 flex w-20 flex-col items-center justify-between rounded-lg bg-white p-3 shadow-2xl ring-1 ring-slate-100 transform -translate-x-full">
                <div className="flex flex-col gap-3 pt-1">
                  {[
                    '/User-Report-Images/woman-with-laptop.png',
                    '/User-Report-Images/successful-entrepreneur.png',
                    '/User-Report-Images/african-american-student.png',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="h-14 w-14 overflow-hidden rounded-md"
                    >
                      <Image
                        src={src}
                        alt="User"
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex h-auto w-[72px] flex-col items-center justify-center gap-1 rounded-xl bg-[#E8F0F9] py-3 text-center text-base font-medium leading-[1.5] tracking-[-0.01em] text-brand-blue">
                  User
                  <br />
                  Reports
                </div>
              </div>

              {/* TODO: Add the advanced intelligent container */}
              <div className="relative z-10 w-full max-w-[340px] rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
                    <HugeiconsIcon
                      icon={Brain02Icon}
                      size={20}
                      className="text-brand-blue"
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-900 leading-tight">
                    Advanced Intelligent Analysis
                  </span>
                </div>

                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2 text-orange-500">
                    <HugeiconsIcon icon={SearchList02Icon} size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Key Findings
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-50" />
                </div>

                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2 text-emerald-500">
                    <HugeiconsIcon icon={StarsIcon} size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Recommendations
                    </span>
                  </div>
                  <div className="h-12 w-full rounded-xl bg-slate-50" />
                </div>
              </div>

              <div className="z-20 mt-[-24px] w-full max-w-[300px]">
                <Button className="w-full rounded-xl bg-brand-blue py-6 text-sm font-bold text-white shadow-lg hover:bg-brand-blue">
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
    </section>
  );
}
