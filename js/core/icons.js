/* ==========================================================================
   ICONS  (you do not need to edit this file)

   The small line drawings used in the menu and on the social buttons.
   Data files refer to an icon by the name on the left, for example
   icon: "github".
   ========================================================================== */

SITE.icons = {
  // Menu icons
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-8h6v8"/>',
  magnifier: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  document: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12a21 21 0 0 0 18 0M12 12v3"/>',
  graduation: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v6c3 3 9 3 12 0v-6M22 9v7"/>',
  book: '<path d="M12 5v16"/><path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 1Z"/>',
  envelope: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',

  // Social icons
  github: '<path fill="currentColor" d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.01-.12-.29-.5-1.43.11-2.97 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.09-1.15 3.09-1.15.62 1.54.23 2.68.12 2.97.72.78 1.15 1.78 1.15 3.01 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"/>',
  linkedin: '<path fill="currentColor" d="M5.5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 9h3v12H4V9Zm5 0h3v1.6c.7-1.1 1.8-1.9 3.7-1.9 3.3 0 4.3 2.1 4.3 5.2V21h-3v-6.3c0-1.7-.3-3-2.2-3-2 0-2.8 1.4-2.8 3.5V21H9V9Z"/>',
  scholar: '<path fill="currentColor" d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-7 10v4c0 2.2 3.1 4 7 4s7-1.8 7-4v-4l-7 3.8L5 13Z"/>',
};

/* An icon whose colour and line thickness are set by the stylesheet. */
SITE.icon = function (name) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true">' + SITE.icons[name] + "</svg>";
};

/* The envelope icon used on buttons, which sets its own line thickness. */
SITE.outlineIcon = function (name) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
    SITE.icons[name] + "</svg>";
};
