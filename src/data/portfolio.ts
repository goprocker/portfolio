export interface CollabItem {
  id: string;
  partner: string;
  partnerType: "Open Source Org" | "Startup" | "Tech Studio" | "Research Team";
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  link?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  asciiLogo?: string;
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

export const PORTFOLIO_DATA = {
  developer: {
    name: "GOPINATH",
    handle: "goprocker",
    title: "AI & ML Engineer",
    alias: "gopinath@chennai",
    email: "gopinath2638@gmail.com",
    github: "https://github.com/goprocker",
    linkedin: "https://www.linkedin.com/in/gopiNATH2638",
    twitter: "",
    location: "Chennai, India",
    status: " OPEN FOR INTERNSHIPS & COLLABORATIONS",
    CLI_EMOJI: "🤖",
    palette: ["#0f0f0f", "#ef4444", "#22c55e", "#eab308", "#3b82f6", "#a855f7", "#06b6d4", "#f8fafc"],
    bio: "CSE (AI) student, co-founder at LoopFound, and lead of a 60-member student AI community. I build agentic AI systems for unglamorous, high-stakes problems such as flood response and grievance redressal. I’m interested in the intersection of AI assistants, automation, and real-time systems—and in shipping work that matters.",
    quote: '"Build things that ship, not just prototypes that impress."',
    asciiBanner: `
   ██████╗  ██████╗ ██████╗ ██╗███╗   ██╗ █████╗ ████████╗██╗  ██╗
  ██╔════╝ ██╔═══██╗██╔══██╗██║████╗  ██║██╔══██╗╚══██╔══╝██║  ██║
  ██║  ███╗██║   ██║██████╔╝██║██╔██╗ ██║███████║   ██║   ███████║
  ██║   ██║██║   ██║██╔═══╝ ██║██║╚██╗██║██╔══██║   ██║   ██╔══██║
  ╚██████╔╝╚██████╔╝██║     ██║██║ ╚████║██║  ██║   ██║   ██║  ██║
   ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
`,
    specs: {
      OS: "Chennai, India / CSE (AI)", Kernel: "Agentic AI & automation", Uptime: "Always building",
      Shell: "TypeScript / Python", Terminal: "Astro TUI Portfolio", WM: "LoopFound",
      Editor: "Antigravity", CPU: "Curiosity-driven", Memory: "Tea powered",
    },
  },
  skills: [
    { category: "Languages", icon: "💻", skills: [
      { name: "TypeScript", level: 92, experience: "Primary", tag: "CORE" }, { name: "JavaScript", level: 88, experience: "", tag: "PRO" },
      { name: "Python", level: 88, experience: "", tag: "PRO" }, { name: "Java / C++", level: 75, experience: "DSA", tag: "ACTIVE" },
    ]},
    { category: "AI & Retrieval", icon: "🤖", skills: [
      { name: "Claude / OpenAI / Gemini APIs", level: 90, experience: "", tag: "CORE" }, { name: "LangGraph & Agentic Workflows", level: 88, experience: "", tag: "PRO" },
      { name: "Qdrant / Chroma Vector Search", level: 80, experience: "", tag: "ACTIVE" }, { name: "MCP", level: 82, experience: "", tag: "ACTIVE" },
    ]},
    { category: "Backend & Data", icon: "⚙️", skills: [
      { name: "FastAPI / Node.js", level: 86, experience: "", tag: "PRO" }, { name: "PostgreSQL / Supabase", level: 84, experience: "", tag: "PRO" },
      { name: "MongoDB / Prisma ORM", level: 78, experience: "", tag: "ACTIVE" }, { name: "REST APIs / WebSocket", level: 85, experience: "", tag: "PRO" },
    ]},
    { category: "Frontend & Automation", icon: "⚡", skills: [
      { name: "React / Next.js", level: 88, experience: "", tag: "PRO" }, { name: "Tailwind CSS / Vite", level: 88, experience: "", tag: "PRO" },
      { name: "n8n / GitHub Actions", level: 80, experience: "", tag: "ACTIVE" }, { name: "Docker / Redis", level: 76, experience: "", tag: "ACTIVE" },
    ]},
  ] as SkillCategory[],
  collabs: [
    { id: "responsesync", partner: "RushHour Hackathon", partnerType: "Research Team", title: "ResponSync", role: "Team Builder", period: "2026", status: "COMPLETED", description: "A three-agent Gemini-powered pipeline for real-time flood response coordination in Chennai. Placed fourth with a special mention and led to an internship offer from Astra Dyne Global.", contributions: ["Designed a multi-agent flood-response workflow.", "Built real-time coordination tooling for urgent response."], techStack: ["Gemini API", "Python", "Agentic Workflows"], link: "https://responsesync.ai.studio/", asciiLogo: "[ RESPONSYNC ]\nFlood response, coordinated." },
    { id: "sist-form", partner: "Sathyabama Institute", partnerType: "Tech Studio", title: "SIST Event Form Maker", role: "Builder", period: "2026", status: "COMPLETED", description: "A form-builder tool for Sathyabama event management, created with Lovable.", contributions: ["Built an accessible event form creation flow.", "Delivered a no-code operations tool."], techStack: ["Lovable", "No-code AI"], link: "https://sisteventformmaker.lovable.app/", asciiLogo: "[ SIST ]\nEVENT FORM MAKER" },
    { id: "p2pskill", partner: "Independent", partnerType: "Startup", title: "P2PSkill", role: "Builder", period: "2025", status: "ONGOING", description: "A peer-to-peer skill-exchange platform for people who want to trade skills directly.", contributions: ["Built the full-stack exchange platform.", "Designed the user and matching experience."], techStack: ["React", "Node.js", "MongoDB", "Vercel", "Render"], asciiLogo: "[ P2P SKILL ]\nLearn. Trade. Grow." },
    { id: "dhc", partner: "Sathyabama School of Computing", partnerType: "Tech Studio", title: "Digital Horizon Conclave 2026", role: "Solo Developer", period: "2026", status: "COMPLETED", description: "Official national technical symposium site spanning AI, gaming, XR, robotics, and IoT, with a dark futuristic visual system and a physics-based fluid hover-reveal hero.", contributions: ["Designed and built the event experience solo.", "Created a custom interactive WebGL hero."], techStack: ["Next.js 16", "React 19", "Tailwind 4", "Framer Motion", "WebGL"], link: "https://digital-horizon-conclave-2026.vercel.app/", asciiLogo: "[ DHC 2026 ]\nDIGITAL HORIZON" },
    { id: "conference", partner: "SIST", partnerType: "Tech Studio", title: "Conference Website Template", role: "Solo Developer", period: "2026", status: "COMPLETED", description: "A reusable conference website covering registration, submissions, committees, publications, schedules, and venue information.", contributions: ["Built a production-ready reusable template.", "Added polished scrolling and interaction design."], techStack: ["Next.js 16", "React 19", "Tailwind 4", "GSAP", "Lenis"], link: "https://sist-confdemo.vercel.app/", asciiLogo: "[ CONF TEMPLATE ]\nREADY TO DEPLOY" },
    { id: "habitloop", partner: "Independent", partnerType: "Startup", title: "HabitLoop", role: "Solo Developer", period: "2026", status: "COMPLETED", description: "A habit-tracking web app that helps people maintain daily habits through consistent check-ins.", contributions: ["Built the end-to-end habit tracking experience.", "Integrated Supabase for persistent user data."], techStack: ["React", "TypeScript", "Vite", "Supabase"], link: "https://habit-loop-seven.vercel.app/", asciiLogo: "[ HABIT LOOP ]\nCHECK IN. SHOW UP." },
  ] as CollabItem[],
  ambassadorExperience: [
    { organization: "Google", role: "Google Gemini Student Ambassador (GID: 2500)", period: "May 2026 – September 2026", status: "ACTIVE", description: "Representing Google Gemini on campus and driving awareness and adoption of Gemini AI tools among students." },
    { organization: "IIT Delhi", role: "TRYST'26 Campus Ambassador", period: "January 2026 – March 2026", status: "COMPLETED", description: "Represented IIT Delhi's TRYST'26 techfest on campus, driving student registrations and event awareness." },
    { organization: "SRM Institute of Science and Technology", role: "Aaruush Ambassador", period: "June 2026 – Present", status: "ACTIVE", description: "Representing SRM's Aaruush techfest on campus and driving student participation." },
    { organization: "Paytm", role: "Student Ambassador", period: "April 2026 – Present", status: "ACTIVE", description: "Representing Paytm on campus as a student ambassador." },
    { organization: "Tresend", role: "Student Ambassador", period: "June 2026 – Present", status: "ACTIVE", description: "Driving awareness and adoption of Tresend within the campus community." },
    { organization: "Techfest Bombay", role: "Campus Ambassador", period: "July 2026 – Present", status: "ACTIVE", description: "Representing Techfest Bombay on campus and building awareness among students." },
    { organization: "Cloud Junction", role: "Campus Ambassador", period: "July 2026 – Present", status: "ACTIVE", description: "Representing Cloud Junction on campus and connecting students with its community and opportunities." },
  ] as ExperienceItem[],
  experience: [
    { organization: "LoopFound", role: "Co-Founder & CMO", period: "August 2025 – Present", status: "ACTIVE", description: "Co-founded a web development agency, leading marketing and growth while building internal tools such as referral tracking and financial dashboards for client operations." },
    { organization: "AI Foundry '29", role: "Founder & Lead", period: "2025 – Present", status: "ACTIVE", description: "Built and lead a 60+ member student AI community across seven sub-teams, with structured technical curricula and a leadership selection process." },
    { organization: "SynosAI", role: "Frontend/UI Developer Intern", period: "2026 – Present", status: "ACTIVE", description: "Building frontend interfaces for a food ordering automation platform as part of Team 3, using React, Tailwind, Vite, and WebSocket." },
    { organization: "HWI Club (HackWithIndia), Sathyabama", role: "Incoming President · Previously Chapter Lead", period: "2026 – Present", status: "ACTIVE", description: "Leading campus hackathon and community-building initiatives at Sathyabama." },
    { organization: "WiCyS Sathyabama", role: "Technical & Media Team Member", period: "November 2025 – Present", status: "COMPLETED", description: "Co-organized Obscura CTF, a national jeopardy-style cybersecurity event, with RedTeam Hacker Academy." },
    { organization: "OWASP Sathyabama", role: "Design Team Member", period: "April 2026 – Present", status: "ACTIVE", description: "Contributed design and coordination support for initiatives including Hack The Planet, a five-day national cybersecurity event." },
    { organization: "DSC Sathyabama", role: "Design Team Member", period: "February 2026 – Present", status: "ACTIVE", description: "Contributed design work for community initiatives." },
    { organization: "AWS Student Builder Group", role: "Design Team Member", period: "July 2026 – Present", status: "ACTIVE", description: "Contributed design work for the Sathyabama student builder community." },
    { organization: "ACM Sathyabama", role: "Technical Team Member", period: "March 2026 – Present", status: "ACTIVE", description: "Contributed technical support for student community initiatives." },
    { organization: "Salted_dscripts", role: "Editor", period: "February 2026 – Present", status: "ACTIVE", description: "Edited content for the Salted_dscripts publication." },
    { organization: "Microsoft Club, Sathyabama", role: "Web & App Development Domain Member", period: "August 2026 – Present", status: "ACTIVE", description: "Selected for the Web and App Development domain for the 2026–27 term." },
  ] as ExperienceItem[],
  internships: [
    { organization: "VR Media Network", role: "AI Developer Intern", period: "May 2026 – June 2026 · Chennai, Tamil Nadu, India · On-site", status: "COMPLETED", description: "Completed an on-site AI Developer internship with VR Media Network." },
  ] as ExperienceItem[],
  events: [
    { name: "RushHour Hackathon", role: "Participant", date: "July 24–25, 2026", contribution: "Built ResponSync, a three-agent Gemini-powered pipeline for real-time Chennai flood response coordination. Placed fourth with a special mention, leading to an internship offer from Astra Dyne Global." },
    { name: "Obscura CTF", role: "Student Coordinator", date: "April 10, 2026", contribution: "Co-organized a national jeopardy-style cybersecurity CTF alongside WiCyS Sathyabama and RedTeam Hacker Academy." },
    { name: "AI Essentials — Interactive Workshop", role: "Main Speaker & Student Coordinator", date: "November 8, 2025", contribution: "Led and coordinated an interactive workshop introducing AI essentials to students." },
    { name: "Antigravity", role: "Main Speaker & Student Coordinator", date: "February 2, 2026", contribution: "Delivered the main talk and coordinated the event in partnership with WiCyS Sathyabama." },
    { name: "Astro Craft", role: "Student Coordinator & Speaker", date: "February 21, 2026", contribution: "Coordinated the event and spoke as one of the presenters, in partnership with Developer Student Club Sathyabama." },
    { name: "Digital Horizon Conclave", role: "Student Coordinator & Volunteer", date: "February 22, 23 & 25, 2026", contribution: "Coordinated and volunteered across the multi-day national tech symposium covering AI, gaming, XR, robotics, and IoT." },
    { name: "Vector Zero", role: "Main Speaker & Student Coordinator", date: "March 3, 2026", contribution: "Led the main talk and coordinated the event." },
    { name: "Gemini Product Trial", role: "Coordinator / Organizer", date: "May–June 2026 · Online", contribution: "Conducted an online Gemini product trial for students as part of the Google Gemini Student Ambassador program." },
    { name: "Hack The Planet '26", role: "Student Coordinator & Volunteer", date: "July 2026", contribution: "Coordinated and volunteered throughout the five-day national cybersecurity event hosted by OWASP Sathyabama." },
    { name: "Build with Gemini", role: "Main Speaker & Student Coordinator", date: "July 27, 2026", contribution: "Led the main talk and coordinated the session as a Google Student Ambassador." },
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
  commands: [
    { name: "help", desc: "List all available terminal commands", usage: "help [or man]" },
    { name: "about", desc: "Display bio & summary", usage: "about [or cat/type bio.txt]" },
    { name: "skills", desc: "Display skill proficiency meters", usage: "skills [--list]" },
    { name: "projects", desc: "Display projects & collabs", usage: "projects [--featured]" },
    { name: "experience", desc: "Display leadership, internship & club experience", usage: "experience [or work]" },
    { name: "portfolio", desc: "Windows portfolio runner with CLI flags", usage: "portfolio <--about|--skills|--projects|--experience|--contact>" },
    { name: "dir", desc: "List files & sections (Windows PowerShell style)", usage: "dir" },
    { name: "type", desc: "Display file content (Windows CMD/PowerShell style)", usage: "type <about.txt|bio.txt|resume.txt|...>" },
    { name: "cd", desc: "Change virtual directory path", usage: "cd <portfolio|projects|skills|experience|..>" },
    { name: "github", desc: "Open GitHub profile & repositories", usage: "github" },
    { name: "status", desc: "Display current building status", usage: "status" },
    { name: "stats", desc: "Display developer metrics & impact stats", usage: "stats [or metrics]" },
    { name: "ai", desc: "Ask the built-in Jarvis AI assistant", usage: "ai <question about Gopinath>" },
    { name: "arch", desc: "Display Agentic AI system architecture", usage: "arch [or architecture]" },
    { name: "confetti", desc: "Trigger victory celebration confetti 🎉", usage: "confetti [or celebrate]" },
    { name: "hack", desc: "Simulate agentic cyber penetration matrix", usage: "hack" },
    { name: "calc", desc: "Terminal math calculator", usage: "calc <expression>" },
    { name: "joke", desc: "Display developer humor & programming joke", usage: "joke" },
    { name: "sound", desc: "Play synthesizer sound effects", usage: "sound <beep|laser|powerup>" },
    { name: "random-theme", desc: "Switch to a random visual theme", usage: "random-theme" },
    { name: "exit", desc: "Exit CLI and switch to GUI Dashboard", usage: "exit [or quit]" },
    { name: "internships", desc: "Display internship experience", usage: "internships [or internship]" },
    { name: "events", desc: "Display speaking, organizing & participation history", usage: "events [or event]" },
    { name: "ambassadors", desc: "Display ambassador roles", usage: "ambassadors [or ambassador]" },
    { name: "companies", desc: "List companies, clubs & colleges worked with", usage: "companies [or orgs]" },
    { name: "principles", desc: "Display core engineering & building principles", usage: "principles [or cat principles.md]" },
    { name: "focus", desc: "Display current building & learning focus", usage: "focus [or status]" },
    { name: "resume", desc: "View resume & download link", usage: "resume [or cv]" },
    { name: "coffee", desc: "Check developer caffeine reserves ☕", usage: "coffee" },
    { name: "hire-me", desc: "Grant hiring & collaboration access ✓", usage: "hire-me [or sudo hire-me]" },
    { name: "deploy", desc: "Deploy future systems & pipelines 🚀", usage: "deploy [future]" },
    { name: "rm", desc: "Clean and remove legacy interfaces", usage: "rm -rf boring-ui" },
    { name: "spotify", desc: "Show live Spotify playing status", usage: "spotify [or np]" },
    { name: "games", desc: "Display Discord live gaming activity", usage: "games [or game]" },
    { name: "neofetch", desc: "Display profile system specs", usage: "neofetch [or fetch]" },
    { name: "whoami", desc: "Display visitor session details", usage: "whoami" },
    { name: "tree", desc: "Display directory structure tree", usage: "tree" },
    { name: "date", desc: "Display current date & system time", usage: "date [or time]" },
    { name: "quote", desc: "Display random developer quote", usage: "quote [or fortune]" },
    { name: "ping", desc: "Ping a host or simulate network latency", usage: "ping <host>" },
    { name: "echo", desc: "Print text to the terminal buffer", usage: "echo <text>" },
    { name: "history", desc: "View command history for this session", usage: "history" },
    { name: "banner", desc: "Display ASCII header banner", usage: "banner [or ascii]" },
    { name: "repo", desc: "Display source code & tech stack info", usage: "repo [or source]" },
    { name: "weather", desc: "Display Chennai local weather status", usage: "weather" },
    { name: "contact", desc: "Display contact information", usage: "contact [or mail]" },
    { name: "links", desc: "Display profile links", usage: "links [or socials]" },
    { name: "theme", desc: "Switch terminal theme", usage: "theme <green|amber|cyan|dracula|mono>" },
    { name: "matrix", desc: "Toggle digital rain", usage: "matrix" },
    { name: "crt", desc: "Toggle CRT scanlines effect", usage: "crt" },
    { name: "sfx", desc: "Toggle audio sound feedback", usage: "sfx" },
    { name: "clear", desc: "Clear terminal buffer", usage: "clear [or cls]" },
    { name: "gui", desc: "Switch to visual GUI dashboard", usage: "gui" },
    { name: "cli", desc: "Switch to terminal CLI mode", usage: "cli" },
    { name: "sudo", desc: "Superuser elevation commands", usage: "sudo <hire-me|cmd>" },
  ],
};
