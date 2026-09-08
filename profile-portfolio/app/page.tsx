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
import { Github, Linkedin } from 'lucide-react';
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
    role: 'Web Developer Intern',
    org: 'PT Teknologi Aplikasi Sejahtera',
    period: 'Feb 2026 – Jul 2026',
    bullets: [
      'Built a Document Management System using Laravel, Vue.js, TypeScript, and PostgreSQL',
      'Implemented REST API integration and role-based access control across the platform',
      'Conducted Black Box Testing across 77 scenarios with 100% pass rate',
    ],
    metric: '100% Pass Rate · 77 Test Scenarios',
    rating: 'Performance: EXCELLENT',
    filled: true,
  },
  {
    role: 'Secretary, Public Relations Dept',
    org: 'UKMP, Universitas Negeri Semarang',
    period: 'Feb 2025 – Nov 2025',
    bullets: [
      'Event Chairperson for 2 cross-university comparative study visits (UNESA & Universitas Brawijaya)',
      'Coordinated logistics, delegation communications, and post-event reporting',
    ],
    filled: false,
  },
  {
    role: 'Inbound Virtual Student Mobility',
    org: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
    period: 'Jul 2026 – Sep 2026',
    bullets: [
      'Participated in international academic exchange program in computer science',
    ],
    filled: false,
  },
  {
    role: 'Staff, Internal & Organizational Supervision',
    org: 'ISAFIS',
    period: 'Apr 2024 – Dec 2024',
    bullets: [
      'Built an online voting system for a presidential election',
      'Contributed to organizational governance and internal audit processes',
    ],
    filled: false,
  },
  {
    role: 'Corresponding Author',
    org: 'Published Scientific Article — UNNES Journal',
    period: 'Aug 2023 – Feb 2024',
    bullets: [
      'Published research on AI chatbot effectiveness in Operating Systems education',
      'Experimental study demonstrating measurable improvements in student engagement',
    ],
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
    icon: <GoogleMenuBook className="w-5 h-5" />,
    title: 'Published Scientific Article',
    detail: 'Corresponding Author — AI Chatbots in Operating Systems Education',
    meta: 'UNNES Journal · Feb 2024',
    link: 'http://jurnalilmiah.org/journal/index.php/mediasi/article/view/753',
  },
  {
    icon: <GoogleWorkspacePremium className="w-5 h-5" />,
    title: 'Top 10 Finalist',
    detail: 'Activation 7.0 Essay Competition 2024',
    meta: 'National Competition',
  },
  {
    icon: <GoogleWorkspacePremium className="w-5 h-5" />,
    title: '5th Place',
    detail: 'MEDISPRO Essay Competition 2025',
    meta: 'National Competition',
  },
  {
    icon: <GoogleMilitaryTech className="w-5 h-5" />,
    title: 'DevOps Fundamentals Certificate',
    detail: 'Learning the Fundamentals of DevOps',
    meta: 'Dicoding Indonesia × AWS',
  },
];

const SKILLS: { category: string; items: { name: string; level: number; label: string }[] }[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js', level: 90, label: 'Advanced' },
      { name: 'Vue.js', level: 90, label: 'Advanced' },
      { name: 'TypeScript', level: 90, label: 'Advanced' },
      { name: 'JavaScript', level: 80, label: 'Intermediate' },
      { name: 'TailwindCSS', level: 85, label: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', level: 90, label: 'Advanced' },
      { name: 'PHP', level: 90, label: 'Advanced' },
      { name: 'REST API', level: 85, label: 'Advanced' },
      { name: 'PostgreSQL', level: 80, label: 'Advanced' },
    ],
  },
  {
    category: 'Data / AI',
    items: [
      { name: 'Python', level: 90, label: 'Advanced' },
      { name: 'TensorFlow', level: 80, label: 'Advanced' },
      { name: 'PyTorch', level: 78, label: 'Advanced' },
      { name: 'Data Analytics', level: 88, label: 'Advanced' },
    ],
  },
  {
    category: 'Systems & Tools',
    items: [
      { name: 'Docker', level: 70, label: 'Intermediate' },
      { name: 'C++', level: 85, label: 'Advanced' },
      { name: 'Git', level: 85, label: 'Advanced' },
    ],
  },
  {
    category: 'Professional',
    items: [
      { name: 'Teamwork & Collaboration', level: 95, label: 'Expert' },
      { name: 'Communication', level: 90, label: 'Advanced' },
      { name: 'Leadership', level: 88, label: 'Advanced' },
      { name: 'Event Management', level: 85, label: 'Advanced' },
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
                {/* Status Badge */}
                <m.div variants={fadeIn}>
                  <span className="group inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-label !text-xs hover:border-[var(--color-accent)] hover:bg-blue-50/50 hover:shadow-xs hover:scale-[1.02] transition-all duration-300 cursor-default select-none">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0 transition-transform duration-300 group-hover:scale-125" />
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
                  <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] font-light leading-relaxed max-w-xl">
                    Computer Science undergraduate at Universitas Negeri Semarang specializing in
                    full-stack development and applied AI, with a track record of delivering
                    production-ready systems and leading cross-university teams.
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
                              <CounterStat key={`stat-pass-${statKey}`} target={100} suffix="%" /> Pass Rate
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-[var(--color-text-muted)] font-medium">
                            <CounterStat key={`stat-scen-${statKey}`} target={77} /> Scenarios · PT TAS Intern
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
            PROJECTS SECTION
            ============================================ */}
        <section id="projects" className="py-12 sm:py-16 md:py-20">
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
                  <div>
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
                        className="group/link inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] hover:text-blue-700 hover:underline mt-2 transition-colors"
                      >
                        <span>Read Paper</span>
                        <GoogleOpenInNew className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
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

              {/* GitHub Card */}
              <m.a
                href="https://github.com/imanyunar"
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
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-label text-[11px] block mb-1">GitHub</span>
                  <h3 className="text-base font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    github.com/imanyunar
                  </h3>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] group-hover:text-blue-700 transition-colors">
                  <span>View Code</span>
                  <GoogleOpenInNew className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </div>
              </m.a>

              {/* PDF Portfolio Deck Card */}
              <m.div
                onClick={handleDownloadCV}
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
                  <span>Download Deck</span>
                  <GoogleFileDownload className="w-3 h-3 transition-transform duration-200 group-hover:translate-y-0.5" />
                </div>
              </m.div>
            </div>
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

