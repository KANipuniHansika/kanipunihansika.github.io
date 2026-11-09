/* ==========================================================================
   HOMEPAGE TEMPLATE  (you do not need to edit this file)
   Arranges the content from data/home.js on the page.
   ========================================================================== */

(function () {
  const { escape, text, each, link, outlineIcon, NEW_TAB } = SITE;

  function profile(data, settings) {
    return '<div class="hansi-profile">' +
      '<div class="hansi-portrait">' +
        '<span class="portrait-word" aria-hidden="true">' + escape(settings.wordmark) + "</span>" +
        '<img src="' + escape(data.photo) + '" alt="' + escape(data.photoDescription) +
          '" width="640" height="760" onerror="this.hidden = true">' +
      "</div>" +
      '<p class="photo-note">' + escape(data.photoNote) + ' <span aria-hidden="true">✧</span></p>' +
      '<div class="social-links" role="group" aria-label="Social profiles">' +
        each(settings.socialLinks, SITE.socialIcon) +
      "</div>" +
      '<a class="button hansi-email" href="mailto:' + escape(settings.email) + '">' +
        outlineIcon("envelope") +
        '<span class="email-button-text"><span>' + escape(data.emailButtonText) + "</span></span>" +
      "</a>" +
    "</div>";
  }

  function about(data) {
    return '<div class="hansi-about">' +
      '<p class="label">' + escape(data.tagline) + "</p>" +
      '<h1 id="intro-heading">' + escape(data.greeting) + "<br><span>" + escape(data.name) + "</span></h1>" +
      '<p class="preferred-name">' + text(data.preferredName) + "</p>" +
      '<p class="hansi-lead">' + text(data.lead) + "</p>" +
      each(data.paragraphs, function (paragraph) { return "<p>" + text(paragraph) + "</p>"; }) +
      '<div class="bio-links">' + each(data.links, link) + "</div>" +
    "</div>";
  }

  function photo(item) {
    return '<a href="' + escape(item.image) + '"' + NEW_TAB + ' aria-label="' + escape(item.openLabel) + '">' +
      '<img src="' + escape(item.image) + '" alt="' + escape(item.alt) + '" width="180" height="135" loading="lazy">' +
    "</a>";
  }

  function highlight(item) {
    const words = "<p>" + text(item.text) + "</p>";
    const body = item.photos
      ? '<div>' + words + '<div class="graduation-photos">' + each(item.photos, photo) + "</div></div>"
      : words;
    return '<article class="highlight"><time datetime="' + escape(item.yearMonth) + '">' + escape(item.date) + "</time>" + body + "</article>";
  }

  SITE.start(function (page, settings) {
    return {
      html:
        '<section class="hansi-intro" aria-labelledby="intro-heading">' +
          profile(page.profile, settings) + about(page.about) +
        "</section>" +
        '<section class="home-section hansi-highlights" aria-labelledby="highlights-heading">' +
          '<p class="label">' + escape(page.highlights.label) + "</p>" +
          '<h2 id="highlights-heading">' + escape(page.highlights.heading) + ' <span aria-hidden="true">✦</span></h2>' +
          each(page.highlights.items, highlight) +
        "</section>",
    };
  });
})();
