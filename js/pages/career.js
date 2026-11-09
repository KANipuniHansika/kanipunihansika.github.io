/* ==========================================================================
   EXPERIENCE AND EDUCATION TEMPLATE  (you do not need to edit this file)
   Both pages share this layout. It arranges the entries from
   data/experience.js or data/education.js on the page.
   ========================================================================== */

(function () {
  const { escape, text, each } = SITE;

  function entry(item, position) {
    const logoClass = item.tallLogo ? "institution-logo institution-logo--crest" : "institution-logo";
    const lazy = position === 0 ? "" : ' loading="lazy"';

    const moreDetails = item.moreDetails
      ? '<details class="publication-citation">' +
          "<summary>" + escape(item.moreDetails.heading) + "</summary>" +
          "<p>" + text(item.moreDetails.text) + "</p>" +
        "</details>"
      : "";

    return '<article class="row institution-entry">' +
      '<p class="entry-date">' + escape(item.date) + "</p>" +
      '<div class="entry-content">' +
        '<div class="institution-heading">' +
          '<div class="' + logoClass + '">' +
            '<img src="' + escape(item.logo) + '" alt="' + escape(item.logoDescription) + '" width="160" height="90"' + lazy + ">" +
          "</div>" +
          "<div>" +
            '<p class="institution-name">' + escape(item.institution) + "</p>" +
            '<p class="institution-location">' + escape(item.location) + "</p>" +
          "</div>" +
        "</div>" +
        "<h3>" + escape(item.title) + "</h3>" +
        each(item.paragraphs, function (paragraph) { return "<p>" + text(paragraph) + "</p>"; }) +
        moreDetails +
      "</div>" +
    "</article>";
  }

  SITE.start(function (page) {
    return {
      html:
        '<section class="section page career" id="' + escape(page.id) + '">' +
          '<p class="label">' + escape(page.label) + "</p>" +
          "<h1>" + escape(page.heading) + "</h1>" +
          each(page.entries, entry) +
        "</section>",
    };
  });
})();
