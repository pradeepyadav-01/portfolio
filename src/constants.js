// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import salesforce from './assets/company_logo/salesforce.webp';
import redhat from './assets/company_logo/OIP.webp';
import nptel from './assets/company_logo/nptel.webp';
import oracle from './assets/company_logo/oracle.webp';

// Education Section Logo's
import rtu from './assets/education_logo/OIP.jpg';
import xavier from './assets/education_logo/school.jpg';

// Project Section Logo's
import tictactoe from './assets/work_logo/tictactoe.webp';
import netflix from './assets/work_logo/netflix.webp';
import movierecLogo from './assets/work_logo/movie_rec.png';
import currency from './assets/work_logo/currency.webp';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    
     {
      id: 0,
      img: salesforce,
      role: "Fundamentals of Salesforce ans Internship",
      company: "SalesForce",
      date: "JUL 2024 - AUG 2024",
      desc: "Completed a structured internship focused on core Salesforce CRM functionalities through Trailhead modules",
      skills: [ "Salesforce Platform Basics, Sales Cloud Basics"
      ],
    },
    {
      id: 1,
      img: redhat,
      role: "RHCSA certified",
      company: "Redhat",
      date: "Nov 2024",
      desc: "RHCSA-certified system administrator with hands-on experience in Linux-based server environments, user and file management, and shell scripting.",
      skills: [
        "Linux",
      ],
    },
    {
      id: 2,
      img: nptel,
      role: "Database Management System",
      company: "NPTEL",
      date: "Mar 2025",
      desc: "• Completed NPTEL-certified course in Database Management Systems — covered relational models, SQL, normalization, transactions, and indexing.",
      skills: [
        "MySQL",
      ],
    },
     {
      id: 3,
      img: oracle,
      role: "Oracle Certified Foundations Associate",
      company: "Oracle",
      date: "Mar 2025",
      desc: "Completed foundational training in Oracle Fusion Human Capital Management (HCM) Cloud",
      skills: [
        "Core HR, Workforce Structures, Global HR",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rtu,
      school: "Arya College of Engg. & I.T.",
      date: "2022 - 2026",
      grade: "7.81 CGPA",
      desc: "I pursue my Bachelor's degree in Computer Science (B.Tech) from Arya  College, Jaipur Affiliated with RTU. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Technology (B.Tech) Computer Science",
    },
    {
      id: 2,
      img: xavier,
      school: "St. Xavier's school Behror ",
      date: "2021 - 2022",
      grade: "75%",
      desc: "I completed my class 12 education from St. Xavier's school , Behror, Rajastahn under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Informatics practices.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: xavier,
      school: "St. Xavier's school Behror",
      date: "2019 - 2020",
      grade: "75%",
      desc: "I completed my class 10 education from St. Xavier's School,behror, Rajasthan, under the CBSE board",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Tic-Tac-Toe",
      description:
        "Developed an interactive web-based Tic Tac Toe game featuring a responsive UI and smooth user experience. Implemented game logic with JavaScript to handle player turns, detect winning conditions, and manage game resets. Designed a clean, intuitive layout using HTML and CSS, with attention to accessibility and mobile responsiveness",
      image: tictactoe,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/pradeepyadav-01/tictactoe/tree/main/tictactoe",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Netflix clone",
      description:
        "Created a responsive front-end clone of the Netflix landing page using HTML, CSS, and vanilla JavaScript. styling, and hover effects to closely match the original UI. Implemented interactive components such as navigation menus, media thumbnails, and scrolling carousels. Focused on pixel-perfect design and cross-device compatibility.",
      image: netflix,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/pradeepyadav-01/netflix/tree/main/netflix",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "wnaderlust",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
     {
      id: 3,
      title: "Currency converter",
      description:
        "Developed a responsive and interactive web application that allows users to convert currencies in real-time using live exchange rates fetched from a third-party API.  using HTML and CSSJavaScript  and display conversion results based on user input and responsive front-end development",
      image: currency,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
   
  ];  