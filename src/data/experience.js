/**
 * experience.js — Employment history shown on the Experience page.
 *
 * Each entry:
 *   date        — Date range string
 *   institution — University / company name
 *   location    — Country or city
 *   logo        — Image path relative to public/ (null if no logo)
 *   crest       — true for taller crest-style logos
 *   role        — Job title
 *   description — Array of paragraph strings (each rendered as <p>)
 *
 * To add a role: copy an existing entry, change the fields, and
 * place the logo image in public/images/.
 */

export const experience = [
  {
    date: 'Aug 2026 – Present',
    institution: 'University of Ruhuna',
    location: 'Sri Lanka',
    logo: '/images/ruhuna-logo.gif',
    crest: true,
    role: 'Lecturer (Probationary)',
    description: [
      'Department of Electrical and Information Engineering, Faculty of Engineering',
      'Teach machine learning through hands-on laboratory sessions. Supervise and evaluate undergraduate student projects and technical work.',
    ],
  },
  {
    date: 'Jan 2026 – Present',
    institution: 'Informatics Institute of Technology (IIT)',
    location: 'Sri Lanka',
    logo: '/images/iit-logo.png',
    crest: true,
    role: 'Part-time Lecturer',
    description: [
      'Teach AI fundamentals, develop practical exercises and assessments for the Professional Certificate in Artificial Intelligence programme offered by the Professional Development Unit at IIT.',
    ],
  },
  {
    date: 'Nov 2022 – July 2023',
    institution: 'Singapore Management University (SMU)',
    location: 'Singapore',
    logo: '/images/smu-logo.png',
    crest: true,
    role: 'Research Engineer',
    description: [
      'Worked on accessible augmented reality, indoor navigation, and multimodal interaction.',
    ],
  },
  {
    date: 'Dec 2021 – July 2022',
    institution: 'University of Ruhuna',
    location: 'Sri Lanka',
    logo: '/images/ruhuna-logo.gif',
    crest: true,
    role: 'Temporary Instructor and Demonstrator',
    description: [
      'Supported undergraduate coursework, laboratory teaching, and assessment.',
    ],
  },
  {
    date: 'Feb 2018 – April 2021',
    institution: 'Singapore University of Technology and Design (SUTD)',
    location: 'Singapore',
    logo: '/images/sutd-logo.webp',
    crest: true,
    role: 'Research Assistant',
    description: [
      'Developed multimodal human–robot interaction prototypes and contributed to user studies.',
    ],
  },
]
