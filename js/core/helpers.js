/* ==========================================================================
   HELPERS  (you do not need to edit this file)

   Small tools shared by all the page templates. The most important one is
   SITE.text, which understands the simple formatting used in the data files:

     **bold words**          makes words bold
     _italic words_          makes words italic
     [link text](address)    makes a link
   ========================================================================== */

(function () {
  const NEW_TAB = ' target="_blank" rel="noopener noreferrer"';

  /* A line left out of a data file shows as nothing, not the word "undefined". */
  function asText(value) {
    return value === undefined || value === null ? "" : String(value);
  }

  /* Makes text safe to place in a page, so "&" and "<" display correctly. */
  function escape(value) {
    return asText(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isWebAddress(url) {
    return /^https?:/i.test(url);
  }

  /* Web addresses and PDF files open in a new tab; pages on this site do not. */
  function opensInNewTab(url) {
    return isWebAddress(url) || /\.pdf$/i.test(url);
  }

  /* Applies **bold**, _italic_ and [links] to a piece of text.
     Pass { webLinksInNewTab: true } to open web links in a new tab. */
  function text(value, options) {
    const links = [];

    // Set links aside first, so underscores in web addresses are left alone.
    let result = asText(value).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (match, label, url) {
      links.push({ label: label, url: url });
      return "\u0000" + (links.length - 1) + "\u0000";
    });

    result = escape(result)
      // The (?!\*) lets a name end in a star, as in **N. Arachchige***
      .replace(/\*\*(.+?)\*\*(?!\*)/g, "<strong>$1</strong>")
      .replace(/(^|[\s(>\u0000])_(.+?)_(?=$|[\s).,;:!?<\u0000])/g, "$1<em>$2</em>");

    return result.replace(/\u0000(\d+)\u0000/g, function (match, index) {
      const link = links[Number(index)];
      const newTab = options && options.webLinksInNewTab && isWebAddress(link.url);
      return '<a href="' + escape(link.url) + '"' + (newTab ? NEW_TAB : "") + ">" + text(link.label) + "</a>";
    });
  }

  /* Builds HTML for every item in a list. A missing list simply gives nothing. */
  function each(list, build) {
    return (list || []).map(build).join("");
  }

  /* Builds a link from a { text, url } item. Adding button: true makes it a button. */
  function link(item) {
    const buttonClass = item.button ? ' class="button"' : "";
    const newTab = opensInNewTab(item.url) ? NEW_TAB : "";
    return "<a" + buttonClass + ' href="' + escape(item.url) + '"' + newTab + ">" + escape(item.text) + "</a>";
  }

  /* Builds a row of coloured tag pills. */
  function tags(list, attributes) {
    if (!list || !list.length) return "";
    return '<div class="tags"' + (attributes || "") + ">" +
      each(list, function (tag) { return '<span class="tag">' + escape(tag) + "</span>"; }) +
      "</div>";
  }

  /* Makes a two-part heading: the first line plain, the second highlighted. */
  function twoLines(lines, highlightTag) {
    if (!Array.isArray(lines)) return escape(lines);
    return escape(lines[0]) + "<br><" + highlightTag + ">" + escape(lines[1]) + "</" + highlightTag + ">";
  }

  Object.assign(SITE, {
    NEW_TAB: NEW_TAB,
    escape: escape,
    text: text,
    each: each,
    link: link,
    tags: tags,
    twoLines: twoLines,
  });
})();
