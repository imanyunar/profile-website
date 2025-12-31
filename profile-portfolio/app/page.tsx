'use client';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8" data-animate style={{opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease"}}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
                  <p className="text-sm font-semibold text-blue-700">Welcome to My Portfolio</p>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                  Iman Yunar<br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Noviadhi</span>
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
                <a href="/portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <i className="fas fa-briefcase"></i> View Portfolio
                </a>
                <a href="/socials" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
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
            <div className="flex justify-center" data-animate style={{opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease", transitionDelay: "0.2s"}}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Gradient Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1 animate-spin" style={{animationDuration: "8s"}}>
                  <div className="w-full h-full bg-slate-950 rounded-3xl"></div>
                </div>
                {/* Profile Image */}
                <div className="absolute inset-0 m-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center overflow-hidden">
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
      <section className="py-20 bg-slate-900" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* STATS */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon="📊" value="15+" label="Projects" />
            <StatCard icon="📅" value="3+" label="Years" />
            <StatCard icon="⚙️" value="25+" label="Tech Stack" />
            <StatCard icon="👥" value="5+" label="Team" />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-slate-800" id="projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              icon="🧠"
              title="Image Classification CNN"
              description="CNN model with 95 percent accuracy for multi-class image classification"
              gradient="from-blue-500 to-blue-600"
              tags={["Python", "TensorFlow", "CNN"]}
              color="blue"
            />
            <ProjectCard 
              icon="💬"
              title="Sentiment Analysis NLP"
              description="Real-time sentiment analysis using BERT for social media detection"
              gradient="from-purple-500 to-purple-600"
              tags={["NLP", "BERT", "FastAPI"]}
              color="purple"
            />
            <ProjectCard 
              icon="⚙️"
              title="Data Pipeline ETL"
              description="Automated ETL pipeline processing 50TB daily data warehouse"
              gradient="from-pink-500 to-pink-600"
              tags={["Airflow", "PostgreSQL", "Docker"]}
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Skills and Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard 
              icon="🤖"
              title="Machine Learning" 
              items={["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch"]}
              gradient="from-blue-500 to-blue-600"
              bgGradient="from-slate-800 to-slate-700"
              borderColor="border-blue-600"
              textColor="text-white"
            />
            <SkillCard 
              icon="🧠"
              title="Deep Learning" 
              items={["CNN", "RNN", "BERT", "Transformers"]}
              gradient="from-purple-500 to-purple-600"
              bgGradient="from-slate-800 to-slate-700"
              borderColor="border-purple-600"
              textColor="text-white"
            />
            <SkillCard 
              icon="⚙️"
              title="Data Engineering" 
              items={["Apache Airflow", "PostgreSQL", "MongoDB", "Docker"]}
              gradient="from-pink-500 to-pink-600"
              bgGradient="from-slate-800 to-slate-700"
              borderColor="border-pink-600"
              textColor="text-white"
            />
            <SkillCard 
              icon="💻"
              title="Web Development" 
              items={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
              gradient="from-green-500 to-green-600"
              bgGradient="from-slate-800 to-slate-700"
              borderColor="border-green-600"
              textColor="text-white"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Ready to explore my work?
          </h2>
          <p className="text-lg text-gray-200">
            Check out my portfolio projects and get in touch with me on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
              <i className="fas fa-folder-open mr-2"></i>View Full Portfolio
            </a>
            <a href="/socials" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2">
              <i className="fas fa-heart mr-2"></i>Connect With Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-900 text-center border-t border-slate-800">
        <p className="text-gray-300">Copyright 2025 Iman Yunar Noviadhi. All rights reserved.</p>
        <p className="text-gray-500 text-sm">Built with love using Next.js 15 and TypeScript and Tailwind CSS</p>
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

function ProjectCard({ icon, title, description, gradient, tags, color }: { 
  icon: string;
  title: string; 
  description: string; 
  gradient: string;
  tags: string[];
  color: string;
}) {
  const colorMap: {[key: string]: string} = {
    blue: "border-blue-700",
    purple: "border-purple-700",
    pink: "border-pink-700",
  };

  return (
    <div className={`bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 border ${colorMap[color]} overflow-hidden`}>
      <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <div className="text-white text-6xl">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className={`inline-block px-3 py-1 bg-${color}-900/50 text-${color}-300 text-xs font-semibold rounded-full border border-${color}-700`}>
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className={`text-${color}-400 hover:text-${color}-300 font-bold inline-flex items-center`}>
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
    <div className={`bg-gradient-to-br ${bgGradient} rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2 border ${borderColor} p-6`}>
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
