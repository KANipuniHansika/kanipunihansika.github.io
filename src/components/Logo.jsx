/**
 * Logo — the Hansi logo, drawn as one SVG:
 *   a hand-drawn blush "h" with a pink dot, then the name in Georgia bold
 *   italic with a white-to-pink gradient, a pink ✦ spark, and a short
 *   tapered brush-stroke underline.
 *
 * The name text comes from src/data/site.js → wordmark. Colours are set in
 * src/styles/index.css under "Hansi logo". Size it with CSS height.
 */
import { useId } from 'react'
import { site } from '../data/site.js'

export default function Logo({ className = '' }) {
  // Unique gradient id so several logos on one page don't clash.
  const gradId = `hansi-name-${useId().replace(/:/g, '')}`

  return (
    <svg className={`hansi-logo ${className}`} viewBox="0 0 250 88" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.2" stopColor="var(--logo-name-top)" />
          <stop offset="1" stopColor="var(--logo-name-bottom)" />
        </linearGradient>
      </defs>

      {/* Script "h" with its dot */}
      <g transform="translate(2 3) scale(.66)">
        <path
          className="logo-h"
          d="M8 84 C18 83 27 76 34 64 C44 46 52 26 49 13 C47 4 38 5 36 16 C33 34 35 62 37 88 C40 72 47 58 58 57 C68 56 68 68 66 76 C64 86 71 91 80 89 C87 87 91 82 94 76"
        />
        <circle className="logo-accent" cx="99" cy="58" r="6" />
      </g>

      {/* Name */}
      <text className="logo-name" x="84" y="61" fill={`url(#${gradId})`}>{site.wordmark}</text>

      {/* ✦ spark */}
      <path
        className="logo-accent"
        transform="translate(229 14) scale(.62)"
        d="M12 0c.9 6.4 5.6 11.1 12 12-6.4.9-11.1 5.6-12 12-.9-6.4-5.6-11.1-12-12C6.4 11.1 11.1 6.4 12 0z"
      />

      {/* Tapered brush-stroke underline */}
      <path className="logo-underline" d="M86 75 C106 76.5 138 76.5 174 70 C140 79.5 106 80.5 86 75 Z" />
    </svg>
  )
}
