export default function Portfolio() {
  const projects = [
      {
        title: "Penerapan AI ChatBots dalam Pendidikan",
        description: "Penelitian efektivitas penggunaan ChatBots untuk membantu pemahaman mahasiswa pada mata kuliah Sistem Operasi di Universitas Negeri Semarang.",
        icon: "📝",
        gradient: "from-amber-500 to-amber-700",
        techs: ["Artificial Intelligence", "ChatBots", "Education", "Research"],
        details: "Eksperimen, survei kualitatif, dan studi kasus yang membuktikan dampak positif ChatBots dalam meningkatkan motivasi belajar dan interaktivitas mahasiswa Teknik Informatika di era Industri 4.0 & Society 5.0.",
        link: "http://jurnalilmiah.org/journal/index.php/mediasi/article/view/753"
      },
      {
        title: "Crypto Price Prediction",
        description: "Machine learning application to predict cryptocurrency prices and market trends.",
        icon: "📈",
        gradient: "from-emerald-500 to-emerald-700",
        techs: ["Python", "Streamlit", "Machine Learning"],
        details: "Built an interactive web app with time-series forecasting models to predict market trends and analyze cryptocurrency data.",
        link: "https://crypto-predict-101.streamlit.app/"
      },
      {
        title: "Cancer Detection",
        description: "AI-powered web application for early cancer detection using medical imaging.",
        icon: "🩺",
        gradient: "from-cyan-500 to-cyan-700",
        techs: ["Deep Learning", "Streamlit", "Healthcare"],
        details: "Developed a computer vision system to analyze medical images and assist healthcare professionals in early cancer detection.",
        link: "https://deteksikanker.streamlit.app/"
      }
  ];

  return (
    <div className="w-full bg-[#09090b]">
      {/* Hero */}
      <section className="py-20 pt-32 bg-[#09090b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center text-white space-y-4 relative z-10" data-animate>
          <h1 className="text-5xl font-bold">📁 My Portfolio</h1>
          <p className="text-xl text-zinc-400">Featured projects showcasing expertise in AI, ML, and Data Engineering</p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center" data-animate>⚙️ Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-animate style={{ transitionDelay: "0.2s" }}>
            <SkillCard title="Machine Learning" items={["Scikit-learn", "XGBoost", "TensorFlow"]} icon="🤖" color="emerald" />
            <SkillCard title="Deep Learning" items={["CNN", "RNN", "BERT", "Transformers"]} icon="🧠" color="cyan" />
            <SkillCard title="Data Engineering" items={["Airflow", "PostgreSQL", "Docker"]} icon="⚙️" color="violet" />
            <SkillCard title="Web Development" items={["Next.js", "React", "TypeScript"]} icon="💻" color="amber" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#09090b] border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center" data-animate>🚀 Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2" data-animate style={{ transitionDelay: "0.2s" }}>
            {projects.map((project, idx) => (
              <div key={idx} className={`bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-zinc-800 hover:border-zinc-600 flex flex-col h-full`}>
                <div className={`text-5xl mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient}`}>{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <p className="text-zinc-500 text-sm mb-8 flex-grow">{project.details}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      View Project / Paper <i className="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#09090b] text-center border-t border-zinc-900">
        <p className="text-zinc-400">© 2025 Iman Yunar Noviadhi. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({ title, items, icon, color }: { title: string; items: string[]; icon: string; color: string }) {
  const colorMap = {
    emerald: "from-zinc-900 to-zinc-800 border-emerald-500/30",
    cyan: "from-zinc-900 to-zinc-800 border-cyan-500/30",
    violet: "from-zinc-900 to-zinc-800 border-violet-500/30",
    amber: "from-zinc-900 to-zinc-800 border-amber-500/30"
  };

  const textColor = {
    emerald: "text-emerald-400",
    cyan: "text-cyan-400",
    violet: "text-violet-400",
    amber: "text-amber-400"
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color as keyof typeof colorMap]} rounded-xl p-6 border hover:border-zinc-500 hover:shadow-lg transition-all transform hover:-translate-y-2`}>
      <p className="text-3xl mb-3">{icon}</p>
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className={`text-sm text-zinc-300 flex items-center`}>
            <span className={`mr-2 ${textColor[color as keyof typeof textColor]}`}>▸</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
