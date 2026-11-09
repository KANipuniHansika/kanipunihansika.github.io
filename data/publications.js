/* ==========================================================================
   PUBLICATIONS PAGE CONTENT

   To add a paper: copy a whole { ... }, block (including its final comma),
   paste it at the top of the "papers" list, and change the details.
   Put the PDF in the "papers" folder.

   Formatting: **bold words**   _italic words_
   Your own name is in bold. A star straight after a name, as in
   **N. Arachchige***, shows equal contribution.
   ========================================================================== */

SITE.page = {
  label: "Publications",
  heading: "Conference Papers",
  citationHeading: "Recommended Citation",

  papers: [
    {
      venue: "ACM CHI · 2026",
      title: "Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression",
      url: "https://dl.acm.org/doi/10.1145/3772318.3791935",
      publishedIn: "Published in _Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)_",
      authors: "P. Bolonghege*, G. Ganganath*, **N. Arachchige***, P. Benedict Lincoln, and T. Kandappu.",
      note: "*Equal contribution.", // Optional. Leave this line out if there is no note.
      links: [
        { text: "Read PDF ↗", url: "papers/motor-mediated-creativity-2026.pdf" },
        { text: "DOI ↗", url: "https://dl.acm.org/doi/10.1145/3772318.3791935" },
        { text: "Project details ↗", url: "research-motus.html" },
      ],
      citation: "Bolonghege, P., Ganganath, G., Arachchige, N., Benedict Lincoln, P. and Kandappu, T., 2026, April. Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (pp. 1-23).",
    },
    {
      venue: "ACM ICMI · 2020",
      title: "Gesture Enhanced Comprehension of Ambiguous Human-to-Robot Instructions",
      url: "https://dl.acm.org/doi/10.1145/3382507.3418863",
      publishedIn: "Published in _Proceedings of the 2020 International Conference on Multi-modal Interaction (ICMI '20)_",
      authors: "D. Weerakoon, V. Subbaraju, **N. Karumpulli**, T. Tran, Q. Xu, U.X. Tan, J.H. Lim, and A. Misra.",
      links: [
        { text: "Read PDF ↗", url: "papers/gesture-human-to-robot-instructions-2020.pdf" },
        { text: "DOI ↗", url: "https://dl.acm.org/doi/10.1145/3382507.3418863" },
        { text: "Project details ↗", url: "research-gesture-robot.html" },
      ],
      citation: "Weerakoon, D., Subbaraju, V., Karumpulli, N., Tran, T., Xu, Q., Tan, U.X., Lim, J.H. and Misra, A., 2020, October. Gesture Enhanced Comprehension of Ambiguous Human-to-Robot Instructions. In Proceedings of the 2020 International Conference on Multi-modal Interaction (pp. 251-259).",
    },
    {
      venue: "IEEE TENCON · 2019",
      title: "Complementing Speech Interaction Design with Touch for Multi-Robot Systems",
      url: "https://ieeexplore.ieee.org/document/8929506",
      publishedIn: "Published in _TENCON 2019-2019 IEEE Region 10 Conference (TENCON '19)_",
      authors: "K. Johari, **N. Karumpulli**, and U.X. Tan.",
      links: [
        { text: "Read PDF ↗", url: "papers/touch-speech-multi-robot-2019.pdf" },
        { text: "Publisher ↗", url: "https://ieeexplore.ieee.org/document/8929506" },
        { text: "Project details ↗", url: "research-touch-speech.html" },
      ],
      citation: "Johari, K., Karumpulli, N. and Tan, U.X., 2019, October. Complementing Speech Interaction Design with Touch for Multi-Robot Systems. In TENCON 2019-2019 IEEE Region 10 Conference (TENCON) (pp. 1400-1405). IEEE.",
    },
  ],
};
