/* ==========================================================================
   EDUCATION PAGE CONTENT

   To add a qualification: copy a whole { ... }, block (including its final
   comma), paste it at the top of the "entries" list, and change the details.

   Formatting: **bold words**   _italic words_   [link text](address)
   tallLogo: true gives a taller box, which suits crest-shaped logos.
   ========================================================================== */

SITE.page = {
  id: "education", // Please leave this as it is.
  label: "Academic Background",
  heading: "Education",

  entries: [
    {
      date: "Jan 2025 – Jan 2026",
      logo: "images/smu-logo.png",
      logoDescription: "Singapore Management University logo",
      institution: "Singapore Management University (SMU)",
      location: "Singapore",
      title: "Master of Science in Computing",
      paragraphs: [
        "**Advisor: **_Prof. Thivya Kandappu_",
        "**Research focus:** _Human–computer interaction and creativity support tools_",
        "**Research: ** _Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression - _[**_MOTUS_**](https://doi.org/10.1145/3772318.3791935)",
        "_(full paper, **ACM CHI 2026**)._",
      ],
      // Optional: a section the reader clicks to expand.
      moreDetails: {
        heading: "Courses taken",
        text: "Computational Interaction, Deep Learning and Vision, Learning and Planning in Intelligent Systems, Machine Learning, Optimisation and Computing, Mobile and Distributed Systems.",
      },
    },
    {
      date: "Feb 2014 – Jan 2018",
      logo: "images/moratuwa-logo.png",
      logoDescription: "University of Moratuwa logo",
      tallLogo: true,
      institution: "University of Moratuwa",
      location: "Sri Lanka",
      title: "BSc Eng (Hons), Electronic and Telecommunication Engineering",
      paragraphs: [
        "**First Class Honours | Dean's List, three semesters.**",
        "**CGPA: _3.70/ 4.20 _**",
      ],
    },
    {
      date: "Sep 2012 – May 2015",
      logo: "images/cima-logo.jpg",
      logoDescription: "Chartered Institute of Management Accountants logo",
      institution: "Chartered Institute of Management Accountants (CIMA)",
      location: "CIMA · United Kingdom",
      title: "Advanced Diploma in Management Accounting",
      paragraphs: [
        "CIMA Passed Finalist",
      ],
    },
  ],
};
