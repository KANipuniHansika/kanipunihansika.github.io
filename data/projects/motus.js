/* ==========================================================================
   MOTUS PROJECT PAGE CONTENT

   The "content" list below is read from top to bottom, and each item becomes
   one part of the page. A line of plain text in quotation marks becomes a
   paragraph. To add a picture, section or paragraph, copy a similar item.

   Formatting: **bold words**   _italic words_   [link text](address)
   ========================================================================== */

SITE.page = {
  id: "motus",      // Must match the "id" of this project's box in data/research.js.
  design: "motus",  // Which project design to use. Please leave this as it is.
  closingLinkText: "Let’s connect →",

  hero: {
    label: "Creativity support · Singapore Management University · 2025–2026",
    title: "MOTUS",
    tagline: ["Helping creative intention", "take shape through movement."], // The second line is highlighted.
    subtitle: "Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression",
    affiliation: "Singapore Management University · ACM CHI 2026",
    overview: "MOTUS explores how does learning to control a pen-stylus can support expressive digital drawing. It brings together structured motor practice, feedback informed by expert strokes, and embodied ideation prompts for creative exploration.",
    links: [
      { text: "Read the CHI 2026 paper ↗", url: "papers/motor-mediated-creativity-2026.pdf", button: true },
      { text: "DOI ↗", url: "https://dl.acm.org/doi/10.1145/3772318.3791935" },
      { text: "Explore the interface ↓", url: "#motus-interface" },
    ],
  },

  content: [
    {
      type: "figure",
      image: "images/research/motus/overview.jpg",
      alt: "Overview illustration of MOTUS motor guidance, feedback, and creative prompts",
      caption: "MOTUS overview, from the CHI 2026 paper. Structured practice and embodied prompts scaffold embodied skill development and creative expression.",
    },
    {
      type: "facts",
      items: [
        { title: "My role", text: "System design and development, stylus capture, feedback interfaces, and user research; equal-contribution co-author." },
        { title: "Research context", text: "MSc research at Singapore Management University, supervised by Prof. Thivya Kandappu." },
        { title: "Built with", text: "HTML, CSS, JavaScript, Python, Wacom SDK, and a Wacom Movink 13 pen display." },
      ],
    },
    {
      type: "section",
      label: "The research question",
      heading: "What if creativity support also trained the hand?",
      content: [
        "Digital tools offer many ways to make images, but novices can still struggle to translate an intention into a controlled mark. MOTUS investigates motor fluency as a resource for expression: learning how pressure, speed, and movement shape what appears on the canvas.",
      ],
    },
    {
      type: "section",
      id: "motus-interface",
      label: "The interaction",
      heading: "Practice a movement. Understand it. Explore with it.",
      content: [
        {
          type: "cards",
          look: "flow",
          items: [
            { number: "01", title: "Practise expressive strokes", text: "Work through stroke primitives that foreground pressure, velocity, and directional control." },
            { number: "02", title: "Review actionable feedback", text: "Inspect corrective text, similarity summaries, and temporal plots to decide what to adjust." },
            { number: "03", title: "Apply it creatively", text: "Move into open-ended drawing, using embodied prompts that connect imagined sensations with movement." },
          ],
        },
        {
          type: "figure",
          screen: true,
          image: "images/research/motus/combined-feedback.png",
          alt: "MOTUS feedback panel showing corrective text, a radar plot and a pressure trace",
          caption: "The combined feedback view: a rating and corrective text sit alongside parameter-level similarity and a pressure comparison with expert drawings. This is an example interaction state, not an aggregate result.",
        },
        {
          type: "cards",
          look: "reading",
          items: [
            { title: "What should I change?", text: "Descriptive feedback turns differences in stroke execution into a concrete next action." },
            { title: "Which parameter needs attention?", text: "The radar view summarises similarity across pressure, velocity, and tilt." },
            { title: "Where did it diverge?", text: "The temporal plot compares pressure over the stroke, helping locate differences during execution." },
          ],
        },
      ],
    },
    {
      type: "expandable",
      title: "Explore the interface and feedback design",
      subtitle: "Practice canvas · feedback alternatives · embodied prompts",
      content: [
        {
          type: "section",
          label: "01 / Keep drawing central",
          heading: "A canvas with guidance when needed",
          content: [
            "The prototype places the drawing canvas at the centre of the task. A reference preview and task instructions support stroke practice. Feedback is presented after each attempt. In the creative stage, a prompt panel provides a starting point for expression.",
            {
              type: "gallery",
              figures: [
                { image: "images/research/motus/stroke-practice.png", alt: "Pressure-staccato stroke practice on the MOTUS canvas", caption: "Stroke practice interface: instructions, an attempt counter, and the drawing surface." },
                { image: "images/research/motus/reference-preview.png", alt: "MOTUS reference stroke preview beside the drawing canvas", caption: "Reference preview: an example stroke is available beside the practice canvas." },
              ],
            },
          ],
        },
        {
          type: "section",
          label: "02 / Compare feedback representations",
          heading: "From measurements to interpretable guidance",
          content: [
            "The formative work explored different ways of presenting stroke feedback. These interface screenshots document analytic graphs, descriptive text, raw metrics, and reference imagery. They show interface alternatives considered during development, rather than a confirmed chronological sequence of redesigns.",
            {
              type: "gallery",
              figures: [
                { image: "images/research/motus/early-graphs.png", alt: "Graphical stroke-feedback panel from the thesis prototype", caption: "Analytic graphs expose changes in stroke parameters." },
                { image: "images/research/motus/early-text.png", alt: "Textual corrective-feedback panel from the thesis prototype", caption: "Descriptive text translates measurements into suggestions." },
                { image: "images/research/motus/early-metrics.png", alt: "Raw numerical stroke-metrics panel from the thesis prototype", caption: "Raw metrics present numerical stroke measurements." },
                { image: "images/research/motus/early-reference.png", alt: "Reference stroke image panel from the thesis prototype", caption: "Reference imagery offers a visual target for comparison." },
              ],
            },
            { type: "note", text: "In the formative study, 37 of 42 participants selected descriptive textual feedback as the most useful feedback type. The later interface combines interpretable text with supporting visualisations." },
          ],
        },
        {
          type: "section",
          label: "03 / Inspect an example",
          heading: "Make the motor signal visible",
          content: [
            "These supplied plots are from a single first-attempt example. The pressure graph overlays an expert reference and novice trace; the radar plot summarises parameter similarities. They illustrate feedback presentation, not a before-and-after training comparison.",
            {
              type: "gallery",
              figures: [
                { image: "images/research/motus/pressure-example.png", alt: "Expert and novice pressure traces over time for one stroke attempt", caption: "Pressure comparison: blue is the expert reference and orange is the novice attempt. Shading is the prototype’s correlation annotation." },
                { image: "images/research/motus/radar-example.png", alt: "Radar plot of tilt velocity and pressure ratings for one attempt", caption: "Radar example: the displayed scores summarise parameter-level similarity." },
              ],
            },
          ],
        },
        {
          type: "section",
          label: "04 / Support expressive exploration",
          heading: "From instructions to embodied imagination",
          content: [
            "The formative study compared unprompted drawing, generic prompts, and embodied prompts. Embodied prompts frame marks through sensory or physical metaphors, encouraging learners to connect movement with expressive intent.",
            {
              type: "gallery",
              columns: 3,
              figures: [
                { image: "images/research/motus/prompt-none.png", alt: "Creative drawing interface without an ideation prompt", caption: "No prompt: an open creative drawing task." },
                { image: "images/research/motus/prompt-generic.png", alt: "Creative drawing interface with a generic ideation prompt", caption: "Generic prompt: guidance around the expressive theme." },
                { image: "images/research/motus/prompt-embodied.png", alt: "Creative drawing interface with an embodied ideation prompt", caption: "Embodied prompt: a sensory or movement-based starting point." },
              ],
            },
            { type: "note", text: "In the formative study, 33 of 42 participants preferred embodied prompts over generic prompts." },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Our implementation",
      heading: "Connecting stylus input, feedback, and creative tasks",
      content: [
        {
          type: "implementation",
          points: [
            "Developed the web interface and Python backend, including real-time stylus capture with the Wacom SDK.",
            "Implemented feedback views combining ratings, corrective text, radar plots, and temporal comparisons.",
            "Integrated structured practice with prompt-based creative drawing tasks.",
            "Contributed to formative and controlled studies and quantitative and qualitative analysis.",
          ],
          figure: {
            image: "images/research/motus/architecture.png",
            alt: "MOTUS architecture linking motor training to creative expression and feedback modules",
            caption: "System architecture: expert references, feedback, prompts, and interface components.",
          },
        },
      ],
    },
    {
      type: "section",
      label: "Research evidence",
      heading: "Studying motor fluency and expression",
      content: [
        {
          type: "cards",
          look: "evidence",
          items: [
            { bigNumber: "42", title: "Formative participants", text: "Investigated novice challenges, feedback representations, and prompt preferences." },
            { bigNumber: "36", title: "Controlled evaluation", text: "A 2 × 2 design compared motor feedback and ideation prompts, separately and together." },
            { bigNumber: "9", title: "iPad validation participants", text: "A separate cohort explored the full intervention on another tablet platform." },
          ],
        },
        "The published evaluation links gains in measured motor fluency with expert-rated expressive improvement. These findings support motor training as a promising direction for creativity-support tools. However they do not establish long-term retention or generalisation to every form of digital art.",
        {
          type: "expandable",
          title: "View illustrative drawing pairs",
          subtitle: "Same participant and theme, before and after the intervention",
          content: [
            {
              type: "gallery",
              figures: [
                { image: "images/research/motus/drawing-before-happiness.png", alt: "Participant P37 baseline abstract drawing for Happiness", caption: "Before: P37, Happiness, full-MOTUS group." },
                { image: "images/research/motus/drawing-after-happiness.png", alt: "Participant P37 post-intervention abstract drawing for Happiness", caption: "After: P37, Happiness, full-MOTUS group." },
              ],
            },
            {
              type: "gallery",
              figures: [
                { image: "images/research/motus/drawing-before-chaos.png", alt: "Participant P15 baseline abstract drawing for chaos", caption: "Before: P15, Chaos, group with ideation prompts alone." },
                { image: "images/research/motus/drawing-after-chaos.png", alt: "Participant P15 post-intervention abstract drawing for Chaos", caption: "After: P15, Chaos, group with ideation prompts alone." },
              ],
            },
            "Illustrative samples from Figure 6 of the paper. A single pair does not summarise all participant outcomes or independently demonstrate an intervention effect.",
          ],
        },
      ],
    },
    {
      type: "section",
      highlighted: true,
      label: "Design takeaway",
      heading: "Support the maker’s skill, as well as the outcome.",
      content: [
        "For me, MOTUS connects interface design with embodied learning: making feedback understandable, keeping creative decisions with the person, and giving learners a way to connect a physical action with its expressive effect.",
      ],
    },
    {
      type: "section",
      heading: "Publication & credits",
      content: [
        "Pasindu Bolonghege, Gevindu Ganganath, Nipuni Arachchige, Paul Benedict Lincoln, and Thivya Kandappu. 2026. _Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression._ CHI ’26. DOI: [10.1145/3772318.3791935](https://dl.acm.org/doi/10.1145/3772318.3791935).",
        "Equal-contribution co-author. Paper figures are credited to Bolonghege et al. (2026), licensed under a Creative Commons Attribution 4.0 International License.",
      ],
    },
  ],
};
