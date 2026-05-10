"use client";

import React from "react";
import Image1 from "./assets/about-img1.svg";
import Image2 from "./assets/about-img2.svg";
import Image3 from "./assets/about-img3.svg";
import Icon1 from "./assets/about-icon1.svg";
import SpiralIcon from "./assets/about-icon2.svg";
import EyeIcon from "./assets/about-icon3.svg";
import Icon4 from "./assets/about-icon4.svg";
import HeartIcon from "./assets/about-icon5.svg";
import ShieldIcon from "./assets/about-icon6.svg";
import StarIcon from "./assets/about-icon7.svg";
import CheckIcon from "./assets/about-icon8.svg";
import Profile1 from "./assets/about-profile1.svg";
import Profile2 from "./assets/about-profile1.svg";
import Profile3 from "./assets/about-profile1.svg";
import Profile4 from "./assets/about-profile1.svg";
import Profile5 from "./assets/about-profile1.svg";
import Profile6 from "./assets/about-profile1.svg";

const styles: Record<string, React.CSSProperties> = {
  // ─── Global ───────────────────────────────────────────────────────────────
  page: {
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: "110px",
    padding: "110px 0px"
  },

  // ─── Hero Section ──────────────────────────────────────────────────────────
  heroSection: {
    textAlign: "center",
    maxWidth: "842px",
    gap: "56px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  heroTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "10px",
  },
  heroHeading: {
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "120%",
    letterSpacing: "-2%",
    color: "#272727",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "13px",
  },
  heroHighlight: {
    backgroundColor: "#1565C0",
    color: "#ffffff",
    padding: "10px",
    display: "inline-block",
  },
  heroSubtext: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "-1%",
    color: "#5E5E5E",
  },

  // ─── Our Story Section ─────────────────────────────────────────────────────
  storySection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1280px",
    gap: "50px",
    margin: "0 auto"
  },
  storyContent: {
    flex: "1 1 633px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "25px",
  },
  sectionTag: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "100%",
    textTransform: "uppercase",
    color: "#F59E0B",
  },
  sectionTagDot: {
    width: "15px",
    height: "15px",
    backgroundColor: "#F59E0B",
    borderRadius: "2px",
    flexShrink: 0,
  },
  storyHeading: {
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "-2%",
    color: "#272727",
  },
  storyBody: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "-1%",
    color: "#5E5E5E",
  },
  storyImageBox: {
    flex: "1 1 545px",
    height: "550px",
  },
  storyImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  // ─── Middle Section ───────────────────────────────────────────────────────
  middleSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "110px",
    flexWrap: "wrap",
    maxWidth: "1280px",
    margin: "0 auto"
  },
  middleMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  middleImageBox: {
    flex: "1 1 510px",
    height: "510px",
  },
  middleImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },
  middleContent: {
    flex: "1 1 575px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "20px",
    padding: "30px"
  },
  middleIconWrap: {
    width: "66px",
    height: "66px",
    borderRadius: "13px",
    padding: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  middleIcon: {
    width: "32.5px",
    height: "32.5px",
  },
  middleTagSmall: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "100%",
    textTransform: "uppercase",
    color: "#272727",
  },
  middleHeading: {
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: "52px",
    color: "#272727",
  },
  middleBody: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    color: "#5E5E5E",
  },

  // ─── Values Section ────────────────────────────────────────────────────────
  valuesSection: {
    backgroundColor: "#F5F5F5",
    textAlign: "center",
    padding: "60px 80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "50px",
  },
  valuesContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "30px",
  },
  valuesHeading: {
    fontSize: "40px",
    fontWeight: 600,
    color: "#272727",
    letterSpacing: "-2%",
    lineHeight: "120%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  valuesIcon: {
    transform: "translateY(-20px)",
  },
  valuesGrid: {
    maxWidth: "1280px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(268px, 1fr))",
    gap: "50px",
    textAlign: "left",
  },
  valueCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "15px",
    padding: "30px",
    border: "1px solid #F0F0F0",
  },
  valueIconWrap: {
    width: "50px",
    height: "50px",
    borderRadius: "13px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  valueIcon: {
    width: "25px",
    height: "25px",
  },
  valueTitle: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "32px",
    color: "#272727",
  },
  valueDesc: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    color: "#272727",
  },

  // ─── Team Section ──────────────────────────────────────────────────────────
  teamSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "25px",
    textAlign: "center",
  },
  teamMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "50px",
  },
  teamHeading: {
    fontSize: "40px",
    fontWeight: 600,
    color: "#272727",
    lineHeight: "120%",
    letterSpacing: "-2%",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(309px, 1fr))",
    gap: "80px",
    textAlign: "left",
    width: "100%",
    maxWidth: "1280px"
  },
  teamCard: {
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #F0F0F0",
  },
  teamImg: {
    width: "100%",
    height: "471px",
    objectFit: "cover",
    objectPosition: "top",
    display: "block",
  },
  teamInfo: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "5px",
    padding: "23px 24px",
  },
  teamName: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "32px",
    color: "#272727",
  },
  teamRole: {
    color: "#135BAD",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "26px"
  },
};

