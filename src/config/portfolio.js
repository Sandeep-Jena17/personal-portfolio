/**
 * Portfolio Configuration
 * All portfolio content and data
 */

export const SKILLS = {
  Frontend: [
    'React.js',
    'TypeScript',
    'JavaScript ES6+',
    'HTML5',
    'CSS3',
    'Material UI',
  ],
  Backend: [
    'Node.js',
    'REST APIs',
    'AWS Lambda',
    'Serverless',
  ],
  'Cloud & AWS': [
    'DynamoDB',
    'S3',
    'Athena',
    'SES',
    'Cognito',
    'Amplify',
    "cloudwatch",
    "API Gateway",
  ],
  'Real-Time & Maps': [
    'WebRTC',
    'Geo-Visualization',
    'Map-based UI',
  ],
  Tools: [
    'Git',
    'Postman',
    'Jira',
    'Microservices',
    'Agile',
    'CI/CD',
    'claude'
  ],
};

export const EXPERIENCES = [
  {
    title: 'Campaign Management System',
    subtitle: 'Media Matcher — Last 3+ Years',
    points: [
      'Built and scaled a campaign management platform from scratch using React & TypeScript',
      'Developed multi-step filters and dynamic listings for advertisers, publishers & campaigns',
      'Worked with AWS serverless microservices and DynamoDB-based data models',
      'Optimized listing APIs with pagination and selective attribute retrieval',
      'Collaborated with a 10+ member Agile team for scalability & client trust',
    ],
    tag: 'React · TypeScript · AWS',
  },
  {
    title: 'SPC — Education Platform',
    subtitle: 'Backend Developer',
    points: [
      'Designed DynamoDB schemas to manage users, courses, and live class data',
      'Implemented WebRTC-based one-to-many live class sessions',
      'Validated user access based on course enrollment and time slots',
      'Integrated AWS SES to send session notifications',
    ],
    tag: 'WebRTC · DynamoDB · SES',
  },
  {
    title: 'Medical Application',
    subtitle: 'Doctor & Patient Management',
    points: [
      'Developed UI modules for managing patient details and appointments',
      'Supported online consultation workflows and API integration',
    ],
    tag: 'React · Node.js · REST APIs',
  },
  {
    title: 'Carbon Biodiversity & Environment',
    subtitle: 'Geo-Visualization Project',
    points: [
      'Built React-based UI to visualize geographical project data on maps',
      'Displayed environmental metrics: risk factors, cyclone frequency, emissions',
      'Implemented interactive map hover and table views for project insights',
    ],
    tag: 'Maps · React · Data Viz',
  },
  {
    title: 'DDS Wireless Platform',
    subtitle: 'Production Support & Migration',
    points: [
      'Handled UI issues, data inconsistencies, and user-facing problems',
      'Migrated legacy Ember.js modules to React.js',
      'Improved maintainability and performance of key application areas',
    ],
    tag: 'Ember.js → React · Migration',
  },
];

export const ABOUT = {
  intro:
    'Frontend / Full-Stack Developer with over 4 years of professional experience, entering the 5th year. Based in Bhubaneswar, Odisha, India.',
  focus:
    'Currently focused on developing and optimizing a campaign management system using React, TypeScript, and AWS serverless microservices.',
};

export const CONTACT_INFO = {
  email: 'jenasandeep595@gmail.com',
  phone: '+91-8917404918',
  location: 'Bhubaneswar, Odisha, India',
  education: 'B.E. — College of Engg. Bhubaneswar, 2017',
  status: 'Open to opportunities',
};

export const STATS = [
  { number: '5+', label: 'Years Experience' },
  { number: '5+', label: 'Projects Shipped' },
  { number: '10+', label: 'AWS Services Used' },
];

export const HERO_TEXT = {
  label: '// Frontend & Full-Stack Developer',
  name: 'Sandeep\nKumar Jena',
  description:
    '5+ years building enterprise-grade apps across media, education, healthcare & environment. React specialist · AWS serverless expert · TypeScript advocate.',
};

export const FOOTER_TEXT = {
  copyright: '© 2026 Sandeep Kumar Jena',
  stack: 'React · TypeScript · AWS',
};
