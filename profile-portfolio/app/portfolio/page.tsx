export default function Portfolio() {
  const projects = [
    {
      title: "Image Classification CNN",
      description: "Deep learning model achieving 95% accuracy on multi-class image classification using convolutional neural networks.",
      icon: "🧠",
      gradient: "from-blue-500 to-blue-600",
      techs: ["Python", "TensorFlow", "Keras", "OpenCV"],
      details: "Implemented a CNN architecture with data augmentation and transfer learning techniques to achieve state-of-the-art performance on image classification tasks."
    },
    {
      title: "Sentiment Analysis with BERT",
      description: "Real-time NLP sentiment detection achieving 92% accuracy using transformer models for social media analysis.",
      icon: "💬",
      gradient: "from-purple-500 to-purple-600",
      techs: ["Python", "BERT", "Transformers", "FastAPI"],
      details: "Built a production-ready API using fine-tuned BERT models to perform real-time sentiment analysis on social media streams and user reviews."
    },
    {
      title: "Automated ETL Pipeline",
      description: "Enterprise-grade data pipeline processing 50TB daily using Apache Airflow and PostgreSQL for data warehousing.",
      icon: "⚙️",
      gradient: "from-pink-500 to-pink-600",
      techs: ["Python", "Airflow", "PostgreSQL", "Docker"],
      details: "Designed and deployed a scalable ETL pipeline with error handling, monitoring, and automated recovery mechanisms for continuous data processing."
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive web application for visualizing ML model performance metrics and business intelligence.",
      icon: "📊",
      gradient: "from-green-500 to-green-600",
      techs: ["React", "Next.js", "D3.js", "PostgreSQL"],
      details: "Created an interactive dashboard with real-time data streaming, advanced visualizations, and drill-down capabilities for business intelligence."
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="py-20 pt-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">📁 My Portfolio</h1>
          <p className="text-xl text-blue-100">Featured projects showcasing expertise in AI, ML, and Data Engineering</p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">⚙️ Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard title="Machine Learning" items={["Scikit-learn", "XGBoost", "TensorFlow"]} icon="🤖" color="blue" />
            <SkillCard title="Deep Learning" items={["CNN", "RNN", "BERT", "Transformers"]} icon="🧠" color="purple" />
            <SkillCard title="Data Engineering" items={["Airflow", "PostgreSQL", "Docker"]} icon="⚙️" color="pink" />
            <SkillCard title="Web Development" items={["Next.js", "React", "TypeScript"]} icon="💻" color="green" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">🚀 Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${project.gradient} rounded-lg p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2`}>
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                <p className="text-white/80 text-sm mb-6">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center border-t border-slate-800">
        <p className="text-gray-300">© 2025 Iman Yunar Noviadhi. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({ title, items, icon, color }: { title: string; items: string[]; icon: string; color: string }) {
  const colorMap = {
    blue: "from-slate-800 to-slate-700 border-blue-600",
    purple: "from-slate-800 to-slate-700 border-purple-600",
    pink: "from-slate-800 to-slate-700 border-pink-600",
    green: "from-slate-800 to-slate-700 border-green-600"
  };

  const textColor = {
    blue: "text-blue-200",
    purple: "text-purple-200",
    pink: "text-pink-200",
    green: "text-green-200"
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color as keyof typeof colorMap]} rounded-lg p-6 border hover:shadow-lg transition-all transform hover:-translate-y-2`}>
      <p className="text-3xl mb-3">{icon}</p>
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className={`text-sm ${textColor[color as keyof typeof textColor]} font-semibold flex items-center`}>
            <span className="mr-2">▸</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
