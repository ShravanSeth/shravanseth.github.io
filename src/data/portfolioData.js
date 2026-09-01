import resumePdf from '../Shravan-Seth-Resume.pdf';

export const personalInfo = {
  name: "Shravan Seth",
  headline: "Software Development Engineer",
  roleAtCompany: "SDE @ Myntra (Apps Core Team)",
  location: "Kolkata / Bengaluru, India",
  tagline: "Engineering high-performance mobile architectures and scalable full-stack applications.",
  bio: "Software Engineer with deep experience building mission-critical mobile platforms and scalable web systems. Currently part of the Apps Core team at Myntra, enhancing iOS & Android applications serving millions of users.",
  resumeUrl: resumePdf,
  email: "shravanseth59@gmail.com",
  phone: "+91 98311 00765",
  socials: {
    github: "https://github.com/ShravanSeth",
    linkedin: "https://www.linkedin.com/in/shravan-seth-0ab01a193/",
    twitter: "https://twitter.com/sh_ravvy",
    instagram: "https://www.instagram.com/shravanseth_/",
    behance: "https://www.behance.net/gallery/141381477/One-Hundred-Strings"
  }
};

export const stats = [
  { value: "Millions+", label: "Daily App Users Impacted" },
  { value: "4+", label: "Years Engineering" },
  { value: "10+", label: "Production Apps & Web Systems" },
  { value: "100%", label: "Commitment to Clean Architecture" }
];

export const experiences = [
  {
    id: 1,
    role: "Software Development Engineer",
    company: "Myntra",
    team: "Apps Core Team",
    period: "September 2024 - Present",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Contributing to core mobile platform architecture for Myntra's iOS & Android applications. Implementing high-impact product features, enhancing native bridge modules, optimizing bundle size, and ensuring top-tier app stability and runtime performance for millions of daily active shoppers.",
    tech: ["React Native", "iOS Native", "Android Native", "JavaScript", "Performance Optimization", "App Core Architecture"],
    current: true
  },
  {
    id: 2,
    role: "Software Development Engineer",
    company: "CareerCarve",
    team: "Engineering",
    period: "January 2023 - September 2024",
    location: "Kolkata, India",
    type: "Full-time",
    description: "Spearheaded frontend engineering for the AI Resume Builder and CareerCarve web and mobile apps (React.js & React Native). Engineered real-time video conferencing using 100ms, push notification pipelines with Firebase, automated CI/CD builds with Expo EAS & AWS S3, and implemented granular app telemetry via Google Analytics.",
    tech: ["React.js", "React Native", "Node.js", "AWS S3", "Expo EAS", "Firebase", "100ms Video SDK", "Google Analytics"],
    link: "https://play.google.com/store/apps/details?id=com.careercarve",
    linkText: "Play Store App"
  },
  {
    id: 3,
    role: "Fullstack App Developer Intern",
    company: "Booknabe",
    team: "Mobile Engineering",
    period: "September 2021 - February 2022",
    location: "Remote",
    type: "Internship",
    description: "Designed and built an interactive book-exchange mobile application connecting avid readers in local communities. Deployed live to Google Play Store with real-time book discovery, chat, and location-based filters.",
    tech: ["Flutter", "Dart", "Firebase Cloud Firestore", "REST APIs"],
    link: "https://play.google.com/store/apps/details?id=com.booknabe.app",
    linkText: "Play Store App"
  },
  {
    id: 4,
    role: "Junior Web Developer Intern",
    company: "The Black Lover",
    team: "Web Team",
    period: "July 2020 - January 2021",
    location: "Kolkata, India",
    type: "Internship",
    description: "Engineered full-stack eCommerce web platform and user checkout flow using Django. Designed clean user interfaces and interactive shopping catalogue.",
    tech: ["Django", "Python", "PostgreSQL", "UI/UX Design", "HTML5/CSS3"],
    link: "https://theblacklover.com/",
    linkText: "Live Application"
  },
  {
    id: 5,
    role: "Technology Intern",
    company: "Cibertrix Technologies",
    team: "Software Development",
    period: "May 2020 - July 2020",
    location: "Kolkata, India",
    type: "Internship",
    description: "Collaborated on web application development with Node.js and Django backends. Maintained communication between developer teams and external client stakeholders.",
    tech: ["Node.js", "Django", "JavaScript", "REST APIs"]
  },
  {
    id: 6,
    role: "B.Tech in Information Technology",
    company: "Institute of Engineering and Management (IEM)",
    team: "Computer Science & IT",
    period: "July 2019 - June 2023",
    location: "Kolkata, India",
    type: "Education",
    description: "Graduated with comprehensive coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Design.",
    tech: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Software Engineering"]
  }
];

