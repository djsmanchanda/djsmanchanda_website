//src/app/resources/content.js
import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Divjot Singh",
  lastName: "Manchanda",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer & Researcher",
  avatar: "/images/avatar.jpg",
  location: "America/Los_Angeles", // UC Berkeley timezone
  location2: "Asia/Kolkata", // India timezone
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write occasionally about artificial intelligence, research insights, startup experiments,
      and my journey as a student innovator.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/djsmanchanda",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/divjot-singh-manchanda-910643251/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/djsmanchanda",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/djsmanchanda",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:djsmanchanda@gmail.com",
  },
  {
    name: "Buy me a coffee",
    icon: "coffee",
    link: "https://coff.ee/djsmanchanda",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>
    {person.firstName} <br className="mobile-break" />{person.lastName}
    <br />
    <span style={{ fontSize: '0.60em', lineHeight: '1.2', display: 'inline-block', marginTop: '1rem' }}>
      AI Engineer and <br className="mobile-break" />builder of things
    </span>
  </>,
  subline: (
    <>
      I'm a 8 time hackathon winner, currently studying Artificial Intelligence at <InlineCode>SRM Institute of Science and Technology</InlineCode>.
      <br /> I explore cutting-edge AI research and build projects that connect ideas to impact. Previously, at <InlineCode>UC Berkeley</InlineCode>, for the SCET Startup Semester.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/djsmanchanda",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        AI engineer and researcher building intelligent systems that solve real-world problems.
        <br /><br />
        <strong>Currently:</strong> Studying AI at SRMIST and researching exosome-based medical diagnostics at UC Berkeley.
        <br /><br />
        <strong>Previously:</strong> Built supply-chain optimization tools at Renault-Nissan, developed fintech solutions at IIT Madras, and created AI-driven health diagnostics systems.
        <br /><br />
        8x hackathon winner passionate about turning cutting-edge research into impactful products.
      </>
    ),
  },
  work: {
    display: false, // Hidden - separate /work page exists
    title: "Work Experience",
    experiences: [
      {
        company: "IIT Madras, CAMS IIT-M Fintech Innovation Lab, Chennai, Tamil Nadu",
        timeframe: "June 2024 - August 2024",
        role: "Research Intern",
        achievements: [
          <>Performed feasibility analysis to explore the integration of AI in financial modeling and fintech solutions.</>,
          <>Finetuned a RAG-based LLM on financial Data with web search capabilities.</>,
        ],
        images: [],
      },
      {
        company: "Renault Nissan, Chennai, Tamil Nadu",
        timeframe: "September 2024 - November 24",
        role: "Technical Intern",
        achievements: [
          <>Developed an algorithm to evaluate past part vendors based on pricing, lead time, MOQ, quality, defect rates and other variables, enabling data-driven reordering decisions and improving time to make decisions by 60%.</>,
          <>Designed a chatbot to simplify access to the vendor analysis data using structured outputs, improving decision-making efficiency.</>,
        ],
        images: [],
      },
      {
        company: "FlowNow",
        timeframe: "February 25 - Present",
        role: "Technical Intern",
        achievements: [
          <>Working on the AI aspects of a WebApp designed to increase Attention and concentration for ADHD and Test Prep students.</>,
        ],
        images: [],
      },
    ],
  },
  hackathon: {
    display: true,
    title: "Hackathons Won",
    experiences: [
      {
        company: "Pulse Hackathon - IIT Bombay Vogue Fusion",
        timeframe: "2024",
        role: "2nd Rank Winner",
        achievements: [
          <>Secured 2nd rank amongst over 500 teams.</>,
          <>Project - VogueFusion (<a href="https://github.com/djsmanchanda/VogueFusion_Pulse" target="_blank" rel="noopener noreferrer">GitHub Repo</a>).</>,
        ],
        images: [],
      },
      {
        company: "Synapse 2.0 - PES Bangalore",
        timeframe: "2024",
        role: "2nd Rank Winner",
        achievements: [
          <>Achieved 2nd rank at the National Level Hackathon.</>,
        ],
        images: [],
      },
      {
        company: "HackStreet 2.0 (PENTATHON) - SRM",
        timeframe: "2024",
        role: "1st Rank Winner",
        achievements: [
          <>Awarded 1st rank for Project – RadixAI.</>,
        ],
        images: [],
      },
      {
        company: "Innofusion’24 - SRM",
        timeframe: "2024",
        role: "2nd Rank Winner",
        achievements: [
          <>Secured 2nd rank for Project - Radiology Assistant.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "SRM Institute of Science and Technology",
        description: <>B.Tech in Artificial Intelligence, CGPA 8.8</>,
      },
      {
        name: "University of California, Berkeley",
        description: <>Startup Semester - Sutardja Center for Entrepreneurship & Technology, SGPA 10.0</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Python & Deep Learning",
        description: <>Building models for computer vision, forecasting, and diagnostics.</>,
        images: [],
      },
      {
        title: "Embedded Systems",
        description: <>Created robotic systems using Arduino, ESP32, sensors, and motors.</>,
        images: [],
      },
      {
        title: "Full Stack & Cloud",
        description: <>Built scalable apps using Next.js, Supabase, and Docker.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about AI, startups, and tech...",
  description: `Read what ${person.name} has been exploring recently`,
};

const projects = {
  label: "Projects",
  title: "My projects",
  description: `AI and robotics projects by ${person.name}`,
};

const work = {
  label: "Work",
  title: "Work Experience",
};

const gallery = {
  label: "Gallery",
  title: "Gallery",
  description: `Gallery of ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "landscape",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/gallery/img-05.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "square",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "portrait",
    }
  ],
};

const internships = {
  label: "Internships",
  title: "Work Experience",
  description: `Professional internship experiences by ${person.name}`,
  experiences: [
    {
      company: "IIT Madras, CAMS IIT-M Fintech Innovation Lab",
      location: "Chennai, Tamil Nadu",
      role: "Research Intern",
      timeframe: "June 2024 - August 2024",
      description: "Explored how large language models (LLMs) can transform financial analytics. Fine-tuned a Retrieval-Augmented Generation (RAG) pipeline on domain-specific datasets to improve data-driven modeling and automated report generation.",
      achievements: [
        "Conducted feasibility analysis across multiple AI-driven financial models to assess LLM integration in fintech workflows",
        "Fine-tuned a RAG-based LLM on financial datasets with web-search capabilities, improving retrieval precision by 30%",
        "Evaluated the system's precision on real-world fintech use cases, deepening understanding of AI in risk modeling, compliance checks, and financial decision systems"
      ],
      tags: ["AI/ML", "LLMs", "RAG", "Fintech", "Python"]
    },
    {
      company: "Renault Nissan",
      location: "Chennai, Tamil Nadu",
      role: "Technical Intern",
      timeframe: "September 2024 - November 2024",
      description: "Designed a data intelligence system to streamline vendor selection and supply chain decisions as part of the Renault-Nissan Industry Innovation Lab.",
      achievements: [
        "Built an algorithm that analyzed 200+ supplier histories—including price consistency, defect rates, and delivery timelines—to recommend the most reliable partners",
        "Engineered vendor evaluation system reducing decision-making time by 20%",
        "Created a chatbot interface to provide instant access to vendor insights, cutting manual lookup time by 40%",
        "Demonstrated how AI-driven analytics can optimize manufacturing operations in large-scale automotive ecosystems"
      ],
      tags: ["Data Analytics", "AI", "Supply Chain", "Chatbot", "Python"]
    },
    {
      company: "FlowNow",
      location: "Berkeley, California",
      role: "Technical Intern",
      timeframe: "March 2025 - June 2025",
      description: "Developed an agentic AI system for a neuroscience-based edtech startup from UC Berkeley's SCET network that personalizes reading comprehension through adaptive question generation and focus tracking.",
      achievements: [
        "Designed an agentic AI system generating context-aware questions from user-submitted books to assess comprehension",
        "Built model analyzing user attention span using behavioral metrics and dynamically adjusted task complexity",
        "Modeled user attention spans via behavioral metrics, delivering real-time feedback and engagement analytics",
        "Integrated a Tawk.to-based support agent to improve onboarding efficiency, reducing response times by 35%",
        "Combined interests in cognitive AI, product design, and user psychology in building AI-driven learning systems"
      ],
      tags: ["AI", "EdTech", "NLP", "User Analytics", "Product Design"]
    }
  ]
};

export { person, social, newsletter, home, about, blog, projects, work, gallery, internships };
