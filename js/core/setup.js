/* ==========================================================================
   SETUP  (you do not need to edit this file)

   This is the first script every page loads. It does two jobs:

   1. Creates "SITE", the shared box that the data files put their content in.
   2. Watches for mistakes. If a data file has a typo (usually a missing comma
      or quotation mark), a clear message appears at the top of the page
      telling you which file and line to look at, instead of a blank page.
   ========================================================================== */

window.SITE = {
  settings: null, // filled in by data/site.js
  page: null,     // filled in by the data file for the current page
};

/* Shows a message box at the top of the page. Only the first problem is shown,
   because fixing it often clears up the rest. */
SITE.showProblem = function (message) {
  if (document.querySelector(".site-problem")) return;
  const box = document.createElement("div");
  box.className = "site-problem";
  box.setAttribute("role", "alert");
  box.innerHTML = "<strong>This page has a problem.</strong> ";
  box.appendChild(document.createTextNode(message));
  document.body.prepend(box);
};

/* Finds the data file that belongs to this page, for use in messages. */
SITE.dataFileName = function () {
  const scripts = Array.from(document.querySelectorAll('script[src^="data/"]'));
  const pageScript = scripts.find(function (script) {
    return script.getAttribute("src") !== "data/site.js";
  });
  return pageScript ? pageScript.getAttribute("src") : "your data file";
};

/* Runs automatically whenever the browser hits a mistake in any script. */
window.addEventListener("error", function (event) {
  if (!event.filename) return;
  const file = event.filename.split("/").slice(-2).join("/");
  SITE.showProblem(
    "Check " + file + " near line " + event.lineno +
    ". The most common cause is a missing comma or quotation mark. (" + event.message + ")"
  );
});
