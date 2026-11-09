/**
 * publications.js — Conference papers and journal articles.
 *
 * Each publication object:
 *
 *   venue      — Short label shown on the left (e.g. "ACM CHI · 2026")
 *   title      — Paper title (rendered as a link to the DOI)
 *   titleHref  — URL the title links to (usually the DOI page)
 *   venueFull  — Full venue string shown in italics below the title
 *   authors    — Author string; your name should be wrapped in <strong>
 *                — use the `authorParts` array for mixed formatting
 *   note       — Optional note (e.g. "Equal contribution")
 *   links      — Array of { text, href, external } links shown below
 *   citation   — BibTeX-style recommended citation (shown in collapsible)
 *
 * To add a paper: copy an existing entry and fill in the fields.
 */

export const publications = [
  {
    venue: 'ACM CHI · 2026',
    title: 'Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital Expression',
    titleHref: 'https://dl.acm.org/doi/10.1145/3772318.3791935',
    venueFull: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI \'26)',
    authors: [
      'P. Bolonghege*, G. Ganganath*, ',
      { strong: 'N. Arachchige*' },
      ', P. Benedict Lincoln, and T. Kandappu.',
    ],
    note: '*Equal contribution.',
    links: [
      { text: 'Read PDF ↗', href: '/papers/motor-mediated-creativity-2026.pdf', external: true },
      { text: 'DOI ↗', href: 'https://dl.acm.org/doi/10.1145/3772318.3791935', external: true },
      { text: 'Project details ↗', href: '/research/motus' },
    ],
    citation:
      'Bolonghege, P., Ganganath, G., Arachchige, N., Benedict Lincoln, P. and Kandappu, T., ' +
      '2026, April. Motor-Mediated Creativity: Bridging Embodied Skill Training and Digital ' +
      'Expression. In Proceedings of the 2026 CHI Conference on Human Factors in Computing ' +
      'Systems (pp. 1-23).',
  },
  {
    venue: 'ACM ICMI · 2020',
    title: 'Gesture Enhanced Comprehension of Ambiguous Human-to-Robot Instructions',
    titleHref: 'https://dl.acm.org/doi/10.1145/3382507.3418863',
    venueFull: 'Proceedings of the 2020 International Conference on Multi-modal Interaction (ICMI \'20)',
    authors: [
      'D. Weerakoon, V. Subbaraju, ',
      { strong: 'N. Karumpulli' },
      ', T. Tran, Q. Xu, U.X. Tan, J.H. Lim, and A. Misra.',
    ],
    links: [
      { text: 'Read PDF ↗', href: '/papers/gesture-human-to-robot-instructions-2020.pdf', external: true },
      { text: 'DOI ↗', href: 'https://dl.acm.org/doi/10.1145/3382507.3418863', external: true },
      { text: 'Project details ↗', href: '/research/gesture-robot' },
    ],
    citation:
      'Weerakoon, D., Subbaraju, V., Karumpulli, N., Tran, T., Xu, Q., Tan, U.X., Lim, J.H. ' +
      'and Misra, A., 2020, October. Gesture Enhanced Comprehension of Ambiguous ' +
      'Human-to-Robot Instructions. In Proceedings of the 2020 International Conference ' +
      'on Multi-modal Interaction (pp. 251-259).',
  },
  {
    venue: 'IEEE TENCON · 2019',
    title: 'Complementing Speech Interaction Design with Touch for Multi-Robot Systems',
    titleHref: 'https://ieeexplore.ieee.org/document/8929506',
    venueFull: 'TENCON 2019-2019 IEEE Region 10 Conference (TENCON \'19)',
    authors: [
      'K. Johari, ',
      { strong: 'N. Karumpulli' },
      ', and U.X. Tan.',
    ],
    links: [
      { text: 'Read PDF ↗', href: '/papers/touch-speech-multi-robot-2019.pdf', external: true },
      { text: 'Publisher ↗', href: 'https://ieeexplore.ieee.org/document/8929506', external: true },
      { text: 'Project details ↗', href: '/research/touch-speech' },
    ],
    citation:
      'Johari, K., Karumpulli, N. and Tan, U.X., 2019, October. Complementing Speech ' +
      'Interaction Design with Touch for Multi-Robot Systems. In TENCON 2019-2019 IEEE ' +
      'Region 10 Conference (TENCON) (pp. 1400-1405). IEEE.',
  },
]
