import { StepCard } from './StepCard';
// Data for each step in the process
const steps = [
  {
    n: '01',
    t: 'Upload Results',
    d: 'Simply drag and drop your lab results—whether it’s a PDF or a clear image—and we’ll securely take it from there, no matter where your test was done.',
  },
  {
    n: '02',
    t: 'We Extract Your Data',
    d: 'Our system carefully reads your report and pulls out the key health markers, organising everything clearly so nothing important is missed.',
  },
  {
    n: '03',
    t: 'View Your Insights',
    d: 'We turn complex medical data into simple, easy-to-understand insights—highlighting what’s normal.',
  },
  {
    n: '04',
    t: 'Request a Doctor’s Review',
    d: 'If you’d like extra reassurance, you can request a review from a verified doctor.',
  },
  {
    n: '05',
    t: 'Choose & Complete Your Request',
    d: 'Get matched with an available doctor or choose one yourself, then complete your request securely.',
  },
];

const desktopPositions = [
  'lg:top-[0%] lg:right-[0%]',
  'lg:top-[19.05%] lg:left-[0%]',
  'lg:top-[38.10%] lg:right-[0%]',
  'lg:top-[57.14%] lg:left-[0%]',
  'lg:top-[76.19%] lg:right-[0%]',
];

export function ProcessPath() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative max-w-[1200px]">
        <div className="relative flex flex-col gap-16 lg:block lg:aspect-[1200/2730] lg:w-full mt-10">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0 mt-[52px]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 77.5 0 
                C 77.5 9.525, 22.5 9.525, 22.5 19.05
                C 22.5 28.575, 77.5 28.575, 77.5 38.10
                C 77.5 47.625, 22.5 47.625, 22.5 57.14
                C 22.5 66.665, 77.5 66.665, 77.5 76.19
              "
              fill="none"
              stroke="#1565C0"
              strokeWidth="2.5"
              strokeDasharray="12 12"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {steps.map((step, idx) => (
            <div
              key={step.n}
              className={`
                relative w-full z-10
                lg:absolute lg:w-[45%] lg:h-[23.8%]
                ${desktopPositions[idx]}
              `}
            >
              <StepCard
                index={idx}
                number={step.n}
                title={step.t}
                description={step.d}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
