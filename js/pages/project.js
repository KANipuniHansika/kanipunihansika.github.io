/* ==========================================================================
   RESEARCH PROJECT TEMPLATE  (you do not need to edit this file)

   Arranges one project file from data/projects/ on the page. A project is a
   list of "blocks" (a section, a picture, a gallery and so on). Every block
   type available to the data files is defined in BLOCKS below.
   ========================================================================== */

(function () {
  const { escape, each, link, twoLines, NEW_TAB } = SITE;

  /* The four project designs. A project picks one with design: "motus" etc. */
  const DESIGNS = {
    motus: {
      prefix: "motus", heroClass: "motus-hero", note: "motus-callout", gallery: "motus-gallery",
      details: "motus-disclosure", detailsBody: "motus-disclosure-body",
    },
    "accessible-ar": {
      prefix: "ar", note: "ar-note", gallery: "ar-gallery",
      details: "ar-disclosure", detailsBody: "ar-disclosure-body",
    },
    "gesture-robot": {
      prefix: "gesture", note: "gesture-note", gallery: "gesture-gallery",
      details: "gesture-details", detailsBody: "gesture-details-body",
    },
    "touch-speech": {
      prefix: "sutd", heroClass: "sutd-hero", note: "sutd-design-note", gallery: "sutd-image-grid",
      details: "sutd-process", detailsBody: "sutd-process-content", summaryNote: "sutd-summary-note",
    },
  };

  /* Formats text on project pages, where web links open in a new tab. */
  function text(value) {
    return SITE.text(value, { webLinksInNewTab: true });
  }

  function paragraphs(list) {
    return each(list, function (item) { return "<p>" + text(item) + "</p>"; });
  }

  function figure(item, design) {
    const extra = item.screen ? " " + design.prefix + "-screen" : "";
    const description = escape(item.alt);
    return '<figure class="' + design.prefix + "-figure" + extra + '">' +
      '<a href="' + escape(item.image) + '"' + NEW_TAB + ' aria-label="Enlarge: ' + description + ' (opens in a new tab)">' +
        '<img src="' + escape(item.image) + '" alt="' + description + '" loading="lazy">' +
      "</a>" +
      "<figcaption>" + text(item.caption) + "</figcaption>" +
    "</figure>";
  }

  function blocks(list, design) {
    return each(list, function (block) { return renderBlock(block, design); });
  }

  function renderBlock(block, design) {
    if (typeof block === "string") return "<p>" + text(block) + "</p>";
    const build = BLOCKS[block.type];
    if (!build) throw new Error('There is no block type called "' + block.type + '"');
    return build(block, design);
  }

  let stageNumber = 0;

  const BLOCKS = {
    /* A titled part of the page, which can hold any other blocks. */
    section: function (block, design) {
      const prefix = design.prefix;
      const heading = block.heading ? escape(block.heading) : "";
      const label = block.label ? '<p class="label">' + escape(block.label) + "</p>" : "";
      const id = block.id ? ' id="' + escape(block.id) + '"' : "";

      if (block.stage) {
        const headingId = prefix + "-stage" + (stageNumber++);
        return '<section class="' + prefix + '-stage" aria-labelledby="' + headingId + '">' + label +
          '<h2 id="' + headingId + '">' + heading + "</h2>" + blocks(block.content, design) + "</section>";
      }

      const reflection = block.highlighted ? " " + prefix + "-reflection" : "";
      return '<section class="' + prefix + "-section" + reflection + '"' + id + ">" + label +
        (heading ? "<h2>" + heading + "</h2>" : "") + blocks(block.content, design) + "</section>";
    },

    figure: function (block, design) {
      return figure(block, design);
    },

    /* Several pictures side by side. Use columns: 3 for three across. */
    gallery: function (block, design) {
      const three = block.columns === 3 ? " " + design.prefix + "-gallery-three" : "";
      return '<div class="' + design.gallery + three + '">' +
        each(block.figures, function (item) { return figure(item, design); }) + "</div>";
    },

    /* Text boxes in a row. "look" is "flow", "reading" or "evidence". */
    cards: function (block, design) {
      return '<div class="' + design.prefix + "-" + block.look + '">' +
        each(block.items, function (item) {
          return "<div>" +
            (item.number ? "<span>" + escape(item.number) + "</span>" : "") +
            (item.bigNumber ? "<strong>" + escape(item.bigNumber) + "</strong>" : "") +
            "<h3>" + escape(item.title) + "</h3>" +
            "<p>" + text(item.text) + "</p>" +
          "</div>";
        }) + "</div>";
    },

    /* A numbered list of steps in boxes. */
    steps: function (block, design) {
      return '<ol class="' + design.prefix + '-steps">' +
        each(block.items, function (item) {
          return "<li><h3>" + escape(item.title) + "</h3><p>" + text(item.text) + "</p></li>";
        }) + "</ol>";
    },

    /* A short highlighted note. */
    note: function (block, design) {
      return '<p class="' + design.note + '">' + text(block.text) + "</p>";
    },

    /* The opening sentence inside an expandable area. */
    intro: function (block, design) {
      return '<p class="' + design.prefix + '-process-intro">' + text(block.text) + "</p>";
    },

    /* A small closing line under the project. */
    credit: function (block, design) {
      return '<p class="' + design.prefix + '-credit">' + text(block.text) + "</p>";
    },

    /* An area the reader clicks to expand. */
    expandable: function (block, design) {
      const summary = design.summaryNote
        ? "<span>" + escape(block.title) + '</span><span class="' + design.summaryNote + '">' + escape(block.subtitle) + "</span>"
        : escape(block.title) + "<span>" + escape(block.subtitle) + "</span>";
      return '<details class="' + design.details + '"><summary>' + summary + "</summary>" +
        '<div class="' + design.detailsBody + '">' + blocks(block.content, design) + "</div></details>";
    },

    /* The "My role / Research context / Built with" panel. */
    facts: function (block, design) {
      const prefix = design.prefix;
      if (prefix === "ar") {
        return '<div class="ar-facts">' + each(block.items, function (item) {
          return "<div><h2>" + escape(item.title) + "</h2><p>" + text(item.text) + "</p></div>";
        }) + "</div>";
      }
      return '<dl class="' + prefix + '-meta">' + each(block.items, function (item) {
        return "<div><dt>" + escape(item.title) + "</dt><dd>" + text(item.text) + "</dd></div>";
      }) + "</dl>";
    },

    /* A tinted panel with a heading, as used for "My contribution". */
    panel: function (block, design) {
      return '<div class="' + design.prefix + '-role"><h2>' + escape(block.heading) + "</h2>" + paragraphs(block.paragraphs) + "</div>";
    },

    /* A very large figure with an explanation beneath it. */
    result: function (block, design) {
      return '<div class="' + design.prefix + '-result"><strong>' + escape(block.value) + "</strong><p>" + text(block.text) + "</p></div>";
    },

    /* A bullet list beside a picture. */
    implementation: function (block, design) {
      return '<div class="' + design.prefix + '-implementation"><div><ul>' +
        each(block.points, function (point) { return "<li>" + text(point) + "</li>"; }) +
        "</ul></div>" + figure(block.figure, design) + "</div>";
    },

    /* A picture beside a heading and text. */
    pictureAndText: function (block, design) {
      const id = block.id ? ' id="' + escape(block.id) + '"' : "";
      return '<div class="' + design.prefix + '-published"' + id + ">" + figure(block.figure, design) +
        "<div><h2>" + escape(block.heading) + "</h2>" + paragraphs(block.paragraphs) + "</div></div>";
    },

    subheading: function (block) {
      return "<h3>" + escape(block.text) + "</h3>";
    },

    links: function (block) {
      return '<div class="project-links">' + each(block.items, link) + "</div>";
    },

    table: function (block, design) {
      const cell = function (tag) {
        return function (value) { return "<" + tag + ">" + text(value) + "</" + tag + ">"; };
      };
      return '<div class="' + design.prefix + '-table-scroll"><table>' +
        "<thead><tr>" + each(block.headings, cell("th")) + "</tr></thead>" +
        "<tbody>" + each(block.rows, function (row) { return "<tr>" + each(row, cell("td")) + "</tr>"; }) + "</tbody>" +
      "</table></div>";
    },
  };

  function hero(project, design) {
    const heroData = project.hero;
    const headingId = design.prefix + "-title";
    const heroClass = design.heroClass ? ' class="' + design.heroClass + '"' : "";
    return "<header" + heroClass + ">" +
      '<p class="label">' + escape(heroData.label) + "</p>" +
      '<h1 id="' + headingId + '">' + twoLines(heroData.title, "em") + "</h1>" +
      (heroData.tagline ? '<p class="' + design.prefix + '-deck">' + twoLines(heroData.tagline, "em") + "</p>" : "") +
      '<p class="project-subtitle">' + text(heroData.subtitle) + "</p>" +
      (heroData.affiliation ? '<p class="project-affiliation">' + text(heroData.affiliation) + "</p>" : "") +
      '<p class="project-overview">' + text(heroData.overview) + "</p>" +
      '<div class="project-links">' + each(heroData.links, link) + "</div>" +
    "</header>";
  }

  SITE.start(function (project, settings) {
    const design = DESIGNS[project.design];
    if (!design) throw new Error('There is no project design called "' + project.design + '"');
    const words = settings.projectPages;

    return {
      mainClass: ["research-page", "project-detail", design.prefix + "-page"],
      html:
        '<a class="back-projects" href="research.html#' + escape(project.id) + '">' + escape(words.backToAllProjects) + "</a>" +
        '<article class="research-project" id="' + escape(project.id) + '" aria-labelledby="' + design.prefix + '-title">' +
          hero(project, design) +
          blocks(project.content, design) +
        "</article>" +
        '<p class="research-endnote"><a href="research.html">' + escape(words.backToSelectedWork) + "</a> · " +
          '<a href="contact.html">' + escape(project.closingLinkText) + "</a></p>",
    };
  });
})();
