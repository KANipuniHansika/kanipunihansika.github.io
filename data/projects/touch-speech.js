/* ==========================================================================
   SPEECH AND TOUCH FOR MULTI-ROBOT SYSTEMS PROJECT PAGE CONTENT

   The "content" list below is read from top to bottom, and each item becomes
   one part of the page. A line of plain text in quotation marks becomes a
   paragraph. To add a picture, section or paragraph, copy a similar item.

   Formatting: **bold words**   _italic words_   [link text](address)
   ========================================================================== */

SITE.page = {
  id: "touch-speech",      // Must match the "id" of this project's box in data/research.js.
  design: "touch-speech",  // Which project design to use. Please leave this as it is.
  closingLinkText: "Get in touch →",

  hero: {
    label: "Human–robot interaction · SUTD · Feb 2018 – Jul 2019",
    title: ["Helping one person", "guide a team of robots."], // The second line is highlighted.
    subtitle: "Complementing Speech Interaction Design with Touch for Multi-Robot Systems",
    affiliation: "Singapore University of Technology and Design · IEEE TENCON 2019",
    overview: "How can one person supervise several robots while navigating, monitoring camera views, and identifying targets? This project explored a complementary speech-and-touch interface in a unity simulation.",
    links: [
      { text: "Read the TENCON 2019 paper ↗", url: "papers/touch-speech-multi-robot-2019.pdf", button: true },
      { text: "Paper ↗", url: "https://ieeexplore.ieee.org/document/8929506" },
      { text: "Explore the interface ↓", url: "#sutd-interface" },
    ],
  },

  content: [
    {
      type: "facts",
      items: [
        { title: "My role", text: "Interface co-design, photoshop mockups, multimodal prototyping, and contributions to user studies, analysis, and the paper." },
        { title: "Research context", text: "Research Assistant at the Singapore University of Technology and Design. Published at IEEE TENCON 2019." },
        { title: "Built with", text: "Unity, C#, Adobe Photoshop, Android, Python, and Arduino." },
      ],
    },
    {
      type: "pictureAndText",
      id: "sutd-interface",
      figure: {
        image: "images/research/sutd/published-interface.png",
        alt: "Annotated graphical interface from Figure 4 of the TENCON 2019 paper",
        caption: "Use Interface: robot camera views, map, navigation controls, warnings, and mission indicators.",
      },
      heading: "The interface in the published paper",
      paragraphs: [
        "The selected robot’s camera fills the main view, with controls and supporting information arranged around its edges. The paper describes an iterative design process that considered visual interference, foreground–background contrast, and selection feedback.",
        "The study involved six participants operating one, two, and three robots. Task performance and perceived workload were examined using NASA-TLX.",
      ],
    },
    {
      type: "expandable",
      title: "Explore the interface design process",
      subtitle: "Photoshop reviews → panel behaviour → Unity implementation",
      content: [
        { type: "intro", text: "The following project materials show how I worked through interface layout, visual contrast, and component behaviour before and alongside implementation. The Photoshop concepts and development screenshots document design exploration. They are distinct from the published interface shown above." },
        {
          type: "section",
          stage: true,
          label: "Published interaction / Speech and touch",
          heading: "How the modalities complement each other",
          content: [
            "Touch supports selecting a robot, aiming the surveillance camera, and continuous manual navigation. For remote control, a sustained touch selects a secondary robot; then speech commands can then address it without switching the main camera view.",
            {
              type: "gallery",
              figures: [
                { image: "images/research/sutd/published-remote-selection.png", alt: "Interface showing a blue border around the remotely selected robot preview", caption: "Remote selection: the secondary robot is highlighted in blue while the main view stays on the current robot." },
                { image: "images/research/sutd/published-manual-mode.png", alt: "Robot interface with yellow border and manual-mode navigation controls", caption: "Manual navigation: the yellow border indicates manual mode, with touch controls available for continuous steering." },
              ],
            },
            { type: "note", text: "These user interaction examples are separate from the Photoshop design exploration." },
          ],
        },
        {
          type: "section",
          stage: true,
          label: "Stage 01 / Early Photoshop designs",
          heading: "Checking controls against changing backgrounds",
          content: [
            "Controls and the map sit over a camera view, where the background changes as the robot moves. In the first design phase, I reviewed the overlays against bright and dark scenes, considering their visibility and how much of the scene they covered.",
            {
              type: "gallery",
              figures: [
                { image: "images/research/sutd/early-bright.png", alt: "Early Photoshop interface over a bright city background", caption: "Bright-background review: inspecting the map, control overlays, and text against a light scene." },
                { image: "images/research/sutd/early-dark.png", alt: "Early Photoshop interface over a dark background", caption: "Dark-background review: examining the same components against a darker scene." },
              ],
            },
            { type: "note", text: "**Design focus:** foreground–background contrast, overlay visibility, and the balance between information and camera-view space. These are visual review examples, rather than a separate measured usability result." },
          ],
        },
        {
          type: "section",
          stage: true,
          label: "Stage 02 / Refined Photoshop concepts",
          heading: "Defining controls, panels, and their states",
          content: [
            "Further review explored how the camera previews, map, and speed controller could behave. The mockups show both an information-rich view and more compact states, making the intended interactions visible before implementation.",
            {
              type: "gallery",
              figures: [
                { image: "images/research/sutd/review-overview.png", alt: "Refined Photoshop interface with robot previews, map, and speed dial", caption: "Overview state: robot previews and the map are visible around the main camera view." },
                { image: "images/research/sutd/speed-state.png", alt: "Photoshop mockup of the controller when expected and current speeds match", caption: "Controller state: a mockup exploring the display when expected speed equals current speed." },
                { image: "images/research/sutd/map-hidden.png", alt: "Photoshop mockup with map panel hidden", caption: "Map hidden: the map can be collapsed to reveal more of the camera view." },
                { image: "images/research/sutd/previews-hidden.png", alt: "Photoshop mockup with camera previews collapsed into tabs", caption: "Previews collapsed: camera thumbnails become labelled robot tabs while the map remains visible." },
              ],
            },
            { type: "note", text: "**Design focus:** panel visibility, consistent placement, state feedback, and reducing the screen area occupied by supporting views." },
          ],
        },
        {
          type: "section",
          stage: true,
          label: "Stage 03 / Unity development",
          heading: "Bringing the interaction into a simulated mission",
          content: [
            "The Unity prototype places semi-autonomous robots in an urban search scenario. Robots follow routes but need operator input at junctions and when obstacles interrupt navigation. The operator can inspect the environment, aim the surveillance camera, and capture targets while monitoring progress.",
            {
              type: "gallery",
              figures: [
                { image: "images/research/sutd/simulation-route.jpg", alt: "Top-down Unity mission route with path indicators and road blocks", caption: "Mission layout: the route and road blocks provide navigation situations for the prototype." },
                { image: "images/research/sutd/simulation-junction.png", alt: "Unity screenshot requesting a direction at a road junction", caption: "Human intervention: a junction prompt asks the operator to choose a direction." },
                { image: "images/research/sutd/simulation-capture.png", alt: "Unity screenshot displaying Target Captured", caption: "Task feedback: a capture notification and updated counter show mission progress." },
                { image: "images/research/sutd/simulation-obstacle.png", alt: "Unity screenshot displaying Obstacle Detected", caption: "Interruption feedback: an obstacle warning signals that the operator needs to respond." },
              ],
            },
            { type: "note", text: "These are development screenshots that illustrate the simulation and interaction scenarios." },
          ],
        },
      ],
    },
    {
      type: "section",
      heading: "Publication & credits",
      content: [
        "Kritika Johari, Nipuni Karumpulli and U-Xuan Tan. 2019. _Complementing Speech Interaction Design with Touch for Multi-Robot Systems._ TENCON ’19. Paper: [10.1109/TENCON.2019.8929506](https://ieeexplore.ieee.org/document/8929506).",
        "Paper figures are credited to Johari et al. (2019).",
      ],
    },
  ],
};
