
import { NewsItem, Project, Publication, Experience, Education, Award, TeachingExperience } from './types';

export const HERO_STATEMENT = "Better than Best";
export const ABOUT_TEXT = `Greetings! I am an Undergraduate Researcher passionate about HCI, Sensor Fusion, and Mobile Computing. I explore how machines can better understand human context by fusing physical signals with digital intelligence, bridging the gap between raw data and meaningful user experiences.

With research experiences at Purdue University, Seoul National University, ETRI, and LOTTE INNOVATE, I strive to turn innovative ideas into real-world solutions. I invite you to explore my CV and projects to learn more about this journey.`;

export const PROFILE_IMAGE = "/assets/images/profile.jpg"; // TODO: Replace this with your uploaded photo path (e.g. "/assets/profile.jpg")

export const NEWS_ITEMS: NewsItem[] = [
  {
  id: '1',
  date: 'Dec 2025',
  title: 'Paper Presentation at IEEE RoboticCC',
  category: 'Publication',
  description: 'Presented the paper “Wildlife Detection via 40kHz Ultrasonic Signals: Dataset Design and Deep Learning Evaluation” at the IEEE RoboticCC Conference.'
},
  {
    id: '2',
    date: 'Jun 2025',
    title: 'Visiting Scholar at Purdue University',
    category: 'Experience',
    description: 'Selected for the KAI Purdue Summer Program sponsored by IITP to research HCI and Mobile Computing.'
  }
];

export const PROJECTS: Project[] = [
  // {
  //   id: 'p1',
  //   title: 'Wildlife Detection System',
  //   tagline: 'Ultrasonic signal analysis for ecological monitoring.',
  //   tags: ['Deep Learning', 'Signal Processing', 'Robotics'],
  //   description: 'A system designed to detect wildlife using 40kHz ultrasonic signals.',
  //   problem: 'Visual detection of wildlife is often limited by lighting and occlusion.',
  //   approach: 'Designed a dataset and evaluated Deep Learning models on ultrasonic audio data.',
  //   outcome: 'Expected publication at IEEE International Conference on Robotic Computing and Communication 2025.',
  //   image: 'https://picsum.photos/seed/wildlife/800/600'
  // },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: 'Wildlife Detection via 40kHz Ultrasonic Signals : Dataset Design and Deep Learning Evaluation',
    authors: ['S Kang', 'H Kang', 'S Ahn', 'T Ahn', 'L Hiday', 'A Smith*'],
    venue: 'IEEE RoboticCC',
    year: 2025,
    type: 'International',
    links: []
  },
  {
    id: 'pub2',
    title: 'Research on Building K-Contents Specialized Text2Image Pipeline',
    authors: ['S Kang', 'D Lee', 'S Han', 'S Lim', 'N kim*'],
    venue: 'ICACT',
    year: 2025,
    type: 'International',
    links: [{ label: 'Code', url: 'https://github.com/user00144/kor_sd' }]
  },
  {
    id: 'pub3',
    title: 'Research on Memory-efficient Approach to Sleep Quality Estimation for Edge Devices',
    authors: ['S Kang', 'K Jin', 'N kim*'],
    venue: 'ICTC',
    year: 2024,
    type: 'International',
    links: [{ label: 'Code', url: 'https://github.com/user00144/2024_ETRI_competition' }]
  },
  {
    id: 'pub4',
    title: 'A Study on User Review text–Based Rating prediction system Using Large Language Model Finetuning',
    authors: ['S Kang', 'N Kim*'],
    venue: 'APIC-IST',
    year: 2024,
    type: 'International',
    links: []
  },
  {
    id: 'dom1',
    title: 'Research on Building Child Facial Dataset for Child Face De-identification',
    authors: ['S Kang', 'C Yoo*'],
    venue: 'KIIT Summer Conference',
    year: 2025,
    type: 'Domestic',
    links: []
  },
  {
    id: 'dom2',
    title: 'Solving Financial QA in Large Language Models with Recursive Questioning',
    authors: ['S Kang', 'S Park', 'G Gweon*'],
    venue: 'KIPS Annual Symposium',
    year: 2025,
    type: 'Domestic',
    links: []
  },
  {
    id: 'dom3',
    title: 'BELIEVE : Vision-Based Edge Intelligence System for Safety Management on Industrial Environment',
    authors: ['S Kang', 'E Park', 'et al.'],
    venue: 'KIIT Summer Conference',
    year: 2024,
    type: 'Domestic',
    links: []
  },
  {
    id: 'dom4',
    title: 'Using activation function and ko-BERT Research of Click-bait Detection',
    authors: ['S Kang', 'N Kim*'],
    venue: 'KSII Spring Conference',
    year: 2024,
    type: 'Domestic',
    links: []
  },
  {
    id: 'dom5',
    title: 'Using Raspberry Pi and MNIST Dataset A study on handwriting images classification in an on-device environment',
    authors: ['S Kang', 'N Kim*'],
    venue: 'KSII Spring Conference',
    year: 2024,
    type: 'Domestic',
    links: []
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: 'Visiting Scholar',
    company: 'KAI Purdue Summer Program',
    period: 'Jun 2025 - Aug 2025',
    description: [
      'Conducted research at Purdue University, sponsored by IITP.',
      'Focused on HCI, Mobile Computing, and Sensor-Based Deep Learning.'
    ]
  },
  {
    id: 'exp2',
    role: 'Undergraduate Researcher',
    company: 'SNU Cognitive Computing Lab',
    period: 'Mar 2025 - May 2025',
    description: [
      'Researched HCI, QA models, and Multimodal Emotion Recognition at Seoul National University.'
    ]
  },
  {
    id: 'exp3',
    role: 'Intern',
    company: 'ETRI Social Robotics Lab',
    period: 'Jan 2025 - Feb 2025',
    description: [
      'Worked on HCI, Image De-Identification, and Vision Language Models at Electronics and Telecommunications Research Institute.'
    ]
  },
  {
    id: 'exp4',
    role: 'Intern',
    company: 'LOTTE INNOVATE Tech AI. Team',
    period: 'Jul 2024 - Aug 2024',
    description: [
      'Developed pipelines for Text to Image Generation and utilized CLIP models.'
    ]
  },
  {
    id: 'exp5',
    role: 'Undergraduate Researcher',
    company: 'KGU Smart IoT Lab',
    period: 'Jul 2023 - Dec 2024',
    description: [
      'Focused on Mobile Computing and Large Language Models at Kyonggi University.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'B.S. in AI Computer Science and Engineering',
    school: 'Kyonggi University',
    year: 'Feb 2020 - Mar 2026',
    details: 'GPA: 4.38 / 4.5 (Major: 4.40 / 4.5)'
  }
];

