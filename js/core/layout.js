/* ==========================================================================
   LAYOUT  (you do not need to edit this file)

   Builds the parts that appear on every page: the top menu and the footer.
   Their content comes from data/site.js, so a change there updates every page.
   ========================================================================== */

(function () {
  const { escape, each, icon, outlineIcon, NEW_TAB } = SITE;

  function header(settings) {
    const currentPage = document.body.dataset.activeNav;

    const menuItems = each(settings.navigation, function (item) {
      const current = item.page === currentPage ? ' aria-current="page"' : "";
      return '<a href="' + escape(item.page) + '"' + current + ">" +
        icon(item.icon) + "<span>" + escape(item.label) + "</span></a>";
    });

    return '<header class="top"><div class="wrap bar">' +
      '<a class="brand hansi-brand" href="index.html" aria-label="' + escape(settings.wordmark) + ' homepage">' +
        '<span class="hansi-wordmark">' + escape(settings.wordmark) + "</span>" +
        '<span class="brand-spark" aria-hidden="true">✦</span>' +
      "</a>" +
      '<nav class="main-nav" aria-label="Main navigation">' + menuItems + "</nav>" +
    "</div></header>";
  }

  /* One round social button. Used in the footer and on the homepage. */
  SITE.socialIcon = function (item) {
    return '<a class="social-icon" href="' + escape(item.url) + '"' + NEW_TAB +
      ' aria-label="' + escape(item.name) + ' — opens in a new tab" title="' + escape(item.name) + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true">' + SITE.icons[item.icon] + "</svg></a>";
  };

  function footer(settings) {
    const emailIcon =
      '<a class="social-icon" href="mailto:' + escape(settings.email) + '"' +
      ' aria-label="Email ' + escape(settings.fullName) + '" title="Email">' + outlineIcon("envelope") + "</a>";

    return '<footer class="hansi-footer" id="contact"><div class="wrap">' +
      '<div class="social-links" role="group" aria-label="Contact and social profiles">' +
        emailIcon + each(settings.socialLinks, SITE.socialIcon) +
      "</div>" +
      "<p>" + escape(settings.copyright) + "</p>" +
    "</div></footer>";
  }

  /* Each page template calls this once. It receives a function that returns
     { mainClass, html } and places the finished page on screen. */
  SITE.start = function (buildPage) {
    if (!SITE.settings) {
      SITE.showProblem("Check data/site.js. The file could not be read, which usually means a missing comma or quotation mark.");
      return;
    }
    if (!SITE.page) {
      SITE.showProblem("Check " + SITE.dataFileName() + ". The file could not be read, which usually means a missing comma or quotation mark.");
      return;
    }

    try {
      const main = buildPage(SITE.page, SITE.settings);
      const classes = ["wrap"].concat(main.mainClass || []).join(" ");
      document.body.insertAdjacentHTML(
        "afterbegin",
        '<a class="skip" href="#main">Skip to content</a>' +
        header(SITE.settings) +
        '<main class="' + classes + '" id="main">' + main.html + "</main>" +
        footer(SITE.settings)
      );
    } catch (error) {
      SITE.showProblem("Something is missing or misnamed in " + SITE.dataFileName() + ". (" + error.message + ")");
    }
  };
})();
