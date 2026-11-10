export interface CollabItem {
  id: string;
  partner: string;
  partnerType: string;
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  link?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  image?: string;
  repo?: string;
  featured?: boolean;
}

export interface OrgItem {
  name: string;
  role: string;
  badge: string;
  note: string;
  link: string;
  logo?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; experience: string; tag: string }[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string;
  status: "ACTIVE" | "COMPLETED";
}

export interface EventItem {
  name: string;
  role: string;
  date: string;
  contribution: string;
}

export interface PrincipleItem {
  title: string;
  description: string;
}

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

// Turns loose dates like "July 24–25, 2026" or "May–June 2026 · Online" into a sortable number.
export function eventDateValue(date: string): number {
  const text = date.toLowerCase();
  const year = Number(text.match(/\b(20\d{2})\b/)?.[1] ?? 0);
  const month = MONTHS.findIndex((m) => text.includes(m));
  const day = Number(text.replace(/\b20\d{2}\b/, "").match(/\b([0-3]?\d)\b/)?.[1] ?? 1);
  return year * 10000 + (month + 1) * 100 + Math.min(day, 31);
}

export const PORTFOLIO_DATA = {
  developer: {
    name: "GOPINATH",
    handle: "goprocker",
    title: "AI & ML Engineer",
    alias: "gopinath@chennai",
    email: "gopinath2638@gmail.com",
    github: "https://github.com/goprocker",
    linkedin: "https://www.linkedin.com/in/gopiNATH2638",
    twitter: "https://x.com/gopinath2368",
    instagram: "https://www.instagram.com/goprocker_photography_/",
    website: "https://loopfound.in",
    tagline: "I'd rather ship than talk about shipping.",
    headlineStats: [
      { value: "1000+", label: "Users served" },
      { value: "6+", label: "Products shipped" },
      { value: "8", label: "Teams & clubs" },
      { value: "30", label: "Public repos" },
    ],
    location: "Chennai, India",
    status: " OPEN FOR INTERNSHIPS & COLLABORATIONS",
    bio: "CSE (AI) student, co-founder at LoopFound, and lead of a 60-member student AI community. I build agentic AI systems for unglamorous, high-stakes problems such as flood response and grievance redressal. I’m interested in the intersection of AI assistants, automation, and real-time systems—and in shipping work that matters.",
    quote: '"Build things that ship, not just prototypes that impress."',
  },
  profile: {
    fullName: 'GOPINATH R ("Jarvis")',
    role: "CSE (AI) Student & Founder/Builder",
    university: "Sathyabama Institute of Science and Technology",
  },
  operatingVector: [
    { area: "AI Engineering", detail: "Agentic pipelines, Claude/Gemini/OpenAI APIs" },
    { area: "Frontend Systems", detail: "React, Next.js, TypeScript, Tailwind" },
    { area: "Community Building", detail: "Curriculum design, team structuring, leadership" },
    { area: "Growth & Ops", detail: "Dashboards, referral systems, content pipelines" },
  ],
  labs: [
    { name: "GitHub Graveyard", detail: "Walk through a 3D cemetery of a GitHub user's forgotten repos — untouched ones grow moss, starred ones get monuments.", stack: "TypeScript · 3D", link: "https://github.com/goprocker/GitHubGraveyard" },
    { name: "Orbi", detail: "A tiny Windows 11 tray app: when earbuds, Wi-Fi or a USB drive connects, a polished popup slides up — event-driven, near-zero idle CPU.", stack: "Rust · Tauri 2", link: "https://github.com/goprocker/Orbi" },
    { name: "P2BL", detail: "A smart-home assistant with a React chat UI, a rule-based Automation Lab and a Python API for lighting, energy and safety scenarios.", stack: "React · Python", link: "https://github.com/goprocker/p2bl" },
  ],
  orgs: [
    { name: "LoopFound", role: "Co-Founder & CMO", badge: "Founder", note: "Lead Engineer", link: "https://github.com/LoopFound", logo: "/images/orgs/loopfound.png" },
    { name: "AI Foundry '29", role: "Founding Lead", badge: "Founder", note: "AI community", link: "https://github.com/AI-FOUNDARY-29", logo: "/images/orgs/aifoundry.png" },
    { name: "HackWithIndia", role: "Founding President", badge: "Founder", note: "Sathyabama Chapter", link: "https://github.com/HackWithIndia-Sathyabama" },
    { name: "Redrox Industries", role: "Technical Lead", badge: "Lead", note: "Clean-tech construction", link: "https://github.com/Redrox-Industries", logo: "/images/orgs/redroxindustries.png" },
    { name: "Synco AI", role: "AI Engineer Intern", badge: "Intern", note: "AI products", link: "https://github.com/snycoai", logo: "/images/orgs/syncoai.png" },
    { name: "GDSC SIST", role: "Technical Team", badge: "Member", note: "Google Developer Student Club", link: "https://github.com/dscsist", logo: "/images/orgs/dscsist.png" },
    { name: "Rare Atom", role: "Frontend Developer", badge: "Dev", note: "WiCyS Sathyabama", link: "https://github.com/Rare-Atom" },
    { name: "GSSoC 2026", role: "Ambassador", badge: "Rare", note: "GirlScript Summer of Code", link: "https://gssoc.girlscript.tech" },
  ] as OrgItem[],
  gssoc: {
    title: "GirlScript Summer of Code · 2026",
    role: "Ambassador & Contributor",
    note: "Every badge earned during the program, from first PR to ambassador.",
    badges: [
      { name: "Ambassador", image: "/images/badges/ambassador.webp", rare: true },
      { name: "First Steps", image: "/images/badges/first-steps.webp", rare: false },
      { name: "Discord Verified", image: "/images/badges/discord-verified.webp", rare: false },
      { name: "Profile Complete", image: "/images/badges/profile-complete.webp", rare: false },
      { name: "Point Scorer", image: "/images/badges/point-scorer.webp", rare: false },
      { name: "Bounty Hunter", image: "/images/badges/bounty-hunter.webp", rare: false },
      { name: "Contributor", image: "/images/badges/contributor.webp", rare: false },
    ],
  },
  // Fallback only: the site pulls the live list from recently pushed GitHub repos.
  nowBuilding: [
    { name: "Islet", detail: "Dynamic Island for Windows", context: "Electron" },
    { name: "Orbi", detail: "macOS-style animations for Wi-Fi & devices", context: "Rust · Tauri" },
    { name: "GitHub Graveyard", detail: "3D cemetery of forgotten repos", context: "TypeScript" },
    { name: "Editor", detail: "Editing videos with multiple AI tools", context: "TypeScript" },
    { name: "loopfoundsocial", detail: "Social media automation for LoopFound", context: "Python" },
  ],
  learning: [
    { name: "DSA in Java & C++", detail: "Transferring Python base to Java" },
    { name: "LLM agents & computer vision", detail: "Perception plus reasoning" },
    { name: "System design", detail: "Scalable backends" },
    { name: "Agentic Systems", detail: "Multi-agent orchestration & workflows" },
    { name: "Team & Hackathon Ops", detail: "Working effectively in hackathon teams" },
  ],
  wins: [
    "ResponSync — 4th place + special mention, RushHour",
    "Internship offer from Astra Dyne Global",
    "HackExpress — top 8 teams",
    "Google Gemini Student Ambassador",
    "Founder, 60+ member AI Foundry '29",
    "Founding President, HWI Sathyabama",
    "5 talks delivered",
    "Islet shipped — open source on GitHub",
    "GSSoC 2026 Ambassador — 7 badges",
  ],
  skills: [
    { category: "Languages", icon: "💻", skills: [{ name: "TypeScript", level: 0, experience: "", tag: "CORE" }, { name: "Python", level: 0, experience: "", tag: "CORE" }, { name: "JavaScript", level: 0, experience: "", tag: "" }, { name: "Java", level: 0, experience: "", tag: "" }, { name: "C++", level: 0, experience: "", tag: "" }, { name: "C", level: 0, experience: "", tag: "" }, { name: "HTML", level: 0, experience: "", tag: "" }, { name: "CSS", level: 0, experience: "", tag: "" }] },
    { category: "AI & Agents", icon: "🤖", skills: [{ name: "Claude / OpenAI / Gemini APIs", level: 0, experience: "", tag: "CORE" }, { name: "LangGraph & agentic workflows", level: 0, experience: "", tag: "CORE" }, { name: "MCP", level: 0, experience: "", tag: "" }, { name: "Qdrant / Chroma", level: 0, experience: "", tag: "" }, { name: "TensorFlow", level: 0, experience: "", tag: "" }, { name: "PyTorch", level: 0, experience: "", tag: "" }, { name: "OpenCV", level: 0, experience: "", tag: "" }, { name: "Pandas", level: 0, experience: "", tag: "" }, { name: "NumPy", level: 0, experience: "", tag: "" }, { name: "Streamlit", level: 0, experience: "", tag: "" }] },
    { category: "Frontend", icon: "⚡", skills: [{ name: "React", level: 0, experience: "", tag: "CORE" }, { name: "Next.js", level: 0, experience: "", tag: "CORE" }, { name: "Astro", level: 0, experience: "", tag: "" }, { name: "Vue", level: 0, experience: "", tag: "" }, { name: "Vite", level: 0, experience: "", tag: "" }, { name: "Tailwind", level: 0, experience: "", tag: "" }, { name: "Vuetify", level: 0, experience: "", tag: "" }, { name: "Electron", level: 0, experience: "", tag: "" }, { name: "WordPress", level: 0, experience: "", tag: "" }] },
    { category: "Backend & Data", icon: "⚙️", skills: [{ name: "Node.js", level: 0, experience: "", tag: "CORE" }, { name: "Express", level: 0, experience: "", tag: "" }, { name: "Fastify", level: 0, experience: "", tag: "" }, { name: "FastAPI", level: 0, experience: "", tag: "" }, { name: "PostgreSQL", level: 0, experience: "", tag: "CORE" }, { name: "Prisma", level: 0, experience: "", tag: "" }, { name: "MongoDB", level: 0, experience: "", tag: "" }, { name: "MySQL", level: 0, experience: "", tag: "" }, { name: "SQLite", level: 0, experience: "", tag: "" }, { name: "Supabase", level: 0, experience: "", tag: "" }, { name: "Firebase", level: 0, experience: "", tag: "" }, { name: "Redis", level: 0, experience: "", tag: "" }] },
    { category: "Infra & Tools", icon: "🧰", skills: [{ name: "Git", level: 0, experience: "", tag: "" }, { name: "GitHub Actions", level: 0, experience: "", tag: "" }, { name: "GitLab", level: 0, experience: "", tag: "" }, { name: "Docker", level: 0, experience: "", tag: "" }, { name: "Vercel", level: 0, experience: "", tag: "" }, { name: "Netlify", level: 0, experience: "", tag: "" }, { name: "Cloudflare", level: 0, experience: "", tag: "" }, { name: "Render", level: 0, experience: "", tag: "" }, { name: "n8n", level: 0, experience: "", tag: "" }] },
    { category: "Design", icon: "🎨", skills: [{ name: "Figma", level: 0, experience: "", tag: "CORE" }, { name: "Photoshop", level: 0, experience: "", tag: "" }, { name: "Illustrator", level: 0, experience: "", tag: "" }, { name: "Premiere", level: 0, experience: "", tag: "" }, { name: "After Effects", level: 0, experience: "", tag: "" }, { name: "Lightroom", level: 0, experience: "", tag: "" }, { name: "Framer", level: 0, experience: "", tag: "" }, { name: "Canva", level: 0, experience: "", tag: "" }] },
  ] as SkillCategory[],
  collabs: [
    { id: "livora", featured: true, image: "/images/projects/livora.jpg", partner: "HackExpress 1.0 — Tamil Nadu's first train hackathon", partnerType: "Hackathon", title: "Livora", role: "Builder", period: "2026", status: "ONGOING", description: "A household operating system that maintains state, traces consequences and executes approved actions. Household life is interconnected — a dinner plan changes inventory, budgets and schedules — so Livora models it as one system instead of isolated apps.", contributions: ["Designed a household state model that traces how one change ripples into others.", "Built an approval-gated action layer so the AI only executes what you sign off on."], techStack: ["React 19", "Fastify", "PostgreSQL", "Prisma", "OpenAI", "Sarvam"], link: "https://sathyabamaexpress-five.vercel.app", repo: "https://github.com/goprocker/sathyabamaexpress" },
    { id: "islet", featured: true, image: "/images/projects/islet.jpg", partner: "Open source", partnerType: "Desktop App", title: "Islet", role: "Creator", period: "2026", status: "ACTIVE", description: "A free Dynamic Island for Windows 10 and 11: a notch pill with music, Claude Code and Codex status, notifications, battery, clipboard, a timer and a pet cat. Open source and shipped, with real downloads and GitHub stars.", contributions: ["Built the Electron notch with live music, AI-agent status and notifications.", "Shipped a public release with a landing site and changelog."], techStack: ["Electron", "JavaScript", "Windows"], link: "https://islet.loopfound.in", repo: "https://github.com/goprocker/Islet" },
    { id: "orvio", featured: true, image: "/images/projects/orvio.jpg", link: "https://orvio-740.netlify.app/", partner: "Social media agency (LoopFound client)", partnerType: "Client", title: "ORVIO", role: "Developer", period: "2026", status: "COMPLETED", description: "The public marketing site for ORVIO, a social media agency — built with Astro and TypeScript, guarded by smoke tests, with a PR-only main branch.", contributions: ["Built the marketing site in Astro with TypeScript.", "Added smoke tests and a pull-request-only workflow to keep main stable."], techStack: ["Astro", "TypeScript"], repo: "https://github.com/goprocker/orivo" },
    { id: "unbd", featured: true, image: "/images/projects/unbd.jpg", link: "https://unbd-break-free.netlify.app/", partner: "Fashion storefront (LoopFound client)", partnerType: "Client", title: "UNBD", role: "Developer", period: "2026", status: "COMPLETED", description: "An editorial campaign storefront for UNBD that previews products on-site and hands checkout off securely to the existing Shopify store.", contributions: ["Designed the editorial campaign storefront.", "Kept a strict commerce boundary: accounts, bag and payment stay on Shopify."], techStack: ["JavaScript", "Shopify", "Netlify"], repo: "https://github.com/goprocker/UNBD" },
    { id: "redrox-website", image: "/images/projects/redrox-website.jpg", partner: "Redrox Industries Pvt Ltd", partnerType: "Company Site", title: "Redrox Industries", role: "Technical Lead", period: "2026", status: "COMPLETED", description: "The official website for Redrox, a clean-tech construction startup turning textile waste into high-strength interlocking blocks — with a product chatbot that answers only from published information.", contributions: ["Built the company website and product story.", "Added a grounded product assistant that answers from the site's own content."], techStack: ["HTML", "CSS", "JavaScript", "Chatbot"], link: "https://redroxindustries.netlify.app/", repo: "https://github.com/goprocker/redrox-website" },
    { id: "parallel-realities", image: "/images/projects/parallel-realities.jpg", partner: "With Pranith Vincent (research & photography)", partnerType: "Interactive Story", title: "The K-Shaped Divide", role: "Code & Architecture", period: "2026", status: "COMPLETED", description: "An interactive 3D editorial field journal exploring Bengaluru's K-shaped economic divide — an open hardcover book with 10 navigable spreads, WebGL volumetric clouds and an ambient soundtrack.", contributions: ["Built the book interface with 10 navigable spreads.", "Wrote WebGL volumetric cloud raymarching for the atmosphere."], techStack: ["Next.js 16", "WebGL", "Turbopack"], link: "https://pranithsmi.vercel.app/", repo: "https://github.com/goprocker/Parallel_Realities" },
    { id: "responsesync", featured: true, repo: "https://github.com/goprocker/ResponseSync", image: "/images/projects/responsesync.jpg", partner: "RushHour Hackathon (Team: Adengappa Aru Peru)", partnerType: "Hackathon Project", title: "ResponSync", role: "Team Builder", period: "2026", status: "COMPLETED", description: "A three-agent Gemini-powered pipeline built at RushHour Hackathon by team Adengappa Aru Peru for real-time flood response coordination in Chennai. Placed fourth with a special mention and led to an internship offer from Astra Dyne Global.", contributions: ["Designed a multi-agent flood-response workflow.", "Built real-time coordination tooling for urgent response."], techStack: ["Gemini API", "Python", "Agentic Workflows"], link: "https://responsesync.ai.studio/" },
    { id: "sist-form", image: "/images/projects/sist-form.jpg", partner: "Independent Project", partnerType: "Independent", title: "SIST Event Form Maker", role: "Solo Developer", period: "2026", status: "COMPLETED", description: "An independent form-builder tool for Sathyabama event management, created with Lovable.", contributions: ["Built an accessible event form creation flow.", "Delivered a no-code operations tool."], techStack: ["Lovable", "No-code AI"], link: "https://sisteventformmaker.lovable.app/" },
    { id: "dhc", featured: true, repo: "https://github.com/goprocker/Digital-Horizon-Conclave-2026", image: "/images/projects/dhc.jpg", partner: "DHC (Digital Horizon Conclave)", partnerType: "Event Website", title: "Digital Horizon Conclave 2026", role: "Solo Developer", period: "2026", status: "COMPLETED", description: "Official event website for the Digital Horizon Conclave (DHC 2026) national technical symposium spanning AI, gaming, XR, robotics, and IoT, with a dark futuristic visual system and a physics-based fluid hover-reveal hero.", contributions: ["Designed and built the event experience solo.", "Created a custom interactive WebGL hero."], techStack: ["Next.js 16", "React 19", "Tailwind 4", "Framer Motion", "WebGL"], link: "https://digital-horizon-conclave-2026.vercel.app/" },
    { id: "habitloop", image: "/images/projects/habitloop.jpg", partner: "Ascend Event", partnerType: "Event Project", title: "HabitLoop", role: "Solo Developer", period: "2026", status: "COMPLETED", description: "A habit-tracking web app built for the Ascend event that helps people maintain daily habits through consistent check-ins.", contributions: ["Built the end-to-end habit tracking experience.", "Integrated Supabase for persistent user data."], techStack: ["React", "TypeScript", "Vite", "Supabase"], link: "https://habit-loop-seven.vercel.app/" },
  ] as CollabItem[],
  ambassadorExperience: [
    { organization: "Google", role: "Google Gemini Student Ambassador (GID: 2500)", period: "May 2026 – September 2026", status: "ACTIVE", description: "Representing Google Gemini on campus and driving awareness and adoption of Gemini AI tools among students." },
    { organization: "IIT Delhi", role: "TRYST'26 Campus Ambassador", period: "January 2026 – March 2026", status: "COMPLETED", description: "Represented IIT Delhi's TRYST'26 techfest on campus, driving student registrations and event awareness." },
    { organization: "IIT Delhi", role: "Rendezvous Campus Ambassador", period: "August 2026 – October 2026", status: "COMPLETED", description: "Represented IIT Delhi's Rendezvous cultural festival on campus, driving event awareness and student participation." },
    { organization: "Paytm", role: "Student Ambassador", period: "April 2026 – Present", status: "ACTIVE", description: "Representing Paytm on campus as a student ambassador." },
    { organization: "Tresend", role: "Student Ambassador", period: "June 2026 – Present", status: "ACTIVE", description: "Driving awareness and adoption of Tresend within the campus community." },
    { organization: "Techfest Bombay", role: "Campus Ambassador", period: "July 2026 – Present", status: "ACTIVE", description: "Representing Techfest Bombay on campus and building awareness among students." },
  ] as ExperienceItem[],
  experience: [
    { organization: "LoopFound", role: "Co-Founder & CMO", period: "August 2025 – Present", status: "ACTIVE", description: "Co-founded a web development agency, leading marketing and growth while building internal tools such as referral tracking and financial dashboards for client operations." },
    { organization: "AI Foundry '29", role: "Founder & Lead", period: "2025 – Present", status: "ACTIVE", description: "Built and lead a 60+ member student AI community across seven sub-teams, with structured technical curricula and a leadership selection process." },
    { organization: "HWI Club (HackWithIndia), Sathyabama", role: "Founding President", period: "2026 – Present", status: "ACTIVE", description: "Leading campus hackathon and community-building initiatives at Sathyabama." },
    { organization: "WiCyS Sathyabama", role: "Technical & Media Team Member", period: "November 2025 – Present", status: "ACTIVE", description: "Co-organized Obscura CTF, a national jeopardy-style cybersecurity event, with RedTeam Hacker Academy." },
    { organization: "OWASP Sathyabama", role: "Design Team Member", period: "April 2026 – Present", status: "ACTIVE", description: "Contributed design and coordination support for initiatives including Hack The Planet, a five-day national cybersecurity event." },
    { organization: "DSC Sathyabama", role: "Design Team Member", period: "February 2026 – Present", status: "ACTIVE", description: "Contributed design work for community initiatives." },
    { organization: "AWS Student Builder Group", role: "Design Team Member", period: "July 2026 – Present", status: "ACTIVE", description: "Contributed design work for the Sathyabama student builder community." },
    { organization: "ACM Sathyabama", role: "Technical Team Member", period: "March 2026 – Present", status: "ACTIVE", description: "Contributed technical support for student community initiatives." },
    { organization: "Salted_dscripts", role: "Editor", period: "February 2026 – Ended", status: "COMPLETED", description: "Edited content for the Salted_dscripts publication." },
    { organization: "Microsoft Club, Sathyabama", role: "Web & App Development Domain Member", period: "August 2026 – October 2026", status: "COMPLETED", description: "Served in the Web and App Development domain for the 2026–27 term." },
  ] as ExperienceItem[],
  internships: [
    { organization: "Anaxly", role: "Frontend Developer", period: "November 2026 – Present", status: "ACTIVE", description: "Working as a Frontend Developer at Anaxly." },
    { organization: "Redrox Industries PVT Limited", role: "AI Engineer Intern & Technical Lead", period: "August 2026 – Present", status: "ACTIVE", description: "Working as an AI Engineer Intern and Technical Lead at Redrox Industries PVT Limited." },
    { organization: "SynosAI", role: "Frontend/UI Developer Intern", period: "2026 – November 2026", status: "COMPLETED", description: "Built frontend interfaces for a food ordering automation platform as part of Team 3, using React, Tailwind, Vite, and WebSocket." },
    { organization: "VR Media Network", role: "AI Developer Intern", period: "May 2026 – June 2026 · Chennai, Tamil Nadu, India · On-site", status: "COMPLETED", description: "Completed an on-site AI Developer internship with VR Media Network." },
    { organization: "St Britto's Academy", role: "AI Developer Intern", period: "June 2025 – August 2025", status: "COMPLETED", description: "Completed an AI Developer internship at St Britto's Academy." },
  ] as ExperienceItem[],
  events: [
    { name: "Gen AI Unleashed", role: "Organizer & Speaker", date: "October 30, 2026", contribution: "Conducted the event and gave the talk on generative AI — how today's models work, what they're good at, and how to start building with them." },
    { name: "Expert System AI BootCamp", role: "Speaker", date: "October 1, 2026", contribution: "Spoke at the Expert System AI BootCamp." },
    { name: "Expert System for First-Year AI Students", role: "Lead Event Coordinator", date: "October 1, 2026", contribution: "Led coordination for an expert system event for first-year AI students under WiCyS Sathyabama." },
    { name: "HackExpress — Train Hackathon", role: "Team Lead & Participant", date: "September 30, 2026", contribution: "Led the team through HackExpress and advanced to the second round as one of eight selected teams." },
    { name: "Built With Gemini — Nano Banana", role: "Speaker", date: "September 28, 2026", contribution: "Spoke at Built With Gemini on Nano Banana." },
    { name: "Google Gemini Event", role: "Google Gemini Student Ambassador", date: "September 28, 2026", contribution: "Took part in a Google Gemini event as a Student Ambassador." },
    { name: "Fund My Crazy", role: "Speaker", date: "August 31, 2026", contribution: "Spoke at Fund My Crazy." },
    { name: "Stratex — Technosummit Pitching Event", role: "Participant", date: "September 24, 2026", contribution: "Participated in Stratex, a pitching event under Technosummit." },
    { name: "Build with Gemini", role: "Main Speaker & Student Coordinator", date: "July 27, 2026", contribution: "Led the main talk and coordinated the session as a Google Student Ambassador." },
    { name: "RushHour Hackathon", role: "Participant", date: "July 24–25, 2026", contribution: "Built ResponSync, a three-agent Gemini-powered pipeline for real-time Chennai flood response coordination. Placed fourth with a special mention, leading to an internship offer from Astra Dyne Global." },
    { name: "Hack The Planet '26", role: "Student Coordinator & Volunteer", date: "July 2026", contribution: "Coordinated and volunteered throughout the five-day national cybersecurity event hosted by OWASP Sathyabama." },
    { name: "Gemini Product Trial", role: "Coordinator / Organizer", date: "May–June 2026 · Online", contribution: "Conducted an online Gemini product trial for students as part of the Google Gemini Student Ambassador program." },
    { name: "Obscura CTF", role: "Student Coordinator", date: "April 10, 2026", contribution: "Co-organized a national jeopardy-style cybersecurity CTF alongside WiCyS Sathyabama and RedTeam Hacker Academy." },
    { name: "Vector Zero", role: "Main Speaker & Student Coordinator", date: "March 3, 2026", contribution: "Led the main talk and coordinated the event." },
    { name: "Digital Horizon Conclave", role: "Student Coordinator & Volunteer", date: "February 22, 23 & 25, 2026", contribution: "Coordinated and volunteered across the multi-day national tech symposium covering AI, gaming, XR, robotics, and IoT." },
    { name: "Astro Craft", role: "Student Coordinator & Speaker", date: "February 21, 2026", contribution: "Coordinated the event and spoke as one of the presenters, in partnership with Developer Student Club Sathyabama." },
    { name: "Antigravity", role: "Main Speaker & Student Coordinator", date: "February 2, 2026", contribution: "Delivered the main talk and coordinated the event in partnership with WiCyS Sathyabama." },
    { name: "AI Essentials — Interactive Workshop", role: "Main Speaker & Student Coordinator", date: "November 8, 2025", contribution: "Led and coordinated an interactive workshop introducing AI essentials to students." },
  ] as EventItem[],
  principles: [
    { title: "SHIP SOLO BEFORE SCALING TEAMS", description: "Temple Journey, HabitLoop, Digital Horizon Conclave — I build the full system alone first to prove it works, then bring in a team once the shape is proven." },
    { title: "AGENTS SHOULD COORDINATE, NOT JUST RESPOND", description: "A single prompt is a feature. ResponSync's three-agent pipeline is a system — agents that hand off context, verify each other, and recover when one fails." },
    { title: "PICK PROBLEMS WITH REAL STAKES", description: "Flood response coordination, grievance redressal, attendance for 1,000+ students — I build for urgency and friction, not for demo-day applause." },
    { title: "MEASURE BEFORE YOU CLAIM", description: "A 40% load-time improvement only means something because it was logged. If a dashboard doesn't exist yet, the decision isn't ready to be made." },
    { title: "RESTRUCTURE, DON'T PATCH", description: "When AI Foundry hit an engagement crisis, the fix wasn't more reminders — it was rebuilding the model itself into async sub-team support." },
    { title: "STACK FLUENCY OVER STACK LOYALTY", description: "React, Lovable, n8n, Gemini pipelines — the tool gets chosen by the constraint (team skill, timeline, no-code need), not by habit." },
    { title: "PRUNE THE PORTFOLIO LIKE A CODEBASE", description: "Titles and roles that don't compound get dropped, same as dead code. Keep what stacks — AI Foundry, HWI, CSI, LoopFound, SynosAI — cut the rest." },
    { title: "RE-INTERVIEW, DON'T INHERIT", description: "Re-interviewing all 60 AI Foundry members across seven sub-teams instead of assuming the existing structure was correct — verify the system before you build on it." },
  ] as PrincipleItem[],
};
