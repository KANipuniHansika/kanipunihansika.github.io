/* ==========================================================================
   NEW PROJECT TEMPLATE
   Copy this file, rename the copy (for example my-project.js), and replace
   the example text. EDITING_GUIDE.md explains the remaining steps.

   The "content" list is read from top to bottom. Each item becomes one part
   of the page. Delete any items you do not need.

   Formatting: **bold words**   _italic words_   [link text](address)
   ========================================================================== */

SITE.page = {
  id: "my-project",  // One short name with no spaces. Must match the box in data/research.js.
  design: "motus",   // Please leave this as it is.
  closingLinkText: "Let’s connect →",

  // The top of the page.
  hero: {
    label: "Topic · Institution · Year",
    title: "Project name",
    tagline: ["A short first line", "and a highlighted second line."],
    subtitle: "The full title of the project or paper",
    affiliation: "Institution · Conference and year",
    overview: "Two or three sentences explaining what this project is about.",
    links: [
      { text: "Read the paper ↗", url: "papers/my-paper.pdf", button: true },
      { text: "DOI ↗", url: "https://doi.org/your-doi" },
    ],
  },

  content: [
    // One large picture.
    {
      type: "figure",
      image: "images/research/my-project/overview.png",
      alt: "Describe what the picture shows, for people who cannot see it",
      caption: "The caption shown under the picture.",
    },

    // The three-part summary panel.
    {
      type: "facts",
      items: [
        { title: "My role", text: "What you did." },
        { title: "Research context", text: "Where and with whom." },
        { title: "Built with", text: "The tools you used." },
      ],
    },

    // A titled section. Plain text in quotation marks becomes a paragraph.
    {
      type: "section",
      label: "The research question",
      heading: "A heading for this section",
      content: [
        "The first paragraph.",
        "The second paragraph.",

        // Pictures side by side. Add columns: 3, for three across.
        {
          type: "gallery",
          figures: [
            { image: "images/research/my-project/one.png", alt: "Description", caption: "Caption." },
            { image: "images/research/my-project/two.png", alt: "Description", caption: "Caption." },
          ],
        },

        // A highlighted note.
        { type: "note", text: "Something worth drawing attention to." },
      ],
    },

    // An area the reader clicks to open. It can hold any of the items above.
    {
      type: "expandable",
      title: "Explore more details",
      subtitle: "A short description of what is inside",
      content: [
        {
          type: "section",
          heading: "A heading inside the expandable area",
          content: ["Some text."],
        },
      ],
    },

    // Credits at the end of the page.
    {
      type: "section",
      heading: "Publication & credits",
      content: [
        "Authors. Year. _Paper title._ Venue. DOI: [your-doi](https://doi.org/your-doi).",
      ],
    },
  ],
};
