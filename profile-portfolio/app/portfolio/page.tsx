'use client';

import { motion, Variants } from 'framer-motion';
import { 
  FileText, 
  TrendingUp, 
  Activity, 
  ArrowLeft, 
  ExternalLink,
  Brain,
  Cpu,
  Database,
  Terminal,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "AI ChatBots in Education",
    description: "Research on the effectiveness of ChatBots for Operating Systems education at UNNES.",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-amber-100 text-amber-600",
    techs: ["Artificial Intelligence", "Education", "Research"],
    details: "Experimental study proving positive impacts on student motivation and interactivity in Industry 4.0 era.",
    link: "http://jurnalilmiah.org/journal/index.php/mediasi/article/view/753"
  },
  {
    title: "Crypto Market Analysis",
    description: "Machine learning application to predict cryptocurrency prices and market trends.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-indigo-100 text-indigo-600",
    techs: ["Python", "LSTM", "Streamlit"],
    details: "Interactive dashboard with time-series forecasting models for real-time market sentiment analysis.",
    link: "https://crypto-predict-101.streamlit.app/"
  },
  {
    title: "Cancer Diagnosis AI",
    description: "Deep learning system for early cancer identification through medical image analysis.",
    icon: <Activity className="w-8 h-8" />,
    color: "bg-rose-100 text-rose-600",
    techs: ["PyTorch", "Computer Vision", "HealthTech"],
    details: "High-accuracy neural network achieving 95%+ validation accuracy in clinical image processing.",
    link: "https://deteksikanker.streamlit.app/"
  }
];

const container: Variants = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const item: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 mesh-gradient border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-700 font-bold text-sm uppercase tracking-widest"
          >
            Project Archives
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
          >
            Engineering <span className="text-gradient">Portfolio.</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            A curated selection of my works in Artificial Intelligence, Data Engineering, and Research.
          </motion.p>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <SkillCard icon={<Brain />} title="Machine Learning" skills={["Scikit-learn", "XGBoost", "TensorFlow"]} />
            <SkillCard icon={<Cpu />} title="Computer Vision" skills={["CNN", "RNN", "Transformers"]} />
            <SkillCard icon={<Database />} title="Data Engineering" skills={["Airflow", "PostgreSQL", "Docker"]} />
            <SkillCard icon={<Terminal />} title="Web Frameworks" skills={["Next.js", "React", "TypeScript"]} />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">📁</span>
              Featured Works
            </h2>
          </div>

          <motion.div 
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                className="elegant-card p-10 rounded-[40px] flex flex-col h-full bg-white group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${project.color} group-hover:scale-110 transition-transform duration-500`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 mb-6 font-medium leading-relaxed">{project.description}</p>
                <p className="text-slate-400 text-sm mb-8 flex-grow">{project.details}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 border border-slate-100 rounded-lg text-[10px] font-bold uppercase tracking-tight">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link 
                  href={project.link} 
                  target="_blank" 
                  className="inline-flex items-center gap-2 font-black text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  View Case Study <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 flex flex-col items-center gap-6">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <p className="text-slate-400 font-bold italic">© 2025 Iman Yunar Noviadhi • Innovations in Intelligence</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string, skills: string[] }) {
  return (
    <motion.div 
      variants={item}
      whileHover={{ y: -5 }}
      className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm flex flex-col items-center text-center space-y-4 hover:border-indigo-100 transition-colors"
    >
      <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
        {icon}
      </div>
      <h3 className="text-lg font-black text-slate-900">{title}</h3>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {skills.map((s, i) => (
          <span key={i} className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{s}</span>
        ))}
      </div>
    </motion.div>
  );
}
