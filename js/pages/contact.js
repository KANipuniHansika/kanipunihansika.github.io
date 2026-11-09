/* ==========================================================================
   CONTACT TEMPLATE  (you do not need to edit this file)
   Arranges the content from data/contact.js on the page.
   ========================================================================== */

(function () {
  const { escape, text, each, outlineIcon } = SITE;

  SITE.start(function (page, settings) {
    const email = escape(settings.email);
    const topics = each(page.topics, function (topic) {
      return '<span class="tag">' + escape(topic) + "</span>";
    });

    return {
      html:
        '<section class="contact-intro" aria-labelledby="contact-heading">' +
          '<p class="label">' + escape(page.label) + "</p>" +
          '<h1 id="contact-heading">' + escape(page.heading[0]) + "<br><span>" + escape(page.heading[1]) + "</span></h1>" +
          '<p class="contact-lead">' + text(page.introduction) + "</p>" +
          '<div class="contact-topics" aria-label="Topics to connect about">' + topics + "</div>" +
          '<a class="button contact-hello" href="mailto:' + email + '">' + outlineIcon("envelope") + escape(page.buttonText) + "</a>" +
          '<p class="contact-email"><a href="mailto:' + email + '">' + email + "</a></p>" +
          '<div class="contact-affiliation">' +
            '<p class="label">' + escape(page.affiliation.label) + "</p>" +
            "<h2>" + escape(page.affiliation.name) + "</h2>" +
            "<p>" + page.affiliation.lines.map(escape).join("<br>") + "</p>" +
          "</div>" +
          '<p class="contact-signoff">' + escape(page.signoff) + ' <span aria-hidden="true">✧</span></p>' +
        "</section>",
    };
  });
})();
