'use client';

import { motion, Variants } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowLeft,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const socials = [
  {
    name: "GitHub",
    icon: <Github className="w-8 h-8" />,
    url: "https://github.com/imanyunar",
    description: "Explore my source code and contributions.",
    color: "bg-slate-50 text-slate-900 border-slate-200"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-8 h-8" />,
    url: "https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/",
    description: "Professional network and career updates.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  },
  {
    name: "Email",
    icon: <Mail className="w-8 h-8" />,
    url: "mailto:imanyunar@gmail.com",
    description: "Send a direct inquiry for collaboration.",
    color: "bg-amber-50 text-amber-600 border-amber-100"
  },
];

const container: Variants = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const item: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Socials() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 mesh-gradient border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-700 font-bold text-sm uppercase tracking-widest"
          >
            Communication Hub
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
          >
            Bridge to <span className="text-gradient">Alpha.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Open for algorithmic research, quantitative partnerships, and high-impact engineering collaborations.
          </motion.p>
        </div>
      </section>

      {/* Social Cards Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                className={`elegant-card p-10 rounded-[40px] flex flex-col items-center text-center space-y-6 group hover:border-indigo-500/20 ${social.color}`}
              >
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500 border border-slate-100 group-hover:border-indigo-100">
                  {social.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{social.name}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{social.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Profile <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-slate-900 leading-tight">
                  Why reach <br /> <span className="text-indigo-600">out to me?</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  I specialize in problem-solving through AI and data science. If you have a challenge that needs an intelligent solution, let's talk.
                </p>
              </div>

              <div className="space-y-6">
                <ContactFeature
                  icon={<MessageSquare className="text-indigo-600" />}
                  title="Collaborative Spirit"
                  text="I believe the best results come from diverse perspectives working together."
                />
                <ContactFeature
                  icon={<Sparkles className="text-amber-600" />}
                  title="Fast Responses"
                  text="I aim to respond to all professional inquiries within 24 hours."
                />
              </div>
            </div>

            {/* Quick Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-14 rounded-[50px] shadow-2xl shadow-slate-200/50 border border-slate-100"
              >
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-200 transition-all font-medium text-slate-900" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-200 transition-all font-medium text-slate-900" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea rows={5} placeholder="How can I help you?" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-200 transition-all font-medium text-slate-900 resize-none"></textarea>
                  </div>
                  <button className="w-full py-5 bg-indigo-600 hover:bg-slate-900 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white flex flex-col items-center gap-6">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <p className="text-slate-400 font-bold italic">© 2025 Iman Yunar Noviadhi • Let's build something amazing.</p>
      </footer>
    </div>
  );
}

function ContactFeature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
