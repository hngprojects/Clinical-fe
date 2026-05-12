import Image from 'next/image';

export default function AboutValues() {
  return (
    <section className="w-full pt-12 md:pt-20">
      <div className="mx-auto mb-8 flex w-full max-w-[1280px] items-center justify-center gap-[5px]">
        <span className="h-3.5 w-3.5 shrink-0 bg-[#F59E0B]" />
        <span className="text-xl font-medium uppercase text-[#F59E0B]">
          OUR VALUES
        </span>
      </div>

      <div className="w-full bg-[#F5F5F5] px-6 py-14 md:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-12 lg:gap-16">
          <div className="relative flex items-center justify-center text-center">
            <div className="absolute -left-[20px] -top-[20px] h-11 w-10 md:-left-[35px] md:-top-[25px]">
              <Image
                src="/Highlight_05.svg"
                alt="Highlight"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-[32px] font-semibold leading-[48px] text-[#272727] md:text-4xl">
              What guides every decision made
            </h2>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-6 lg:justify-between">
            {[
              {
                title: 'Empathy',
                text: 'We design for the worried patient, not the spec sheet.',
                icon: '/Frame 2147230208.svg',
                bg: 'bg-[#E8F0F9]',
              },
              {
                title: 'Privacy',
                text: 'Your medical data stays yours, encrypted and safe.',
                icon: '/security-check.svg',
                bg: 'bg-[#DEF6E7]',
              },
              {
                title: 'Clarity',
                text: 'Plain language always wins over medical jargon.',
                icon: '/artificial-intelligence-08.svg',
                bg: 'bg-[#CC34FF1A]',
              },
              {
                title: 'Rigor',
                text: 'Every workflow is reviewed by licensed clinicians.',
                icon: '/stethoscope-02.svg',
                bg: 'bg-[#F4F4F4]',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex h-[240px] w-full max-w-[256px] flex-col items-start justify-start gap-3.5 rounded-xl bg-white p-7 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-[#EFEFEF]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-xl font-semibold leading-8 text-[#272727]">
                  {card.title}
                </h3>
                <p className="text-base font-normal leading-6 text-[#272727]/75">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
