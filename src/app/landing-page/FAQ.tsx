'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    question: 'Is Clinsight a medical diagnosis tool?',
    answer:
      'No, Clinsight is an informational tool designed to help you understand your laboratory results. It is not a substitute for professional medical advice, diagnosis, or treatment.',
  },
  {
    question: 'How accurate are the AI insights?',
    answer:
      'Clinsight uses structured medical interpretation principles to provide helpful insights. For additional confidence, you can request a doctor review.',
  },
  {
    question: 'Is my medical data safe?',
    answer:
      'Yes, we take data security very seriously. Your medical information is encrypted and handled according to strict privacy standards to ensure your data remains confidential.',
  },
  {
    question: 'Can I speak to a doctor through Clinsight?',
    answer:
      'Yes, Clinsight provides an optional service where you can request a review and consultation with a verified medical professional for added clarity on your results.',
  },
  {
    question: 'Do I need to pay before seeing my results?',
    answer:
      'Clinsight offers a transparent pricing model. Basic insights may be available, while detailed AI analysis or doctor consultations may require a fee.',
  },
  {
    question: "What if I don't understand the results?",
    answer:
      "If you find any part of the analysis confusing, we recommend using our 'Request Consultation' feature to speak with a doctor who can explain everything in detail.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#FFFFFE] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 flex flex-col items-center gap-6 text-center">
          <div className="flex w-fit h-[42px] items-center justify-center gap-2 rounded-[64px] bg-[#E8F0F9] px-4 py-2 text-brand-blue border border-brand-blue/10">
            <span className="h-2 w-2 rounded-sm bg-brand-blue" />
            <span className="text-[14px] lg:text-[16px] font-medium leading-[1.5] tracking-[-0.01em] uppercase">
              FAQs
            </span>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[26px] sm:text-[36px] lg:text-[40px] font-bold leading-tight tracking-tight text-[#1B1B1B]">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-[14px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-[#5E5E5E]">
              Explore answers to common questions about your results, features,
              and how Clinsight supports your care
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full max-w-2xl lg:mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 border-none shadow-none bg-transparent"
          >
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-[16px] border border-[#D0D0D0] bg-[#FAFAFA] transition-all data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="rounded-[16px] data-[state=open]:rounded-b-none py-4 px-5 hover:no-underline items-center justify-between gap-3 border-none bg-transparent">
                  <span className="flex-1 text-left text-[11px] lg:text-[13px] font-medium leading-[1.5] tracking-[-0.01em] text-[#1B1B1B] min-w-0 pr-2">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.6] tracking-[-0.01em] text-[#5E5E5E] text-left bg-transparent">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
