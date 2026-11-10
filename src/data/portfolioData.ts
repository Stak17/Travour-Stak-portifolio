export interface Project {
  id: string;
  title: string;
  category: 'Fullstack' | 'Web' | 'Mobile' | 'Systems';
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlight: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  year: string;
  award: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    preferredName: string;
    title: string;
    university: string;
    degree: string;
    classOfDegree: string;
    graduationDate: string;
    regNo: string;
    email: string;
    altEmail: string;
    phone: string;
    altPhone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    location: string;
    objective: string;
    photos: {
      suit: string;
      graduation: string;
      blackSuit: string;
    };
    stats: {
      totalCredits: string;
      projectsCompleted: string;
      experienceYears: string;
    };
  };
  skills: Array<{
    category: string;
    skills: string[];
  }>;
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  references: Array<{
    name: string;
    title: string;
    phone: string;
  }>;
  services: Service[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Kateregga Joseph Travour",
    preferredName: "Kateregga (Travour Stak) Joseph Travour",
    title: "Computer Science Graduate & IT Support Specialist",
    university: "Uganda Martyrs University, Nkozi",
    degree: "Bachelor of Science in Computer Science",
    classOfDegree: "Second Class Honours - Upper Division",
    graduationDate: "October 18, 2026",
    regNo: "2023-B291-10199",
    email: "travourstak22@gmail.com",
    altEmail: "katereggajosephtravour17@gmail.com",
    phone: "+256 726 053473",
    altPhone: "+256 771 263217",
    whatsapp: "+256726053473",
    github: "https://github.com/Stak17",
    linkedin: "https://linkedin.com/in/travour-stak",
    instagram: "https://instagram.com/ruovartstak",
    tiktok: "https://tiktok.com/@tstak27",
    location: "Kampala, Central Region, Uganda",
    objective: "Motivated and Detail-oriented Computer Science graduate seeking an opportunity to leverage hands-on experience in IT support, system maintenance, and foundational software development. Eager to apply practical skills in troubleshooting, database concepts, and system design within a technology-driven organization to contribute to operational efficiency and innovative software solutions.",
    photos: {
      suit: "/assets/aistudio/IMG-20261024-WA0007_a4f314e5.jpg",
      graduation: "/assets/aistudio/IMG-20261024-WA0010_fb2b7df2.jpg",
      blackSuit: "/assets/aistudio/IMG-20261024-WA0007_a4f314e5.jpg"
    },
    stats: {
      totalCredits: "147 CUs",
      projectsCompleted: "12+",
      experienceYears: "Victoria University Intern & Freelance"
    }
  },

  skills: [
    { category: "Programming & Software", skills: ["Java", "Python", "JavaScript", "React", "TypeScript", "Node.js"] },
    { category: "Database Management", skills: ["SQL", "MySQL", "PostgreSQL", "Database Design & Queries", "SQLite"] },
    { category: "Systems & IT Support", skills: ["Hardware/Software Troubleshooting", "Routine System Maintenance", "Network Infrastructure", "System Administration"] },
    { category: "Productivity & Core", skills: ["Microsoft Office (Word, Excel, PowerPoint)", "System Architecture Design", "Algorithmic Problem-Solving", "Version Control (Git)"] }
  ],

  projects: [
    {
      id: "transcript-system",
      title: "Automated Transcript Request & Digital Verification System",
      category: "Systems",
      description: "Secure, role-based web application developed as final year capstone project at Uganda Martyrs University to automate transcript requests and cryptographic verifications.",
      longDescription: "System Architecture: Designed and mapped out a secure, role-based web application to automate the end-to-end academic transcript request lifecycle for university graduates. Request Lifecycle Logic: Developed backend workflow routing allowing students to securely initiate requests, track real-time approval status across administrative departments, and process clearance checkpoints automatically. Digital Verification & Security: Engineered data validation mechanisms and implemented cryptographic verification principles to secure student records, ensure authentic transcript generation, and prevent fraud.",
      image: "/assets/aistudio/file_0000000090d08211abbf0237bb561ed2_c3cf2db9.png",
      tags: ["React", "Node.js", "Express", "MySQL", "Security", "REST API"],
      githubUrl: "https://github.com/Stak17/Transcript-request-and-verification-system",
      featured: true,
      highlight: "Official UMU Capstone Project"
    },
    {
      id: "care-axis-agency",
      title: "Care Axis Agency System",
      category: "Fullstack",
      description: "Professional caregiving and nursing agency service platform optimized for workflow coordination, client tracking, and secure record management.",
      longDescription: "System Concept: Designed and mapped out an agency-level system tailored for care management, focusing on optimizing workflow coordination, service tracking, and resource allocation. Workflow Optimization: Developed logic to streamline scheduling, client record tracking, and communications between care providers, administrators, and clients. Data Management & Privacy: Implemented role-based permissions and secure data handling procedures using database concepts to protect sensitive client profiles and operational logs.",
      image: "/assets/aistudio/Screenshot_20261110_132542_Chrome_56d9b5a9.jpg",
      tags: ["React", "Tailwind CSS", "Vite", "Vercel", "UI/UX"],
      githubUrl: "https://github.com/Stak17/care-axis-agency",
      liveUrl: "https://care-axis-agency.vercel.app",
      featured: true,
      highlight: "Deployed & Active Live Platform"
    },
    {
      id: "smart-hostel",
      title: "Smart Hostel Management System",
      category: "Fullstack",
      description: "Hostel administration platform designed for secure user record management, room allocations, and automated information flows.",
      longDescription: "Designed core system architecture and backend logic. Implemented fundamental database concepts to manage user records, room allocations, and information flows securely.",
      tags: ["Java", "Python", "Database", "Backend Logic"],
      githubUrl: "https://github.com/Stak17/Scholarmateug",
      featured: true,
      highlight: "Hostel Administration System"
    },
    {
      id: "academic-software",
      title: "Academic Software Projects",
      category: "Web",
      description: "Coursework-based applications applying structured programming principles, testing methodologies, and functional problem-solving.",
      longDescription: "Developed coursework-based applications applying structured programming principles, rigorous testing methodologies, and functional problem-solving across Java and Python environments.",
      tags: ["Java", "Python", "Algorithm Design", "Testing"],
      githubUrl: "https://github.com/Stak17",
      featured: false,
      highlight: "Coursework Portfolio"
    },
    {
      id: "sentinel-uganda",
      title: "Sentinel Uganda",
      category: "Systems",
      description: "Monitoring, security tracking, and situational awareness tool engineered for local operational safety.",
      longDescription: "An advanced tracking and reporting dashboard designed to monitor and log security alerts, asset locations, and emergency response feeds with high reliability and secure logging.",
      tags: ["JavaScript", "Node.js", "Express", "SQLite"],
      githubUrl: "https://github.com/Stak17/Sentinel-Uganda",
      featured: false,
      highlight: "Security & Monitoring"
    },
    {
      id: "cell-tracker",
      title: "Cell Tracker & Data App",
      category: "Mobile",
      description: "Data logging and cellular tracking utility application for field data collection and telemetry.",
      longDescription: "A specialized utility tool for recording geographic coordinates, signal metrics, and field observations into structured offline-first databases.",
      tags: ["React Native", "JavaScript", "Mobile API"],
      githubUrl: "https://github.com/Stak17/Cell-tracker",
      featured: false,
      highlight: "Field Data Collection"
    }
  ],

  experience: [
    {
      period: "June – August 2025",
      role: "IT Intern",
      organization: "Victoria University Market Street",
      location: "Kampala, Uganda",
      description: [
        "Assisted in routine system maintenance and hardware/software troubleshooting to reduce technical downtime.",
        "Provided comprehensive user support and basic technical assistance to end-users, ensuring quick conflict resolution.",
        "Gained practical, hands-on experience navigating real-world IT environments and infrastructure deployments."
      ],
      skills: ["IT Support", "Hardware Troubleshooting", "System Maintenance", "User Assistance"]
    },
    {
      period: "2023 – 2026",
      role: "Computer Science Graduate & Software Developer",
      organization: "Uganda Martyrs University (Nkozi)",
      location: "Kampala & Mpigi, Uganda",
      description: [
        "Completed rigorous academic training in Computer Science (Second Class Honours - Upper Division).",
        "Engineered major capstone systems including the Automated Transcript Request & Digital Verification System and Care Axis Agency platform.",
        "Developed strong proficiencies in Java, Python, SQL databases, and full-stack web engineering."
      ],
      skills: ["Software Development", "Database Management", "System Design", "Problem Solving"]
    }
  ],

  education: [
    {
      institution: "Uganda Martyrs University (Nkozi, Mpigi)",
      year: "2023 – 2026",
      award: "Bachelor of Science in Computer Science (Second Class Honours - Upper Division)"
    },
    {
      institution: "St. Cyprian High School Kyabakadde (Naggalama)",
      year: "2022",
      award: "Uganda Advanced Certificate of Education (UACE)"
    },
    {
      institution: "Our Lady of Good Counsel (Gayaza)",
      year: "2015 – 2018",
      award: "Uganda Certificate of Education (UCE)"
    },
    {
      institution: "St. Charles Lwanga Primary School (Kanyanya)",
      year: "2005 – 2014",
      award: "Primary Leaving Examinations (PLE)"
    }
  ],

  references: [
    {
      name: "Fr. Zzimbe Blaise",
      title: "Parish Priest Kasanga Parish",
      phone: "+256 756 927294"
    },
    {
      name: "Fr. Kkonde Wenceslaus",
      title: "Chaplain St. Peters Nsambya",
      phone: "+256 772 511814"
    },
    {
      name: "Fr. Pius Male",
      title: "Chancellor Kampala Archdiocese",
      phone: "+256 782 026616"
    }
  ],

  services: [
    {
      id: "it-support",
      title: "IT Support & System Maintenance",
      iconName: "Wrench",
      shortDesc: "Professional IT troubleshooting, hardware and software maintenance, and technical user support to reduce downtime.",
      fullDesc: "Offering comprehensive IT support for businesses, schools, and organizations. Experienced in routine system maintenance, hardware diagnostics, software installation, and end-user assistance.",
      deliverables: ["Hardware & Software Troubleshooting", "Routine System Maintenance", "User Support & Technical Assistance", "Infrastructure Deployment"]
    },
    {
      id: "web-dev",
      title: "Custom Website & Web App Development",
      iconName: "Globe",
      shortDesc: "High-performance, modern, responsive websites and web applications built with React, TypeScript, and modern stacks.",
      fullDesc: "Transform your organization with professional web development. From agency portals like Care Axis Agency to academic verification systems, I deliver robust web solutions.",
      deliverables: ["Responsive Web Design", "Frontend & Backend Integration", "Database Architecture", "Deployment & Maintenance"]
    },
    {
      id: "software-solutions",
      title: "Software & Database Solutions",
      iconName: "Code",
      shortDesc: "Tailored software systems and SQL database design for secure records management and workflow automation.",
      fullDesc: "Custom software engineering adhering to structured programming principles, rigorous testing, and secure relational database management (SQL, MySQL, PostgreSQL).",
      deliverables: ["System Architecture Design", "Database Normalization & Queries", "Automated Workflow Logic", "Technical Documentation"]
    }
  ]
};
