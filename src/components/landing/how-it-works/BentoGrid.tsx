import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function BentoGrid() {
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center lg:items-start gap-6 mb-12 lg:mb-16 text-center lg:text-left">
          <div className="flex w-fit items-center gap-2 rounded-full bg-[#FFFFFE] px-4 py-2 shadow-sm border border-slate-50">
            <span className="h-2 w-2 rounded-sm bg-[#F59E0B]" />
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
              Clarity, simplified
            </span>
          </div>

          <h2 className="text-[32px] lg:text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1B1B1B]">
            How <span className="text-brand-blue">Clinsight</span> Works
          </h2>

          <p className="max-w-md text-[16px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]">
            Through intelligent analysis and expert validation, Clinsight turns
            complex data into structured insights you can understand and act on.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 — tall, spans 2 rows */}
          <div className="md:row-span-2 bg-white rounded-3xl border border-[#1B1B1B14] shadow-sm overflow-hidden flex flex-col">
            {/* Photo fills top portion */}
            <div className="relative w-full flex-1 min-h-[300px]">
              <Image
                src="/Clinsight-Users/Rectangle 34624420.png"
                alt="Upload Step Illustration"
                fill
                className="object-cover"
              />
            </div>
            {/* Text + button at bottom */}
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/mynaui_one-waves-solid.svg"
                  alt="Step 1"
                  width={36}
                  height={36}
                />
                <h3 className="text-xl font-bold text-[#1B1B1B]">
                  Upload your lab result
                </h3>
              </div>
              <p className="text-[#5E5E5E] leading-relaxed text-sm">
                Easily upload your hard-to-understand report as a PDF or image
                in seconds.
              </p>
              <Button className="w-full rounded-2xl py-6 bg-[#1565C0] hover:bg-[#1255A8] font-bold text-base mt-2">
                Get Started on Clinsights
              </Button>
            </div>
          </div>

          {/* Card 2 — AI analysis, top middle */}
          <div className="bg-white rounded-3xl border border-[#1B1B1B14] shadow-sm overflow-hidden flex flex-col">
            {/* UI mockup area */}
            <div className="bg-[#F8FAFC] px-6 pt-6 pb-0 flex items-end justify-center overflow-hidden h-[220px]">
              <div className="w-full h-full bg-white rounded-t-2xl border-t-2 border-l-2 border-r-2 border-[#1565C0] p-5 relative shadow-[0px_-6px_16px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Image src="/ai-scan.svg" alt="AI" width={20} height={20} />
                    <span className="text-[#1B1B1B] text-sm font-semibold">
                      Advanced Intelligent Analysis
                    </span>
                  </div>
                  <div className="relative w-max">
                    <div className="bg-[#FEF9E6] rounded-xl px-3 py-2 flex items-center gap-2 border-b border-[#E5E7EB] shadow-sm">
                      <div className="p-1.5 bg-[#F59E0B] rounded-lg">
                        <Image
                          src="/note.svg"
                          alt="Note"
                          width={16}
                          height={16}
                          className="invert brightness-200"
                        />
                      </div>
                      <span className="text-[#F59E0B] text-sm font-semibold pr-3">
                        Analyze Lab Result
                      </span>
                    </div>
                    <div className="absolute -right-4 -bottom-5 w-9 h-9 z-20">
                      <Image
                        src="/Vector.svg"
                        alt="Cursor"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="w-full h-3 bg-[#F1F5F9] rounded-full" />
                    <div className="w-4/5 h-3 bg-[#F1F5F9] rounded-full" />
                    <div className="w-3/5 h-3 bg-[#F1F5F9] rounded-full" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Text */}
            <div className="p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/mynaui_two-waves-solid.svg"
                  alt="Step 2"
                  width={32}
                  height={32}
                />
                <h3 className="text-lg font-bold text-[#1B1B1B]">
                  AI analyzes your data
                </h3>
              </div>
              <p className="text-[#5E5E5E] text-sm leading-relaxed">
                Our system extracts and interprets your lab values instantly.
              </p>
            </div>
          </div>

          {/* Card 3 — clear explanations, top right */}
          <div className="bg-white rounded-3xl border border-[#1B1B1B14] shadow-sm overflow-hidden flex flex-col">
            {/* Photo */}
            <div className="relative w-full h-[220px]">
              <Image
                src="/Rectangle 34624421.png"
                alt="Insights Step Illustration"
                fill
                className="object-cover"
              />
            </div>
            {/* Text */}
            <div className="p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/mynaui_three-waves-solid.svg"
                  alt="Step 3"
                  width={32}
                  height={32}
                />
                <h3 className="text-lg font-bold text-[#1B1B1B]">
                  Get clear explanations
                </h3>
              </div>
              <p className="text-[#5E5E5E] text-sm leading-relaxed">
                See a simple, structured breakdown of what your results mean.
              </p>
            </div>
          </div>

          {/* Card 4 — spans cols 2+3, bottom row */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden border border-[#1B1B1B14] h-72">
            <Image
              src="/Frame 2147230221.png"
              alt="Consultation background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            {/* Text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/mynaui_four-waves-solid.svg"
                  alt="Step 4"
                  width={36}
                  height={36}
                />
                <h3 className="text-2xl font-bold text-white">
                  Ask follow up{' '}
                  <span className="text-[#F59E0B]">questions</span>
                </h3>
              </div>
              <p className="text-slate-200 text-base leading-relaxed ml-12">
                AI provides suggested follow up questions to give you insights
                on your results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
