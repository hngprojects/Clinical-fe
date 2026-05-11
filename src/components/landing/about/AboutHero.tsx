import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center px-6 py-20 text-center md:py-28">
      <div className="relative inline-flex flex-col items-center">
        <h1 className="relative z-10 flex flex-row items-center justify-center gap-3 md:gap-4 text-[40px] font-bold tracking-tight text-[#272727] md:text-[64px] md:leading-[76.8px]">
          <span className="whitespace-nowrap">Making lab results</span>
          <span className="inline-flex h-[50px] items-center justify-center bg-[#1565C0] px-4 text-white md:h-[80px] md:px-6">
            Human.
          </span>
        </h1>

        <div className="pointer-events-none absolute -bottom-[15px] left-1/2 z-0 h-[30px] w-[105%] -translate-x-1/2 md:-bottom-[25px] md:h-[48px]">
          <Image
            src="/Vector.png"
            alt="Orange scribble underline"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      <p className="mt-12 max-w-[842px] text-[20px] font-normal leading-[32px] text-[#5E5E5E]">
        Clinsights simplifies complex lab results, so you can focus on your
        health. Clinsight was built to bridge the gap between complex medical
        reports and the people who deserve to understand them - with clarity,
        empathy, and clinical rigor.
      </p>
    </section>
  );
}
