import resumePdf from '../Shravan-Seth-Resume.pdf';

export const initialData = {
  personalInfo: {
    name: "Shravan Seth",
    headline: "Software Development Engineer",
    roleAtCompany: "SDE @ Myntra",
    location: "Bangalore, India",
    tagline: "Engineering high-performance mobile architectures and scalable full-stack applications.",
    bio: "Software Engineer with deep experience building mission-critical mobile platforms and scalable web systems. Currently working as an SDE at Myntra, enhancing iOS & Android applications serving millions of users.",
    resumeUrl: resumePdf,
    email: "seth.shrvn@gmail.com",
    phone: "+91 98311 00765",
    socials: {
      github: "https://github.com/ShravanSeth",
      linkedin: "https://www.linkedin.com/in/shravan-seth-0ab01a193/",
      twitter: "https://twitter.com/sh_ravvy",
      instagram: "https://www.instagram.com/shravanseth_/",
      behance: "https://www.behance.net/gallery/141381477/One-Hundred-Strings"
    }
  },
  experiences: [
    {
      id: 1,
      role: "Software Development Engineer",
      company: "Myntra",
      period: "September 2024 - Present",
      location: "Bangalore, India",
      type: "Work",
      description: "Contributing to the mobile platform architecture for Myntra's iOS & Android applications. Implementing high-impact product features, optimizing bundle size, enhancing native bridges, and ensuring top-tier app stability and runtime performance for millions of daily active shoppers.",
      tech: ["React Native", "iOS Native", "Android Native", "JavaScript", "Performance Optimization"],
      current: true
    },
    {
      id: 2,
      role: "Software Development Engineer",
      company: "CareerCarve",
      period: "January 2023 - September 2024",
      location: "India",
      type: "Work",
      description: "Spearheaded frontend engineering for the AI Resume Builder and CareerCarve web and mobile apps (React & React Native). Engineered real-time video conferencing using 100ms, push notification pipelines with Firebase, automated CI/CD builds with Expo EAS & AWS S3, and implemented granular app telemetry via Google Analytics.",
      tech: ["React", "React Native", "Node.js", "AWS S3", "Expo EAS", "Firebase", "100ms Video SDK", "Google Analytics"],
      link: "https://play.google.com/store/apps/details?id=com.careercarve",
      linkText: "Play Store App"
    },
    {
      id: 3,
      role: "Fullstack App Developer Intern",
      company: "Booknabe",
      period: "September 2021 - February 2022",
      location: "Remote",
      type: "Work",
      description: "Designed and built an interactive book-exchange mobile application connecting avid readers in local communities. Deployed live to Google Play Store with real-time book discovery, chat, and location-based filters.",
      tech: ["Flutter", "Dart", "Firebase Cloud Firestore", "REST APIs"],
      link: "https://play.google.com/store/apps/details?id=com.booknabe.app",
      linkText: "Play Store App"
    },
    {
      id: 4,
      role: "Junior Web Developer Intern",
      company: "The Black Lover",
      period: "July 2020 - January 2021",
      location: "India",
      type: "Work",
      description: "Engineered full-stack eCommerce web platform and user checkout flow using Django. Designed clean user interfaces and interactive shopping catalogue.",
      tech: ["Django", "Python", "PostgreSQL", "UI/UX Design", "HTML5/CSS3"],
      link: "https://theblacklover.com/",
      linkText: "Live Application"
    },
    {
      id: 5,
      role: "Technology Intern",
      company: "Cibertrix Technologies",
      period: "May 2020 - July 2020",
      location: "India",
      type: "Work",
      description: "Collaborated on web application development with Node.js and Django backends. Maintained communication between developer teams and external client stakeholders.",
      tech: ["Node.js", "Django", "JavaScript", "REST APIs"]
    },
    {
      id: 6,
      role: "B.Tech in Information Technology",
      company: "Institute of Engineering and Management (IEM)",
      period: "July 2019 - June 2023",
      location: "India",
      type: "Education",
      description: "Graduated with comprehensive coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Design.",
      tech: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Software Engineering"]
    }
  ],
  projects: [] // Clean slate as requested; managed via Admin Portal
};

const STORAGE_KEY = "shravan_portfolio_data_v2";

export const getStoredData = () => {
  try {
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      return {
        personalInfo: { ...initialData.personalInfo, ...(parsed.personalInfo || {}) },
        experiences: parsed.experiences || initialData.experiences,
        projects: parsed.projects || []
      };
    }
  } catch (err) {
    console.error("Failed to load local portfolio data:", err);
  }
  return initialData;
};

export const saveStoredData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event("portfolio_data_updated"));
    return true;
  } catch (err) {
    console.error("Failed to save portfolio data:", err);
    return false;
  }
};

export const resetStoredData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("portfolio_data_updated"));
    return true;
  } catch (err) {
    console.error("Failed to reset portfolio data:", err);
    return false;
  }
};

export const personalInfo = initialData.personalInfo;
export const experiences = initialData.experiences;
export const projects = initialData.projects;
