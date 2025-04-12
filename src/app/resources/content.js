import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Divjot",
  lastName: "Singh Manchanda",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer & Researcher",
  avatar: "/images/avatar.jpg",
  location: "America/Los_Angeles", // UC Berkeley timezone
  location2: "India/Mumbai", // UC Berkeley timezone
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
    name: "Email",
    icon: "email",
    link: "mailto:djsmanchanda@berkeley.edu",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>AI Engineer and builder of things</>,
  subline: (
    <>
      I'm Divjot Singh Manchanda, currently studying Artificial Intelligence at <InlineCode>UC Berkeley</InlineCode>.
      <br /> I explore cutting-edge AI research and build projects that connect ideas to impact.
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
        Divjot is an AI engineer, researcher, and student entrepreneur passionate about designing 
        intelligent systems. He has worked on factory optimization at Renault-Nissan, Fintech
        solutions at IIT Madras, and AI-driven health diagnostics. He is currently studying 
        AI at SRMIST, Kattankulathur, and is working on research projects involving exosome-based medical diagnostics.
      </>
    ),
  },
  work: {
    display: true,
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
        timeframe: "September 2024 - November 2024",
        role: "Technical Intern",
        achievements: [
          <>Developed an algorithm to evaluate past part vendors based on pricing, lead time, MOQ, quality, defect rates and other variables, enabling data-driven reordering decisions and improving time to make decisions by 60%.</>,
          <>Designed a chatbot to simplify access to the vendor analysis data using structured outputs, improving decision-making efficiency.</>,
        ],
        images: [],
      },
      {
        company: "FlowNow",
        timeframe: "Jan 2025 - Present",
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
        description: <>Startup Semester - Sutardja Center for Entrepreneurship & Technology</>,
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

const work = {
  label: "Work",
  title: "My projects",
  description: `AI and robotics projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `Moments captured by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