export const SKILLS = [
  "Python", "Java", "C/C++", "C#", "LaTeX", "PyTorch", "Tensorflow", "Unity", "Flutter", "FastAPI", "Linux", "Docker"
];

export const AWARDS: Award[] = [
  { id: 'a1', title: 'Scholarship for Academic Excellence', organization: 'Kyonggi University', date: 'Sep 2020 - Sep 2025 (Multiple)', type: 'Scholarship' },
  { id: 'c1', title: 'Test Of Practical Competency in IT level 4 (722)', organization: 'IITP', date: 'May 2025', type: 'Certification' },
  { id: 'c2', title: 'Certified Software Test Specialist Foundation Level', organization: 'TTA', date: 'Mar 2023', type: 'Certification' }
];

export const TEACHING: TeachingExperience[] = [
  {
    id: 't1',
    role: 'Teaching Assistant',
    institution: 'Kyonggi University',
    period: 'Sep 2024 - Dec 2024',
    description: ['National center of excellence in software.']
  },
  {
    id: 't2',
    role: 'Basic Tutoring (Java/Data Structure)',
    institution: 'Kyonggi University',
    period: 'Mar 2024 - Jun 2024',
    description: ['Student-to-student tutoring experience as tutor.']
  },
  {
    id: 't3',
    role: 'Mentor (Micro:bit, Arduino)',
    institution: 'JAKorea & SAP',
    period: 'Aug 2023 - Sep 2023',
    description: ['Mentoring experience for middle & high school students.']
  },
  {
    id: 't4',
    role: 'Mentor (Mobile Application Programming)',
    institution: 'JAKorea',
    period: 'Jul 2023 - Aug 2023',
    description: ['Gyonggichango Mentoring for middle & high school students.']
  }
];
