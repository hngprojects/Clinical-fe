'use client';

import Image from 'next/image';
import Image1 from './assets/about-img1.svg';
import Image2 from './assets/about-img2.svg';
import Image3 from './assets/about-img3.svg';
import Icon1 from './assets/about-icon1.svg';
import SpiralIcon from './assets/about-icon2.svg';
import EyeIcon from './assets/about-icon3.svg';
import Icon4 from './assets/about-icon4.svg';
import HeartIcon from './assets/about-icon5.svg';
import ShieldIcon from './assets/about-icon6.svg';
import StarIcon from './assets/about-icon7.svg';
import CheckIcon from './assets/about-icon8.svg';
import Profile1 from './assets/about-profile1.svg';
import Profile2 from './assets/about-profile1.svg';
import Profile3 from './assets/about-profile1.svg';
import Profile4 from './assets/about-profile1.svg';
import Profile5 from './assets/about-profile1.svg';
import Profile6 from './assets/about-profile1.svg';

// ─── Values Data ──────────────────────────────────────────────────────────────
const values = [
  {
    icon: HeartIcon,
    title: 'Empathy',
    desc: 'We design for the worried patient, not the spec sheet.',
    bg: '#E8F0F9',
  },
  {
    icon: ShieldIcon,
    title: 'Privacy',
    desc: 'Your medical data stays yours, encrypted and safe.',
    bg: '#DEF6E7',
  },
  {
    icon: StarIcon,
    title: 'Clarity',
    desc: 'Plain language always wins over medical jargon.',
    bg: '#CC34FF1A',
  },
  {
    icon: CheckIcon,
    title: 'Rigor',
    desc: 'Every workflow is reviewed by licensed clinicians.',
    bg: '#F5F5F5',
  },
];

