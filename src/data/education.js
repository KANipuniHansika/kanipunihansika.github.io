/**
 * education.js — Degrees and qualifications shown on the Education page.
 *
 * Uses the same `InstitutionEntry` component as experience.js.
 * Each entry:
 *   date        — Date range
 *   institution — School / university name
 *   location    — Location string
 *   logo        — Image path relative to public/ (null if no logo)
 *   crest       — true for taller crest-style logos
 *   degree      — The degree / qualification title (rendered as <h3>)
 *   details     — Array of detail objects, each can be:
 *                 { text: "..." }            — a plain paragraph
 *                 { label: "...", value: "..." }  — a bold label + text
 *                 { text: "...", link: {text,href,external} } — paragraph with inline link
 *                 { collapsible: true, summary: "...", text: "..." } — expandable details
 *
 * To add a degree: copy an existing entry and fill in the fields.
 */

export const education = [
  {
    date: 'Jan 2025 – Jan 2026',
    institution: 'Singapore Management University (SMU)',
    location: 'Singapore',
    logo: '/images/smu-logo.png',
    crest: false,
    degree: 'Master of Science in Computing',
    details: [
      { label: 'Advisor:', value: 'Prof. Thivya Kandappu' },
      { label: 'Research focus:', value: 'Human–computer interaction and creativity support tools' },
      {
        text: 'Research: Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression — ',
        link: { text: 'MOTUS', href: 'https://doi.org/10.1145/3772318.3791935', external: true },
        trailingText: ' (full paper, ACM CHI 2026).',
      },
      {
        collapsible: true,
        summary: 'Courses taken',
        text:
          'Computational Interaction, Deep Learning and Vision, Learning and Planning in ' +
          'Intelligent Systems, Machine Learning, Optimisation and Computing, Mobile and ' +
          'Distributed Systems.',
      },
    ],
  },
  {
    date: 'Feb 2014 – Jan 2018',
    institution: 'University of Moratuwa',
    location: 'Sri Lanka',
    logo: '/images/moratuwa-logo.png',
    crest: true,
    degree: 'BSc Eng (Hons), Electronic and Telecommunication Engineering',
    details: [
      { label: 'First Class Honours | Dean\'s List, three semesters.' },
      { label: 'CGPA:', value: '3.70 / 4.20' },
    ],
  },
  {
    date: 'Sep 2012 – May 2015',
    institution: 'Chartered Institute of Management Accountants (CIMA)',
    location: 'CIMA · United Kingdom',
    logo: '/images/cima-logo.jpg',
    crest: false,
    degree: 'Advanced Diploma in Management Accounting',
    details: [
      { label: 'CIMA Passed Finalist' },
    ],
  },
]
