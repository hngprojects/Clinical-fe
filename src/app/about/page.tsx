"use client";

import React from "react";
import Image1 from "@/components/icons/Image1.svg";
import Image2 from "@/components/icons/Image2.svg";
import Image3 from "@/components/icons/Image3.svg";
import Icon1 from "@/components/icons/Icon1.svg";
import SpiralIcon from "@/components/icons/SpiralIcon.svg";
import EyeIcon from "@/components/icons/EyeIcon.svg";
import Icon4 from "@/components/icons/Icon2.svg";
import HeartIcon from "@/components/icons/HeartIcon.svg";
import ShieldIcon from "@/components/icons/ShieldIcon.svg";
import StarIcon from "@/components/icons/StarIcon.svg";
import CheckIcon from "@/components/icons/CheckIcon.svg";
import Profile1 from "@/components/icons/Profile1.svg";
import Profile2 from "@/components/icons/Profile2.png";
import Profile3 from "@/components/icons/Profile3.png";
import Profile4 from "@/components/icons/Profile4.png";
import Profile5 from "@/components/icons/Profile5.png";
import Profile6 from "@/components/icons/Profile6.png";
import { StaticImageData } from "next/image";
import Image from "next/image";

// ─── Responsive media query injection ────────────────────────────────────────
const ResponsiveStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+3:wght@400;600;700&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Source Sans 3', sans-serif; }

    .story-section { flex-direction: row; }
    .mission-section { flex-direction: row; }
    .vision-section { flex-direction: row; }

    @media (max-width: 700px) {
      .story-section { flex-direction: column !important; }
      .mission-section { flex-direction: column !important; }
      .vision-section { flex-direction: column !important; }
      .vision-image-box { order: -1; }
      .values-grid { grid-template-columns: 1fr !important; }
      .team-grid { grid-template-columns: 1fr !important; }
      .hero-heading { font-size: 1.75rem !important; }
    }
  `}</style>
);

// ─── Image placeholder blocks ─────────────────────────────────────────────────
const ImgBlock = ({
  style,
  image,
}: {
  style?: React.CSSProperties;
  image?: StaticImageData;
}) => (
  <Image
    src={typeof image === "string" ? image : image?.src || ""}
    alt=""
    style={style}
  />
);

// ─── Values Data ──────────────────────────────────────────────────────────────
const values = [
  { icon: HeartIcon, title: "Empathy", desc: "We design for the worried patient, not the spec sheet.", bg: "#E8F0F9" },
  { icon: ShieldIcon, title: "Privacy", desc: "Your medical data stays yours, encrypted and safe.", bg: "#DEF6E7" },
  { icon: StarIcon, title: "Clarity", desc: "Plain language always wins over medical jargon.", bg: "#CC34FF1A" },
  { icon: CheckIcon, title: "Rigor", desc: "Every workflow is reviewed by licensed clinicians.", bg: "#F5F5F5" },
];

// ─── Team Data ────────────────────────────────────────────────────────────────
const team = [
  { name: "Dr. Amara Okafor", role: "Chief Medical Officer", pic: Profile1 },
  { name: "Dr. Sandra Jordan", role: "CEO & Co-founder", pic: Profile2 },
  { name: "Dr. John Fidelis", role: "Head of Engineering", pic: Profile3 },
  { name: "Sadiq Usman", role: "Head of Design", pic: Profile4 },
  { name: "Dr. Farouk Sadiq", role: "Clinical Lead", pic: Profile5 },
  { name: "Fatima Gowon", role: "Head of AI", pic: Profile6 },
];

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <ResponsiveStyle />

      {/* Page wrapper */}
      <div
        className="bg-white text-[#1a1a1a] overflow-x-hidden flex flex-col"
        style={{ gap: "110px", padding: "110px 0px" }}
      >

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="text-center mx-auto flex items-center justify-center flex-col"
          style={{ maxWidth: "842px", gap: "56px" }}
        >
          {/* heroTop */}
          <div className="flex items-start justify-start flex-col" style={{ gap: "10px" }}>
            {/* heroHeading */}
            <h1
              className="hero-heading font-bold flex items-center justify-center flex-wrap text-[#272727]"
              style={{
                fontSize: "64px",
                lineHeight: "120%",
                letterSpacing: "-2%",
                gap: "13px",
              }}
            >
              Making lab results{" "}
              <span
                className="bg-[#1565C0] text-white inline-block"
                style={{ padding: "10px" }}
              >
                Human.
              </span>
            </h1>

            <Image src={Icon1.src} alt="Hero icon" />
          </div>

          {/* heroSubtext */}
          <p
            className="text-[#5E5E5E] font-normal"
            style={{
              fontSize: "20px",
              lineHeight: "150%",
              letterSpacing: "-1%",
            }}
          >
            Clinsights simplifies complex lab results, so you can focus on your health. Clinsight was built to bridge the gap between complex medical reports and the people who deserve to understand them - with clarity, empathy, and clinical rigor.
          </p>
        </section>

        {/* ── Our Story ────────────────────────────────────────────────────── */}
        <section
          className="story-section flex items-center justify-between flex-wrap mx-auto"
          style={{ maxWidth: "1280px", gap: "50px" }}
        >
          {/* storyContent */}
          <div
            className="flex items-start justify-start flex-col"
            style={{ flex: "1 1 633px", gap: "25px" }}
          >
            {/* sectionTag */}
            <div
              className="flex items-center text-[#F59E0B] font-medium uppercase"
              style={{ gap: "10px", fontSize: "20px", lineHeight: "100%" }}
            >
              <span
                className="bg-[#F59E0B] shrink-0"
                style={{ width: "15px", height: "15px", borderRadius: "2px" }}
              />
              OUR STORY
            </div>

            {/* storyHeading */}
            <h2
              className="font-semibold text-[#272727]"
              style={{
                fontSize: "40px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              Built by clinicians,<br />engineers, and patients.
            </h2>

            {/* storyBody x3 */}
            <p
              className="font-normal text-[#5E5E5E]"
              style={{ fontSize: "16px", lineHeight: "150%", letterSpacing: "-1%" }}
            >
              Clinsights started after our founders watched family members leave
              clinics holding lab printouts they could not read. Doctors were
              stretched thin. Patients were left guessing.
            </p>
            <p
              className="font-normal text-[#5E5E5E]"
              style={{ fontSize: "16px", lineHeight: "150%", letterSpacing: "-1%" }}
            >
              We assembled a team of physicians, product managers, and product
              designers to build a tool that explains lab results the way a
              trusted doctor would — calmly, clearly, and honestly.
            </p>
            <p
              className="font-normal text-[#5E5E5E]"
              style={{ fontSize: "16px", lineHeight: "150%", letterSpacing: "-1%" }}
            >
              Today, we serve thousands of patients and a growing network of
              board-certified clinicians who review cases on demand.
            </p>
          </div>

          {/* storyImageBox */}
          <div style={{ flex: "1 1 545px", height: "550px" }}>
            <ImgBlock
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              image={Image1}
            />
          </div>
        </section>

        {/* ── Middle Section ────────────────────────────────────────────────── */}
        <div
          className="flex items-center justify-center flex-wrap mx-auto"
          style={{ gap: "110px", maxWidth: "1280px" }}
        >
          {/* ── Mission ──────────────────────────────────────────────────────── */}
          <section
            className="mission-section flex items-center justify-between flex-wrap"
          >
            {/* middleImageBox */}
            <div className="middle-image-box" style={{ flex: "1 1 510px", height: "510px" }}>
              <ImgBlock
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                image={Image2}
              />
            </div>

            {/* middleContent */}
            <div
              className="flex items-start justify-start flex-col"
              style={{ flex: "1 1 575px", gap: "20px", padding: "30px" }}
            >
              {/* middleIconWrap */}
              <div
                className="flex items-center justify-center bg-[#E8F0F9]"
                style={{ width: "66px", height: "66px", borderRadius: "13px", padding: "13px" }}
              >
                <Image
                  src={SpiralIcon.src}
                  alt="Spiral icon"
                  style={{ width: "32.5px", height: "32.5px" }}
                />
              </div>

              {/* middleTagSmall */}
              <p
                className="font-medium uppercase text-[#272727]"
                style={{ fontSize: "18px", lineHeight: "100%" }}
              >
                OUR MISSION
              </p>

              {/* middleHeading */}
              <h2
                className="font-semibold text-[#272727]"
                style={{ fontSize: "40px", lineHeight: "52px" }}
              >
                Clarity for every patient.
              </h2>

              {/* middleBody */}
              <p
                className="font-normal text-[#5E5E5E]"
                style={{ fontSize: "16px", lineHeight: "26px" }}
              >
                We turn AI lab reports into plain-language summaries so that
                anyone regardless of medical background can confidently understand
                what their results mean.
              </p>
            </div>
          </section>

          {/* ── Vision ───────────────────────────────────────────────────────── */}
          <section
            className="vision-section flex items-center justify-between flex-wrap"
          >
            {/* middleContent */}
            <div
              className="flex items-start justify-start flex-col"
              style={{ flex: "1 1 575px", gap: "20px", padding: "30px" }}
            >
              {/* middleIconWrap */}
              <div
                className="flex items-center justify-center bg-[#DEF6E7]"
                style={{ width: "66px", height: "66px", borderRadius: "13px", padding: "13px" }}
              >
                <Image
                  src={EyeIcon.src}
                  alt="Eye icon"
                  style={{ width: "32.5px", height: "32.5px" }}
                />
              </div>

              {/* middleTagSmall */}
              <p
                className="font-medium uppercase text-[#272727]"
                style={{ fontSize: "18px", lineHeight: "100%" }}
              >
                OUR VISION
              </p>

              {/* middleHeading */}
              <h2
                className="font-semibold text-[#272727]"
                style={{ fontSize: "40px", lineHeight: "52px" }}
              >
                A world without medical confusion.
              </h2>

              {/* middleBody */}
              <p
                className="font-normal text-[#5E5E5E]"
                style={{ fontSize: "16px", lineHeight: "26px" }}
              >
                We imagine a future where every test result is paired with an
                explanation so patients actually understand, and a clinician they
                can reach in minutes.
              </p>
            </div>

            {/* middleImageBox */}
            <div
              className="vision-image-box"
              style={{ flex: "1 1 510px", height: "510px" }}
            >
              <ImgBlock
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                image={Image3}
              />
            </div>
          </section>
        </div>

        {/* ── Values ───────────────────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] text-center flex items-center justify-center flex-col"
          style={{ padding: "60px 80px", gap: "50px" }}
        >
          {/* valuesContent */}
          <div
            className="flex items-center justify-center flex-col"
            style={{ gap: "30px" }}
          >
            {/* sectionTag */}
            <div
              className="flex items-center text-[#F59E0B] font-medium uppercase"
              style={{ gap: "10px", fontSize: "20px", lineHeight: "100%" }}
            >
              <span
                className="bg-[#F59E0B] shrink-0"
                style={{ width: "15px", height: "15px", borderRadius: "2px" }}
              />
              OUR VALUES
            </div>

            {/* valuesHeading */}
            <h2
              className="font-semibold text-[#272727] flex items-start justify-start flex-wrap"
              style={{
                fontSize: "40px",
                lineHeight: "120%",
                letterSpacing: "-2%",
              }}
            >
              <Image
                src={Icon4.src}
                alt="icon"
                style={{ transform: "translateY(-20px)" }}
              />
              What guides every decision made
            </h2>
          </div>

          {/* valuesGrid */}
          <div
            className="values-grid"
            style={{
              maxWidth: "1280px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(268px, 1fr))",
              gap: "50px",
              textAlign: "left",
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-[#F0F0F0] flex items-start justify-start flex-col"
                style={{ borderRadius: "12px", gap: "15px", padding: "30px" }}
              >
                {/* valueIconWrap */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "13px",
                    padding: "10px",
                    backgroundColor: v.bg,
                  }}
                >
                  <Image
                    src={v.icon.src}
                    alt={v.title}
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>

                {/* valueTitle */}
                <p
                  className="font-semibold text-[#272727]"
                  style={{ fontSize: "20px", lineHeight: "32px" }}
                >
                  {v.title}
                </p>

                {/* valueDesc */}
                <p
                  className="font-normal text-[#272727]"
                  style={{ fontSize: "16px", lineHeight: "26px" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────────────────────── */}
        <section
          className="flex items-center justify-center flex-col text-center"
          style={{ gap: "25px" }}
        >
          {/* sectionTag */}
          <div
            className="flex items-center text-[#F59E0B] font-medium uppercase"
            style={{ gap: "10px", fontSize: "20px", lineHeight: "100%" }}
          >
            <span
              className="bg-[#F59E0B] shrink-0"
              style={{ width: "15px", height: "15px", borderRadius: "2px" }}
            />
            THE TEAM
          </div>

          {/* teamMain */}
          <div
            className="flex items-center justify-center flex-col"
            style={{ gap: "50px" }}
          >
            {/* teamHeading */}
            <h2
              className="font-semibold text-[#272727]"
              style={{ fontSize: "40px", lineHeight: "120%", letterSpacing: "-2%" }}
            >
              People behind the platform
            </h2>

            {/* teamGrid */}
            <div
              className="team-grid text-left w-full"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(309px, 1fr))",
                gap: "80px",
                maxWidth: "1280px",
              }}
            >
              {team.map((member) => (
                <div
                  key={member.name}
                  className="border border-[#F0F0F0] overflow-hidden"
                  style={{ borderRadius: "12px" }}
                >
                  <ImgBlock
                    style={{
                      width: "100%",
                      height: "471px",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                    image={member.pic}
                  />

                  {/* teamInfo */}
                  <div
                    className="flex items-start justify-start flex-col"
                    style={{ gap: "5px", padding: "23px 24px" }}
                  >
                    {/* teamName */}
                    <p
                      className="font-semibold text-[#272727]"
                      style={{ fontSize: "16px", lineHeight: "32px" }}
                    >
                      {member.name}
                    </p>

                    {/* teamRole */}
                    <p
                      className="text-[#135BAD] font-normal"
                      style={{ fontSize: "14px", lineHeight: "26px" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}