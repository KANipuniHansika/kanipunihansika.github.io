/* ==========================================================================
   RESEARCH PAGE CONTENT
   The boxes on the Research page. Each box links to a full project page,
   whose content lives in the data/projects folder.
   ========================================================================== */

SITE.page = {
  label: "Research Projects",
  heading: "Selected Work",
  introduction: "Research prototypes and user studies across digital drawing, accessibility, and human–robot interaction.",
  exploreLinkText: "Explore project →",

  // The large box at the top.
  featured: {
    id: "motus", // A short one-word name. Must match the "id" in the project's data file.
    page: "research-motus.html",
    label: "Featured · Singapore Management University",
    title: "MOTUS",
    description: "A creativity-support system that uses stylus-based motor training, feedback informed by expert strokes, and drawing prompts to help people develop skills for digital expression.",
    tags: ["Creativity support", "Stylus interaction", "User studies"],
    paper: {
      label: "ACM CHI 2026 · Equal contribution",
      title: "Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression",
      linkText: "Read the paper ↗",
      url: "https://dl.acm.org/doi/10.1145/3772318.3791935",
    },
  },

  // The smaller boxes. To add one, copy a whole { ... }, block.
  projects: [
    {
      id: "accessible-ar",
      page: "research-accessible-ar.html",
      label: "Accessibility · SMU",
      title: "Accessible AR navigation",
      description: "An indoor navigation and spatial annotation tool for people with visual impairments.",
    },
    {
      id: "gesture-robot",
      page: "research-gesture-robot.html",
      label: "Human–Robot Interaction · SUTD · ICMI 2020",
      title: "Gesture-enhanced robot instructions",
      description: "A multimodal interface for resolving ambiguous spoken instructions in collaborative robot tasks.",
    },
    {
      id: "touch-speech",
      page: "research-touch-speech.html",
      label: "Human–Robot Interaction · SUTD · TENCON 2019",
      title: "Speech and touch for multi-robot systems",
      description: "Interaction techniques for controlling multiple robots under varying workloads.",
    },
  ],
};
