// ============================================================================
//  YOUR PORTFOLIO CONTENT — EVERYTHING EDITABLE LIVES IN THIS ONE FILE.
//  Content below is taken from your CV (Nov 2026). Edit freely.
// ============================================================================

export const profile = {
  name: 'Alex Mwera',
  initials: 'AM',
  role: 'Data & AI Engineer',
  // Extra strings cycled by the typing animation in the hero
  typedRoles: ['Data Engineer', 'AI Engineer', 'Cybersecurity Instructor', 'Software Developer'],

  // Optional short line under the typed roles in the hero ('' hides it)
  tagline: '',

  location: 'Nairobi, Kenya',
  phone: '+254 708 696356',
  email: 'alexmwera1@gmail.com',

  // Photo: public/profile-photo.jpg (drop-in replaceable)
  photo: '/profile-photo.jpg',

  socials: {
    linkedin: 'https://www.linkedin.com/in/alex-mwera-222256y/',
    github: '', // set your GitHub URL here (e.g. https://github.com/alexmwera) to show it
    twitter: '', // leave empty to hide the X/Twitter icon
  },
  resumeUrl: '', // e.g. '/Alex-Mwera-CV.pdf' in public/ — leave empty to hide the CV button
}

// ---------------------------------------------------------------------------
// ABOUT — bio, skill progress bars, compact credential list.
// ---------------------------------------------------------------------------
export const about = {
  eyebrow: 'About',
  title: 'Data & AI Engineer',
  // Small identity chips shown under the About heading
  roles: ['Data Engineer', 'AI Engineer', 'Cybersecurity Instructor', 'Software Developer'],
  paragraphs: [
    'Results-driven Data & AI Engineer with expertise in dataset ingestion, ETL/ELT pipeline design, database schema optimization and automated quality assurance benchmarking. Skilled in Python, SQL, Pandas, NumPy and REST API architecture, with practical experience engineering speech datasets at Qhala and processing media datasets at KBC.',
    'I collaborate across data science and software teams to deliver reliable data infrastructure and automated reporting pipelines. Beyond data, I train the next generation of defenders as a Cybersecurity Instructor at CyberPro Global — live-fire labs, SOC operations and CTF hackathons — and ship end-to-end products as a Software Developer at IWAZOLAB.',
  ],
  skills: [
    { name: 'Python · SQL · Pandas', pct: 90 },
    { name: 'Data Engineering (ETL/ELT, Pipelines, QA)', pct: 88 },
    { name: 'Machine Learning & AI (ASR, NLP, RAG)', pct: 80 },
    { name: 'Cybersecurity (SOC, Pentesting, Linux)', pct: 75 },
  ],
  education: [
    { title: 'BSc Computer Science', meta: 'Daystar University · Sep 2022 — Nov 2026' },
    { title: 'Certification in Artificial Intelligence', meta: 'Moringa School · 2026' },
    { title: 'Certification in Data Science', meta: 'Moringa School · 2024 — 2025' },
    { title: 'Certification in Cybersecurity', meta: 'CyberPro Global · 2024 — 2025' },
    { title: 'Awards', meta: 'Machakos HackFest 2025 Winner · 1st Place Blockchain Track, MKSU Hackfest (Google Developers) · People\u2019s Choice 1st Place, NASA Space Apps Hackathon' },
    { title: 'Languages', meta: 'English (Fluent) · Kiswahili (Fluent)' },
  ],
}

// ---------------------------------------------------------------------------
// CAREER HIGHLIGHTS — pricing-table-style cards (like the reference site).
// featured: the middle card pops with a shadow + red accents.
// ---------------------------------------------------------------------------
export const networth = [
  { label: 'Hackathon Wins', value: '3', suffix: '× 1st place', featured: false },
  { label: 'Organizations', value: '6', suffix: 'teams served', featured: true },
  { label: 'Certifications', value: '3', suffix: 'specializations', featured: false },
]

