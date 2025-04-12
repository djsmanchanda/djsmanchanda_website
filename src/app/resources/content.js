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
        intelligent systems. He has worked on factory optimization at Renault-Nissan, healthcare 
        AI at IIT Bombay, and research projects involving exosome-based diagnostics.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Renault-Nissan AI Lab",
        timeframe: "2024",
        role: "AI Intern",
        achievements: [
          <>Built a recommendation system for optimal vendor selection across multiple metrics.</>,
          <>Developed a chatbot to help factory teams understand vendor quality data.</>,
        ],
        images: [],
      },
      {
        company: "IIT Bombay",
        timeframe: "2023",
        role: "Hackathon Finalist - PULSE",
        achievements: [
          <>Won 2nd place out of 500 teams, building a medical alert AI platform.</>,
          <>Worked on real-time diagnostics and health signal analysis.</>,
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
        company: "Pulse Hackathon - IIT Bombay",
        timeframe: "2024",
        role: "AI Intern",
        achievements: [
          <>Built a recommendation system for optimal vendor selection across multiple metrics.</>,
          <>Developed a chatbot to help factory teams understand vendor quality data.</>,
        ],
        images: [],
      },
      {
        company: "IIT Bombay",
        timeframe: "2023",
        role: "Hackathon Finalist - PULSE",
        achievements: [
          <>Won 2nd place out of 500 teams, building a medical alert AI platform.</>,
          <>Worked on real-time diagnostics and health signal analysis.</>,
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
        description: <>Spring Semester Abroad – AI Research and Entrepreneurship</>,
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
