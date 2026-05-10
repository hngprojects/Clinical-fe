'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function MedicalProfessional() {
  return (
    <section className="bg-[#E8F0F9] py-16 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:gap-16 lg:flex-row lg:items-center lg:justify-between relative z-10">
          {/* Left Content */}
          <div className="flex flex-[1.2] flex-col items-start gap-6 lg:gap-8 text-left">
            {/* Bulb Icon */}
            <div className="relative h-12 w-12 lg:h-16 lg:w-16 overflow-hidden rounded-full">
              <Image
                src="/bulb.png"
                alt="Innovation icon"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="max-w-2xl text-[28px] lg:text-[40px] font-bold leading-[1.3] tracking-[-0.02em] text-[#1B1B1B]">
                Join Clinsight as a <br className="hidden lg:block" />
                <span className="text-[#1565C0]">
                  Verified Medical Professional
                </span>
              </h2>
              <p className="max-w-2xl text-[16px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]">
                Be part of a trusted network helping patients understand their
                lab results while delivering accurate, data-driven care through
                a modern, structured platform
              </p>{' '}
            </div>

            <Button className="w-fit h-[42px] lg:h-[48px] rounded-[12px] bg-[#1565C0] px-4 lg:px-6 py-2 lg:py-3 text-[13px] lg:text-sm font-bold text-white hover:bg-[#1565C0]/90 transition-all shadow-lg">
              Get Started as a Doctor
            </Button>
          </div>

          {/* Right Visual (side-image) */}
          <div className="flex flex-1 items-center justify-start lg:justify-end">
            <div className="relative h-[250px] w-full max-w-[400px] lg:h-[304px] lg:w-[500px] lg:max-w-none rotate-[347deg] lg:rotate-0 rounded-[24px] p-6 lg:p-0">
              <Image
                src="/side-image.png"
                alt="Medical professional visual"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
