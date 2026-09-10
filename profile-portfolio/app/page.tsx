'use client';

import { m } from 'framer-motion';
import {
  GoogleCheckCircle,
  GoogleCheckCircleFilled,
  GoogleArrowForward,
  GoogleArrowUp,
  GoogleOpenInNew,
  GoogleFileDownload,
  GoogleMail,
  GoogleMenuBook,
  GoogleWorkspacePremium,
  GoogleMilitaryTech,
} from './components/GoogleIcon';
import { Github, Linkedin, Phone, GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import Navbar from './components/Navbar';
import { downloadPortfolioPdf } from './lib/downloadPdf';
import dynamic from 'next/dynamic';

const PortfolioPDFDownload = dynamic(
  () => import('./components/PortfolioPDFDownload'),
  { ssr: false }
);

/* ============================================
   ANIMATION VARIANTS
   ============================================ */

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

/* ============================================
   DATA
   ============================================ */

const EXPERIENCE = [
  {
    role: 'McKinsey Forward Program Participant',
    org: 'McKinsey & Company',
    orgUrl: 'https://www.mckinsey.org/our-programs/forward/overview',
    period: 'Sep 2026 – Present',
    bullets: [
      'Selected for an intensive global learning initiative focused on structured problem-solving, digital transformation, business communication, and agile adaptation.',
      'Applied core management consulting frameworks (such as MECE, issue trees, and hypothesis-driven analysis) to evaluate complex business scenarios and synthesize data-backed solutions.',
      'Developed advanced capabilities in digital tools, workplace adaptability, and leadership techniques to drive strategic impact in high-velocity professional environments.',
    ],
    metric: 'Global Initiative · Problem Solving & Digital Fluency',
    filled: true,
  },
  {
    role: 'Web Developer Intern',
    org: 'PT Teknologi Aplikasi Sejahtera (TAS)',
    orgUrl: 'https://teknosejahtera.co.id/',
    period: 'Feb 2026 – Jul 2026',
    bullets: [
      'Engineered an enterprise Document Management System (DMS) using Laravel, Vue.js, TypeScript, and PostgreSQL to digitize administrative workflows and enhance document traceability.',
      'Designed and integrated RESTful APIs to enable seamless frontend-backend communication, optimizing data transfer efficiency.',
      'Implemented Role-Based Access Control (RBAC) to enforce data security, access governance, and compliance standards.',
      'Executed Black Box Testing across 77 functional scenarios, validating end-to-end system requirements, data integrity, and feature compliance prior to deployment.',
    ],
    metric: '77 Functional Scenarios Validated · Zero Defects',
    rating: 'Performance: EXCELLENT',
    filled: true,
  },
  {
    role: 'Inbound (Virtual) Student Mobility Participant',
    org: 'Universiti Tun Hussein Onn Malaysia (UTHM) – Faculty of Technical and Vocational Education',
    orgUrl: 'https://www.uthm.edu.my/',
    period: 'Jul 2026 – Sep 2026',
    bullets: [
      'Completed international academic exchange under the Faculty of Technical and Vocational Education, focusing on Industrial Revolution 4.0 concepts and technology trends.',
      'Engaged in cross-border technical discussions, analyzing global digital transformation frameworks alongside international peers and faculty.',
      'Demonstrated cross-cultural communication and independent learning, adapting effectively to an international academic framework.',
    ],
    metric: 'International Mobility · IR 4.0 Focus',
    filled: false,
  },
  {
    role: 'Secretary of the Public Relations Department',
    org: 'Student Research Activity Unit (UKMP), Universitas Negeri Semarang',
    orgUrl: 'https://sites.unnes.ac.id/ukmpenelitian/',
    period: 'Feb 2025 – Nov 2025',
    bullets: [
      'Spearheaded 2 cross-university comparative study programs with UNESA and Universitas Brawijaya as Event Chairperson, managing cross-functional student delegations.',
      'Managed external stakeholder communications and institutional partnerships, streamlining event planning, administrative workflows, and inter-organization coordination.',
      'Delegated operational tasks across multiple divisions, facilitating knowledge exchange on research methodologies and organizational governance for partner universities.',
    ],
    metric: 'Event Chairperson · 2 Cross-University Programs',
    filled: false,
  },
  {
    role: 'Staff of Internal And Organizational Supervision',
    org: 'Indonesian Student Association For International Studies (ISAFIS)',
    period: 'Apr 2024 – Dec 2024',
    bullets: [
      'Developed and deployed an online voting system for the ISAFIS presidential election, ensuring ballot security, user authorization, and real-time result aggregation.',
      'Maintained central member databases and internal communications, supporting organizational governance, policy enforcement, and cross-chapter member engagement.',
      'Co-executed national orientation programs (MOCA 2024), coordinating logistics, candidate onboarding, and administrative alignment across nationwide chapters.',
    ],
    metric: 'E-Voting Architecture · Governance & Compliance',
    filled: false,
  },
  {
    role: 'Corresponding Author & Lead Researcher',
    org: 'Article Publications — UNNES Journal (Mediasi)',
    orgUrl: 'https://jurnalilmiah.org/journal/index.php/mediasi/article/view/753',
    period: 'Aug 2023 – Feb 2024',
    bullets: [
      'Authored a peer-reviewed research paper on AI chatbot integration in Operating Systems education, analyzing technology adoption in higher education.',
      'Conducted empirical data collection and statistical analysis to evaluate the pedagogical efficacy and usability of AI-driven conversational agents.',
      'Synthesized research findings into actionable insights, contributing to academic literature on educational technology and adaptive learning tools.',
    ],
    metric: 'Peer-Reviewed Publication · AI Chatbots in OS',
    filled: false,
  },
];

const PROJECTS = [
  {
    title: 'Document Management System',
    description: 'Production-grade enterprise DMS with role-based access control, REST API architecture, and comprehensive test coverage.',
    tags: ['Laravel', 'Vue.js', 'TypeScript', 'PostgreSQL'],
    highlight: 'Internship Flagship',
  },
  {
    title: 'CatatKas — Digital Bookkeeping',
    description: 'Offline-first financial bookkeeping platform for MSMEs with smart natural language transaction parsing and automated PDF reports.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'PWA'],
    highlight: 'Fintech / PWA',
    link: 'https://catatkas-web.vercel.app/',
  },
  {
    title: 'Time-Series Forecasting Engine',
    description: 'Applied deep learning to time-series forecasting using LSTM networks. Interactive dashboard with real-time model predictions.',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Streamlit'],
    highlight: 'Deep Learning / LSTM',
    link: 'https://crypto-predict-101.streamlit.app/',
  },
  {
    title: 'Medical Image Classification System',
    description: 'High-precision CNN-based classification system for medical imaging. Achieved 95%+ validation accuracy in clinical image processing.',
    tags: ['PyTorch', 'Computer Vision', 'Python'],
    highlight: 'Computer Vision / CNN',
    link: 'https://deteksikanker.streamlit.app/',
  },
];

const ACHIEVEMENTS = [
  {
    icon: <GoogleWorkspacePremium className="w-5 h-5" />,
    title: 'McKinsey.org Forward Program',
    detail: 'Selected for intensive global learning initiative developing core leadership, structured problem-solving (MECE), digital transformation, and agile adaptation.',
    meta: 'McKinsey & Company · Accepted Sep 2026',
    link: 'https://www.mckinsey.org/our-programs/forward/overview',
    linkText: 'Explore Program',
    image: '/images/mckinsey-forward.jpg',
  },
  {
    icon: <GoogleMenuBook className="w-5 h-5" />,
    title: 'Published Scientific Article',
    detail: 'Corresponding Author — "Pemanfaatan AI Chatbot dalam Pembelajaran Sistem Operasi" (Operating Systems education research paper).',
    meta: 'UNNES Journal (Mediasi) · Published Feb 2024',
    link: 'http://jurnalilmiah.org/journal/index.php/mediasi/article/view/753',
    linkText: 'Read Paper',
  },
  {
    icon: <GoogleWorkspacePremium className="w-5 h-5" />,
    title: 'Top 10 Finalist — Activation 7.0 Essay Competition',
    detail: 'Author of "Stoddlers": Interactive website-based learning platform with animated videos & educational games on sexual education & reproductive health for toddlers.',
    meta: 'HIMADIKA Universitas Brawijaya · Nov 2, 2024',
  },
  {
    icon: <GoogleWorkspacePremium className="w-5 h-5" />,
    title: '5th Place Finalist — MEDISPRO Essay Competition 2025',
    detail: 'Author of "SkinAlyzr": Innovative deep learning-based mobile application with multi-task learning for early detection & accelerated treatment of skin diseases.',
    meta: 'Faculty of Medicine, UNNES · Sep 15, 2025',
  },
  {
    icon: <GoogleMilitaryTech className="w-5 h-5" />,
    title: 'Web Developer Internship (EXCELLENT)',
    detail: 'Successfully built enterprise full-stack Document Management System (DMS) and executed Black Box Testing across 77 functional scenarios with zero critical defects.',
    meta: 'PT Teknologi Aplikasi Sejahtera · Feb–Jul 2026',
    link: 'https://teknosejahtera.co.id/',
    linkText: 'Company Profile',
  },
  {
    icon: <GoogleMilitaryTech className="w-5 h-5" />,
    title: 'DevOps & AWS Cloud Fundamentals Certificate',
    detail: 'Certified in AWS & Cloud Fundamentals by Dicoding; validated core knowledge in cloud deployment models, network security, and infrastructure management.',
    meta: 'Dicoding Indonesia × AWS · Nov 2023 – Nov 2026',
    link: 'https://www.dicoding.com/certificates/1RXY0GQM3ZVM',
    linkText: 'Verify Certificate',
  },
];

const SKILLS: { category: string; items: { name: string; level: number; label: string }[] }[] = [
  {
    category: 'Consulting & Strategic Capabilities',
    items: [
      { name: 'Structured Problem Solving (MECE Framework)', level: 92, label: 'Advanced' },
      { name: 'Data-Driven Business Analysis', level: 95, label: 'Expert' },
      { name: 'Cross-Functional Team Leadership', level: 90, label: 'Advanced' },
      { name: 'Digital Transformation Strategy', level: 90, label: 'Advanced' },
      { name: 'Agile Project Management', level: 88, label: 'Advanced' },
      { name: 'Requirement Gathering & System Mapping', level: 88, label: 'Advanced' },
      { name: 'Change Management & Governance', level: 85, label: 'Advanced' },
      { name: 'Stakeholder Management', level: 80, label: 'Intermediate' },
    ],
  },
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'Python', level: 95, label: 'Expert' },
      { name: 'Javascript', level: 92, label: 'Expert' },
      { name: 'TypeScript', level: 90, label: 'Advanced' },
      { name: 'Laravel', level: 92, label: 'Expert' },
      { name: 'Vue.js', level: 90, label: 'Expert' },
      { name: 'Next.js', level: 88, label: 'Advanced' },
      { name: 'PHP', level: 90, label: 'Expert' },
      { name: 'C++', level: 90, label: 'Expert' },
    ],
  },
  {
    category: 'Databases, Cloud & Tools',
    items: [
      { name: 'PostgreSQL', level: 92, label: 'Expert' },
      { name: 'MySQL', level: 90, label: 'Expert' },
      { name: 'Docker', level: 90, label: 'Expert' },
      { name: 'Git', level: 92, label: 'Expert' },
      { name: 'RESTful APIs', level: 90, label: 'Advanced' },
      { name: 'Amazon Web Services', level: 85, label: 'Advanced' },
      { name: 'Postman', level: 88, label: 'Advanced' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'Bahasa Indonesia', level: 100, label: 'Native' },
      { name: 'English', level: 88, label: 'Fluent' },
    ],
  },
];

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function Home() {
  const [pdfReady, setPdfReady] = useState(false);
  const [statKey, setStatKey] = useState(0);

  useEffect(() => {
    setPdfReady(true);
  }, []);

  const handleDownloadCV = useCallback(() => {
    const event = new CustomEvent('download-portfolio-pdf');
    window.dispatchEvent(event);
  }, []);

  const triggerReplayCounter = useCallback(() => {
    setStatKey((k) => k + 1);
  }, []);

  return (
    <>
      <Navbar />
      {pdfReady && <PortfolioPDFDownload />}

      <div className="w-full min-h-screen bg-white">

        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section id="hero" className="relative pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 overflow-hidden">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <m.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="lg:col-span-7 space-y-4 sm:space-y-6"
              >
                {/* Status Badges */}
                <m.div variants={fadeIn} className="flex flex-wrap items-center gap-2.5">
                  <span className="group inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/80 text-label !text-xs hover:border-[var(--color-accent)] hover:bg-blue-100/60 hover:shadow-xs hover:scale-[1.02] transition-all duration-300 cursor-default select-none">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0 animate-pulse" />
                    <span className="font-semibold text-[var(--color-accent)]">McKinsey Forward Participant</span>
                  </span>
                  <span className="group inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-label !text-xs hover:border-[var(--color-accent)] hover:bg-blue-50/50 hover:shadow-xs hover:scale-[1.02] transition-all duration-300 cursor-default select-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="transition-colors group-hover:text-[var(--color-primary)]">Open for Opportunities</span>
                  </span>
                </m.div>

                {/* Headline */}
                <m.div variants={fadeIn} className="space-y-3">
                  <h1 className="text-display text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-light tracking-tight leading-[1.18]">
                    Full-Stack Developer
                    <br />
                    <span className="text-[var(--color-accent)] font-normal hover:brightness-110 transition-all inline-block hover:translate-x-0.5 duration-200">&amp; AI Practitioner</span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] font-light leading-relaxed max-w-2xl">
                    Computer Science undergraduate at Universitas Negeri Semarang and McKinsey Forward Program Participant with strong capabilities in software engineering, applied AI, and project leadership. Proven track record architecting enterprise solutions (Laravel, Vue.js, PostgreSQL) and conducting rigorous functional QA across 77 test scenarios.
                  </p>
                </m.div>

                {/* CTAs */}
                <m.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href="/Iman-Yunar-Noviadhi-Portfolio.pdf"
                    download="Iman-Yunar-Noviadhi-Portfolio.pdf"
                    onClick={downloadPortfolioPdf}
                    className="btn-primary group w-full sm:w-auto justify-center !py-2.5 !px-5 !text-xs sm:!text-sm hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
                  >
                    <GoogleFileDownload className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                    Download CV (PDF)
                  </a>
                  <a
                    href="#experience"
                    className="btn-secondary group w-full sm:w-auto justify-center !py-2.5 !px-5 !text-xs sm:!text-sm active:scale-95 transition-all duration-200"
                  >
                    View Experience
                    <GoogleArrowForward className="w-4 h-4 rotate-90 transition-transform duration-200 group-hover:translate-y-0.5" />
                  </a>
                </m.div>
              </m.div>

              {/* Right — Profile Image (Editorial Portrait Card) */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <div className="group relative w-full max-w-[260px] sm:max-w-[290px] md:max-w-[320px] transition-transform duration-500 hover:-translate-y-2">
                  {/* Background Portrait Frame */}
                  <div className="relative rounded-2xl bg-gradient-to-b from-[#F7F9FC] via-[#EEF2F6] to-[#E2E8F0] border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-slate-300 transition-all duration-500 overflow-hidden flex flex-col items-center pt-6 px-3 pb-0">
                    {/* Subtle editorial backdrop accent */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-500/5 blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500" />
                    <div className="absolute top-12 left-6 w-32 h-32 rounded-full bg-sky-400/5 blur-xl pointer-events-none group-hover:bg-sky-400/10 transition-colors duration-500" />

                    {/* Top Badge - Published Author */}
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-sm border border-slate-200/90 px-2.5 py-1 rounded-full shadow-2xs flex items-center gap-1.5 z-20 hover:scale-105 hover:border-[var(--color-accent)] hover:shadow-xs transition-all duration-300 cursor-default group/badge select-none">
                      <GoogleMenuBook className="w-3.5 h-3.5 text-[var(--color-accent)] transition-transform duration-300 group-hover/badge:-rotate-12" />
                      <span className="text-[11px] font-semibold text-[var(--color-primary)]">Published Author</span>
                    </div>

                    {/* Profile Cutout Image with full head and torso visible */}
                    <div className="relative z-10 w-full flex justify-center items-end">
                      <Image
                        src="/profile-removebg-preview.png"
                        alt="Iman Yunar Noviadhi"
                        width={320}
                        height={440}
                        priority
                        className="w-auto h-[250px] sm:h-[290px] md:h-[340px] max-w-full object-contain object-bottom drop-shadow-sm select-none transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Bottom Stat Card */}
                    <div
                      onClick={triggerReplayCounter}
                      onMouseEnter={triggerReplayCounter}
                      className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 p-2.5 rounded-lg shadow-sm z-20 hover:border-[var(--color-accent)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/stat select-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] flex items-center gap-1 group-hover/stat:text-[var(--color-accent)] transition-colors">
                            <GoogleCheckCircleFilled className="w-3.5 h-3.5 text-emerald-600 shrink-0 transition-transform duration-200 group-hover/stat:scale-110" />
                            <span>
                              GPA 3.84 <span className="text-[10px] sm:text-[11px] font-normal text-[var(--color-text-muted)]">out of 4.00</span>
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-[var(--color-text-muted)] font-medium">
                            UNNES Computer Science · 77 Scenarios (TAS)
                          </p>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 bg-blue-50 text-[var(--color-accent)] border border-blue-200/60 rounded group-hover/stat:bg-[var(--color-accent)] group-hover/stat:text-white group-hover/stat:scale-105 transition-all duration-200">
                          EXCELLENT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ============================================
            EXPERIENCE SECTION — Timeline
            ============================================ */}
        <section id="experience" className="py-12 sm:py-16 md:py-20 bg-[var(--color-bg-alt)]">
          <div className="container-narrow">
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <AccentRule />
              <h2 className="text-section-heading text-2xl sm:text-3xl md:text-[36px]">Experience</h2>
            </m.div>

            <div className="timeline">
              {EXPERIENCE.map((entry, idx) => (
                <m.div
                  key={idx}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="timeline-item group"
                >
                  <div className={`${entry.filled ? 'timeline-dot-filled' : 'timeline-dot'} transition-all duration-300 group-hover:scale-130 group-hover:ring-4 group-hover:ring-blue-200/70`} />

                  <div className="p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300 border border-transparent group-hover:bg-white group-hover:border-slate-200/80 group-hover:shadow-xs">
                    <div className="space-y-2.5">
                      {/* Period */}
                      <span className="text-label text-[11px] font-semibold transition-colors group-hover:text-[var(--color-accent)]">{entry.period}</span>

                      {/* Role & Org */}
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                          {entry.role}
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-medium">
                          {entry.org}
                        </p>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 pt-1">
                        {entry.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="group/bullet flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)] font-light leading-relaxed hover:translate-x-1 transition-transform duration-200 cursor-default select-none"
                          >
                            <GoogleCheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-[2px] sm:mt-[3px] transition-transform duration-200 group-hover/bullet:scale-125 group-hover/bullet:text-blue-700" />
                            <span className="transition-colors group-hover/bullet:text-[var(--color-primary)]">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Metric Badge */}
                      {entry.metric && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="metric-badge !text-xs">{entry.metric}</span>
                        </div>
                      )}

                      {/* Rating */}
                      {entry.rating && (
                        <p className="text-xs sm:text-sm font-semibold text-[var(--color-accent)] hover:brightness-125 transition-all inline-block">
                          {entry.rating}
                        </p>
                      )}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            EDUCATION SECTION
            ============================================ */}
        <section id="education" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container-narrow">
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <AccentRule />
              <h2 className="text-section-heading text-2xl sm:text-3xl md:text-[36px]">Education</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light mt-2 max-w-xl">
                Academic foundation in Computer Science, software engineering rigor, and international academic exchange.
              </p>
            </m.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Primary Degree Card (Universitas Negeri Semarang) */}
              <m.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:col-span-8 card p-6 sm:p-7 rounded-xl bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 border border-slate-200 hover:border-[var(--color-accent)] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[var(--color-accent)] shrink-0 shadow-2xs">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-label text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                          Undergraduate Degree
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="text-xs text-[var(--color-text-muted)] font-medium">08/2023 – Present</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium text-[var(--color-primary)]">
                        Universitas Negeri Semarang (UNNES)
                      </h3>
                      <p className="text-sm text-[var(--color-text)] font-normal">
                        Bachelor of Computer Science
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 pt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        Semarang, Central Java, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* GPA Highlight Badge */}
                  <div className="self-start sm:self-auto sm:text-right shrink-0">
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-800 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <div>
                        <div className="text-[10px] text-emerald-600 font-semibold tracking-wide uppercase text-left sm:text-right">
                          Cumulative GPA
                        </div>
                        <div className="text-base sm:text-lg font-bold text-emerald-700 leading-tight">
                          3.84 <span className="text-xs font-normal text-emerald-600">out of 4.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Academic Competencies & Highlights */}
                <div className="pt-5 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2.5">
                      Core Academic Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Software Engineering',
                        'Data Structures & Algorithms',
                        'Database Systems & Modeling',
                        'Applied Machine Learning',
                        'Operating Systems Architecture',
                        'Computer Networks',
                        'Web & Cloud Systems',
                      ].map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="tech-tag !text-xs !py-1 !px-2.5 bg-white border-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                      Academic &amp; Research Contributions
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[var(--color-text)] font-light leading-relaxed">
                      <li className="flex items-start gap-2">
                        <GoogleCheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span><strong>Corresponding Author:</strong> Peer-reviewed research paper on AI chatbot instructional efficacy published in UNNES Journal (Mediasi, Feb 2024).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GoogleCheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span><strong>National Essay Finalist:</strong> 5th Place in MEDISPRO Essay Competition (UNNES FK, 2025) for AI-driven mobile dermatology platform "SkinAlyzr".</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GoogleCheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span><strong>Student Governance:</strong> Secretary of Public Relations &amp; 2x Cross-University Comparative Study Event Chair (UKMP UNNES).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </m.div>

              {/* International Mobility Card (UTHM Malaysia) */}
              <m.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:col-span-4 card p-6 sm:p-7 rounded-xl bg-white border border-slate-200 hover:border-[var(--color-accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="metric-badge !text-[11px] font-semibold text-[var(--color-accent)]">
                      International Exchange
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)] font-medium">07/2026 – 09/2026</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-[var(--color-primary)]">
                      Universiti Tun Hussein Onn Malaysia
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] font-medium mt-0.5">
                      Faculty of Technical &amp; Vocational Education (UTHM)
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      Johor, Malaysia (Virtual Mobility)
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <h4 className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                      Curriculum &amp; Exchange Focus
                    </h4>
                    <p className="text-xs text-[var(--color-text)] font-light leading-relaxed">
                      Completed an intensive international academic exchange exploring Industrial Revolution 4.0 (IR 4.0) frameworks, modern educational technology integration, and cross-border digital transformation.
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-semibold">
                    <GoogleWorkspacePremium className="w-4 h-4" />
                    <span>Global Perspective &amp; IR 4.0</span>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ============================================
            PROJECTS SECTION
            ============================================ */}
        <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[var(--color-bg-alt)]">
          <div className="container-narrow">
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <AccentRule />
              <h2 className="text-section-heading text-2xl sm:text-3xl md:text-[36px]">Projects</h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light mt-2 max-w-lg">
                A selection of engineering work spanning full-stack development,
                applied machine learning, and data systems.
              </p>
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, idx) => (
                <m.div
                  key={idx}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="card p-5 sm:p-6 flex flex-col justify-between h-full group rounded-lg bg-white border border-slate-200 hover:border-[var(--color-accent)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div>
                    {/* Number badge & Category tag */}
                    <div className="flex items-center justify-between h-7 mb-2.5">
                      <span className="number-badge group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-[var(--color-accent)] group-hover:-rotate-3 transition-all duration-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {project.highlight && (
                        <span className="metric-badge !text-[11px] font-semibold hover:scale-105 transition-transform select-none">
                          {project.highlight}
                        </span>
                      )}
                    </div>

                    {/* Title with aligned min-height */}
                    <h3 className="text-base sm:text-lg font-medium text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-start leading-snug">
                      {project.title}
                    </h3>

                    {/* Description with aligned min-height */}
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed mb-3 min-h-[54px] sm:min-h-[58px]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags with clean corporate styling and interactive hover */}
                    <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100 mb-3 items-center min-h-[26px]">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="tech-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action / Link - always aligned on same baseline */}
                    <div className="h-6 flex items-center">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-blue-700 transition-colors"
                        >
                          <span>View Live Project</span>
                          <GoogleOpenInNew className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium hover:text-emerald-700 transition-colors cursor-default select-none">
                          <GoogleCheckCircleFilled className="w-3.5 h-3.5 text-emerald-600" /> Enterprise DMS (Internal)
                        </span>
                      )}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            ACHIEVEMENTS SECTION
            ============================================ */}
        <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-[var(--color-bg-alt)]">
          <div className="container-narrow">
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <AccentRule />
              <h2 className="text-section-heading text-2xl sm:text-3xl md:text-[36px]">
                Achievements &amp; Certifications
              </h2>
            </m.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {ACHIEVEMENTS.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="card group p-5 sm:p-6 md:p-7 flex gap-3.5 sm:gap-4 rounded-lg hover:-translate-y-1.5 hover:shadow-lg hover:border-[var(--color-accent)] transition-all duration-300"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[rgba(34,81,255,0.06)] text-[var(--color-accent)] shrink-0 rounded-md transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-medium text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text)] font-light mt-1">
                      {item.detail}
                    </p>
                    <p className="text-label !text-[11px] mt-2">{item.meta}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)] hover:text-blue-700 hover:underline mt-2.5 transition-colors"
                      >
                        <span>{item.linkText || 'View Details'}</span>
                        <GoogleOpenInNew className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                  {item.image && (
                    <div className="hidden sm:block shrink-0 self-start ml-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-md object-cover border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SKILLS SECTION
            ============================================ */}
        <section id="skills" className="py-12 sm:py-16 md:py-20">
          <div className="container-narrow">
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <AccentRule />
              <h2 className="text-section-heading text-2xl sm:text-3xl md:text-[36px]">Skills</h2>
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {SKILLS.map((group, gIdx) => (
                <m.div
                  key={gIdx}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-5"
                >
                  <h3 className="text-label !text-xs mb-3">{group.category}</h3>
                  {group.items.map((skill, sIdx) => (
                    <SkillBar key={sIdx} name={skill.name} level={skill.level} label={skill.label} />
                  ))}
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CONTACT SECTION
            ============================================ */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[var(--color-bg-alt)]">
          <div className="container-narrow">
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-2xl mb-8 sm:mb-10"
            >
              <AccentRule />
              <h2 className="text-section-heading text-2xl sm:text-3xl md:text-[36px] mb-3">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-light leading-relaxed">
                Open to discussions regarding full-stack engineering roles, applied AI initiatives,
                and technical leadership. Reach out directly through any channel below.
              </p>
            </m.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Direct Email Card */}
              <m.a
                href="mailto:imanyunar@gmail.com"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="card p-6 flex flex-col justify-between group hover:border-[var(--color-accent)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-[var(--color-accent)] mb-4 rounded-md transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                    <GoogleMail className="w-5 h-5" />
                  </div>
                  <span className="text-label text-[11px] block mb-1">Email</span>
                  <h3 className="text-sm sm:text-[15px] font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                    imanyunar@gmail.com
                  </h3>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] group-hover:text-blue-700 transition-colors">
                  <span>Send an Email</span>
                  <GoogleOpenInNew className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </div>
              </m.a>

              {/* LinkedIn Card */}
              <m.a
                href="https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="card p-6 flex flex-col justify-between group hover:border-[var(--color-accent)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-[var(--color-accent)] mb-4 rounded-md transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-label text-[11px] block mb-1">LinkedIn</span>
                  <h3 className="text-base font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    Iman Yunar Noviadhi
                  </h3>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] group-hover:text-blue-700 transition-colors">
                  <span>View Profile</span>
                  <GoogleOpenInNew className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </div>
              </m.a>

              {/* Direct Phone / WhatsApp Card */}
              <m.a
                href="https://wa.me/6285172247452"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="card p-6 flex flex-col justify-between group hover:border-[var(--color-accent)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-[var(--color-accent)] mb-4 rounded-md transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-label text-[11px] block mb-1">Phone / WhatsApp</span>
                  <h3 className="text-sm sm:text-[15px] font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    +62 851-7224-7452
                  </h3>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] group-hover:text-blue-700 transition-colors">
                  <span>Chat on WhatsApp</span>
                  <GoogleOpenInNew className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </div>
              </m.a>

              {/* PDF Portfolio Deck Card */}
              <m.div
                onClick={downloadPortfolioPdf}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="card p-6 flex flex-col justify-between group hover:border-[var(--color-accent)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] text-white mb-4 rounded-md transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:scale-110 group-hover:rotate-3 shadow-xs">
                    <GoogleFileDownload className="w-5 h-5" />
                  </div>
                  <span className="text-label text-[11px] block mb-1">Portfolio Deck</span>
                  <h3 className="text-base font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    Executive PDF (6 Slides)
                  </h3>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] group-hover:text-blue-700 transition-colors">
                  <span>Instant Download</span>
                  <GoogleFileDownload className="w-3 h-3 transition-transform duration-200 group-hover:translate-y-0.5" />
                </div>
              </m.div>
            </div>

            {/* Location & Eligibility Banner */}
            <m.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-6 p-4 rounded-xl border border-slate-200 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--color-text-muted)]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong>Location:</strong> Semarang, Central Java, Indonesia • Open to Remote, Hybrid &amp; On-Site roles</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://github.com/imanyunar" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors font-medium">GitHub: imanyunar</a>
                <span>•</span>
                <span className="font-medium text-slate-600">imanyunar.my.id</span>
              </div>
            </m.div>
          </div>
        </section>

        {/* ============================================
            FOOTER
            ============================================ */}
        <footer className="py-12 bg-[var(--color-primary)]">
          <div className="container-narrow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-slate-400 font-light">
                © 2026 Iman Yunar Noviadhi — Building Reliable Digital Systems
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/imanyunar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-slate-400 hover:text-white hover:scale-125 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-slate-400 hover:text-white hover:scale-125 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:imanyunar@gmail.com"
                  className="p-1 text-slate-400 hover:text-white hover:scale-125 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                  aria-label="Email"
                >
                  <GoogleMail className="w-4 h-4" />
                </a>
                <a
                  href="/Iman-Yunar-Noviadhi-Portfolio.pdf"
                  download="Iman-Yunar-Noviadhi-Portfolio.pdf"
                  onClick={downloadPortfolioPdf}
                  className="group text-sm text-slate-400 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <GoogleFileDownload className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Scroll To Top Button */}
        <ScrollToTopButton />
      </div>
    </>
  );
}

