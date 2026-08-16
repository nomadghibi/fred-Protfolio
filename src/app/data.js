export const profileData = {
  name: "Fred Dehnashi",
  shortName: "Fred",
  role: "AI Systems & Automation Consultant",
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
    name: "CareFlow AI",
    description:
      "Care operations software for senior living teams, including alert triage, incident reporting, shift handoffs, family communication, and grounded AI workflows.",
    category: "Care Intelligence",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "AI", "RBAC"],
    demoLink: "https://careflow-ai-web.vercel.app",
  },
  {
    id: 2,
    name: "AI Front Office",
    description:
      "Service-business workflow platform for missed-call recovery, lead qualification, estimates, job tracking, and operational follow-up.",
    category: "Revenue Automation",
    tech: ["AI Agents", "CRM", "Automation", "Voice & SMS", "APIs"],
    demoLink: "https://frontend-five-brown-e6pmozaq6t.vercel.app",
  },
  {
    id: 3,
    name: "SafeStride",
    description:
      "AI-assisted gait screening and mobility reporting designed for senior care teams and reviewable fall-risk workflows.",
    category: "Computer Vision",
    tech: ["Computer Vision", "Python", "Video", "AI Inference", "Health UX"],
    demoLink: "https://safestride-mvp-zncm.vercel.app",
  },
  {
    id: 4,
    name: "HVAC Pro Office",
    description:
      "Vertical field-service SaaS with customers, jobs, estimates, invoices, subscriptions, and AI-ready office workflows.",
    category: "Vertical SaaS",
    tech: ["Next.js", "CRM", "Scheduling", "Payments", "Automation"],
    demoLink: "https://hvac-rose.vercel.app",
  },
  {
    id: 5,
    name: "Agentic Marketing OS",
    description:
      "AI-native marketing operations platform for campaigns, deliverables, approvals, reporting, and organizational knowledge memory.",
    category: "Agentic Automation",
    tech: ["AI Agents", "Workflows", "Approvals", "Analytics", "Knowledge"],
    repoLink: "https://github.com/nomadghibi/agentic-marketing-os-codex",
    demoLink: "https://agentic-marketing-os-codex-web.vercel.app",
  },
  {
    id: 6,
    name: "Agentic Venture Studio",
    description:
      "AI venture-validation workspace for market pain, feasibility scoring, monetization analysis, and build-ready product documentation.",
    category: "Product Intelligence",
    tech: ["AI", "Product Strategy", "Scoring", "Automation", "SaaS"],
    repoLink: "https://github.com/nomadghibi/agentic-venture-studio",
    demoLink: "https://agentic-venture-studio-api.vercel.app",
  },
  {
    id: 7,
    name: "BusinessPulse AI",
    description:
      "Business intelligence system that turns operational data into deterministic KPIs, trends, and grounded AI-assisted answers.",
    category: "AI Analytics",
    tech: ["Analytics", "PostgreSQL", "OpenAI", "KPIs", "Testing"],
    repoLink: "https://github.com/nomadghibi/businesspulse-ai",
    demoLink: "https://businesspulse-ai-lime.vercel.app",
  },
  {
    id: 8,
    name: "WonderKid Stories",
    description:
      "Customer-facing generative AI SaaS that creates personalized illustrated storybooks from photos and guided story inputs.",
    category: "Generative AI SaaS",
    tech: ["Next.js", "Generative AI", "Uploads", "Payments", "PDF"],
    repoLink: "https://github.com/nomadghibi/wonderkid-stories",
    demoLink: "https://wonderkid-stories.vercel.app",
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