// ─── Image placeholder blocks (using CSS colored boxes as stand-ins) ─────────
const ImgBlock = ({
  style,
  image,
}: {
  style?: React.CSSProperties;
  image?: any;
  radius?: string;
}) => (
  <img
    src={image?.src}
    alt=""
    style={{
      ...style,
    }}
  />
);

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
      <div style={styles.page}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section style={styles.heroSection}>
          <div style={styles.heroTop}>
            <h1 style={styles.heroHeading}>
              Making lab results{" "}
              <span style={styles.heroHighlight}>Human.</span>
            </h1>

            <img src={Icon1.src} alt="Hero icon" />
          </div>

          <p style={styles.heroSubtext}>
            Clinsights simplifies complex lab results, so you can focus on your health. Clinsight was built to bridge the gap between complex medical reports and the people who deserve to understand them - with clarity, empathy, and clinical rigor.
          </p>
        </section>

        {/* ── Our Story ────────────────────────────────────────────────────── */}
        <section className="story-section" style={styles.storySection}>
          <div style={styles.storyContent}>
            <div style={styles.sectionTag}>
              <span style={styles.sectionTagDot} />
              OUR STORY
            </div>
            <h2 style={styles.storyHeading}>
              Built by clinicians,<br />engineers, and patients.
            </h2>
            <p style={styles.storyBody}>
              Clinsights started after our founders watched family members leave
              clinics holding lab printouts they couldn't read. Doctors were
              stretched thin. Patients were left guessing.
            </p>
            <p style={styles.storyBody}>
              We assembled a team of physicians, product managers, and product
              designers to build a tool that explains lab results the way a
              trusted doctor would — calmly, clearly, and honestly.
            </p>
            <p style={styles.storyBody}>
              Today, we serve thousands of patients and a growing network of
              board-certified clinicians who review cases on demand.
            </p>
          </div>
          <div style={styles.storyImageBox}><ImgBlock
            style={styles.storyImg}
            image={Image1}
          /></div>
        </section>

        <div style={styles.middleSection}>
          {/* ── Mission ──────────────────────────────────────────────────────── */}
          <section className="mission-section" style={styles.middleMain}>
            <div className="middle-image-box" style={styles.middleImageBox}>
              <ImgBlock style={styles.middleImg} image={Image2} />
            </div>
            <div style={styles.middleContent}>
              <div style={{...styles.middleIconWrap, backgroundColor: "#E8F0F9"}}>
                <img src={SpiralIcon.src} alt="Eye icon" style={styles.middleIcon} />
              </div>
              <p style={styles.middleTagSmall}>OUR MISSION</p>
              <h2 style={styles.middleHeading}>Clarity for every patient.</h2>
              <p style={styles.middleBody}>
                We turn AI lab reports into plain-language summaries so that
                anyone regardless of medical background can confidently understand
                what their results mean.
              </p>
            </div>
          </section>

          {/* ── Vision ───────────────────────────────────────────────────────── */}
          <section className="vision-section" style={styles.middleMain}>
            <div style={styles.middleContent}>
              <div style={{...styles.middleIconWrap, backgroundColor: "#DEF6E7"}}>
                <img src={EyeIcon.src} alt="Eye icon" style={styles.middleIcon} />
              </div>
              <p style={styles.middleTagSmall}>OUR VISION</p>
              <h2 style={styles.middleHeading}>
                A world without medical confusion.
              </h2>
              <p style={styles.middleBody}>
                We imagine a future where every test result is paired with an
                explanation so patients actually understand, and a clinician they
                can reach in minutes.
              </p>
            </div>
            <div className="vision-image-box" style={styles.middleImageBox}>
              <ImgBlock style={styles.middleImg} image={Image3} />
            </div>
          </section>
        </div>

        {/* ── Values ───────────────────────────────────────────────────────── */}
        <section style={styles.valuesSection}>
          <div style={styles.valuesContent}>
            <div style={styles.sectionTag}>
              <span style={styles.sectionTagDot} />
              OUR VALUES
            </div>
            <h2 style={styles.valuesHeading}>
              <img src={Icon4.src} alt="icon" style={styles.valuesIcon} />
              What guides every decision made
            </h2>
          </div>
          <div className="values-grid" style={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} style={styles.valueCard}>
                <div style={{ ...styles.valueIconWrap, backgroundColor: v.bg,}}>
                  <img src={v.icon.src} alt={v.title} style={styles.valueIcon} />
                </div>
                <p style={styles.valueTitle}>{v.title}</p>
                <p style={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────────────────────── */}
        <section style={styles.teamSection}>
          <div style={styles.sectionTag}>
            <span style={styles.sectionTagDot} />
            THE TEAM
          </div>
          <div style={styles.teamMain}>
            <h2 style={styles.teamHeading}>People behind the platform</h2>
            <div className="team-grid" style={styles.teamGrid}>
              {team.map((member) => (
                <div key={member.name} style={styles.teamCard}>
                  <ImgBlock style={styles.teamImg} image={member.pic} radius="0" />
                  <div style={styles.teamInfo}>
                    <p style={styles.teamName}>{member.name}</p>
                    <p style={styles.teamRole}>{member.role}</p>
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