// ---------------------------------------------------------------------------
// ACCOMPLISHMENTS — alternating timeline cards.
// period: shown OUTSIDE the card in red uppercase (dates/years).
// ---------------------------------------------------------------------------
export const experience = [
  {
    period: 'Nov 2026',
    role: 'Graduated — BSc Computer Science',
    org: 'Daystar University',
    summary:
      'Graduated with a Bachelor of Science in Computer Science — key focus: algorithms, data structures, software engineering, database systems, operating systems, computer networks and cybersecurity. Served as President of the Daystar IT Association (2025–2026) along the way.',
  },
  {
    period: '2026 — Present',
    role: 'Cybersecurity Instructor',
    org: 'CyberPro Global',
    summary:
      'Deliver hands-on, live-fire cybersecurity training and cohort instruction aligned with industry certifications across foundational, intermediate and advanced tracks. Guide learners through browser-based virtual labs covering SOC Operations, Network Defense (RIP/OSPF routing & VLANs), Linux Server Hardening and AI Threat Testing sandboxes. Organized the Kenya National Cybersecurity Hackathon 2026 and mentor students in CTF hackathons, vulnerability assessment and practical threat mitigation.',
  },
  {
    period: 'Jan 2026 — Present',
    role: 'Software Developer',
    org: 'IWAZOLAB',
    summary:
      'Architect and deploy end-to-end web applications and software solutions, directing frontend and backend development initiatives. Design scalable agentic workflows and robust development pipelines for reliable software deployment and lifecycle management. Drive technical research by establishing performance benchmarks, evaluation metrics and code testing across varied architectures.',
  },
  {
    period: 'Jan 2026 — Oct 2026',
    role: 'Data Engineer & Quality Assurance',
    org: 'QHALA',
    summary:
      'Researched and built foundational data components for Afrolingo, an Afrocentric low-resource language model. Led ASR dataset creation, annotation workflows and QA verification, optimizing data pipelines for Afrocentric speech models. Executed rigorous model-weights benchmarking and QA testing for Hakii AI across legal AI pipelines, and co-engineered BodaCare — an AI-driven digital health innovation for the informal transport sector.',
  },
  {
    period: 'Aug 2025 — Present',
    role: 'Volunteer Developer & Researcher',
    org: 'Daystar University Centre for AI, Modeling & Digital Trust (DCAMD)',
    summary:
      'Build and maintain research and learning tools using React, Django and Python. Collaborate on AI-driven projects including NLP tools, RAG pipelines and data analytics dashboards.',
  },
  {
    period: '2025 — 2026',
    role: 'President',
    org: 'Daystar IT Association',
    summary:
      'Led strategy and execution of technology initiatives, coordinating student teams and organizing impactful tech events promoting innovation, peer collaboration and skill development.',
  },
  {
    period: '2025',
    role: 'Data Scientist',
    org: 'Kenya Broadcasting Corporation (KBC)',
    summary:
      'Applied machine learning and statistical methods to analyze complex datasets, build predictive models and optimize system performance.',
  },
]

// ---------------------------------------------------------------------------
// PORTFOLIO — cards with filter chips. category drives the filter row.
// image: optional screenshot path in public/ (placeholder shown otherwise).
// link: where the "+" button goes (empty string = no link yet).
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: 'ETENDERX',
    category: 'Blockchain',
    tags: ['AI', 'Blockchain', 'E-Procurement'],
    image: '',
    short: 'ETX',
    link: '',
    description:
      'Winner of Machakos HackFest 2025. Trustless, transparent e-tendering platform automating supplier vetting and unbiased evaluation through blockchain data integrity.',
  },
  {
    title: 'Afrolingo Speech Datasets',
    category: 'AI / ML',
    tags: ['ASR', 'Python', 'QA'],
    image: '',
    short: 'ASR',
    link: '',
    description:
      'Foundational data components for Afrolingo, an Afrocentric low-resource language model — ASR dataset creation, annotation workflows and quality assurance at Qhala.',
  },
  {
    title: 'Hakii AI',
    category: 'AI / ML',
    tags: ['Legal AI', 'Benchmarking', 'QA'],
    image: '',
    short: 'HAK',
    link: 'https://hakii.ai/for-organizations',
    description:
      'Model-weights benchmarking and QA testing evaluating performance, linguistic accuracy and standard alignment across legal AI pipelines.',
  },
  {
    title: 'BodaCare',
    category: 'Health Tech',
    tags: ['Digital Health', 'AI', 'MVP'],
    image: '',
    short: 'BCR',
    link: '',
    description:
      'AI-driven digital health innovation providing accessible health-tech tracking for the informal transport sector. Co-engineered and QA-tested at Qhala.',
  },
  {
    title: 'AstroGenesis',
    category: 'Web Apps',
    tags: ['React', 'Django'],
    image: '',
    short: 'AST',
    link: '',
    description:
      'Featured web platform from my software engineering work at IWAZOLAB, alongside active participation in MLH Hackathons, Kaggle competitions, TryHackMe and HackTheBox.',
  },
]

