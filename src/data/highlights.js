/**
 * highlights.js — Timeline entries on the homepage.
 *
 * Each highlight is shown as a row with a date on the left and a
 * description on the right.  The optional `photos` array renders
 * clickable thumbnail images below the text.
 *
 * To add a highlight: copy an existing entry, change the date and
 * text, and optionally add photos.
 */

export const highlights = [
  {
    date: 'Aug 2026',
    datetime: '2026-08',
    text: 'Joined the University of Ruhuna as a Lecturer (Probationary).',
  },
  {
    date: 'July 2026',
    datetime: '2026-07',
    text: 'Celebrated my MSc graduation at Singapore Management University with my family.',
    photos: [
      {
        src: '/images/graduation-me.JPG',
        alt: 'Nipuni Hansika at her SMU graduation',
        href: '/images/graduation-me.JPG',
      },
      {
        src: '/images/graduation-family.JPG',
        alt: 'Nipuni Hansika celebrating her SMU graduation with family',
        href: '/images/graduation-family.JPG',
      },
    ],
  },
  {
    date: 'April 2026',
    datetime: '2026-04',
    // Supports an inline link inside the text.
    text: 'Our paper, MOTUS, was published at ACM CHI 2026.',
    links: [
      { text: 'MOTUS', href: 'https://doi.org/10.1145/3772318.3791935', external: true },
    ],
  },
  {
    date: 'Jan 2026',
    datetime: '2026-01',
    text:
      'Started teaching on the Professional Certificate in Artificial Intelligence programme at IIT. ' +
      'Completed my MSc in Computing at Singapore Management University, with a focus on human–computer interaction and creativity support.',
  },
]
