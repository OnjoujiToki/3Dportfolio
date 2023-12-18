import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  intuit,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ucdavis,
  python,
  java,
  rust,
  kotlin,
  cpp,
  swift,
  rion,
  muxin,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Master Student of Computer Science',
    icon: mobile,
  },
  {
    title: 'Competitive Programming Enthusiast',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  /*
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },*/
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },

  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Rust',
    icon: rust,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Swift',
    icon: swift,
  },
];

const experiences = [
  /*
  {
    title: 'Student Coordinator',
    company_name: 'University of California, Daivs',
    icon: ucdavis,
    iconBg: '#383E56',
    date: 'Jan 2018 - May 2019',
    points: [
      'Led and managed a team at UC Davis to organize competitive brain games and sports, including ESports, Chess, Go, and Competitive Programming.',
      'Actively participated in the eSports and programming teams, contributing to UC Davis achieving a top ranking in CSL Starleague.',
      'Successfully expanded the size of the organization from approximately 10 to 50 members, demonstrating effective leadership and organizational growth skills.',
    ],
  },*/
  {
    title: 'Software Engineer',
    company_name: 'Rion',
    icon: rion,
    iconBg: '#E6DEDD',
    date: 'June 2019 - Aug 2019',
    points: [
      'Mastered error management techniques, generated accurate error logs, and submitted detailed bug reports; enhanced the application’s robustness and reliability by addressing potential bottlenecks in the system.',
      'Assisted in project development by maintaining the webpage’s back-end database SQL and developing Java back-end programs; integrated C++ libraries for performance-critical tasks and implemented robust security measures to protect sensitive data.',
    ],
  },
  {
    title: 'Student Software Developer',
    company_name: 'University of California, Daivs',
    icon: ucdavis,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Spearheaded the "GroupMe" project at UC Davis, a platform designed to strengthen connections among students in similar courses or sections.',
      'Utilized a tech stack comprising Firebase and Swift to build a robust and user-friendly iOS application.',
      'Enabled features for rating professors, classes, and assignments, thus enriching the student community with valuable insights.',
      'Collaborated effectively in a team of four, leveraging diverse skills for the successful development and implementation of the project.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Rion',
    icon: rion,
    iconBg: '#E6DEDD',
    date: 'June 2020 - Aug 2020',
    points: [
      'Contributed to the development of an attendance system for China Bank of Communications Guangdong Branch using C++ and Qt; primarily worked on the attendance summary module and implemented distributed systems for load balancing and data consistency.',
      'Expanded proficiency in the JUMP framework of Bank of Communications by developing new computational algorithms; contributed over 1K lines of code post-review.',
      'Developed a new feature for the JUMP framework of Bank of Communications using C++; implemented a new algorithm applied for the calculation of server load balancing',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Intuit',
    icon: intuit,
    iconBg: '#383E56',
    date: 'May 2022 - Dec 2022',
    points: [
      'Collaborated with cross-functional teams including designers, product managers, and other developers to help create high-quality products using React and SpringBoot.',
      'Spearheaded the resolution of critical arm64 architecture-related issues in Docker and Podman environments, enhancing system compatibility and reducing downtime.',
      'Devised a sophisticated Admin Tool for QuickBooks Online to streamline workflow for developers and care agents. The tool allowed for efficient comparison of account data across various services, leading to improved data consistency and accuracy.',
      'Significantly boosted the code base’s robustness and maintainability by increasing code coverage from 40 percent to 85 percent. This improvement involved rigorous unit and integration testing, leading to the early detection and rectification of bugs. This effort contributed to improved product stability and overall software quality.',
    ],
  },
  {
    title: 'Teaching Assistant',
    company_name: 'Northeastern University',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Sep 2023 - Dec 2023',
    points: [
      'Completed "INFO 6150 Data Science Engineering Methods and Tools" with top grades, leading to a Teaching Assistant position in the subsequent Fall semester under the supervision of Dr.Konstantopoulos.',
      'Engaged actively in answering student queries, leveraging expertise in Data Science and Engineering concepts.',
      'Offered career advice to students pursuing Data Science and Software Development Engineering internships.',
      'Provided guidance for stuentdes in resume building, enhancing their job application skills.',
      'Conducted mock interviews, preparing students for real-world job interview scenarios.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Zhihao was at the very top of my data science class and earned a Teaching Assistanship in the ensuing semester. As a TA, she has shown perseverance and curiosity, volunteering to code solutions to tough homework problems',
    name: 'Dr.Konstantopoulos',
    designation: 'Teaching Professor',
    company: 'Northeastern University',
    image:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_280,h_373/https://coe.northeastern.edu/wp-content/uploads/profiles/coe/konstantopoulos-d.jpg',
  },

  {
    testimonial:
      'I can attest to their communication skills, cultural agility, and commitment as a student. That Zhihao would electively enroll in this non-credit bearing course is also a testament to their growth mindset.',
    name: 'Dr.McMartin-Miller',
    designation: 'Teaching Professor',
    company: 'Northeastern University',
    image:
      'https://international.northeastern.edu/global-pathways/wp-content/uploads/sites/4/2019/11/Crissy-Mcmartin-Miller.jpg',
  },
  {
    testimonial:
      'I wholeheartedly recommend Zhihao Zhang for any upcoming opportunities. I am confident that they will excel and make noteworthy contributions in any academic or professional setting. ',
    name: 'Muxing Lin',
    designation: 'Software Development Engineer',
    company: 'Amazon.Inc',
    image: muxin,
  },
];

const projects = [
  {
    name: 'DailyCode',
    description:
      'DailyCode, your all-in-one iOS companion for competitive programming enthusiasts. Our app offers a comprehensive library of essential programming concepts, tricks, and algorithms, organized for on-the-go learning. With features like contest reminders, code execution within the app, and seamless integration of the Codeforces API, DailyCode is your gateway to improving coding skills and staying ahead in the world of competitive programming.',
    tags: [
      {
        name: 'Swift',
        color: 'blue-text-gradient',
      },
      {
        name: 'SwiftUI',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/OnjoujiToki/cp-librabry',
  },
  {
    name: 'Problem-Solving Helper',
    description:
      'This application provides a comprehensive platform for users to engage with training plans, track progress, and interact with a variety of educational content, including user authentication, personalized training plans, and an intuitive interface for problem-solving and skill development. Aimed at enhancing the learning experience, the application combines functionality with user-centric design, making it an ideal tool for problem-solving enthusiasts.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/OnjoujiToki/cf-training',
  },
  {
    name: 'Implementation Library',
    description:
      'Algorithms & Data Structures library ambitiously implements a wide array of modern algorithms and data structures, going beyond common ones like Union Find and Dijkstra to include advanced types like Binary Trie and Wavelet Tree, typically found in research papers. It is a comprehensive resource for students, teachers, and professionals, bridging the gap between standard programming tools and cutting-edge computational methods.',
    tags: [
      {
        name: 'C++',
        color: 'blue-text-gradient',
      },
      {
        name: 'Git',
        color: 'green-text-gradient',
      },
      {
        name: 'Python',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link:
      'https://github.com/OnjoujiToki/cp-training/blob/master/graph/shortest_path/dijkstra_priority_queue.hpp',
  },
];

export { services, technologies, experiences, testimonials, projects };
