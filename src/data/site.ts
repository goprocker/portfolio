export const site = {
  name: "Your Name",
  tagline: "Designer & Developer crafting bold digital experiences",
  description:
    "Portfolio showcasing design work, coding projects, and websites I've built.",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",
  },
  skills: [
    "Figma",
    "UI/UX Design",
    "React",
    "TypeScript",
    "Astro",
    "Tailwind CSS",
    "Node.js",
    "Responsive Design",
  ],
  experience: [
    {
      role: "Senior Product Designer",
      company: "Creative Studio",
      period: "2023 — Present",
      description:
        "Lead design for web and mobile products, from research through high-fidelity prototypes.",
    },
    {
      role: "Frontend Developer",
      company: "Tech Startup",
      period: "2021 — 2023",
      description:
        "Built responsive web applications with React and TypeScript, collaborating closely with design teams.",
    },
    {
      role: "Freelance Designer & Developer",
      company: "Self-employed",
      period: "2019 — 2021",
      description:
        "Delivered branding, UI design, and full-stack websites for clients across industries.",
    },
  ],
  about: {
    bio: "I'm a designer and developer who loves turning ideas into polished digital products. With a background in both visual design and code, I bridge the gap between aesthetics and functionality — building experiences that look stunning and work flawlessly.",
    highlights: [
      "5+ years of design & development experience",
      "Passionate about bold typography and motion",
      "Available for freelance and full-time opportunities",
    ],
  },
} as const;

export type SiteConfig = typeof site;