// ─── Team Data ────────────────────────────────────────────────────────────────
const team = [
  { name: 'Dr. Amara Okafor', role: 'Chief Medical Officer', pic: Profile1 },
  { name: 'Dr. Sandra Jordan', role: 'CEO & Co-founder', pic: Profile2 },
  { name: 'Dr. John Fidelis', role: 'Head of Engineering', pic: Profile3 },
  { name: 'Sadiq Usman', role: 'Head of Design', pic: Profile4 },
  { name: 'Dr. Farouk Sadiq', role: 'Clinical Lead', pic: Profile5 },
  { name: 'Fatima Gowon', role: 'Head of AI', pic: Profile6 },
];

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="flex flex-col gap-28 overflow-x-hidden bg-white py-28 text-base text-[#1a1a1a] md:py-0">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto flex max-w-210.5 flex-col items-center justify-center gap-14 text-center md:py-28">
        <div className="flex flex-col items-start justify-start gap-2">
          <h1 className="flex flex-wrap items-center justify-center gap-3 text-[64px] font-bold leading-[120%] tracking-tight text-[#272727]">
            Making lab results{' '}
            <span className="inline-block bg-[#1565C0] px-2.5 py-2.5 text-white">
              Human.
            </span>
          </h1>
          <Image src={Icon1} alt="Hero icon" width={100} height={100} />
        </div>
        <p className="text-xl font-normal leading-[150%] tracking-tight text-[#5E5E5E]">
          Clinsights simplifies complex lab results, so you can focus on your
          health. Clinsight was built to bridge the gap between complex medical
          reports and the people who deserve to understand them - with clarity,
          empathy, and clinical rigor.
        </p>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section className="story-section mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-12 md:gap-0">
        <div className="flex flex-1 flex-col items-start justify-start gap-6">
          <div className="flex items-center gap-2 text-xl font-medium uppercase text-[#F59E0B]">
            <span className="h-4 w-4 shrink-0 rounded bg-[#F59E0B]" />
            OUR STORY
          </div>
          <h2 className="text-[40px] font-semibold leading-[120%] tracking-tight text-[#272727]">
            Built by clinicians,
            <br />
            engineers, and patients.
          </h2>
          <p className="text-base font-normal leading-[150%] tracking-tight text-[#5E5E5E]">
            Clinsights started after our founders watched family members leave
            clinics holding lab printouts they couldn&apos;t read. Doctors were
            stretched thin. Patients were left guessing.
          </p>
          <p className="text-base font-normal leading-[150%] tracking-tight text-[#5E5E5E]">
            We assembled a team of physicians, product managers, and product
            designers to build a tool that explains lab results the way a
            trusted doctor would — calmly, clearly, and honestly.
          </p>
          <p className="text-base font-normal leading-[150%] tracking-tight text-[#5E5E5E]">
            Today, we serve thousands of patients and a growing network of
            board-certified clinicians who review cases on demand.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image src={Image1} alt="Our story" fill className="object-contain" />
        </div>
      </section>

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-28">
        {/* ── Mission ──────────────────────────────────────────────────────── */}
        <section className="mission-section flex flex-wrap items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <Image src={Image2} alt="Mission" fill className="object-contain" />
          </div>
          <div className="flex flex-1 flex-col items-start justify-start gap-5 px-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-[13px] bg-[#E8F0F9] p-3">
              <Image
                src={SpiralIcon}
                alt="Mission icon"
                width={32}
                height={32}
              />
            </div>
            <p className="text-lg font-medium uppercase text-[#272727]">
              OUR MISSION
            </p>
            <h2 className="text-[40px] font-semibold leading-13 text-[#272727]">
              Clarity for every patient.
            </h2>
            <p className="text-base font-normal leading-6.5 text-[#5E5E5E]">
              We turn AI lab reports into plain-language summaries so that
              anyone regardless of medical background can confidently understand
              what their results mean.
            </p>
          </div>
        </section>

        {/* ── Vision ───────────────────────────────────────────────────────── */}
        <section className="vision-section flex flex-wrap items-center justify-between">
          <div className="flex flex-1 flex-col items-start justify-start gap-5 px-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-[13px] bg-[#DEF6E7] p-3">
              <Image src={EyeIcon} alt="Vision icon" width={32} height={32} />
            </div>
            <p className="text-lg font-medium uppercase text-[#272727]">
              OUR VISION
            </p>
            <h2 className="text-[40px] font-semibold leading-13 text-[#272727]">
              A world without medical confusion.
            </h2>
            <p className="text-base font-normal leading-6.5 text-[#5E5E5E]">
              We imagine a future where every test result is paired with an
              explanation so patients actually understand, and a clinician they
              can reach in minutes.
            </p>
          </div>
          <div className="vision-image-box flex flex-1 items-center justify-center">
            <Image src={Image3} alt="Vision" fill className="object-contain" />
          </div>
        </section>
      </div>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center gap-12 bg-[#F5F5F5] px-10 py-16 text-center md:gap-14 md:px-20 md:py-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-xl font-medium uppercase text-[#F59E0B]">
            <span className="h-4 w-4 shrink-0 rounded bg-[#F59E0B]" />
            OUR VALUES
          </div>
          <h2 className="flex flex-wrap items-start justify-start gap-3 text-[40px] font-semibold leading-[120%] tracking-tight text-[#272727]">
            <Image
              src={Icon4}
              alt="icon"
              width={100}
              height={100}
              className="-translate-y-5"
            />
            What guides every decision made
          </h2>
        </div>
        <div className="values-grid grid w-full max-w-5xl auto-fit grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-12 text-left md:gap-14">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-start justify-start gap-4 rounded-xl border border-[#F0F0F0] bg-white p-8"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-[13px] p-2.5"
                style={{ backgroundColor: v.bg }}
              >
                <Image src={v.icon} alt={v.title} width={24} height={24} />
              </div>
              <p className="text-xl font-semibold leading-8 text-[#272727]">
                {v.title}
              </p>
              <p className="text-base font-normal leading-6.5 text-[#272727]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex items-center gap-2 text-xl font-medium uppercase text-[#F59E0B]">
          <span className="h-4 w-4 shrink-0 rounded bg-[#F59E0B]" />
          THE TEAM
        </div>
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="text-[40px] font-semibold leading-[120%] tracking-tight text-[#272727]">
            People behind the platform
          </h2>
          <div className="team-grid grid w-full max-w-5xl auto-fit grid-cols-[repeat(auto-fit,minmax(309px,1fr))] gap-20 text-left md:gap-16">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-xl border border-[#F0F0F0]"
              >
                <Image
                  src={member.pic}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="flex flex-col items-start justify-start gap-1 px-6 py-6">
                  <p className="text-base font-semibold leading-8 text-[#272727]">
                    {member.name}
                  </p>
                  <p className="text-sm font-normal leading-6.5 text-[#135BAD]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
