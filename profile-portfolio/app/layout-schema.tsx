// Schema reference for SEO — mirrors layout.tsx structured data
// Updated: Corporate positioning (Full-Stack Developer & AI Practitioner)

const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iman Yunar Noviadhi",
  alternateName: ["Iman Yunar", "imanyunar"],
  jobTitle: [
    "Full-Stack Developer",
    "AI Practitioner",
    "Software Engineer",
  ],
  description:
    "Full-Stack Developer and AI Practitioner specializing in production-ready web applications, applied machine learning, and technical leadership.",
  url: "https://imanyunar.my.id",
  image: "https://imanyunar.my.id/profile.png",
  email: "imanyunar@gmail.com",
  sameAs: [
    "https://imanyunar.my.id",
    "https://iman-yunar-noviadhi.netlify.app",
    "https://github.com/imanyunar",
    "https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Software Engineering",
    "Python",
    "TypeScript",
    "Laravel",
    "Vue.js",
    "Next.js",
    "PostgreSQL",
    "REST API",
    "DevOps",
    "Leadership",
    "Project Management",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Negeri Semarang",
  },
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Iman Yunar Noviadhi — Portfolio",
  description: "Full-Stack Development & AI Portfolio",
  url: "https://imanyunar.my.id",
  sameAs: [
    "https://iman-yunar-noviadhi.netlify.app",
    "https://github.com/imanyunar",
    "https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/",
  ],
};

// Usage in layout:
// <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PersonSchema) }} />
// <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
