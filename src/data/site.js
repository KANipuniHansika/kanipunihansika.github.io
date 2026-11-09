/**
 * site.js — Global site configuration.
 *
 * Everything that is shared across every page lives here: your name,
 * contact details, social profile URLs, institutional affiliation,
 * and the navigation items.
 *
 * To change a link, email, or university: edit the values below.
 * The components import these values, so every page updates at once.
 */

export const site = {
  // Your full name and preferred name shown on the homepage.
  name: 'Nipuni Hansika',
  preferredName: 'Hansi',
  wordmark: 'Hansi', // The text shown in the header logo.

  // Primary email (used for the "Say hello" button and footer).
  email: 'nipuni.h@eie.ruh.ac.lk',

  // Short tagline shown under the name on the homepage.
  tagline: 'Researcher · Lecturer · Curious human',

  // Lead paragraph on the homepage.
  lead: 'I explore how interactive technologies can support creativity, learning, and human agency.',

  // Social / professional profile links.
  // To add a new link, add an object here and a matching icon in SocialLinks.jsx.
  social: {
    github: 'https://github.com/KANipuniHansika',
    linkedin: 'https://www.linkedin.com/in/nipuni-hansika-0a193b21b',
    scholar: 'https://scholar.google.com/citations?hl=en&user=lKL3WSQAAAAJ',
  },

  // Résumé PDF path (relative to public/).
  resume: '/files/Nipuni_Hansika_Resume.pdf',

  // Institutional affiliation shown on the contact page.
  affiliation: {
    institution: 'University of Ruhuna',
    department: 'Department of Electrical and Information Engineering',
    faculty: 'Faculty of Engineering',
    location: 'Sri Lanka',
  },

  // Copyright text in the footer.
  copyright: '© 2026 Nipuni Hansika. All rights reserved.',
}

/**
 * Navigation items.
 *
 * Each item has:
 *   label   — text shown in the nav bar
 *   path    — React Router path (matches a <Route> in App.jsx)
 *   icon    — key into the NavIcon component (see NavIcons.jsx)
 *
 * To add a page: add an entry here, create the page component,
 * and add a <Route> in App.jsx.
 */
export const navItems = [
  { label: 'Home',         path: '/',             icon: 'home' },
  { label: 'Research',     path: '/research',     icon: 'research' },
  { label: 'Publications', path: '/publications', icon: 'publications' },
  { label: 'Experience',   path: '/experience',   icon: 'experience' },
  { label: 'Teaching',     path: '/teaching',     icon: 'teaching' },
  { label: 'Education',    path: '/education',    icon: 'education' },
  { label: 'Contact',      path: '/contact',      icon: 'contact' },
]
