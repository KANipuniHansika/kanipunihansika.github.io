/**
 * projects.js — Research project data.
 *
 * This file drives BOTH the research overview page (/research) and the
 * individual project detail pages (/research/:slug).
 *
 * Each project object has two layers:
 *
 *   ┌─ Overview card data (used on /research) ──────────────────┐
 *   │  slug, title, label, description, tags, featured, aside     │
 *   └────────────────────────────────────────────────────────────┘
 *
 *   ┌─ Detail page data (used on /research/:slug) ──────────────┐
 *   │  detail: { label, title|titleLines, deck, subtitle,        │
 *   │           affiliation, overview, links, meta, blocks,     │
 *   │           credits }                                         │
 *   └────────────────────────────────────────────────────────────┘
 *
 * ── Block types inside detail.blocks ──────────────────────────
 *   figure         Single image with caption (clickable to enlarge)
 *   gallery        Grid of figures (columns: 2 or 3)
 *   text-section   Label + heading + paragraphs + nested blocks
 *   flow           3-column numbered flow cards
 *   reading        3-column heading + text panel
 *   meta           dl grid with label / value pairs
 *   facts          3-column facts grid
 *   stats          3-column big-number stats
 *   steps          Ordered steps (2-column grid)
 *   table          Table with headers and rows
 *   implementation Grid: bullet list + figure side by side
 *   published-split Figure + text side by side
 *   role-box       Boxed contribution paragraph with technologies
 *   result-stat    Single big-number result
 *   reflection     Boxed design takeaway
 *   callout        Highlighted callout paragraph
 *   disclosure     Collapsible <details> containing nested blocks
 *   credits        Publication & credits section
 *
 * ── Rich text format ──────────────────────────────────────────
 *   Paragraphs can be a string, or an array of segments:
 *     "plain text"
 *     { em: "italic text" }
 *     { strong: "bold text" }
 *     { link: { text: "link", href: "url", external: true } }
 *
 * To add a new project:
 *   1. Copy an existing project object.
 *   2. Change the slug, overview card data, and detail content.
 *   3. Add a matching PDF in public/papers/ if applicable.
 *   4. Add images in public/images/research/<slug>/.
 *   5. The route /research/<slug> will work automatically.
 */

// ── Image path helper ────────────────────────────────────────
// All research images live under /images/research/<project>/.
// This keeps the data file concise.
const img = (project, filename) => `/images/research/${project}/${filename}`

