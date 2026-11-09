/* ==========================================================================
   ACCESSIBLE AR NAVIGATION PROJECT PAGE CONTENT

   The "content" list below is read from top to bottom, and each item becomes
   one part of the page. A line of plain text in quotation marks becomes a
   paragraph. To add a picture, section or paragraph, copy a similar item.

   Formatting: **bold words**   _italic words_   [link text](address)
   ========================================================================== */

SITE.page = {
  id: "accessible-ar",      // Must match the "id" of this project's box in data/research.js.
  design: "accessible-ar",  // Which project design to use. Please leave this as it is.
  closingLinkText: "Let’s connect →",

  hero: {
    label: "Accessibility & extended reality · Singapore Management University · 2022–2023",
    title: ["Making indoor spaces", "interactive in AR."], // The second line is highlighted.
    subtitle: "Point-cloud annotation and object selection with Nreal Light",
    overview: "Within my broader research on accessible indoor interaction, I developed Unity C# prototypes for Nreal Light AR glasses. The materials shown here focus on representing indoor spaces as point clouds and letting users identify, select, and manipulate spatial regions.",
    links: [
      { text: "View Unity & AR demo videos ↗", url: "https://smu-my.sharepoint.com/:f:/g/personal/nipunih_ka_2024_msc_smu_edu_sg/IgB-_42CihI5R5d0cEKNsxTNAdp1TD6OCAXPkVkUcLfrKjk?e=tZNgS5", button: true },
      { text: "Explore the interaction design ↓", url: "#ar-process" },
    ],
  },

  content: [
    {
      type: "gallery",
      figures: [
        { image: "images/research/ar/room.jpeg", alt: "Photograph of the meeting room used in the prototype", caption: "Physical environment: a meeting room with a table, chairs, and surrounding objects." },
        { image: "images/research/ar/point-cloud.png", alt: "Point-cloud representation of the meeting room", caption: "Digital representation: room geometry captured as a point cloud using iPhone LiDAR." },
      ],
    },
    {
      type: "facts",
      items: [
        { title: "My contribution", text: "Developed the headset prototypes, integrated point-cloud representations, and explored speech, text, pointer and gesture based selection and manipulation." },
        { title: "Tools", text: "Unity · C# · Nreal Light · iPhone LiDAR point clouds · interaction prototyping" },
        { title: "Design challenge", text: "How can a person indicate the intended object when spatial regions overlap or sit inside one another?" },
      ],
    },
    {
      type: "section",
      id: "ar-process",
      label: "Prototype workflow",
      heading: "From a room scan to a selected object",
      content: [
        {
          type: "steps",
          items: [
            { title: "Load the environment", text: "Bring the captured indoor point cloud into the application." },
            { title: "Create a region", text: "Use the open-hand and victory gestures to initialise interaction and generate a bounding box." },
            { title: "Refine its bounds", text: "Move, rotate, or scale the box using pinch-based manipulation." },
            { title: "Select the points", text: "Use a pointing gesture to select points within the bounding-box region." },
          ],
        },
        {
          type: "gallery",
          figures: [
            { image: "images/research/ar/bounding-box.png", alt: "Prototype showing a bounding box over the room point cloud", caption: "Bounding-box creation: define a spatial region around the intended object." },
            { image: "images/research/ar/selected-points.png", alt: "Selected chair-region points highlighted green in the point cloud", caption: "Point selection: selected points are highlighted in green within the chosen region." },
          ],
        },
      ],
    },
    {
      type: "expandable",
      title: "Explore the interaction design & prototype development",
      subtitle: "Gesture flow · selection ambiguity · alternatives and trade-offs",
      content: [
        {
          type: "section",
          label: "01 / Interaction flow",
          heading: "Connect gestures to visible spatial changes",
          content: [
            "The prototype uses hand gestures for distinct steps: initialisation, box creation, manipulation, and point selection. The workflow separates these actions so the user can define a region before selecting its contents.",
            {
              type: "figure",
              image: "images/research/ar/workflow.png",
              alt: "Architecture diagram showing point-cloud generation, bounding-box creation and manipulation, and point selection",
              caption: "Prototype workflow.",
            },
            {
              type: "gallery",
              figures: [
                { image: "images/research/ar/initialisation.png", alt: "Nreal prototype initial view of the loaded room point cloud", caption: "Initialisation view: the room model is available for spatial interaction." },
                { image: "images/research/ar/headset-selection.jpg", alt: "Headset view with selected point-cloud points highlighted over a chair", caption: "Headset interaction example showing highlighted points in the room." },
              ],
            },
          ],
        },
        {
          type: "section",
          label: "02 / The usability problem",
          heading: "When several boxes could be the target",
          content: [
            "Spatial selection becomes ambiguous when one box is nested inside another, when objects partly overlap, or when a component belongs to a larger object. A movement intended for one box can instead affect a different box.",
            "This mismatch between intended and recognised selection is an interaction problem that requires explicit target selection.",
          ],
        },
        {
          type: "section",
          label: "03 / Implemented exploration",
          heading: "Make one candidate active at a time",
          content: [
            "As a solution, we first implemented three scheduling approaches. Each activates a candidate box for a timed interval, with manipulation affecting the active box.",
            {
              type: "table",
              headings: ["Approach", "Selection order", "Design consideration"],
              rows: [
                ["Round robin", "Object-creation order", "Predictable sequence, but the user may need to wait."],
                ["Priority order", "Assigned priority. Proximity is explored", "The ordering needs to match the user’s current task."],
                ["Random order", "Randomised candidate sequence", "Less predictable access to a particular target."],
              ],
            },
            { type: "note", text: "These considerations explain the design space." },
            { type: "subheading", text: "Let the user finish" },
            "This implementation does consider about what happens when a timed interval ends during manipulation. The proposed refinement waits for the interaction to finish and adds a short confirmation interval before advancing, allowing room for a follow-up adjustment.",
          ],
        },
        {
          type: "section",
          label: "04 / Proposed alternatives",
          heading: "Give the user a more direct choice",
          content: [
            "Later designs explores a dropdown or button list, voice commands, gaze with pinch confirmation, and a hand ray with pinch confirmation. It also proposes narrowing the candidate set to nearby objects when the environment contains many selectable regions.",
            "These are presented as design proposals. Not all were deployed or evaluated.",
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Prototype context",
      heading: "Building toward accessible spatial interaction",
      content: [
        "The wider project concerns accessibility and indoor interaction. These specific examples demonstrate the annotation and selection prototype; they do not establish independent navigation performance or measured accessibility benefits.",
        "The external video folder provides a place to explore the Unity and headset interaction recordings.",
        {
          type: "links",
          items: [
            { text: "Open demo video folder ↗", url: "https://smu-my.sharepoint.com/:f:/g/personal/nipunih_ka_2024_msc_smu_edu_sg/IgB-_42CihI5R5d0cEKNsxTNAdp1TD6OCAXPkVkUcLfrKjk?e=tZNgS5" },
          ],
        },
      ],
    },
    { type: "credit", text: "Descriptions distinguish prototype functionality from proposed design directions." },
  ],
};
