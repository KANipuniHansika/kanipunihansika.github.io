/**
 * teaching.js — Teaching roles shown on the Teaching page.
 *
 * Each entry:
 *   date        — Date range string
 *   institution — University / institution name
 *   location    — Country
 *   logo        — Image path relative to public/ (or null)
 *   crest       — true for taller crest-style logos
 *   role        — Job title (rendered as <h2>)
 *   department  — Sub-heading (rendered as <p>)
 *   subtitle   — Optional h3 sub-heading
 *   bullets     — Array of bullet-point strings
 *   tags        — Optional array of tag strings
 *
 * To add a teaching role: copy an existing entry and fill in the fields.
 */

export const teaching = [
  {
    date: 'Aug 2026 – Present',
    institution: 'University of Ruhuna',
    location: 'Sri Lanka',
    logo: '/images/ruhuna-logo.gif',
    crest: true,
    role: 'Lecturer (Probationary)',
    department: 'Department of Electrical and Information Engineering, Faculty of Engineering',
    subtitle: 'Undergraduate teaching and supervision',
    bullets: [
      'Develop hands-on laboratory activities in machine learning and computing.',
      'Contribute to undergraduate teaching and curriculum development.',
      'Supervise and evaluate undergraduate projects and technical work.',
      'Design and evaluate assessments and final examinations.',
    ],
    tags: ['Machine learning', 'Practical laboratories', 'Project supervision'],
  },
  {
    date: 'Jan 2026 – Present',
    institution: 'Informatics Institute of Technology (IIT)',
    location: 'Sri Lanka',
    logo: '/images/iit-logo.png',
    crest: true,
    role: 'Part-time Lecturer',
    department: 'Professional Certificate in Artificial Intelligence · Professional Development Unit',
    subtitle: 'Artificial intelligence education',
    bullets: [
      'Deliver lectures on AI fundamentals, machine learning, data analysis, and real-world AI applications.',
      'Develop course materials, assignments, and hands-on practical exercises.',
      'Design and evaluate assessments and final examinations.',
    ],
    tags: ['Artificial intelligence', 'Learning materials', 'Assessment design'],
  },
  {
    date: 'Feb 2022 – Jul 2022',
    institution: 'University of Ruhuna',
    location: 'Sri Lanka',
    logo: '/images/ruhuna-logo.gif',
    crest: true,
    role: 'Temporary Instructor',
    department: 'Faculty of Engineering',
    bullets: [
      'Support undergraduate teaching and laboratory activities.',
      'Assist students with practical and technical coursework.',
      'Contribute to assessment and academic activities.',
    ],
  },
  {
    date: 'Dec 2021 – Jan 2022',
    institution: 'University of Ruhuna',
    location: 'Sri Lanka',
    logo: '/images/ruhuna-logo.gif',
    crest: true,
    role: 'Temporary Demonstrator',
    department: 'Faculty of Technology',
    bullets: [
      'Support undergraduate practical and laboratory teaching.',
      'Assist students during laboratory sessions and academic exercises.',
    ],
  },
]