export const projects = [
  {
    id: "careercarve",
    title: "CareerCarve Mobile & AI Resume Suite",
    category: "mobile",
    subtitle: "AI-Powered Resume Builder & Mentorship Platform",
    description: "Comprehensive mobile app enabling 1-on-1 video mentorship sessions, resume generation, and career tracking with seamless cloud synchronisation.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1648308202/samples/dev_t1xiby.png",
    tech: ["React Native", "Expo", "AWS S3", "Firebase", "100ms SDK", "Node.js"],
    link: "https://play.google.com/store/apps/details?id=com.careercarve",
    linkText: "View on Play Store",
    featured: true
  },
  {
    id: "booknabe",
    title: "Booknabe — Book Exchange App",
    category: "mobile",
    subtitle: "Peer-to-Peer Book Exchange Community",
    description: "Cross-platform mobile application allowing readers to list books, discover nearby readers, and swap books locally in real-time.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1649493919/WhatsApp_Image_2022-04-09_at_14.14.19_wxgqdy.jpg",
    tech: ["Flutter", "Dart", "Firebase Firestore", "Authentication"],
    link: "https://play.google.com/store/apps/details?id=com.booknabe.app",
    linkText: "Play Store",
    featured: true
  },
  {
    id: "covay",
    title: "COVAY — Emergency Medical Lead Tracker",
    category: "web",
    subtitle: "Crowdsourced Crisis Response Platform",
    description: "High-concurrency web application built during the COVID-19 pandemic to verify and distribute verified oxygen supply leads across Kolkata in real-time.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1649495168/WhatsApp_Image_2022-04-09_at_14.35.55_eluwlb.jpg",
    tech: ["Django", "PostgreSQL", "Python", "Bootstrap", "Heroku"],
    link: "https://www.covay.in",
    linkText: "Live Portal",
    featured: true
  },
  {
    id: "sister-nivedita",
    title: "Sister Nivedita Institute Portal",
    category: "web",
    subtitle: "Full-Stack Educational Institution CMS",
    description: "Dynamic school management portal featuring custom admin dashboards, role-based access control, and automated business mailers.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1649493919/WhatsApp_Image_2022-04-09_at_14.14.19_wxgqdy.jpg",
    tech: ["MongoDB", "Express.js", "Node.js", "EJS", "Cloudinary"],
    link: "http://sisterniveditainstitute.ac.in/",
    linkText: "Live Website",
    featured: false
  },
  {
    id: "zoom-clone",
    title: "Real-Time Video Meet",
    category: "web",
    subtitle: "P2P WebRTC Video Conferencing",
    description: "Interactive video chat system with multi-user rooms, grid layout video streams, and real-time text chat.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1649495853/WhatsApp_Image_2022-04-09_at_14.47.19_oiix39.jpg",
    tech: ["WebRTC", "PeerJS", "Node.js", "Socket.io"],
    link: "https://github.com/ShravanSeth",
    linkText: "Source Code",
    featured: false
  },
  {
    id: "des-onehundredstrings",
    title: "One Hundred Strings — Brand Identity",
    category: "design",
    subtitle: "Cafe Branding & Menu Architecture",
    description: "Complete visual identity, typestyle guidelines, cafe menu cards, and marketing collaterals for a cafe in Salt Lake, Kolkata.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1649629507/6fd6077e-67f0-474c-a8eb-847d760dd219_rhhr6r.jpg",
    tech: ["Figma", "Adobe Illustrator", "Visual Branding", "Typography"],
    link: "https://www.behance.net/gallery/141381477/One-Hundred-Strings",
    linkText: "Behance Case Study",
    featured: true
  },
  {
    id: "des-onebite",
    title: "One Bite — Franchise Collateral",
    category: "design",
    subtitle: "Food Franchise Promotional Assets",
    description: "Immersive poster series, storefront flex banners, promotional cards, and visual identity for franchise expansion in Kolkata.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1649629544/Visiting1_wl4l0z.png",
    tech: ["Photoshop", "Illustrator", "Print Graphics"],
    link: "https://www.behance.net/gallery/141381935/One-Bite",
    linkText: "Behance Case Study",
    featured: false
  },
  {
    id: "des-trustco",
    title: "Trust Co. & Nageshwar — Brand Systems",
    category: "design",
    subtitle: "Packaging & Brand Guidelines",
    description: "Logo designs, packaging mockups, and retail product catalogues for consumer apparel and food brands.",
    image: "https://res.cloudinary.com/shravanseth/image/upload/v1649629593/dpmain_pzvqh8.png",
    tech: ["Logo Design", "Packaging", "Brand Strategy"],
    link: "https://www.behance.net/gallery/141386781/Trust-Co",
    linkText: "Behance Case Study",
    featured: false
  }
];

export const skillCategories = [
  {
    title: "Mobile Platform Engineering",
    skills: [
      { name: "React Native", level: "Expert" },
      { name: "iOS (Native / Bridge)", level: "Advanced" },
      { name: "Android (Native / Bridge)", level: "Advanced" },
      { name: "Flutter & Dart", level: "Proficient" },
      { name: "Expo & EAS", level: "Advanced" },
      { name: "Mobile App Performance", level: "Expert" }
    ]
  },
  {
    title: "Frontend & Web Architecture",
    skills: [
      { name: "React 19 / 18", level: "Expert" },
      { name: "TypeScript / JavaScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Redux Toolkit / Zustand", level: "Advanced" },
      { name: "HTML5 / Modern CSS", level: "Expert" },
      { name: "REST & WebSocket Integration", level: "Advanced" }
    ]
  },
  {
    title: "Backend & Cloud Services",
    skills: [
      { name: "Node.js & Express", level: "Advanced" },
      { name: "Django & Python", level: "Proficient" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "AWS (S3 / Cloud Architecture)", level: "Proficient" },
      { name: "Firebase (Auth / Firestore / Cloud Messaging)", level: "Advanced" }
    ]
  },
  {
    title: "Engineering Tools & Design",
    skills: [
      { name: "Git & GitHub CI/CD", level: "Expert" },
      { name: "Webpack & Vite", level: "Advanced" },
      { name: "Figma (UI/UX Systems)", level: "Advanced" },
      { name: "Postman & API Design", level: "Expert" },
      { name: "Adobe Creative Suite", level: "Proficient" }
    ]
  }
];
