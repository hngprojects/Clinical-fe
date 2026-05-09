'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function MedicalProfessional() {
  return (
    <section className="bg-[#E8F0F9] py-24">
      <div className="container mx-auto px-12">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between relative z-10">
          {/* Left Content */}
          <div className="flex flex-[1.2] flex-col items-start gap-8">
            {/* Bulb Icon */}
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src="/bulb.png"
                alt="Innovation icon"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="max-w-2xl text-[40px] font-bold leading-[1.3] tracking-[-0.02em] text-[#1B1B1B]">
                Join Clinsight as a <br />
                <span className="text-[#1565C0]">
                  Verified Medical Professional
                </span>
              </h2>
              <p className="max-w-2xl text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]">
                Be part of a trusted network helping patients understand their
                lab results while delivering accurate, data-driven care through
                a modern, structured platform
              </p>{' '}
            </div>

            <Button className="w-[226px] h-[48px] rounded-[12px] bg-[#1565C0] px-6 py-3 text-sm font-bold text-white hover:bg-[#1565C0]/90 transition-all shadow-lg">
              Get Started as a Doctor
            </Button>
          </div>

          {/* Right Visual (side-image) */}
          <div className="flex flex-1 items-center justify-center lg:justify-end">
            <div className="relative h-[400px] w-full max-w-[500px]">
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
