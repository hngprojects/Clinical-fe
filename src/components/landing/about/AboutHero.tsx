import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center px-4 py-12 text-center sm:px-6 md:py-28">
      <div className="relative inline-flex flex-col items-center">
        <h1 className="relative z-10 flex max-w-[900px] flex-col items-center justify-center gap-3 text-[clamp(2.25rem,12vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#272727] sm:flex-row md:gap-4 md:text-[64px] md:leading-[76.8px]">
          <span>Making lab results</span>
          <span className="inline-flex min-h-[50px] items-center justify-center bg-[#1565C0] px-4 py-1 text-white md:min-h-[80px] md:px-6">
            Human.
          </span>
        </h1>

        <div className="pointer-events-none absolute -bottom-[14px] left-1/2 z-0 h-[24px] w-full -translate-x-1/2 sm:w-[105%] md:-bottom-[25px] md:h-[48px]">
          <Image
            src="/Vector.png"
            alt="Orange scribble underline"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      <p className="mt-10 max-w-[842px] text-base font-normal leading-7 text-[#5E5E5E] sm:text-lg md:mt-12 md:text-[20px] md:leading-[32px]">
        Clinsight simplifies complex lab results, so you can focus on your
        health. Clinsight was built to bridge the gap between complex medical
        reports and the people who deserve to understand them - with clarity,
        empathy, and clinical rigor.
      </p>
    </section>
  );
}
