'use client';

import { m } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Cpu,
  Database,
  Terminal,
  Sparkles,
  ChevronRight,
  Code2,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden mesh-gradient">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[100px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <m.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-10"
            >
              <m.div variants={fadeInUp} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                  </span>
                  <p className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Open for Collaboration</p>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight">
                  Trading <br />
                  <span className="text-gradient">Intelligence.</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed">
                  I'm <span className="text-slate-900 font-bold">Iman Yunar</span>, a <span className="text-indigo-600 font-bold">Quantitative Trader</span> & AI Engineer building high-frequency systems and predictive models that turn data into alpha.
                </p>
              </m.div>

              <m.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/portfolio" className="px-10 py-4 bg-indigo-600 hover:bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1 flex items-center gap-3 group">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/socials" className="px-10 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all hover:-translate-y-1 flex items-center gap-3">
                  Let's Connect
                </Link>
              </m.div>
            </m.div>

            {/* Right Content - Visual */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-square">
                {/* Decorative Shapes */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-amber-100 rounded-[60px] transform rotate-6 border border-white/50 shadow-2xl"></div>

                <div className="absolute inset-0 glass rounded-[60px] p-6 shadow-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profile-removebg-preview.png"
                    alt="Iman Yunar Noviadhi"
                    width={500}
                    height={500}
                    priority
                    className="max-w-full max-h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Floating Stats */}
                <m.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-16 -left-12 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden xl:block"
                >
                  <p className="text-3xl font-black text-emerald-500">95%+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Backtest Accuracy</p>
                </m.div>

                <m.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-12 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 hidden xl:flex"
                >
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">Quant Specialist</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Algorithmic Trading</p>
                  </div>
                </m.div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-32 bg-slate-50/50" id="projects">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
            <m.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
                Selected <span className="text-gradient">Projects.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Deep dive into some of my most impactful machine learning and software engineering works.
              </p>
              <div className="pt-4 flex justify-center">
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm">
                  Explore All Projects <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </m.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard
              image="🤖"
              title="Crypto Market Forecast"
              category="Deep Learning"
              description="LSTM-powered predictive engine for institutional-grade cryptocurrency analysis and trend forecasting."
              tags={["TensorFlow", "FastAPI", "Pandas"]}
              link="https://crypto-predict-101.streamlit.app/"
            />
            <ProjectCard
              image="🧬"
              title="Cancer Detection"
              category="Computer Vision"
              description="A medical imaging platform utilizing CNNs for high-precision cancer detection and clinical decision support."
              tags={["PyTorch", "OpenCV", "HealthTech"]}
              link="https://deteksikanker.streamlit.app/"
            />
            <ProjectCard
              image="💼"
              title="Equity Tracker"
              category="Fintech Dev"
              description="Fullstack personal finance dashboard and multi-asset portfolio manager equipped with AI capabilities."
              tags={["Laravel", "Blade", "AI"]}
              link="https://equity-tracker.alwaysdata.net/"
            />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-32 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <m.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
            >
              Technical <span className="text-gradient">Expertise.</span>
            </m.h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Specializing in the full lifecycle of AI products, from rigorous data engineering to deploying scalable neural networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <m.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SkillSet icon={<TrendingUp />} title="Quantitative Trading" skills={["Algorithmic Trading", "Backtesting", "Risk Management", "HFT"]} />
              <SkillSet icon={<Brain />} title="Machine Learning" skills={["Predictive Analytics", "Deep Learning", "Reinforcement Learning"]} />
              <SkillSet icon={<Code2 />} title="Fullstack Dev" skills={["Vue.js", "Next.js", "TypeScript", "TailwindCSS", "REST API"]} />
              <SkillSet icon={<Database />} title="Data Systems" skills={["Data Pipelines", "Real-time Processing", "PostgreSQL", "Docker"]} />
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SkillIcon label="Python" />
                <SkillIcon label="Vue.js" />
                <SkillIcon label="TypeScript" />
                <SkillIcon label="PyTorch" />
                <SkillIcon label="TensorFlow" />
                <SkillIcon label="Next.js" />
                <SkillIcon label="FastAPI" />
                <SkillIcon label="Docker" />
                <SkillIcon label="SQL" />
                <SkillIcon label="REST API" />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-900 rounded-[50px] p-12 md:p-20 overflow-hidden text-center shadow-3xl"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.1" />
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                Ready to build the <br /> <span className="text-amber-400">Future?</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Whether you have a groundbreaking idea or a complex technical challenge, I'm ready to help you bring it to life.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href="mailto:imanyunar@gmail.com" className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-amber-400 transition-all hover:-translate-y-1 shadow-2xl">
                  Start a Project
                </Link>
                <Link href="/socials" className="px-12 py-5 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-700 transition-all hover:-translate-y-1">
                  Social Links
                </Link>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center space-y-6">
          <p className="text-slate-500 font-bold">© 2025 Iman Yunar Noviadhi • Engineering with Purpose</p>
          <div className="flex justify-center gap-8">
            <Link href="https://github.com/imanyunar" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-colors font-bold text-sm">GitHub</Link>
            <Link href="https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-colors font-bold text-sm">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


function ProjectCard({ image, title, category, description, tags, link }: {
  image: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="elegant-card rounded-[40px] overflow-hidden group flex flex-col h-full"
    >
      <div className="h-64 bg-slate-100 flex items-center justify-center relative overflow-hidden">
        <div className="text-8xl group-hover:scale-110 transition-all duration-700 filter group-hover:drop-shadow-2xl">{image}</div>
        <div className="absolute top-6 right-6">
          <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 border border-slate-200">
            {category}
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col flex-grow bg-white">
        <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-slate-500 mb-8 font-medium leading-relaxed flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-black rounded-lg border border-slate-100 uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-900 font-black hover:text-indigo-600 transition-colors"
        >
          Explore Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </m.div>
  );
}

function SkillSet({ icon, title, skills }: { icon: React.ReactNode; title: string, skills: string[] }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 font-medium">{skills.join(' • ')}</p>
      </div>
    </div>
  );
}

function SkillIcon({ label }: { label: string }) {
  return (
    <m.div
      whileHover={{ y: -5, borderColor: '#4f46e5' }}
      className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center font-bold text-slate-600 hover:text-indigo-600 transition-all"
    >
      <div className="text-xs uppercase tracking-widest">{label}</div>
    </m.div>
  );
}
