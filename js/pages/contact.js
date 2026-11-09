/* ==========================================================================
   CONTACT TEMPLATE  (you do not need to edit this file)
   Arranges the content from data/contact.js on the page.
   ========================================================================== */

(function () {
  const { escape, text, each, outlineIcon } = SITE;

  function field(id, wording, control) {
    return '<div class="contact-field"><label for="' + id + '">' + escape(wording) + "</label>" + control + "</div>";
  }

  function messageForm(form) {
    return '<form class="contact-form" id="contact-form">' +
      '<p class="label">' + escape(form.label) + "</p>" +
      "<h2>" + escape(form.heading) + "</h2>" +
      '<div class="contact-form-row">' +
        field("contact-name", form.nameLabel, '<input id="contact-name" name="name" type="text" autocomplete="name" required>') +
        field("contact-from", form.emailLabel, '<input id="contact-from" name="email" type="email" autocomplete="email" required>') +
      "</div>" +
      field("contact-message", form.messageLabel, '<textarea id="contact-message" name="message" rows="6" required></textarea>') +
      // Hidden from people. Spam robots tick it, and the message is then rejected.
      '<input class="contact-form-trap" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<button class="button" type="submit">' + escape(form.submitText) + "</button>" +
      '<p class="contact-form-status" role="status"></p>' +
    "</form>";
  }

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
          messageForm(page.form) +
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
