/* ==========================================================================
   TEACHING TEMPLATE  (you do not need to edit this file)
   Arranges the roles from data/teaching.js on the page.
   ========================================================================== */

(function () {
  const { escape, text, each, tags } = SITE;

  function role(item) {
    return '<article class="teaching-entry">' +
      '<div class="teaching-date">' + escape(item.date) + "</div>" +
      "<div>" +
        '<p class="label">' + escape(item.institution) + "</p>" +
        "<h2>" + escape(item.title) + "</h2>" +
        "<p>" + text(item.department) + "</p>" +
        (item.subheading ? "<h3>" + escape(item.subheading) + "</h3>" : "") +
        "<ul>" + each(item.duties, function (duty) { return "<li>" + text(duty) + "</li>"; }) + "</ul>" +
        tags(item.tags) +
      "</div>" +
    "</article>";
  }

  SITE.start(function (page) {
    return {
      html:
        '<section class="section page teaching-page">' +
          '<p class="label">' + escape(page.label) + "</p>" +
          "<h1>" + escape(page.heading) + "</h1>" +
          '<p class="teaching-intro">' + text(page.introduction) + "</p>" +
          each(page.roles, role) +
        "</section>",
    };
  });
})();
