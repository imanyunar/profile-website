'use client';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#09090b] pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8" data-animate data-animate-variant="fade-right" style={{ transitionDelay: "0.1s" }}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full border border-blue-200/20 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-blue-300">Welcome to My Portfolio</p>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                  Iman Yunar<br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Noviadhi</span>
                </h1>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white">
                  AI Engineer and ML Specialist
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Building intelligent solutions with Machine Learning, Deep Learning, and Data Engineering. Transforming complex challenges into elegant, scalable systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#projects" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <i className="fas fa-briefcase"></i> View Projects
                </a>
                <a href="/socials" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg shadow-lg border border-zinc-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <i className="fas fa-share-alt"></i> Connect
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="fas fa-envelope text-lg"></i>
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center mt-12 md:mt-0" data-animate data-animate-variant="fade-left" style={{ transitionDelay: "0.3s" }}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Gradient Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-500 to-emerald-600 rounded-3xl p-1 animate-spin" style={{animationDuration: "8s"}}>
                  <div className="w-full h-full bg-[#09090b] rounded-3xl"></div>
                </div>
                {/* Profile Image */}
                <div className="absolute inset-0 m-1 bg-zinc-900 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-zinc-900 flex items-center justify-center overflow-hidden">
                    {/* Ganti dengan path foto Anda di folder public */}
                    <img src="/profile-removebg-preview.png" alt="Profile" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                I'm an <span className="font-bold text-blue-400">Informatics Engineering</span> student at <span className="font-bold text-purple-400">Universitas Negeri Semarang</span>, passionate about harnessing AI to solve real-world problems and create impactful solutions.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                With expertise in <span className="font-bold text-blue-400">Machine Learning</span>, <span className="font-bold text-purple-400">Deep Learning</span>, and <span className="font-bold text-pink-400">Data Engineering</span>, I transform complex data into actionable insights and build scalable intelligent systems.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                I'm continuously learning and exploring cutting-edge technologies to develop responsible, innovative solutions that make a real difference.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              <div className="p-4 bg-blue-600 rounded-lg border border-blue-700 hover:-translate-y-1 transition-transform">
                <p className="text-sm text-white font-bold">University</p>
                <p className="text-lg font-bold text-white">UNNES</p>
              </div>
              <div className="p-4 bg-purple-600 rounded-lg border border-purple-700 hover:-translate-y-1 transition-transform">
                <p className="text-sm text-white font-bold">Major</p>
                <p className="text-lg font-bold text-white">Informatics</p>
              </div>
              <div className="p-4 bg-pink-600 rounded-lg border border-pink-700 hover:-translate-y-1 transition-transform">
                <p className="text-sm text-white font-bold">Focus</p>
                <p className="text-lg font-bold text-white">AI and ML</p>
              </div>
              <div className="p-4 bg-indigo-600 rounded-lg border border-indigo-700 hover:-translate-y-1 transition-transform">
                <p className="text-sm text-white font-bold">Location</p>
                <p className="text-lg font-bold text-white">Semarang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-[#09090b] border-t border-zinc-900" id="projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-16" data-animate>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto" data-animate style={{ transitionDelay: "0.2s" }}>
            <ProjectCard 
              icon="📈"
              title="Crypto Price Prediction"
              description="Machine learning application to predict cryptocurrency prices and market trends"
              gradient="from-emerald-500 to-emerald-700"
              tags={["Python", "Streamlit", "Machine Learning"]}
              color="emerald"
              link="https://crypto-predict-101.streamlit.app/"
            />
            <ProjectCard 
              icon="🩺"
              title="Cancer Detection"
              description="AI-powered web application for early cancer detection using medical imaging"
              gradient="from-cyan-500 to-cyan-700"
              tags={["Deep Learning", "Streamlit", "Healthcare"]}
              color="cyan"
              link="https://deteksikanker.streamlit.app/"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-16" data-animate>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Skills and Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-animate style={{ transitionDelay: "0.2s" }}>
            <SkillCard 
              icon="🤖"
              title="Machine Learning" 
              items={["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch"]}
              gradient="from-emerald-500 to-emerald-600"
              bgGradient="from-zinc-900 to-zinc-800"
              borderColor="border-emerald-500/30"
              textColor="text-white"
            />
            <SkillCard 
              icon="🧠"
              title="Deep Learning" 
              items={["CNN", "RNN", "BERT", "Transformers"]}
              gradient="from-cyan-500 to-cyan-600"
              bgGradient="from-zinc-900 to-zinc-800"
              borderColor="border-cyan-500/30"
              textColor="text-white"
            />
            <SkillCard 
              icon="⚙️"
              title="Data Engineering" 
              items={["Apache Airflow", "PostgreSQL", "MongoDB", "Docker"]}
              gradient="from-violet-500 to-violet-600"
              bgGradient="from-zinc-900 to-zinc-800"
              borderColor="border-violet-500/30"
              textColor="text-white"
            />
            <SkillCard 
              icon="💻"
              title="Web Development" 
              items={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
              gradient="from-amber-500 to-amber-600"
              bgGradient="from-zinc-900 to-zinc-800"
              borderColor="border-amber-500/30"
              textColor="text-white"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center space-y-8" data-animate>
          <h2 className="text-4xl font-bold text-white">
            Ready to explore my work?
          </h2>
          <p className="text-lg text-zinc-300">
            Check out my portfolio projects and get in touch with me on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <i className="fas fa-folder-open mr-2"></i>View Full Portfolio
            </a>
            <a href="/socials" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <i className="fas fa-heart mr-2"></i>Connect With Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#09090b] text-center border-t border-zinc-900">
        <p className="text-zinc-400">Copyright 2025 Iman Yunar Noviadhi. All rights reserved.</p>
        <p className="text-zinc-600 text-sm mt-2">Built with love using Next.js 15, TypeScript and Tailwind CSS</p>
      </footer>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="text-center text-white transform hover:scale-110 transition-transform">
      <p className="text-4xl mb-2">{icon}</p>
      <p className="text-4xl font-bold">{value}</p>
      <p className="text-blue-100 text-sm">{label}</p>
    </div>
  );
}

