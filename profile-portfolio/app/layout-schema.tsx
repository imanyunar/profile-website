// Add to <head> in layout.tsx after metadata updates
const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Iman Yunar Noviadhi",
  "alternateName": "Iman Yunar",
  "jobTitle": "Quantitative Trader & AI Engineer",
  "description": "Specialist in algorithmic trading, machine learning, AI systems, and full-stack development.",
  "url": "YOUR_NETLIFY_URL", // Update with Netlify URL
  "sameAs": [
    "https://github.com/imanyunar",
    "https://www.linkedin.com/in/iman-yunar-noviadhi-87313a284/"
  ],
  "knowsAbout": ["Quantitative Trading", "Machine Learning", "AI Engineering", "Vue.js", "Laravel", "PyTorch"],
  "hasCredential": {
    "@type": "EducationalOrganization",
    "name": "UNNES"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "AI & Trading Development",
      "description": "Custom algorithmic trading systems, ML models, full-stack apps"
    }
  }
};

// Usage in layout: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PersonSchema) }} />

