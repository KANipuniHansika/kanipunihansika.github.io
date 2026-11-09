/* ==========================================================================
   RESEARCH OVERVIEW TEMPLATE  (you do not need to edit this file)
   Arranges the project boxes from data/research.js on the page.
   ========================================================================== */

(function () {
  const { escape, text, each, tags, NEW_TAB } = SITE;

  function titleLink(project) {
    return '<h3><a class="project-title-link" href="' + escape(project.page) + '">' + escape(project.title) + "</a></h3>";
  }

  function exploreLink(project, wording) {
    return '<a class="explore-project" href="' + escape(project.page) + '">' + escape(wording) + "</a>";
  }

  function featured(project, wording) {
    return '<article class="feature" id="' + escape(project.id) + '">' +
      "<div>" +
        '<p class="label">' + escape(project.label) + "</p>" +
        titleLink(project) +
        "<p>" + text(project.description) + "</p>" +
        tags(project.tags) +
        exploreLink(project, wording) +
      "</div>" +
      "<aside>" +
        '<p class="label">' + escape(project.paper.label) + "</p>" +
        "<p>" + escape(project.paper.title) + "</p>" +
        '<p><a href="' + escape(project.paper.url) + '"' + NEW_TAB + ">" + escape(project.paper.linkText) + "</a></p>" +
      "</aside>" +
    "</article>";
  }

  function card(project, wording) {
    return '<article class="card" id="' + escape(project.id) + '">' +
      '<p class="label">' + escape(project.label) + "</p>" +
      titleLink(project) +
      "<p>" + text(project.description) + "</p>" +
      exploreLink(project, wording) +
    "</article>";
  }

  SITE.start(function (page) {
    return {
      mainClass: "research-overview",
      html:
        '<section class="section page" id="work">' +
          '<div class="heading">' +
            '<div><p class="label">' + escape(page.label) + "</p><h1>" + escape(page.heading) + "</h1></div>" +
            "<p>" + text(page.introduction) + "</p>" +
          "</div>" +
          featured(page.featured, page.exploreLinkText) +
          '<div class="grid">' +
            each(page.projects, function (project) { return card(project, page.exploreLinkText); }) +
          "</div>" +
        "</section>",
    };
  });
})();