// ---------------------------------------------------------------------------
// MENTIONS — "Featured In" cards inside the Portfolio section.
// Each entry: press article / newsletter that names Alex.
// ---------------------------------------------------------------------------
export const mentions = [
  {
    title: 'School of Mission and Theology Train in AI Literacy Tools for Ministry and Teaching',
    source: 'Daystar University Profiles',
    date: '',
    image: '/images/mention-ai-literacy.jpg',
    excerpt:
      'Facilitated AI literacy and AI-tools training for faculty at the Nairobi Campus, representing the School of Science, Engineering and Health (SSEH) and DCAMD.',
    link: 'https://profiles.daystar.ac.ke/blog/school-of-mission-and-theology-train-in-ai-literacy-tools-for-ministry-and-teaching',
  },
  {
    title: 'Blockchain Track Winner — MKSU Hackfest 2025 (Predators Team)',
    source: 'MKSU Connect Newsletter, Machakos University',
    date: 'Oct 2025',
    image: '/images/mention-mksu-hackfest.jpg',
    excerpt:
      'Named with the Predators Team — all Daystar University — as Blockchain Track Winner at the MKSU Hackfest with Google Developers.',
    link: 'https://mksu.ac.ke/wp-content/uploads/2026/01/Issue-118.pdf.pdf',
  },
  {
    title: 'DITA Hosts Career Talk, Equips Students in Tech',
    source: 'Daystar University Blog',
    date: '',
    image: '/images/mention-dita-career-talk.jpg',
    excerpt:
      'Delivered the welcome and opening remarks as DITA President at the career talk held in the ICT Theatre, Main Campus Athi River.',
    link: 'https://www.daystar.ac.ke/blog/posts/473/dita-hosts-career-talk-equips-for-students-in-tech.html',
  },
]

// ---------------------------------------------------------------------------
// GALLERY — "Moments" photo grid shown under the Portfolio projects.
// src: photo path in public/ (optimize new photos with
//   node scripts/optimize-photo.mjs <input> public/images/<name>.jpg 900)
// ---------------------------------------------------------------------------
export const gallery = [
  {
    src: '/images/graduation.jpg',
    title: 'Graduation — Daystar University',
    date: 'Nov 2026',
  },
  {
    src: '/images/kenya-cyber-hackathon-2026.jpg',
    title: 'Kenya National Cybersecurity Hackathon 2026',
    date: '2026',
  },
  {
    src: '/images/merishaw-academy-launch.jpg',
    title: 'Merishaw Cybersecurity Academy Launch',
    date: '',
  },
  {
    src: '/images/cyberweek-ai-workshop.jpg',
    title: 'Cyberweek Pre-AI Workshop',
    date: '',
  },
  {
    src: '/images/cyberweek-event.jpg',
    title: 'Cyberweek Event',
    date: '',
  },
  {
    src: '/images/mindhyve-ai-launch.jpg',
    title: 'Mindhyve AI Launch in Kenya',
    date: '',
  },
  {
    src: '/images/google-devs-hackathon-2025.jpg',
    title: 'Google Developers Hackathon Champions',
    date: '2025',
  },
  {
    src: '/images/hakii-ai-to-the-world.jpg',
    title: 'Hakii AI to the World',
    date: '',
  },
  {
    src: '/images/nasa-spaceapps-2025.jpg',
    title: 'NASA Space Apps Hackathon',
    date: '2025',
  },
]

// ---------------------------------------------------------------------------
// QUOTES — carousel on the red band (authorTitle = small caption).
// ---------------------------------------------------------------------------
export const quotes = [
  {
    text: 'Without data, you are just another person with an opinion.',
    author: 'W. Edwards Deming',
    authorTitle: 'Statistician',
  },
  {
    text: 'The goal is to turn data into information, and information into insight.',
    author: 'Carly Fiorina',
    authorTitle: 'Former CEO, Hewlett-Packard',
  },
  {
    text: 'Data is a precious thing and will last longer than the systems themselves.',
    author: 'Tim Berners-Lee',
    authorTitle: 'Inventor of the Web',
  },
]

// ---------------------------------------------------------------------------
// ARTICLES — blog-style cards. Keep the array empty [] to hide the section.
// Add your posts: { title, source, date, excerpt, link, image? }
// ---------------------------------------------------------------------------
export const articles = []

// Navigation menu
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Accomplishments', href: '#accomplishments' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Quotes', href: '#quotes' },
  { label: 'Contact', href: '#contact' },
]
