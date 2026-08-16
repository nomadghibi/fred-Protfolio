export const profileData = {
  name: "Fred Dehnashi",
  shortName: "Fred",
  role: "AI & Data Strategy Consultant",
  headline: "Building practical AI systems, SaaS products, and business automation",
  location: "Palm Bay, Florida",
  githubUsername: "nomadghibi",
  githubUrl: "https://github.com/nomadghibi",
  websiteUrl: "https://techezeai.com",
  websiteLabel: "TechEze AI",
  portfolioSummary:
    "I design and build production-minded AI applications, multi-tenant SaaS platforms, local business systems, and private AI solutions. My work connects product strategy, software architecture, automation, data, and real operational workflows.",
};

export const projectsData = [
  {
    id: 1,
    name: "HVAC Pro Office",
    description:
      "Multi-tenant field-service SaaS for HVAC companies with CRM, scheduling, quotes, invoices, payments, maintenance plans, and AI automation.",
    category: "Vertical SaaS",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    demoLink: "https://hvacprooffice.com",
  },
  {
    id: 2,
    name: "WonderKid Stories",
    description:
      "AI-powered personalized children's storybook platform with secure photo storage, story generation, illustrated pages, payments, and PDF delivery.",
    category: "Generative AI SaaS",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "AI"],
    repoLink: "https://github.com/nomadghibi/wonderkid-stories",
  },
  {
    id: 3,
    name: "BusinessPulse AI",
    description:
      "Business intelligence MVP that ingests operational CSV data, calculates deterministic KPIs, identifies trends, and answers questions with grounded reasoning.",
    category: "AI Analytics",
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI", "Testing"],
    repoLink: "https://github.com/nomadghibi/businesspulse-ai",
  },
  {
    id: 4,
    name: "SeniorEase Desktop",
    description:
      "Senior-first Windows desktop launcher with large accessible controls, caregiver configuration, safety guardrails, support escalation, and a local AI bridge.",
    category: "Accessible AI",
    tech: ["Electron", "React", "TypeScript", "Express", "Local AI"],
    repoLink: "https://github.com/nomadghibi/SeniorEase-Desktop",
  },
  {
    id: 5,
    name: "AI Workbench",
    description:
      "Private local AI assistant workbench with a FastAPI backend, streaming chat interface, local-model support, and a foundation for document intelligence.",
    category: "Private AI",
    tech: ["FastAPI", "Python", "React", "Vite", "Ollama"],
    repoLink: "https://github.com/nomadghibi/ai-workbench",
  },
  {
    id: 6,
    name: "AI Wellness Platform",
    description:
      "AI-guided wellness platform designed around structured coaching, daily plans, progress tracking, and conversational support workflows.",
    category: "AI Product",
    tech: ["AI Agents", "Automation", "Full Stack", "APIs"],
    repoLink: "https://github.com/nomadghibi/ai-wellness-platform",
  },
  {
    id: 7,
    name: "Right Away Services",
    description:
      "Conversion-focused local-service website with location landing pages, structured data, lead capture, performance optimization, and local SEO architecture.",
    category: "Local Business Platform",
    tech: ["Next.js", "SEO", "Schema", "Vercel"],
    repoLink: "https://github.com/nomadghibi/rightawayservices",
    demoLink: "https://rightawayservices.com",
  },
  {
    id: 8,
    name: "Dentist Finder",
    description:
      "Local dentist discovery and lead-generation application with provider data, matching signals, lead scoring, and availability-oriented search workflows.",
    category: "Marketplace",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Data Pipelines"],
    repoLink: "https://github.com/nomadghibi/dentist",
  },
  {
    id: 9,
    name: "Agentic Marketing OS",
    description:
      "Agent-oriented marketing operations system for research, campaign planning, content production, workflow execution, and measurable growth experiments.",
    category: "Agentic Automation",
    tech: ["AI Agents", "Codex", "Automation", "Marketing Ops"],
    repoLink: "https://github.com/nomadghibi/agentic-marketing-os-codex",
  },
  {
    id: 10,
    name: "Agentic Venture Studio",
    description:
      "A structured venture-building system for turning market problems into validated product concepts, execution plans, and agent-supported software projects.",
    category: "Product Systems",
    tech: ["AI", "Product Strategy", "Automation", "Documentation"],
    repoLink: "https://github.com/nomadghibi/agentic-venture-studio",
  },
  {
    id: 11,
    name: "RestTwin AI",
    description:
      "Restaurant digital-twin concept for modeling operations, performance, staffing, demand, and AI-assisted management decisions.",
    category: "Simulation & AI",
    tech: ["Analytics", "AI Agents", "Operations", "SaaS"],
    repoLink: "https://github.com/nomadghibi/resttwin-ai",
  },
  {
    id: 12,
    name: "Baseball AI Coach",
    description:
      "AI-assisted baseball coaching application focused on structured training, player development, practice guidance, and accessible performance feedback.",
    category: "Sports AI",
    tech: ["AI", "Coaching", "Full Stack", "UX"],
    repoLink: "https://github.com/nomadghibi/baseballAI-coach",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "GitHub",
    link: profileData.githubUrl,
    icon: "github",
    newTab: true,
  },
  {
    label: "TechEze AI",
    link: profileData.websiteUrl,
    icon: "website",
    newTab: true,
  },
];