function ProjectCard({ icon, title, description, gradient, tags, color, link = "#" }: { 
  icon: string;
  title: string; 
  description: string; 
  gradient: string;
  tags: string[];
  color: string;
  link?: string;
}) {
  const colorMap: {[key: string]: string} = {
    emerald: "border-emerald-500/30 hover:border-emerald-500 text-emerald-400 bg-emerald-500/10",
    cyan: "border-cyan-500/30 hover:border-cyan-500 text-cyan-400 bg-cyan-500/10",
    blue: "border-blue-700",
    purple: "border-purple-700",
    pink: "border-pink-700",
  };

  return (
    <div className={`bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-zinc-800 hover:border-zinc-600 overflow-hidden flex flex-col h-full`}>
      <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <div className="text-white text-6xl drop-shadow-md">{icon}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className={`inline-block px-3 py-1 ${colorMap[color]} text-xs font-semibold rounded-full border`}>
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target={link !== "#" ? "_blank" : "_self"} rel={link !== "#" ? "noopener noreferrer" : ""} className={`text-${color}-400 hover:text-${color}-300 font-bold inline-flex items-center`}>
          View Details
        </a>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, items, gradient, bgGradient, borderColor, textColor }: { 
  icon: string;
  title: string; 
  items: string[]; 
  gradient: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} rounded-xl shadow-lg border ${borderColor} p-6 hover:border-zinc-500 transition-colors`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{icon}</div>
        <div className={`inline-block w-10 h-10 bg-gradient-to-br ${gradient} rounded-lg`}></div>
      </div>
      <h3 className={`text-xl font-bold ${textColor} mb-4`}>{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className={`${textColor} text-sm flex items-center`}>
            <span className={`inline-block w-2 h-2 bg-gradient-to-r ${gradient} rounded-full mr-3`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
