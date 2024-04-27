
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 


const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Mehmed Ayt",
  title: "Hi all, I'm Mehmed",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angular / Nodejs / AngularJs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/12X6fFXqzzn_562PR1mmSqGhEu3DGgN23/edit?usp=drive_link", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mehmedayt",
  linkedin: "https://www.linkedin.com/in/mehmedayt/",
  gmail: "mehmedayt8@gmail.com",
  gitlab: "https://gitlab.com/mehmedayt",
  facebook: "https://www.facebook.com/mehmedayt",
  medium: "https://medium.com/@mehmedayt",
  stackoverflow: "https://stackoverflow.com/users/24360188/mehmed-ayt",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Currently enhancing skills in React for cutting-edge frontend development"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ MongoDB / MySQL"
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "South-West University Neofit Rilski",
      logo: require("./assets/images/swu.png"),
      subHeader: "Computer Systems and Technology",
      duration: "September 2018 - May 2022",
      desc: "Participated in research in higher mathematics, physics, computer networks, and electronics as an engineer, publishing 3 scientific papers in the respective fields.",
      descBullets: []
    },
    {
      schoolName: "SoftUni",
      logo: require("./assets/images/SoftUni.png"),
      subHeader: "Master of Science in Full Stack Development",
      duration: "September 2022 - April 2024",
      desc: "Completed coursework in Software Engineering, Operating Systems and gained proficiency in JavaScript, Angular, Node.js, and database management.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: false, 
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// Your Open Source Section to View Your Github Pinned Projects

const openSource = {
  showGithubProfile: "false",
  display: false 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/easyReserve.png"),
      projectName: "Easy Reserve",
      projectDesc: "EasyReserve is a user-friendly booking system designed to streamline the reservation process for various services. Developed using JavaScript, HTML, CSS, and MongoDB, EasyReserve offers a seamless experience for both users and service providers. With features such as user authentication, intuitive booking management, and a responsive interface, EasyReserve simplifies the task of scheduling appointments or booking services online. Whether it's reserving a table at a restaurant, booking a hotel room, or scheduling a spa appointment, EasyReserve provides a reliable platform for managing bookings efficiently. Its flexible architecture allows for easy customization to suit different business needs, making it an ideal solution for businesses looking to enhance their online booking capabilities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://easyreserve.github.io/"
        }
      ]
    },
    {
      image: require("./assets/images/myBooks.png"),
      projectName: "My Books",
      projectDesc: "MyBooks is a sophisticated book management system built using TypeScript and Angular, with a local server handling data operations. Designed to simplify book organization and management, MyBooks offers a range of features including user registration, adding, editing, and deleting books, as well as comprehensive search and filtering functionality. The intuitive user interface ensures seamless navigation and efficient book management, empowering users to effortlessly organize their book collections. With its modern design and robust features, MyBooks provides a convenient and user-friendly platform for book enthusiasts to catalog and manage their reading materials effectively.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/mehmedayt/my-books"
        }
      ]
    }
  ],
  display: true 
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JS Applications",
      subtitle:
      "In this course, I'm diving deep into the world of modern web development, focusing on RESTful APIs, asynchronous programming, and authentication methods. I'm also exploring Single Page Application (SPA) architecture, mastering routing techniques for seamless navigation, and learning how to build modular applications for better scalability and maintainability. Stay tuned as I harness these skills to create dynamic and secure web experiences!",
      image: require("./assets/images/applications.png"),
      imageAlt: "JS Applications",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ogTcMgD9_X4SKW5NJ69mF3oaS0sb-kZd/view?usp=drive_link"
        },
      ]
    },
    {
      title: "JS Back-end",
      subtitle:
      "In my current learning phase, I'm exploring Node.js streams, Express.js utilities, and templating, alongside delving into MongoDB for NoSQL data storage. Additionally, I'm mastering session management, authentication, validation, and error handling for building secure and efficient web applications.",
      image: require("./assets/images/node.png"),
      imageAlt: "JS Back-end",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1z5MhP5ShQriaWEhlByVB_SFomDfTPlBC/view?usp=drive_link"
        }
      ]
    },

    {
      title: "JS Advanced",
      subtitle: "I'm currently diving into the fundamentals of JavaScript, including syntax, statements, and working with nested arrays and objects. I'm also exploring composition techniques, DOM manipulation, and event handling for interactive web development. Additionally, I'm delving into advanced functions, unit testing methodologies, and understanding classes, prototypes, and inheritance in JavaScript for building scalable and maintainable applications.",
      image: require("./assets/images/advanced.png"),
      imageAlt: "JS Advanced",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1KWk4J3ztWdxNrc0pkhSmE7TLdIPEba3t/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true 
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
  "With an ardent passion for crafting innovative solutions, I find joy in creating cool stuff. Alongside, I indulge in exploring intriguing blogs that pique my interests, sparking inspiration for my own creative endeavors.",
  displayMediumBlogs: "true", 
  blogs: [
    {
      url: "https://medium.com/javascript-in-plain-english/common-patterns-in-javascript-program-design-explained-with-examples-93eba7bc141a",
      title: "Common Patterns in JavaScript",
      description:
        "Program Design: Explained with Examples"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true 
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false 
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO LISTEN PODCASTS ABOUT TECHNOLOGY",

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+359 888 190 613",
  email_address: "mehmedayt8@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "elonmusk",
  display: true 
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
