/* ==========================================================================
   PUBLICATIONS TEMPLATE  (you do not need to edit this file)
   Arranges the papers from data/publications.js on the page.
   ========================================================================== */

(function () {
  const { escape, text, each, link } = SITE;

  function paper(item, citationHeading) {
    return '<article class="row">' +
      '<p class="label">' + escape(item.venue) + "</p>" +
      "<div>" +
        '<h3><a href="' + escape(item.url) + '">' + escape(item.title) + "</a></h3>" +
        "<p>" + text(item.publishedIn) + "</p>" +
        "<p>" + text(item.authors) + "</p>" +
        (item.note ? "<p>" + text(item.note) + "</p>" : "") +
        '<div class="bio-links">' + each(item.links, link) + "</div>" +
        '<details class="publication-citation">' +
          "<summary>" + escape(citationHeading) + "</summary>" +
          "<p>" + text(item.citation) + "</p>" +
        "</details>" +
      "</div>" +
    "</article>";
  }

  SITE.start(function (page) {
    return {
      html:
        '<section class="section page" id="publications">' +
          '<div class="heading"><div>' +
            '<p class="label">' + escape(page.label) + "</p>" +
            "<h1>" + escape(page.heading) + "</h1>" +
          "</div></div>" +
          each(page.papers, function (item) { return paper(item, page.citationHeading); }) +
        "</section>",
    };
  });
})();
