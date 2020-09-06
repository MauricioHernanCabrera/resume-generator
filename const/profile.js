const DEFAULT_PROFILE = {
  personalDetails: {
    firstName: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    email: '',
    professionalSummary: '',
  },
  jobs: [],
  educations: [],
  skills: [],
  links: [],
}

const FAKE_PROFILE = {
  personalDetails: {
    firstName: 'Bardi',
    lastName: 'Harborow',
    jobTitle: 'Software Engineer',
    phone: '0481 816 153',
    email: 'bardi@bardiharborow.com',
    professionalSummary: `I'm a full-stack developer, specialising in web platform and security. If you're a forward-thinking organisation that's supportive of diversity and great development practices, I'd love to hear from you!`,
  },
  jobs: [
    {
      id: '1',
      title: 'Core Developer',
      url: 'https://getbootstrap.com/',
      employer: 'Bootstrap',
      startDate: new Date('2016').toISOString().substr(0, 7),
      endDate: null,
      startDateOpen: false,
      endDateOpen: false,
      description: `Bootstrap is the most popular web framework in the world, emphasizing accessibility for design-oriented staff and reliability across browsers.
- Worked with a highly asynchronous remote team to deliver a product overhaul.
- Served as the principal code owner for JavaScript, and CI code review.
- Delivered an ES6 overhaul, new build system and documentation upgrades.
- Developed long-term assurance and security management plans.
- Coordinated vulnerability disclosure, CVE assignment, and assessment.`,
    },
    {
      id: '2',
      title: 'Information Systems Manager',
      url: 'https://www.queenslandconservation.org.au/',
      employer: 'Queensland Conservation Council',
      startDate: new Date('2014').toISOString().substr(0, 7),
      endDate: new Date('2016', '11').toISOString().substr(0, 7),
      startDateOpen: false,
      endDateOpen: false,
      description: `QCC is a coordinating organisation for environmental advocacy charities in Queensland, with a focus on providing an amalgamated voice for smaller groups.
- Managed day-to-day technical operations to support campaign staff.
- Coordinated urgent deprecation of failing legacy infrastructure.
- Decreased technical expenditure several-fold.`,
    },
    {
      id: '3',
      title: 'Contractor',
      url:
        'https://www.reddit.com/r/Bitcoin/comments/26l3l1/10_months_ago_i_posted_the_idea_for_coinflow_a/',
      employer: 'Various',
      startDate: new Date('2013', '7').toISOString().substr(0, 7),
      endDate: new Date('2014', '10').toISOString().substr(0, 7),
      startDateOpen: false,
      endDateOpen: false,
      description: `- Wrote whitepaper and prototypes for a neutral social network based around Bitcoin micro-payments. Ran community sessions and wrote funding application.
- Worked on a high-availability WordPress hosting platform with GCE support.
- Implemented customer-facing dashboards for a startup.`,
    },
  ],
  educations: [
    {
      id: '1',
      school: 'Monash University',
      degree: 'Bachelor of Science and Computer Science',
      startDate: new Date('2016').toISOString().substr(0, 7),
      endDate: new Date('2019', '11').toISOString().substr(0, 7),
      startDateOpen: false,
      endDateOpen: false,
      city: 'United State',
    },
    {
      id: '2',
      school: 'Google Cloud',
      degree: 'Certified Associate Cloud Engineer',
      startDate: new Date('2019').toISOString().substr(0, 7),
      endDate: new Date('2019', '11').toISOString().substr(0, 7),
      startDateOpen: false,
      endDateOpen: false,
      city: 'United State',
    },
  ],
  skills: [
    {
      id: '1',
      name: 'HTML (HTML5 semantics)',
      category: 'Frontend',
    },
    {
      id: '2',
      name: 'CSS (Flexbox, Grid)',
      category: 'Frontend',
    },
    {
      id: '3',
      name: 'JavaScript (ES6, JQuery)',
      category: 'Frontend',
    },
    {
      id: '4',
      name: 'Accessibility (ARIA)',
      category: 'Frontend',
    },
    {
      id: '5',
      name: 'Node.js (Expres, Grunt)',
      category: 'Backend',
    },
    {
      id: '6',
      name: 'Python',
      category: 'Backend',
    },
    {
      id: '7',
      name: 'Java (Graddle)',
      category: 'Backend',
    },
    {
      id: '8',
      name: 'PHP (Laravel)',
      category: 'Backend',
    },
    {
      id: '9',
      name: 'C++ (SSE)',
      category: 'Backend',
    },
    {
      id: '10',
      name: 'Rust (Gotham)',
      category: 'Backend',
    },
    {
      id: '11',
      name: 'Linux (Ubuntu, Debian, CoreOS)',
      category: 'Operations',
    },
    {
      id: '12',
      name: 'Servers (Apache, Nginx, h2o)',
      category: 'Operations',
    },
    {
      id: '13',
      name: 'Databases (MySQL, MariaDB)',
      category: 'Operations',
    },
    {
      id: '14',
      name: 'Containers (Docker, Kubernetes)',
      category: 'Operations',
    },
    {
      id: '15',
      name: 'Security (CVEs, TLS, DNSSED, HSTS)',
      category: 'Operations',
    },
    {
      id: '16',
      name: 'Latency (CDNs, HTTP/2, TTFB)',
      category: 'Operations',
    },
  ],
  links: [
    {
      id: '1',
      label: 'https://github.com/bardiharborow',
      link: 'https://github.com/bardiharborow',
    },
    {
      id: '2',
      label: 'https://www.linkedin.com/in/bardiharborow/',
      link: 'https://www.linkedin.com/in/bardiharborow/',
    },
  ],
}

export { DEFAULT_PROFILE, FAKE_PROFILE }
