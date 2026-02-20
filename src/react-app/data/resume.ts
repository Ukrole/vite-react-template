export const profile = {
  name: "Zikang Wen",
  title: "PhD Researcher & AI Software Engineer",
  subtitle: "Embodied Intelligence · Federated Learning · Distributed AI Systems",
  location: "Sydney, Australia",
  email: "zikang.wen@sydney.edu.au",
  github: "https://github.com/zikangwen",
  linkedin: "https://linkedin.com/in/zikangwen",
  googleScholar: "https://scholar.google.com",
  instagram: "https://www.instagram.com/fff_zackery/",
  wechat: "W1685870923",
  about: `I am a researcher and AI software engineer working at the intersection of embodied intelligence, distributed systems, wireless digital twins, and large-scale AI systems. My research focuses on building statistically efficient and system-aware AI for distributed environments, including federated learning, edge AI, and real-world cyber-physical systems. Beyond research, I design and develop AI-powered software systems, including AI agents, cloud-native applications, and intelligent web platforms.`,
};

export const education = [
  {
    degree: "PhD (Engineering)",
    institution: "The University of Sydney",
    period: "2026 – Present",
    detail: "Research Training Program (RTP) Scholarship",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Advanced Computing (Honours)",
    institution: "The University of Sydney",
    period: "2022 – 2026",
    detail: "First Class Honours & University Medal · WAM 95",
    icon: "🏅",
  },
];

export const researchInterests = [
  { label: "Embodied Intelligence", icon: "🤖", detail: "AI Agents" },
  { label: "Autonomous AI Agents", icon: "🧠", detail: "LLM-driven Planning" },
  { label: "Federated Learning", icon: "🔗", detail: "Distributed Optimization" },
  { label: "Wireless Digital Twins", icon: "📡", detail: "Cyber-Physical Systems" },
  { label: "Edge & Cloud AI", icon: "☁️", detail: "Infrastructure" },
  { label: "System-Efficient ML", icon: "⚡", detail: "Resource-Aware Learning" },
];

export const publications = [
  {
    id: 1,
    authors: "Z. Wen, N. Yang, Y. Zhang, Y. Li, Z. Yao, H. Chen, and D. Yuan",
    title: "CrossFL: A Cross-Round Federated Learning Framework with Asynchronous Client Selection",
    venue: "Pacific-Asia Conf. Knowledge Discovery and Data Mining (PAKDD)",
    year: 2025,
    pages: "pp. 146–158",
    type: "Conference",
    tags: ["Federated Learning", "Asynchronous Training", "Client Selection"],
  },
  {
    id: 2,
    authors: "N. Yang, Z. Wen, Y. Zhang, Y. Li, H. Chen, and D. Yuan",
    title: "MosaicUFL: A Fine-Grained Unlabeled Client Selection Framework for Efficient Federated Learning",
    venue: "IEEE Int. Parallel and Distributed Processing Symp. (IPDPS)",
    year: 2026,
    pages: "",
    type: "Conference",
    tags: ["Federated Learning", "Unlabeled Data", "Client Selection"],
  },
];

export const projects = [
  {
    title: "Smart Home AI Agent",
    org: "Konnext · Sydney",
    description:
      "Designed and implemented an LLM-driven intelligent agent for smart home automation. The system integrates real-time device control, multi-user identity recognition, and personalized behavior modeling to enable adaptive and context-aware automation.",
    tags: ["LLM", "AI Agent", "IoT", "Real-time Control"],
    icon: "🏠",
    highlight: true,
  },
  {
    title: "Wireless Digital Twin (WirelessDT)",
    org: "IDLSYS Lab · The University of Sydney",
    description:
      "Developed an interactive wireless digital twin system for distributed real-world scenario reconstruction. The platform supports wireless data collection, real-time monitoring, and remote access for system analysis and performance evaluation.",
    tags: ["Digital Twin", "IoT", "Real-time Monitoring", "Distributed Systems"],
    icon: "📡",
    highlight: true,
  },
  {
    title: "AI Travel Planning Agent",
    org: "IDLSYS Lab · The University of Sydney",
    description:
      "Built an AI-powered travel planning assistant leveraging large language models for itinerary optimization and user preference modeling. The system provides context-aware, personalized travel recommendations.",
    tags: ["LLM", "AI Agent", "NLP", "Personalization"],
    icon: "✈️",
    highlight: false,
  },
  {
    title: "Interactive Degree Planning Tool",
    org: "Digital Innovation TechLab · The University of Sydney",
    description:
      "Designed and deployed a full-stack web application providing personalized degree planning recommendations via an LLM-powered chatbot. Integrates React frontend, Django backend, PostgreSQL database, and RAG for context-aware academic guidance.",
    tags: ["Full-Stack", "React", "Django", "PostgreSQL", "RAG", "LLM"],
    icon: "📚",
    highlight: false,
  },
];

export const experience = [
  {
    role: "AI Agent Engineering Intern",
    company: "Konnext AI",
    period: "Dec 2025 – Mar 2026",
    description:
      "Contributed to the development of AI agent systems and cloud-native deployment architectures, focusing on scalable agent orchestration and real-time inference integration.",
    tags: ["AI Agents", "Cloud-Native", "Inference"],
  },
  {
    role: "Teaching Tutor – Introduction to Software Engineering",
    company: "The University of Sydney",
    period: "Feb 2025 – Present",
    description:
      "Delivered tutorials on software engineering principles, version control, and development life cycles. Mentored first-year engineering students in collaborative Git-based projects and conducted code reviews.",
    tags: ["Teaching", "Git", "Software Engineering"],
  },
  {
    role: "Summer Research Intern (Scholarship)",
    company: "The University of Sydney",
    period: "Dec 2024 – Feb 2025",
    description:
      "Conducted research on interactive wireless digital twin systems for distributed real-world reconstruction. Designed and evaluated system architectures integrating IoT sensing, real-time data streaming, and remote monitoring.",
    tags: ["Research", "Digital Twin", "IoT"],
  },
  {
    role: "Software Development & Data Analysis Intern",
    company: "China Mobile Communications",
    period: "Dec 2023 – Jan 2024",
    description:
      "Developed data analytics pipelines and visualization tools using Python and PostgreSQL. Contributed to Agile-based software development as Scrum Master.",
    tags: ["Python", "PostgreSQL", "Agile", "Data Analytics"],
  },
  {
    role: "Programming Tutor",
    company: "Junior Engineers",
    period: "Mar 2023 – Aug 2023",
    description:
      "Designed and delivered introductory programming curriculum for primary students, incorporating robotics and interactive learning approaches.",
    tags: ["Teaching", "Robotics", "Curriculum Design"],
  },
];

export const awards = [
  { title: "Research Training Program (RTP) Scholarship", org: "The University of Sydney", year: 2026 },
  { title: "First Class Honours & University Medal (WAM 95)", org: "The University of Sydney", year: 2026 },
  { title: "Tom Yim Prize", org: "The University of Sydney", year: 2025 },
  { title: "Dean's List", org: "The University of Sydney", year: "2023–2025" },
  {
    title: "Microsoft Research Asia Prize",
    org: "Senior Software Development Projects",
    year: 2024,
  },
  { title: "Engineering Vacation Research Internship Scholarship", org: "The University of Sydney", year: 2025 },
  {
    title: "Engineering Vacation Research Internship Accelerated Scholarship",
    org: "The University of Sydney",
    year: 2025,
  },
  { title: "Vice Chancellor's International Scholarship", org: "The University of Sydney", year: 2022 },
];
