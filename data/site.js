/* ==========================================================================
   SITE-WIDE DETAILS
   Anything here appears on every page, so you only need to change it once.

   Please keep the quotation marks "like this" and the comma at the end of
   each line. See EDITING_GUIDE.md for help.
   ========================================================================== */

SITE.settings = {
  // The name shown at the top left of every page.
  wordmark: "Hansi",

  // Your full name, read aloud by screen readers.
  fullName: "Nipuni Hansika",

  // Your email address. Every email button on the site uses this one.
  email: "nipuni.h@eie.ruh.ac.lk",

  // The line at the very bottom of every page.
  copyright: "© 2026 Nipuni Hansika. All rights reserved.",

  // Round social buttons, shown on the homepage and in the footer.
  socialLinks: [
    { name: "GitHub", icon: "github", url: "https://github.com/KANipuniHansika" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/nipuni-hansika-0a193b21b" },
    { name: "Google Scholar", icon: "scholar", url: "https://scholar.google.com/citations?hl=en&user=lKL3WSQAAAAJ" },
  ],

  // The menu at the top of every page, in the order shown.
  navigation: [
    { label: "Home", page: "index.html", icon: "home" },
    { label: "Research", page: "research.html", icon: "magnifier" },
    { label: "Publications", page: "publications.html", icon: "document" },
    { label: "Experience", page: "experience.html", icon: "briefcase" },
    { label: "Teaching", page: "teaching.html", icon: "graduation" },
    { label: "Education", page: "education.html", icon: "book" },
    { label: "Contact", page: "contact.html", icon: "envelope" },
  ],

  // Wording of the links on every research project page.
  projectPages: {
    backToAllProjects: "← All research projects",
    backToSelectedWork: "← Back to selected work",
  },
};
