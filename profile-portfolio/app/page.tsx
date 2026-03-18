'use client';

export default function Home() {
  return (
    <div className="w-full min-h-screen mesh-gradient">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10 text-center lg:text-left" data-animate>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Available for projects</p>
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                  Iman Yunar <br />
                  <span className="text-gradient">Noviadhi</span>
                </h1>
                
                <p className="text-xl md:text-2xl font-medium text-zinc-400 max-w-2xl mx-auto lg:mx-0">
                  AI Engineer & ML Specialist building the next generation of 
                  <span className="text-white"> intelligent solutions</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <a href="#projects" className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 group">
                  Explore Work
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="/socials" className="px-10 py-4 glass hover:bg-white/5 text-white font-black rounded-2xl transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3">
                  Let's Talk
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
                <SocialIcon href="#" icon="fab fa-github" color="hover:text-white" />
                <SocialIcon href="#" icon="fab fa-linkedin" color="hover:text-blue-400" />
                <SocialIcon href="#" icon="fas fa-envelope" color="hover:text-emerald-400" />
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative flex justify-center lg:justify-end" data-animate>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 blur-2xl rounded-full animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full glass rounded-[40px] p-2 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src="/profile-removebg-preview.png" 
                    alt="Iman Yunar Noviadhi" 
                    className="w-full h-full object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-3xl shadow-2xl animate-float">
                  <p className="text-2xl font-bold text-white">4+</p>
                  <p className="text-xs font-medium text-zinc-400">Major Projects</p>
                </div>
                <div className="absolute top-10 -right-6 glass px-6 py-4 rounded-3xl shadow-2xl animate-float" style={{animationDelay: '1s'}}>
                  <p className="text-emerald-400 text-2xl font-bold italic">AI/ML</p>
                  <p className="text-xs font-medium text-zinc-400">Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 relative overflow-hidden" id="about">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2" data-animate>
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                  About <br />
                  <span className="text-gradient">My Journey</span>
                </h2>
                <div className="w-20 h-2 bg-emerald-500 rounded-full mb-12"></div>
                <div className="space-y-4">
                  <div className="glass p-6 rounded-3xl border-l-4 border-l-emerald-500">
                    <p className="text-zinc-300 font-medium">Informatics Engineering student at UNNES, specialized in AI and Data Engineering.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-8" data-animate>
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                I'm passionate about harnessing <span className="text-white font-bold underline decoration-emerald-500 underline-offset-4">Artificial Intelligence</span> to solve real-world problems. 
                My focus lies in transforming complex data into actionable insights and building scalable intelligent systems.
              </p>
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                Whether it's deep learning for medical imaging or machine learning for financial trends, I strive to develop responsible, innovative solutions that make a real difference.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-6 rounded-3xl">
                  <h4 className="text-white font-bold mb-1">Education</h4>
                  <p className="text-zinc-400 text-sm">UNNES Semarang</p>
                </div>
                <div className="glass-card p-6 rounded-3xl">
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-zinc-400 text-sm">Semarang, ID</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section className="py-32 relative" id="projects">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20" data-animate>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6"> Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-medium">Selected works in AI, Machine Learning, and Data Engineering.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto" data-animate>
            <ProjectCard 
              icon="📈"
              title="Crypto Price Prediction"
              description="A sophisticated ML application using LSTM networks to forecast cryptocurrency market trends with real-time data integration."
              tags={["LSTM", "Prophet", "Streamlit"]}
              link="https://crypto-predict-101.streamlit.app/"
              delay="0.1s"
            />
            <ProjectCard 
              icon="🩺"
              title="Cancer Detection AI"
              description="Deep learning system for early cancer identification through medical image analysis, achieving 95%+ accuracy in validation."
              tags={["Computer Vision", "PyTorch", "Healthcare"]}
              link="https://deteksikanker.streamlit.app/"
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20" data-animate>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Technical <span className="text-gradient">Stack</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-medium">Tools and technologies I use to build intelligent systems.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-animate>
            <SkillCard 
              icon="🤖"
              title="Machine Learning" 
              items={["Scikit-learn", "XGBoost", "TensorFlow", "CatBoost"]}
              color="emerald"
            />
            <SkillCard 
              icon="🧠"
              title="Deep Learning" 
              items={["PyTorch", "CNN/RNN", "Transformers", "OpenCV"]}
              color="cyan"
            />
            <SkillCard 
              icon="⚙️"
              title="Data Engineering" 
              items={["Airflow", "Docker", "PostgreSQL", "MongoDB"]}
              color="violet"
            />
            <SkillCard 
              icon="💻"
              title="Fullstack AI" 
              items={["Next.js", "FastAPI", "Python", "TypeScript"]}
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden border-glow" data-animate>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Let's innovate <br /> <span className="text-gradient">together.</span>
              </h2>
              <p className="text-zinc-400 text-xl font-medium max-w-2xl mx-auto">
                Currently looking for new opportunities and interesting projects to collaborate on.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="mailto:contact@example.com" className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-emerald-400 transition-all hover:-translate-y-1 active:scale-95 shadow-2xl">
                  Send an Email
                </a>
                <a href="/socials" className="px-10 py-5 glass text-white font-black rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-1 active:scale-95">
                  View Socials
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="container mx-auto px-4">
          <p className="text-zinc-500 font-medium">© 2025 Iman Yunar Noviadhi. Made with passion.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialIcon({ href, icon, color }: { href: string; icon: string; color: string }) {
  return (
    <a 
      href={href} 
      className={`text-2xl text-zinc-500 transition-all duration-300 ${color} hover:scale-125`}
    >
      <i className={icon}></i>
    </a>
  );
}

function ProjectCard({ icon, title, description, tags, link, delay }: { 
  icon: string;
  title: string; 
  description: string; 
  tags: string[];
  link: string;
  delay: string;
}) {
  return (
    <div 
      className="glass-card flex flex-col h-full rounded-[32px] overflow-hidden group"
      style={{ transitionDelay: delay }}
    >
      <div className="h-48 bg-white/5 flex items-center justify-center relative overflow-hidden">
        <div className="text-7xl group-hover:scale-110 transition-transform duration-500 z-10">{icon}</div>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent group-hover:opacity-100 opacity-0 transition-opacity"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{title}</h3>
        <p className="text-zinc-400 mb-8 font-medium leading-relaxed flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-bold rounded-lg border border-white/5 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-white font-black hover:text-emerald-400 transition-colors"
        >
          View Case Study <i className="fas fa-chevron-right text-xs"></i>
        </a>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, items, color }: { 
  icon: string;
  title: string; 
  items: string[]; 
  color: string;
}) {
  const colors: {[key: string]: string} = {
    emerald: "bg-emerald-500",
    cyan: "bg-cyan-500",
    violet: "bg-violet-500",
    amber: "bg-amber-500"
  };

  return (
    <div className="glass-card p-8 rounded-[32px] hover:border-white/20">
      <div className="flex items-center gap-4 mb-8">
        <div className="text-4xl">{icon}</div>
        <div className={`h-1 w-12 rounded-full ${colors[color]}`}></div>
      </div>
      <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-zinc-400 font-medium group">
            <span className={`h-1.5 w-1.5 rounded-full ${colors[color]} group-hover:scale-150 transition-transform`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
