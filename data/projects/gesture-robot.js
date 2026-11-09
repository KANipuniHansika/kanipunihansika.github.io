/* ==========================================================================
   GESTURE-ENHANCED ROBOT INSTRUCTIONS PROJECT PAGE CONTENT

   The "content" list below is read from top to bottom, and each item becomes
   one part of the page. A line of plain text in quotation marks becomes a
   paragraph. To add a picture, section or paragraph, copy a similar item.

   Formatting: **bold words**   _italic words_   [link text](address)
   ========================================================================== */

SITE.page = {
  id: "gesture-robot",      // Must match the "id" of this project's box in data/research.js.
  design: "gesture-robot",  // Which project design to use. Please leave this as it is.
  closingLinkText: "Let’s connect →",

  hero: {
    label: "Human–robot interaction  · Singapore University of Technology and Design · Jul 2019 – May 2020",
    title: ["When words need", "a pointing gesture."], // The second line is highlighted.
    subtitle: "Gesture Enhanced Comprehension of Ambiguous Human-to-Robot Instructions",
    affiliation: "SUTD · A*STAR · Singapore Management University · ACM ICMI 2020",
    overview: "In a cluttered scene, a verbal description can match more than one object. M2Gestic investigates how visual context, natural-language instructions, and pointing can work together to identify the intended target—even when the pointing location is uncertain.",
    links: [
      { text: "Read the ICMI 2020 paper ↗", url: "papers/gesture-human-to-robot-instructions-2020.pdf", button: true },
      { text: "DOI ↗", url: "https://dl.acm.org/doi/10.1145/3382507.3418863" },
      { text: "Explore the interface ↓", url: "#gesture-interface" },
    ],
  },

  content: [
    {
      type: "figure",
      image: "images/research/gesture/system.png",
      alt: "M2Gestic system diagram combining visual scene information, language and pointing",
      caption: "M2Gestic system components and functionality.",
    },
    {
      type: "panel",
      heading: "My contribution",
      paragraphs: [
        "I designed an HTC Vive-based multimodal interface integrating pointing gestures and natural language for collaborative human–robot tasks, and assisted in experimental studies evaluating gesture-enhanced instruction comprehension.",
        "**Technologies:** Unity, HTC Vive, Python, and Figma.",
      ],
    },
    {
      type: "section",
      label: "Research problem",
      heading: "Which object does the instruction mean?",
      content: [
        "Objects may share colours, shapes, or spatial relationships. Descriptions involving “left” or “behind” may also depend on perspective. Pointing provides another spatial cue, but human pointing is not perfectly precise.",
        "The research challenge is to combine the available cues while accounting for uncertainty, rather than treating the pointed position as an exact target.",
      ],
    },
    {
      type: "section",
      id: "gesture-interface",
      label: "The team’s system",
      heading: "Three inputs, one target-selection decision",
      content: [
        {
          type: "cards",
          look: "flow",
          items: [
            { title: "Visual scene", text: "Represent object attributes and spatial relationships in the tabletop scene." },
            { title: "Language", text: "Parse the instruction into machine-understandable references and relationships." },
            { title: "Pointing", text: "Use the estimated pointing location and its uncertainty to rank candidate objects." },
          ],
        },
        "M2Gestic combines neural-based text parsing with knowledge-graph traversal and multimodal inference. The inference method is a team research contribution; my role focused on the interaction interface and supporting studies.",
      ],
    },
    {
      type: "expandable",
      title: "Explore the interface & study setup",
      subtitle: "HTC Vive pointing · Unity tabletop scenes · uncertainty",
      content: [
        {
          type: "section",
          heading: "Capturing pointing input",
          content: [
            "The pointing study used a calibrated HTC Vive setup to record the intended location on a screen displaying tabletop block arrangements. Participants pointed from three distances: 88 cm, 176 cm, and 264 cm. The study characterised how pointing error changed with distance.",
            {
              type: "figure",
              image: "images/research/gesture/pointing-study.jpeg",
              alt: "Participant using the HTC Vive tracking setup to point at a tabletop scene displayed on a screen",
              caption: "Pointing-data collection setup.",
            },
          ],
        },
        {
          type: "section",
          heading: "Presenting the task in Unity",
          content: [
            "A Unity 3D environment recreated 28 tabletop block arrangements. To study comprehension from the receiving agent’s perspective, the scene was transformed to show the objects and the instructor’s pointing gesture from across the table.",
            {
              type: "figure",
              image: "images/research/gesture/unity-scene.jpeg",
              alt: "Unity tabletop scene viewed from the receiving agent perspective with an instructor avatar pointing",
              caption: "Unity scene used in the human comprehension study.",
            },
          ],
        },
        {
          type: "section",
          heading: "Accounting for uncertainty",
          content: [
            "The study found that pointing error increased with distance. The system uses this uncertainty when combining pointing and verbal cues. At greater distances, a gesture can become less useful and should receive less weight.",
            {
              type: "figure",
              image: "images/research/gesture/pointing-error.png",
              alt: "Pointing-error distributions at distances of 88, 176 and 264 centimetres",
              caption: "Pointing-error distributions broaden as the instructor moves farther from the display. This is an empirical study result, not a measure of interface-design quality.",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Published findings",
      heading: "Pointing helps when the words are ambiguous",
      content: [
        {
          type: "result",
          value: "29.26% → 60.73%",
          text: "M2Gestic target-selection accuracy for ambiguous instructions, comparing text-only input with gesture-enhanced input at 88 cm. This is a gain of 31.47 percentage points.",
        },
        "For unambiguous instructions, the text-and-scene system achieved accuracy close to the human baseline. The additional value of pointing depended on its precision: the gain was smaller at 176 cm, while at 264 cm the best-performing configuration ignored pointing and reverted to the text-only baseline.",
        "The findings concern benchmark tabletop target selection. They do not demonstrate end-to-end physical robot manipulation or unrestricted conversational understanding.",
      ],
    },
    {
      type: "section",
      label: "Design takeaway",
      heading: "Let people communicate with more than words.",
      content: [
        "This project connects embodied interaction with instruction comprehension. It highlights the importance of designing interfaces that capture natural spatial cues while recognising that those cues can be uncertain.",
      ],
    },
    {
      type: "section",
      heading: "Publication & credits",
      content: [
        "Dulanga Weerakoon, Vigneshwaran Subbaraju, Nipuni Karumpulli, Tuan Tran, Qianli Xu, U-Xuan Tan, Joo Hwee Lim, and Archan Misra. 2020. _Gesture Enhanced Comprehension of Ambiguous Human-to-Robot Instructions._ ICMI ’20. DOI: [10.1145/3382507.3418863](https://dl.acm.org/doi/10.1145/3382507.3418863).",
        "Paper figures are credited to Weerakoon et al. (2020).",
      ],
    },
  ],
};
