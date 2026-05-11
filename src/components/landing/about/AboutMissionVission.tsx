import Image from 'next/image';

export default function AboutMissionVision() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-8 sm:px-6 md:gap-24 md:py-12 lg:gap-28">
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full max-w-140.5 rounded-[50px] bg-[#E8F0F9] p-4 md:rounded-[78px] md:p-6.5">
          <div className="relative aspect-square w-full overflow-hidden rounded-[36px] md:rounded-[52px]">
            <Image
              src="/image 125.png"
              alt="Mission - Medical staff"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-5 lg:max-w-165.5 lg:p-7 lg:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E8F0F9] p-3">
            <Image
              src="/mynaui_target-solid.svg"
              alt="Target icon"
              width={40}
              height={40}
            />
          </div>
          <p className="text-lg font-medium uppercase text-[#272727]">
            OUR MISSION
          </p>
          <h2 className="text-[32px] font-semibold leading-tight text-[#272727] md:text-[40px] md:leading-[52px]">
            Clarity for every patient.
          </h2>
          <p className="text-left text-base font-normal leading-6 text-[#5E5E5E] sm:text-justify">
            We turn AI lab reports into plain-language summaries so that anyone
            regardless of medical background can confidently understand what
            their results mean.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex w-full flex-col items-start justify-start gap-5 lg:max-w-[575px] lg:p-7 lg:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#DEF6E7] p-3">
            <Image src="/gg_eye.svg" alt="Eye icon" width={40} height={40} />
          </div>
          <p className="text-lg font-medium uppercase text-[#272727]">
            OUR VISION
          </p>
          <h2 className="text-[32px] font-semibold leading-tight text-[#272727] md:text-[40px] md:leading-[52px]">
            A world without medical confusion.
          </h2>
          <p className="text-left text-base font-normal leading-6 text-[#5E5E5E] sm:text-justify">
            We imagine a future where every test result is paired with an
            explanation so patients actually understand, and a clinician they
            can reach in minutes.
          </p>
        </div>
        <div className="w-full max-w-[679px] rounded-[50px] bg-[#E8F0F9] p-[16px] md:rounded-[76px] md:p-[26px]">
          <div className="relative aspect-[627/492] w-full overflow-hidden rounded-[36px] md:rounded-[50px]">
            <Image
              src="/image 126.png"
              alt="Vision - Hands forming a heart"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
