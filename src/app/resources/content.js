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
    <span style={{whiteSpace: 'nowrap'}}>{person.name}</span>
    <br />
    <span style={{fontSize: '0.60em', whiteSpace: 'nowrap'}}>AI Engineer and builder of things</span>
  </>,
  subline: (
    <>
      I'm a 7 time hackathon winner, currently studying Artificial Intelligence at <InlineCode>SRM Institute of Science and Technology</InlineCode>.
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
        I am an AI engineer, researcher, and student entrepreneur passionate about designing 
        intelligent systems. I have worked on factory supply-chain optimization at Renault-Nissan, designed 
        Fintech solutions at IIT Madras, as well as worked on AI-driven health diagnostics tools. I am studying 
        Artificial Intelligence at SRMIST, Kattankulathur, and am working on a research projects involving exosome-based
        medical diagnostics at University of California, Berkeley.
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
  title: "lorem ipsum",
  description: `ipsum lorem`,
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

export { person, social, newsletter, home, about, blog, work, gallery };
