/* ==========================================================================
   HOMEPAGE CONTENT

   Formatting you can use inside the text:
     **bold words**            _italic words_            [link text](address)
   ========================================================================== */

SITE.page = {
  // The left column: your photo and the note beneath it.
  profile: {
    photo: "images/profile2.jpg",
    photoDescription: "Portrait of Nipuni Hansika",
    photoNote: "A little curiosity goes a long way.",
    emailButtonText: "Say hello",
  },

  // The right column: your introduction.
  about: {
    tagline: "Researcher · Lecturer · Curious human",
    greeting: "Hello, I am",
    name: "Nipuni Hansika",
    preferredName: "You can call me **Hansi**.",
    lead: "I explore how interactive technologies can support creativity, learning, and human agency.",

    // Each line in quotation marks becomes one paragraph.
    paragraphs: [
      "I am a **Lecturer (Probationary)** in the Department of Electrical and Information Engineering at the **University of Ruhuna, Sri Lanka**. I teach machine learning through practical laboratory sessions and supervise undergraduate projects.",
      "My research spans **human–computer interaction, human–AI interaction, creativity support, embodied and multimodal interaction, and accessible AR/VR**. I enjoy designing interactive prototypes and studying how people experience and use them.",
      "I completed my MSc in Computing at Singapore Management University, where my research contributed to **MOTUS**, a system supporting motor skill development and digital creative expression. This work resulted in a full paper at **ACM CHI 2026 **, which I co-authored as an equal contributor.",
    ],

    // The links under your introduction. button: true shows a filled button.
    links: [
      { text: "Explore my research →", url: "research.html" },
      { text: "Read my papers →", url: "publications.html" },
      { text: "Teaching →", url: "teaching.html" },
      { text: "Résumé ↗", url: "files/Nipuni_Hansika_Resume.pdf", button: true },
    ],
  },

  // "Selected highlights". The newest item goes first.
  // To add one, copy a whole { ... }, block, including its final comma.
  highlights: {
    label: "Along the way",
    heading: "Selected highlights",
    items: [
      {
        date: "Aug 2026",
        yearMonth: "2026-08", // Year and month as numbers. Used by search engines.
        text: "Joined the University of Ruhuna as a Lecturer (Probationary).",
      },
      {
        date: "July 2026",
        yearMonth: "2026-07",
        text: "Celebrated my MSc graduation at Singapore Management University with my family.",
        // Photos are optional. Leave this part out if a highlight has none.
        photos: [
          {
            image: "images/graduation-me.JPG",
            alt: "Nipuni Hansika at her SMU graduation",
            openLabel: "Open my graduation portrait in a new tab",
          },
          {
            image: "images/graduation-family.JPG",
            alt: "Nipuni Hansika celebrating her SMU graduation with family",
            openLabel: "Open my family graduation photo in a new tab",
          },
        ],
      },
      {
        date: "April 2026",
        yearMonth: "2026-04",
        text: "Our paper, [MOTUS ](https://doi.org/10.1145/3772318.3791935), was published at ACM CHI 2026.",
      },
      {
        date: "Jan 2026",
        yearMonth: "2026-01",
        text: "Started teaching on the Professional Certificate in Artificial Intelligence programme at IIT. Completed my MSc in Computing at Singapore Management University, with a focus on human–computer interaction and creativity support.",
      },
    ],
  },
};
