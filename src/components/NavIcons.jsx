/**
 * NavIcons — SVG path data for each navigation item.
 *
 * Each icon is a React fragment of <path> elements drawn inside a
 * shared <svg viewBox="0 0 24 24"> wrapper (provided by Header.jsx).
 *
 * To add a new icon: add a key here and use it in site.js → navItems.
 */
const icons = {
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v12h14V9M9 21v-8h6v8" />
    </>
  ),
  research: (
    <>
      <circle cx="10" cy="10" r="6" />
      <path d="m15 15 6 6" />
    </>
  ),
  publications: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5M9 12h7M9 16h7" />
    </>
  ),
  experience: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V3h8v4M3 12a21 21 0 0 0 18 0M12 12v3" />
    </>
  ),
  teaching: (
    <>
      <path d="m2 9 10-5 10 5-10 5z" />
      <path d="M6 11v6c3 3 9 3 12 0v-6M22 9v7" />
    </>
  ),
  education: (
    <>
      <path d="M12 5v16" />
      <path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 1Z" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
}

/**
 * NavIcon — renders a single nav icon by name.
 * @param {string} name - key into the icons object above
 */
export default function NavIcon({ name }) {
  return <>{icons[name] ?? null}</>
}
