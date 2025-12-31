export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/imanyunar",
      gradient: "from-gray-800 to-gray-900",
      description: "Check out my open source projects and contributions",
      color: "🔗"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://linkedin.com/in/imanyunar",
      gradient: "from-blue-600 to-blue-700",
      description: "Connect with me on LinkedIn for professional networking",
      color: "💼"
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:imanyunar@example.com",
      gradient: "from-purple-600 to-pink-600",
      description: "Send me an email directly for inquiries and collaborations",
      color: "📧"
    },
    {
      name: "Twitter/X",
      icon: "fab fa-twitter",
      url: "https://twitter.com/imanyunar",
      gradient: "from-blue-400 to-blue-500",
      description: "Follow me for AI and ML insights and updates",
      color: "🐦"
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="py-20 pt-32 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">🤝 Let's Connect</h1>
          <p className="text-xl text-purple-100">I'm always open to discussing new projects and opportunities</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${social.gradient} rounded-lg p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2`}
              >
                <p className="text-5xl mb-4">{social.color}</p>
                <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                <p className="text-white/90 text-sm">{social.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Connect Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-slate-900 rounded-lg shadow-lg p-8 space-y-6 border border-slate-700">
            <h2 className="text-3xl font-bold text-white">💬 Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                Whether you're interested in collaborating on projects, discussing AI/ML applications, or just want to say hello, I'd love to hear from you!
              </p>
              <p className="text-lg text-gray-300">
                I'm most responsive via email and LinkedIn, but feel free to reach out through any of the platforms above.
              </p>
              <p className="text-lg text-gray-300">
                <span className="font-bold text-blue-400">Response time:</span> Usually within 24 hours 🚀
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-bold text-white">📋 What I'm interested in:</h3>
              <div className="grid grid-cols-2 gap-3">
                <InterestTag emoji="🔬" text="ML/AI Projects" />
                <InterestTag emoji="💡" text="Startups" />
                <InterestTag emoji="📚" text="Collaborations" />
                <InterestTag emoji="🌍" text="Open Source" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-slate-900 rounded-lg shadow-2xl p-8 space-y-6 border border-slate-700">
            <h2 className="text-3xl font-bold text-white text-center">✉️ Send Me a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
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

function InterestTag({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-blue-600">
      <p className="text-sm font-semibold text-gray-200">{emoji} {text}</p>
    </div>
  );
}