/* ============================================
   SUB-COMPONENTS (POWERED BY ANIME.JS)
   ============================================ */

function SkillBar({ name, level, label }: { name: string; level: number; label: string }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    const el = barRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, {
            width: ['0%', `${level}%`],
            duration: 850,
            ease: 'outQuart',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  const handleMouseEnter = () => {
    if (barRef.current) {
      animate(barRef.current, {
        scaleY: [1, 1.25, 1],
        duration: 350,
        ease: 'outQuad',
      });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="group/skill p-2 -mx-2 rounded-lg hover:bg-blue-50/60 transition-all duration-200 cursor-default space-y-1.5"
    >
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-[var(--color-text)] transition-colors group-hover/skill:text-[var(--color-accent)] group-hover/skill:font-semibold">
          {name}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-medium text-[var(--color-text-muted)] transition-colors">
            {label}
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100/90 text-[var(--color-accent)] opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200">
            {level}%
          </span>
        </div>
      </div>
      <div className="skill-bar-track">
        <div
          ref={barRef}
          className="skill-bar-fill group-hover/skill:shadow-[0_0_10px_rgba(34,81,255,0.45)] group-hover/skill:brightness-110"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

function CounterStat({
  target,
  suffix = '',
  duration = 1200,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const animRef = useRef({ count: 0 });

  useEffect(() => {
    const obj = animRef.current;
    animate(obj, {
      count: target,
      duration,
      ease: 'outExpo',
      onUpdate: () => {
        setVal(Math.round(obj.count));
      },
    });
  }, [target, duration]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

function AccentRule({ className = 'mb-3' }: { className?: string }) {
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ruleRef.current) return;
    const el = ruleRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, {
            width: ['0px', '48px'],
            opacity: [0, 1],
            duration: 650,
            ease: 'outQuart',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleHover = () => {
    if (!ruleRef.current) return;
    animate(ruleRef.current, {
      width: ['48px', '68px', '48px'],
      duration: 450,
      ease: 'outQuart',
    });
  };

  return (
    <div
      ref={ruleRef}
      onMouseEnter={handleHover}
      className={`accent-rule hover:shadow-[0_0_8px_rgba(34,81,255,0.5)] transition-shadow cursor-pointer ${className}`}
      style={{ width: '0px', opacity: 0 }}
    />
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (btnRef.current) {
      animate(btnRef.current, {
        translateY: [0, -6, 0],
        duration: 350,
        ease: 'outExpo',
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-white text-[var(--color-primary)] border border-slate-200 shadow-md hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <GoogleArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}

