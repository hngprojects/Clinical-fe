import Image from 'next/image';

export default function AboutStory() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between gap-10 px-4 py-8 sm:px-6 md:gap-12 md:py-12">
      <div className="flex w-full lg:max-w-158.25 flex-col items-start justify-start gap-6">
        <div className="flex items-center gap-2 text-xl font-medium uppercase text-[#F59E0B]">
          <span className="h-3.5 w-3.5 shrink-0 bg-[#F59E0B]" />
          OUR STORY
        </div>
        <h2 className="text-[32px] lg:text-[40px] font-semibold leading-tight tracking-tight text-[#272727]">
          Built by clinicians,
          <br />
          engineers, and patients.
        </h2>
        <div className="flex flex-col gap-6 text-base font-normal leading-6 text-[#5E5E5E]">
          <p>
            Clinsight started after our founders watched family members leave
            clinics holding lab printouts they couldn&apos;t read. Doctors were
            stretched thin. Patients were left guessing.
          </p>
          <p>
            We assembled a team of physicians, product managers, and product
            designers to build a tool that explains lab results the way a
            trusted doctor would — calmly, clearly, and honestly.
          </p>
          <p>
            Today, we serve thousands of patients and a growing network of
            board-certified clinicians who review cases on demand.
          </p>
        </div>
      </div>

      <div className="grid w-full max-w-[560px] grid-cols-[0.88fr_1fr] items-center gap-3 sm:gap-6 lg:w-auto lg:max-w-none">
        <div className="flex min-w-0 flex-col gap-3 sm:gap-6">
          <div className="relative aspect-[236/199] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/front-view-smiley-female-doctor-clinic 1.png"
              alt="Doctor"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[236/199] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/side-view-illustrator-drawing-tablet 1.png"
              alt="Illustrator"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3 sm:gap-6">
          <div className="relative aspect-[286/264] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/image 121.png"
              alt="MRI scan"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[286/264] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/doctor-nurse-helping-wheelchair-user 1.png"
              alt="Wheelchair help"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
