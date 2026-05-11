import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function BentoGrid() {
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#F59E0B] font-bold text-sm tracking-wider uppercase">
              <div className="size-3 bg-[#F59E0B] square" />
              Clarity, simplified
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1B1B1B]">
              How <span className="text-[#1565C0]">Clinsight</span> Works
            </h2>
          </div>
          <p className="max-w-115 text-[#5E5E5E] text-lg leading-relaxed">
            Through intelligent analysis and expert validation, Clinsight turns
            complex data into structured insights you can understand and act on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:row-span-2 group bg-white rounded-[2.5rem] border border-[#1B1B1B14] p-8 shadow-sm">
            <div className="aspect-4/5 relative rounded-3xl overflow-hidden mb-8 bg-slate-100 border border-slate-200">
              <Image
                src="/Clinsight-Users/Rectangle 34624420.png"
                alt="Upload Step Illustration"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/mynaui_one-waves-solid.svg"
                alt="Upload Icon"
                width={24}
                height={24}
                className="w-10 h-10 p-2 rounded-lg"
              />
              <h3 className="text-xl font-bold text-[#1B1B1B]">
                Upload your lab result
              </h3>
            </div>
            <p className="text-[#5E5E5E] leading-relaxed mb-8">
              Easily upload your hard-to-understand report as a PDF or image in
              seconds.
            </p>
            <Button className="w-full rounded-2xl py-7 bg-[#1565C0] font-bold text-base">
              Get Started on Clinsights
            </Button>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[2.5rem] border border-[#1B1B1B14] shadow-sm flex flex-col h-full items-stretch overflow-hidden">
            <div className="h-[320px] bg-[#F8FAFC] relative overflow-hidden flex items-end justify-center pt-8 px-6">
              <div className="w-[95%] sm:w-[90%] h-[95%] bg-white rounded-t-[1.5rem] border-t-[2.5px] border-l-[2.5px] border-r-[2.5px] border-b-0 border-[#1565C0] p-6 sm:p-8 relative shadow-[0px_-8px_20px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="flex flex-col gap-5 relative z-0">
                  <div className="flex items-center gap-3 pt-1">
                    <Image src="/ai-scan.svg" alt="AI" width={24} height={24} />
                    <span className="text-[#1B1B1B] text-[15px] sm:text-[16px] font-semibold font-['Inter']">
                      Advanced Intelligent Analysis
                    </span>
                  </div>
                  <div className="relative w-max mt-2">
                    <div className="bg-[#FEF9E6] rounded-xl px-3 py-2.5 flex items-center gap-3 border-b-[1.5px] border-[#E5E7EB] shadow-sm">
                      <div className="p-2 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                        <Image
                          src="/note.svg"
                          alt="Note"
                          width={20}
                          height={20}
                          className="invert brightness-200"
                        />
                      </div>
                      <span className="text-[#F59E0B] text-[16px] sm:text-[17px] font-semibold font-['Inter'] pr-4">
                        Analyze Lab Result
                      </span>
                    </div>
                    <div className="absolute -right-5 -bottom-6 w-11 h-11 z-20 drop-shadow-md origin-top-left">
                      <Image
                        src="/Vector.svg"
                        alt="Cursor"
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-4 w-full">
                    <div className="w-full h-3.5 bg-[#F1F5F9] rounded-full" />
                    <div className="w-[85%] h-3.5 bg-[#F1F5F9] rounded-full" />
                    <div className="w-[60%] h-3.5 bg-[#F1F5F9] rounded-full" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent pointer-events-none z-10" />
              </div>
            </div>
            <div className="p-8 pt-6 mt-auto">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/mynaui_two-waves-solid.svg"
                  alt="AI Analysis Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-xl font-bold text-[#1B1B1B]">
                  AI analyzes your data
                </h3>
              </div>
              <p className="text-[#5E5E5E] text-[15px] leading-relaxed">
                Our system extracts and interprets your lab values instantly.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[2.5rem] border border-[#1B1B1B14] p-8 shadow-sm">
            <div className="relative w-full aspect-video bg-[#F8FAFC] rounded-3xl mb-6 overflow-hidden border border-[#1B1B1B0D]">
              <Image
                src="/Rectangle 34624421.png"
                alt="Insights Step Illustration"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className=" p-2 rounded-lg">
                <Image
                  src="/mynaui_three-waves-solid.svg"
                  alt="Key Findings Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1B1B1B]">
                Get clear explanations
              </h3>
            </div>
            <p className="text-[#5E5E5E] leading-relaxed">
              See a simple, structured breakdown of what your results mean.
            </p>
          </div>

          {/* Step 4 */}
          <div className="md:col-span-2 relative h-80 overflow-hidden rounded-[2.5rem] border border-[#1B1B1B14]">
            <Image
              src="/Frame 2147230221.png"
              alt="Consultation background"
              fill
              className="object-cover z-0"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end p-10">
              <div className="flex items-center gap-4 mb-3">
                <div className=" rounded-lg p-2">
                  <Image
                    src="/mynaui_four-waves-solid.svg"
                    alt="Doctor Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Request <span className="text-[#F59E0B]">consultation</span>{' '}
                  with a doctor
                </h3>
              </div>
              <p className="text-slate-200 text-lg max-w-md leading-relaxed ml-14">
                Get additional clarity from a verified doctor if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