export const projects = [
  /* ==========================================================
     MOTUS — Featured project
     ========================================================== */
  {
    slug: 'motus',
    title: 'MOTUS',
    label: 'Featured · Singapore Management University',
    description:
      'A creativity-support system that uses stylus-based motor training, feedback informed by expert strokes, ' +
      'and drawing prompts to help people develop skills for digital expression.',
    tags: ['Creativity support', 'Stylus interaction', 'User studies'],
    featured: true,
    aside: {
      label: 'ACM CHI 2026 · Equal contribution',
      text: 'Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression',
      link: {
        text: 'Read the paper ↗',
        href: 'https://dl.acm.org/doi/10.1145/3772318.3791935',
        external: true,
      },
    },

    detail: {
      label: 'Creativity support · Singapore Management University · 2025–2026',
      title: 'MOTUS',
      deck: { text: 'Helping creative intention', em: 'take shape through movement.' },
      subtitle:
        'Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression',
      affiliation: 'Singapore Management University · ACM CHI 2026',
      overview:
        'MOTUS explores how learning to control a pen-stylus can support expressive digital drawing. ' +
        'It brings together structured motor practice, feedback informed by expert strokes, and ' +
        'embodied ideation prompts for creative exploration.',
      links: [
        { text: 'Read the CHI 2026 paper ↗', href: '/papers/motor-mediated-creativity-2026.pdf', external: true, button: true },
        { text: 'DOI ↗', href: 'https://dl.acm.org/doi/10.1145/3772318.3791935', external: true },
        { text: 'Explore the interface ↓', href: '#motus-interface' },
      ],
      meta: [
        { label: 'My role', value: 'System design and development, stylus capture, feedback interfaces, and user research; equal-contribution co-author.' },
        { label: 'Research context', value: 'MSc research at Singapore Management University, supervised by Prof. Thivya Kandappu.' },
        { label: 'Built with', value: 'HTML, CSS, JavaScript, Python, Wacom SDK, and a Wacom Movink 13 pen display.' },
      ],
      blocks: [
        // Overview figure
        {
          type: 'figure',
          image: {
            src: img('motus', 'overview.jpg'),
            alt: 'Overview illustration of MOTUS motor guidance, feedback, and creative prompts',
            caption:
              'MOTUS overview, from the CHI 2026 paper. Structured practice and embodied prompts scaffold ' +
              'embodied skill development and creative expression.',
          },
        },

        // Meta grid
        { type: 'meta' },

        // Research question
        {
          type: 'text-section',
          label: 'The research question',
          heading: 'What if creativity support also trained the hand?',
          paragraphs: [
            'Digital tools offer many ways to make images, but novices can still struggle to translate an ' +
            'intention into a controlled mark. MOTUS investigates motor fluency as a resource for expression: ' +
            'learning how pressure, speed, and movement shape what appears on the canvas.',
          ],
        },

        // The interaction
        {
          type: 'text-section',
          id: 'motus-interface',
          label: 'The interaction',
          heading: 'Practice a movement. Understand it. Explore with it.',
          paragraphs: [],
          blocks: [
            {
              type: 'flow',
              items: [
                { number: '01', title: 'Practise expressive strokes', text: 'Work through stroke primitives that foreground pressure, velocity, and directional control.' },
                { number: '02', title: 'Review actionable feedback', text: 'Inspect corrective text, similarity summaries, and temporal plots to decide what to adjust.' },
                { number: '03', title: 'Apply it creatively', text: 'Move into open-ended drawing, using embodied prompts that connect imagined sensations with movement.' },
              ],
            },
            {
              type: 'figure',
              image: {
                src: img('motus', 'combined-feedback.png'),
                alt: 'MOTUS feedback panel showing corrective text, a radar plot and a pressure trace',
                caption:
                  'The combined feedback view: a rating and corrective text sit alongside parameter-level ' +
                  'similarity and a pressure comparison with expert drawings. This is an example interaction ' +
                  'state, not an aggregate result.',
              },
            },
            {
              type: 'reading',
              items: [
                { title: 'What should I change?', text: 'Descriptive feedback turns differences in stroke execution into a concrete next action.' },
                { title: 'Which parameter needs attention?', text: 'The radar view summarises similarity across pressure, velocity, and tilt.' },
                { title: 'Where did it diverge?', text: 'The temporal plot compares pressure over the stroke, helping locate differences during execution.' },
              ],
            },
          ],
        },

        // Disclosure: interface and feedback design
        {
          type: 'disclosure',
          summary: 'Explore the interface and feedback design',
          note: 'Practice canvas · feedback alternatives · embodied prompts',
          blocks: [
            {
              type: 'text-section',
              label: '01 / Keep drawing central',
              heading: 'A canvas with guidance when needed',
              paragraphs: [
                'The prototype places the drawing canvas at the centre of the task. A reference preview and ' +
                'task instructions support stroke practice. Feedback is presented after each attempt. In the ' +
                'creative stage, a prompt panel provides a starting point for expression.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('motus', 'stroke-practice.png'), alt: 'Pressure-staccato stroke practice on the MOTUS canvas', caption: 'Stroke practice interface: instructions, an attempt counter, and the drawing surface.' },
                    { src: img('motus', 'reference-preview.png'), alt: 'MOTUS reference stroke preview beside the drawing canvas', caption: 'Reference preview: an example stroke is available beside the practice canvas.' },
                  ],
                },
              ],
            },
            {
              type: 'text-section',
              label: '02 / Compare feedback representations',
              heading: 'From measurements to interpretable guidance',
              paragraphs: [
                'The formative work explored different ways of presenting stroke feedback. These interface ' +
                'screenshots document analytic graphs, descriptive text, raw metrics, and reference imagery. ' +
                'They show interface alternatives considered during development, rather than a confirmed ' +
                'chronological sequence of redesigns.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('motus', 'early-graphs.png'), alt: 'Graphical stroke-feedback panel from the thesis prototype', caption: 'Analytic graphs expose changes in stroke parameters.' },
                    { src: img('motus', 'early-text.png'), alt: 'Textual corrective-feedback panel from the thesis prototype', caption: 'Descriptive text translates measurements into suggestions.' },
                    { src: img('motus', 'early-metrics.png'), alt: 'Raw numerical stroke-metrics panel from the thesis prototype', caption: 'Raw metrics present numerical stroke measurements.' },
                    { src: img('motus', 'early-reference.png'), alt: 'Reference stroke image panel from the thesis prototype', caption: 'Reference imagery offers a visual target for comparison.' },
                  ],
                },
                {
                  type: 'callout',
                  text:
                    'In the formative study, 37 of 42 participants selected descriptive textual feedback as the ' +
                    'most useful feedback type. The later interface combines interpretable text with supporting ' +
                    'visualisations.',
                },
              ],
            },
            {
              type: 'text-section',
              label: '03 / Inspect an example',
              heading: 'Make the motor signal visible',
              paragraphs: [
                'These supplied plots are from a single first-attempt example. The pressure graph overlays an ' +
                'expert reference and novice trace; the radar plot summarises parameter similarities. They ' +
                'illustrate feedback presentation, not a before-and-after training comparison.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('motus', 'pressure-example.png'), alt: 'Expert and novice pressure traces over time for one stroke attempt', caption: 'Pressure comparison: blue is the expert reference and orange is the novice attempt. Shading is the prototype\u2019s correlation annotation.' },
                    { src: img('motus', 'radar-example.png'), alt: 'Radar plot of tilt velocity and pressure ratings for one attempt', caption: 'Radar example: the displayed scores summarise parameter-level similarity.' },
                  ],
                },
              ],
            },
            {
              type: 'text-section',
              label: '04 / Support expressive exploration',
              heading: 'From instructions to embodied imagination',
              paragraphs: [
                'The formative study compared unprompted drawing, generic prompts, and embodied prompts. ' +
                'Embodied prompts frame marks through sensory or physical metaphors, encouraging learners to ' +
                'connect movement with expressive intent.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 3,
                  items: [
                    { src: img('motus', 'prompt-none.png'), alt: 'Creative drawing interface without an ideation prompt', caption: 'No prompt: an open creative drawing task.' },
                    { src: img('motus', 'prompt-generic.png'), alt: 'Creative drawing interface with a generic ideation prompt', caption: 'Generic prompt: guidance around the expressive theme.' },
                    { src: img('motus', 'prompt-embodied.png'), alt: 'Creative drawing interface with an embodied ideation prompt', caption: 'Embodied prompt: a sensory or movement-based starting point.' },
                  ],
                },
                {
                  type: 'callout',
                  text: 'In the formative study, 33 of 42 participants preferred embodied prompts over generic prompts.',
                },
              ],
            },
          ],
        },

        // Implementation
        {
          type: 'text-section',
          label: 'Our implementation',
          heading: 'Connecting stylus input, feedback, and creative tasks',
          paragraphs: [],
          blocks: [
            {
              type: 'implementation',
              items: [
                'Developed the web interface and Python backend, including real-time stylus capture with the Wacom SDK.',
                'Implemented feedback views combining ratings, corrective text, radar plots, and temporal comparisons.',
                'Integrated structured practice with prompt-based creative drawing tasks.',
                'Contributed to formative and controlled studies and quantitative and qualitative analysis.',
              ],
              figure: {
                src: img('motus', 'architecture.png'),
                alt: 'MOTUS architecture linking motor training to creative expression and feedback modules',
                caption: 'System architecture: expert references, feedback, prompts, and interface components.',
              },
            },
          ],
        },

        // Research evidence
        {
          type: 'text-section',
          label: 'Research evidence',
          heading: 'Studying motor fluency and expression',
          paragraphs: [],
          blocks: [
            {
              type: 'stats',
              items: [
                { number: '42', title: 'Formative participants', text: 'Investigated novice challenges, feedback representations, and prompt preferences.' },
                { number: '36', title: 'Controlled evaluation', text: 'A 2 \u00d7 2 design compared motor feedback and ideation prompts, separately and together.' },
                { number: '9', title: 'iPad validation participants', text: 'A separate cohort explored the full intervention on another tablet platform.' },
              ],
            },
            'The published evaluation links gains in measured motor fluency with expert-rated expressive ' +
            'improvement. These findings support motor training as a promising direction for creativity-support ' +
            'tools. However they do not establish long-term retention or generalisation to every form of ' +
            'digital art.',
            {
              type: 'disclosure',
              summary: 'View illustrative drawing pairs',
              note: 'Same participant and theme, before and after the intervention',
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('motus', 'drawing-before-happiness.png'), alt: 'Participant P37 baseline abstract drawing for Happiness', caption: 'Before: P37, Happiness, full-MOTUS group.' },
                    { src: img('motus', 'drawing-after-happiness.png'), alt: 'Participant P37 post-intervention abstract drawing for Happiness', caption: 'After: P37, Happiness, full-MOTUS group.' },
                  ],
                },
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('motus', 'drawing-before-chaos.png'), alt: 'Participant P15 baseline abstract drawing for Chaos', caption: 'Before: P15, Chaos, group with ideation prompts alone.' },
                    { src: img('motus', 'drawing-after-chaos.png'), alt: 'Participant P15 post-intervention abstract drawing for Chaos', caption: 'After: P15, Chaos, group with ideation prompts alone.' },
                  ],
                },
                'Illustrative samples from Figure 6 of the paper. A single pair does not summarise all ' +
                'participant outcomes or independently demonstrate an intervention effect.',
              ],
            },
          ],
        },

        // Design takeaway
        {
          type: 'reflection',
          label: 'Design takeaway',
          heading: 'Support the maker\u2019s skill, as well as the outcome.',
          text:
            'For me, MOTUS connects interface design with embodied learning: making feedback understandable, ' +
            'keeping creative decisions with the person, and giving learners a way to connect a physical ' +
            'action with its expressive effect.',
        },

        // Credits
        {
          type: 'credits',
          paragraphs: [
            [
              'Pasindu Bolonghege, Gevindu Ganganath, Nipuni Arachchige, Paul Benedict Lincoln, and Thivya Kandappu. 2026. ',
              { em: 'Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression.' },
              ' CHI \u201926. DOI: ',
              { link: { text: '10.1145/3772318.3791935', href: 'https://dl.acm.org/doi/10.1145/3772318.3791935', external: true } },
              '.',
            ],
            'Equal-contribution co-author. Paper figures are credited to Bolonghege et al. (2026), licensed under a Creative Commons Attribution 4.0 International License.',
          ],
        },
      ],
    },
  },

  /* ==========================================================
     Accessible AR navigation
     ========================================================== */
  {
    slug: 'accessible-ar',
    title: 'Accessible AR navigation',
    label: 'Accessibility · SMU',
    description: 'An indoor navigation and spatial annotation tool for people with visual impairments.',

    detail: {
      label: 'Accessibility & extended reality · Singapore Management University · 2022–2023',
      titleLines: ['Making indoor spaces', { em: 'interactive in AR.' }],
      subtitle: 'Point-cloud annotation and object selection with Nreal Light',
      overview:
        'Within my broader research on accessible indoor interaction, I developed Unity C# prototypes for ' +
        'Nreal Light AR glasses. The materials shown here focus on representing indoor spaces as point clouds ' +
        'and letting users identify, select, and manipulate spatial regions.',
      links: [
        {
          text: 'View Unity & AR demo videos ↗',
          href: 'https://smu-my.sharepoint.com/:f:/g/personal/nipunih_ka_2024_msc_smu_edu_sg/IgB-_42CihI5R5d0cEKNsxTNAdp1TD6OCAXPkVkUcLfrKjk?e=tZNgS5',
          external: true,
          button: true,
        },
        { text: 'Explore the interaction design ↓', href: '#ar-process' },
      ],
      blocks: [
        // Room + point cloud gallery
        {
          type: 'gallery',
          columns: 2,
          items: [
            { src: img('ar', 'room.jpeg'), alt: 'Photograph of the meeting room used in the prototype', caption: 'Physical environment: a meeting room with a table, chairs, and surrounding objects.' },
            { src: img('ar', 'point-cloud.png'), alt: 'Point-cloud representation of the meeting room', caption: 'Digital representation: room geometry captured as a point cloud using iPhone LiDAR.' },
          ],
        },

        // Facts grid
        {
          type: 'facts',
          items: [
            { title: 'My contribution', text: 'Developed the headset prototypes, integrated point-cloud representations, and explored speech, text, pointer and gesture based selection and manipulation.' },
            { title: 'Tools', text: 'Unity · C# · Nreal Light · iPhone LiDAR point clouds · interaction prototyping' },
            { title: 'Design challenge', text: 'How can a person indicate the intended object when spatial regions overlap or sit inside one another?' },
          ],
        },

        // Prototype workflow
        {
          type: 'text-section',
          id: 'ar-process',
          label: 'Prototype workflow',
          heading: 'From a room scan to a selected object',
          paragraphs: [],
          blocks: [
            {
              type: 'steps',
              items: [
                { title: 'Load the environment', text: 'Bring the captured indoor point cloud into the application.' },
                { title: 'Create a region', text: 'Use the open-hand and victory gestures to initialise interaction and generate a bounding box.' },
                { title: 'Refine its bounds', text: 'Move, rotate, or scale the box using pinch-based manipulation.' },
                { title: 'Select the points', text: 'Use a pointing gesture to select points within the bounding-box region.' },
              ],
            },
            {
              type: 'gallery',
              columns: 2,
              items: [
                { src: img('ar', 'bounding-box.png'), alt: 'Prototype showing a bounding box over the room point cloud', caption: 'Bounding-box creation: define a spatial region around the intended object.' },
                { src: img('ar', 'selected-points.png'), alt: 'Selected chair-region points highlighted green in the point cloud', caption: 'Point selection: selected points are highlighted in green within the chosen region.' },
              ],
            },
          ],
        },

        // Disclosure: interaction design
        {
          type: 'disclosure',
          summary: 'Explore the interaction design & prototype development',
          note: 'Gesture flow · selection ambiguity · alternatives and trade-offs',
          blocks: [
            {
              type: 'text-section',
              label: '01 / Interaction flow',
              heading: 'Connect gestures to visible spatial changes',
              paragraphs: [
                'The prototype uses hand gestures for distinct steps: initialisation, box creation, ' +
                'manipulation, and point selection. The workflow separates these actions so the user can ' +
                'define a region before selecting its contents.',
              ],
              blocks: [
                {
                  type: 'figure',
                  image: {
                    src: img('ar', 'workflow.png'),
                    alt: 'Architecture diagram showing point-cloud generation, bounding-box creation and manipulation, and point selection',
                    caption: 'Prototype workflow.',
                  },
                },
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('ar', 'initialisation.png'), alt: 'Nreal prototype initial view of the loaded room point cloud', caption: 'Initialisation view: the room model is available for spatial interaction.' },
                    { src: img('ar', 'headset-selection.jpg'), alt: 'Headset view with selected point-cloud points highlighted over a chair', caption: 'Headset interaction example showing highlighted points in the room.' },
                  ],
                },
              ],
            },
            {
              type: 'text-section',
              label: '02 / The usability problem',
              heading: 'When several boxes could be the target',
              paragraphs: [
                'Spatial selection becomes ambiguous when one box is nested inside another, when objects ' +
                'partly overlap, or when a component belongs to a larger object. A movement intended for one ' +
                'box can instead affect a different box.',
                'This mismatch between intended and recognised selection is an interaction problem that ' +
                'requires explicit target selection.',
              ],
            },
            {
              type: 'text-section',
              label: '03 / Implemented exploration',
              heading: 'Make one candidate active at a time',
              paragraphs: [
                'As a solution, we first implemented three scheduling approaches. Each activates a candidate ' +
                'box for a timed interval, with manipulation affecting the active box.',
              ],
              blocks: [
                {
                  type: 'table',
                  headers: ['Approach', 'Selection order', 'Design consideration'],
                  rows: [
                    ['Round robin', 'Object-creation order', 'Predictable sequence, but the user may need to wait.'],
                    ['Priority order', 'Assigned priority. Proximity is explored', 'The ordering needs to match the user\u2019s current task.'],
                    ['Random order', 'Randomised candidate sequence', 'Less predictable access to a particular target.'],
                  ],
                  note: 'These considerations explain the design space.',
                },
              ],
              // Additional sub-heading + paragraph after the table
              subBlocks: [
                {
                  type: 'text-section',
                  heading: 'Let the user finish',
                  paragraphs: [
                    'This implementation does consider about what happens when a timed interval ends during ' +
                    'manipulation. The proposed refinement waits for the interaction to finish and adds a short ' +
                    'confirmation interval before advancing, allowing room for a follow-up adjustment.',
                  ],
                },
              ],
            },
            {
              type: 'text-section',
              label: '04 / Proposed alternatives',
              heading: 'Give the user a more direct choice',
              paragraphs: [
                'Later designs explores a dropdown or button list, voice commands, gaze with pinch ' +
                'confirmation, and a hand ray with pinch confirmation. It also proposes narrowing the ' +
                'candidate set to nearby objects when the environment contains many selectable regions.',
                'These are presented as design proposals. Not all were deployed or evaluated.',
              ],
            },
          ],
        },

        // Prototype context
        {
          type: 'text-section',
          label: 'Prototype context',
          heading: 'Building toward accessible spatial interaction',
          paragraphs: [
            'The wider project concerns accessibility and indoor interaction. These specific examples ' +
            'demonstrate the annotation and selection prototype; they do not establish independent navigation ' +
            'performance or measured accessibility benefits.',
            'The external video folder provides a place to explore the Unity and headset interaction recordings.',
          ],
          blocks: [
            {
              type: 'links',
              links: [
                {
                  text: 'Open demo video folder ↗',
                  href: 'https://smu-my.sharepoint.com/:f:/g/personal/nipunih_ka_2024_msc_smu_edu_sg/IgB-_42CihI5R5d0cEKNsxTNAdp1TD6OCAXPkVkUcLfrKjk?e=tZNgS5',
                  external: true,
                },
              ],
            },
          ],
        },
      ],
    },
  },

  /* ==========================================================
     Gesture-enhanced robot instructions
     ========================================================== */
  {
    slug: 'gesture-robot',
    title: 'Gesture-enhanced robot instructions',
    label: 'Human–Robot Interaction · SUTD · ICMI 2020',
    description: 'A multimodal interface for resolving ambiguous spoken instructions in collaborative robot tasks.',

    detail: {
      label: 'Human–robot interaction · Singapore University of Technology and Design · Jul 2019 – May 2020',
      titleLines: ['When words need', { em: 'a pointing gesture.' }],
      subtitle: 'Gesture Enhanced Comprehension of Ambiguous Human-to-Robot Instructions',
      affiliation: 'SUTD · A*STAR · Singapore Management University · ACM ICMI 2020',
      overview:
        'In a cluttered scene, a verbal description can match more than one object. M2Gestic investigates how ' +
        'visual context, natural-language instructions, and pointing can work together to identify the intended ' +
        'target\u2014even when the pointing location is uncertain.',
      links: [
        { text: 'Read the ICMI 2020 paper ↗', href: '/papers/gesture-human-to-robot-instructions-2020.pdf', external: true, button: true },
        { text: 'DOI ↗', href: 'https://dl.acm.org/doi/10.1145/3382507.3418863', external: true },
        { text: 'Explore the interface ↓', href: '#gesture-interface' },
      ],
      blocks: [
        // System diagram figure
        {
          type: 'figure',
          image: {
            src: img('gesture', 'system.png'),
            alt: 'M2Gestic system diagram combining visual scene information, language and pointing',
            caption: 'M2Gestic system components and functionality.',
          },
        },

        // Contribution box
        {
          type: 'role-box',
          heading: 'My contribution',
          paragraphs: [
            'I designed an HTC Vive-based multimodal interface integrating pointing gestures and natural ' +
            'language for collaborative human\u2013robot tasks, and assisted in experimental studies evaluating ' +
            'gesture-enhanced instruction comprehension.',
          ],
          techLabel: 'Technologies:',
          techText: 'Unity, HTC Vive, Python, and Figma.',
        },

        // Research problem
        {
          type: 'text-section',
          label: 'Research problem',
          heading: 'Which object does the instruction mean?',
          paragraphs: [
            'Objects may share colours, shapes, or spatial relationships. Descriptions involving \u201cleft\u201d ' +
            'or \u201cbehind\u201d may also depend on perspective. Pointing provides another spatial cue, but ' +
            'human pointing is not perfectly precise.',
            'The research challenge is to combine the available cues while accounting for uncertainty, rather ' +
            'than treating the pointed position as an exact target.',
          ],
        },

        // The team's system
        {
          type: 'text-section',
          id: 'gesture-interface',
          label: 'The team\u2019s system',
          heading: 'Three inputs, one target-selection decision',
          paragraphs: [],
          blocks: [
            {
              type: 'flow',
              items: [
                { title: 'Visual scene', text: 'Represent object attributes and spatial relationships in the tabletop scene.' },
                { title: 'Language', text: 'Parse the instruction into machine-understandable references and relationships.' },
                { title: 'Pointing', text: 'Use the estimated pointing location and its uncertainty to rank candidate objects.' },
              ],
            },
            'M2Gestic combines neural-based text parsing with knowledge-graph traversal and multimodal ' +
            'inference. The inference method is a team research contribution; my role focused on the interaction ' +
            'interface and supporting studies.',
          ],
        },

        // Disclosure: interface & study setup
        {
          type: 'disclosure',
          summary: 'Explore the interface & study setup',
          note: 'HTC Vive pointing · Unity tabletop scenes · uncertainty',
          blocks: [
            {
              type: 'text-section',
              heading: 'Capturing pointing input',
              paragraphs: [
                'The pointing study used a calibrated HTC Vive setup to record the intended location on a ' +
                'screen displaying tabletop block arrangements. Participants pointed from three distances: ' +
                '88 cm, 176 cm, and 264 cm. The study characterised how pointing error changed with distance.',
              ],
              blocks: [
                {
                  type: 'figure',
                  image: {
                    src: img('gesture', 'pointing-study.jpeg'),
                    alt: 'Participant using the HTC Vive tracking setup to point at a tabletop scene displayed on a screen',
                    caption: 'Pointing-data collection setup.',
                  },
                },
              ],
            },
            {
              type: 'text-section',
              heading: 'Presenting the task in Unity',
              paragraphs: [
                'A Unity 3D environment recreated 28 tabletop block arrangements. To study comprehension from ' +
                'the receiving agent\u2019s perspective, the scene was transformed to show the objects and the ' +
                'instructor\u2019s pointing gesture from across the table.',
              ],
              blocks: [
                {
                  type: 'figure',
                  image: {
                    src: img('gesture', 'unity-scene.jpeg'),
                    alt: 'Unity tabletop scene viewed from the receiving agent perspective with an instructor avatar pointing',
                    caption: 'Unity scene used in the human comprehension study.',
                  },
                },
              ],
            },
            {
              type: 'text-section',
              heading: 'Accounting for uncertainty',
              paragraphs: [
                'The study found that pointing error increased with distance. The system uses this uncertainty ' +
                'when combining pointing and verbal cues. At greater distances, a gesture can become less ' +
                'useful and should receive less weight.',
              ],
              blocks: [
                {
                  type: 'figure',
                  image: {
                    src: img('gesture', 'pointing-error.png'),
                    alt: 'Pointing-error distributions at distances of 88, 176 and 264 centimetres',
                    caption:
                      'Pointing-error distributions broaden as the instructor moves farther from the display. ' +
                      'This is an empirical study result, not a measure of interface-design quality.',
                  },
                },
              ],
            },
          ],
        },

        // Published findings
        {
          type: 'text-section',
          label: 'Published findings',
          heading: 'Pointing helps when the words are ambiguous',
          paragraphs: [],
          blocks: [
            {
              type: 'result-stat',
              number: '29.26% \u2192 60.73%',
              text:
                'M2Gestic target-selection accuracy for ambiguous instructions, comparing text-only input with ' +
                'gesture-enhanced input at 88 cm. This is a gain of 31.47 percentage points.',
            },
            'For unambiguous instructions, the text-and-scene system achieved accuracy close to the human ' +
            'baseline. The additional value of pointing depended on its precision: the gain was smaller at ' +
            '176 cm, while at 264 cm the best-performing configuration ignored pointing and reverted to the ' +
            'text-only baseline.',
            'The findings concern benchmark tabletop target selection. They do not demonstrate end-to-end ' +
            'physical robot manipulation or unrestricted conversational understanding.',
          ],
        },

        // Design takeaway
        {
          type: 'text-section',
          label: 'Design takeaway',
          heading: 'Let people communicate with more than words.',
          paragraphs: [
            'This project connects embodied interaction with instruction comprehension. It highlights the ' +
            'importance of designing interfaces that capture natural spatial cues while recognising that those ' +
            'cues can be uncertain.',
          ],
        },

        // Credits
        {
          type: 'credits',
          paragraphs: [
            [
              'Dulanga Weerakoon, Vigneshwaran Subbaraju, Nipuni Karumpulli, Tuan Tran, Qianli Xu, U-Xuan Tan, Joo Hwee Lim, and Archan Misra. 2020. ',
              { em: 'Gesture Enhanced Comprehension of Ambiguous Human-to-Robot Instructions.' },
              ' ICMI \u201920. DOI: ',
              { link: { text: '10.1145/3382507.3418863', href: 'https://dl.acm.org/doi/10.1145/3382507.3418863', external: true } },
              '.',
            ],
            'Paper figures are credited to Weerakoon et al. (2020).',
          ],
        },
      ],
    },
  },

  /* ==========================================================
     Speech & touch for multi-robot systems
     ========================================================== */
  {
    slug: 'touch-speech',
    title: 'Speech and touch for multi-robot systems',
    label: 'Human–Robot Interaction · SUTD · TENCON 2019',
    description: 'Interaction techniques for controlling multiple robots under varying workloads.',

    detail: {
      label: 'Human\u2013robot interaction · SUTD · Feb 2018 – Jul 2019',
      titleLines: ['Helping one person', { em: 'guide a team of robots.' }],
      subtitle: 'Complementing Speech Interaction Design with Touch for Multi-Robot Systems',
      affiliation: 'Singapore University of Technology and Design · IEEE TENCON 2019',
      overview:
        'How can one person supervise several robots while navigating, monitoring camera views, and identifying ' +
        'targets? This project explored a complementary speech-and-touch interface in a Unity simulation.',
      links: [
        { text: 'Read the TENCON 2019 paper ↗', href: '/papers/touch-speech-multi-robot-2019.pdf', external: true, button: true },
        { text: 'Paper ↗', href: 'https://ieeexplore.ieee.org/document/8929506', external: true },
        { text: 'Explore the interface ↓', href: '#sutd-interface' },
      ],
      meta: [
        { label: 'My role', value: 'Interface co-design, photoshop mockups, multimodal prototyping, and contributions to user studies, analysis, and the paper.' },
        { label: 'Research context', value: 'Research Assistant at the Singapore University of Technology and Design. Published at IEEE TENCON 2019.' },
        { label: 'Built with', value: 'Unity, C#, Adobe Photoshop, Android, Python, and Arduino.' },
      ],
      blocks: [
        // Meta grid
        { type: 'meta' },

        // Published interface split
        {
          type: 'published-split',
          id: 'sutd-interface',
          figure: {
            src: img('sutd', 'published-interface.png'),
            alt: 'Annotated graphical interface from Figure 4 of the TENCON 2019 paper',
            caption: 'Use Interface: robot camera views, map, navigation controls, warnings, and mission indicators.',
          },
          heading: 'The interface in the published paper',
          paragraphs: [
            'The selected robot\u2019s camera fills the main view, with controls and supporting information ' +
            'arranged around its edges. The paper describes an iterative design process that considered visual ' +
            'interference, foreground\u2013background contrast, and selection feedback.',
            'The study involved six participants operating one, two, and three robots. Task performance and ' +
            'perceived workload were examined using NASA-TLX.',
          ],
        },

        // Disclosure: interface design process
        {
          type: 'disclosure',
          summary: 'Explore the interface design process',
          note: 'Photoshop reviews \u2192 panel behaviour \u2192 Unity implementation',
          intro:
            'The following project materials show how I worked through interface layout, visual contrast, and ' +
            'component behaviour before and alongside implementation. The Photoshop concepts and development ' +
            'screenshots document design exploration. They are distinct from the published interface shown above.',
          blocks: [
            {
              type: 'text-section',
              label: 'Published interaction / Speech and touch',
              heading: 'How the modalities complement each other',
              paragraphs: [
                'Touch supports selecting a robot, aiming the surveillance camera, and continuous manual ' +
                'navigation. For remote control, a sustained touch selects a secondary robot; then speech ' +
                'commands can then address it without switching the main camera view.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('sutd', 'published-remote-selection.png'), alt: 'Interface showing a blue border around the remotely selected robot preview', caption: 'Remote selection: the secondary robot is highlighted in blue while the main view stays on the current robot.' },
                    { src: img('sutd', 'published-manual-mode.png'), alt: 'Robot interface with yellow border and manual-mode navigation controls', caption: 'Manual navigation: the yellow border indicates manual mode, with touch controls available for continuous steering.' },
                  ],
                },
                { type: 'callout', text: 'These user interaction examples are separate from the Photoshop design exploration.' },
              ],
            },
            {
              type: 'text-section',
              label: 'Stage 01 / Early Photoshop designs',
              heading: 'Checking controls against changing backgrounds',
              paragraphs: [
                'Controls and the map sit over a camera view, where the background changes as the robot moves. ' +
                'In the first design phase, I reviewed the overlays against bright and dark scenes, considering ' +
                'their visibility and how much of the scene they covered.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('sutd', 'early-bright.png'), alt: 'Early Photoshop interface over a bright city background', caption: 'Bright-background review: inspecting the map, control overlays, and text against a light scene.' },
                    { src: img('sutd', 'early-dark.png'), alt: 'Early Photoshop interface over a dark background', caption: 'Dark-background review: examining the same components against a darker scene.' },
                  ],
                },
                { type: 'callout', text: 'Design focus: foreground\u2013background contrast, overlay visibility, and the balance between information and camera-view space. These are visual review examples, rather than a separate measured usability result.' },
              ],
            },
            {
              type: 'text-section',
              label: 'Stage 02 / Refined Photoshop concepts',
              heading: 'Defining controls, panels, and their states',
              paragraphs: [
                'Further review explored how the camera previews, map, and speed controller could behave. The ' +
                'mockups show both an information-rich view and more compact states, making the intended ' +
                'interactions visible before implementation.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('sutd', 'review-overview.png'), alt: 'Refined Photoshop interface with robot previews, map, and speed dial', caption: 'Overview state: robot previews and the map are visible around the main camera view.' },
                    { src: img('sutd', 'speed-state.png'), alt: 'Photoshop mockup of the controller when expected and current speeds match', caption: 'Controller state: a mockup exploring the display when expected speed equals current speed.' },
                    { src: img('sutd', 'map-hidden.png'), alt: 'Photoshop mockup with map panel hidden', caption: 'Map hidden: the map can be collapsed to reveal more of the camera view.' },
                    { src: img('sutd', 'previews-hidden.png'), alt: 'Photoshop mockup with camera previews collapsed into tabs', caption: 'Previews collapsed: camera thumbnails become labelled robot tabs while the map remains visible.' },
                  ],
                },
                { type: 'callout', text: 'Design focus: panel visibility, consistent placement, state feedback, and reducing the screen area occupied by supporting views.' },
              ],
            },
            {
              type: 'text-section',
              label: 'Stage 03 / Unity development',
              heading: 'Bringing the interaction into a simulated mission',
              paragraphs: [
                'The Unity prototype places semi-autonomous robots in an urban search scenario. Robots follow ' +
                'routes but need operator input at junctions and when obstacles interrupt navigation. The ' +
                'operator can inspect the environment, aim the surveillance camera, and capture targets while ' +
                'monitoring progress.',
              ],
              blocks: [
                {
                  type: 'gallery',
                  columns: 2,
                  items: [
                    { src: img('sutd', 'simulation-route.jpg'), alt: 'Top-down Unity mission route with path indicators and road blocks', caption: 'Mission layout: the route and road blocks provide navigation situations for the prototype.' },
                    { src: img('sutd', 'simulation-junction.png'), alt: 'Unity screenshot requesting a direction at a road junction', caption: 'Human intervention: a junction prompt asks the operator to choose a direction.' },
                    { src: img('sutd', 'simulation-capture.png'), alt: 'Unity screenshot displaying Target Captured', caption: 'Task feedback: a capture notification and updated counter show mission progress.' },
                    { src: img('sutd', 'simulation-obstacle.png'), alt: 'Unity screenshot displaying Obstacle Detected', caption: 'Interruption feedback: an obstacle warning signals that the operator needs to respond.' },
                  ],
                },
                { type: 'callout', text: 'These are development screenshots that illustrate the simulation and interaction scenarios.' },
              ],
            },
          ],
        },

        // Credits
        {
          type: 'credits',
          paragraphs: [
            [
              'Kritika Johari, Nipuni Karumpulli and U-Xuan Tan. 2019. ',
              { em: 'Complementing Speech Interaction Design with Touch for Multi-Robot Systems.' },
              ' TENCON \u201919. Paper: ',
              { link: { text: '10.1109/TENCON.2019.8929506', href: 'https://ieeexplore.ieee.org/document/8929506', external: true } },
              '.',
            ],
            'Paper figures are credited to Johari et al. (2019).',
          ],
        },
      ],
    },
  },
]
