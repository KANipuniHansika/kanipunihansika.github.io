/**
 * Header — site header with the Hansi wordmark and navigation.
 *
 * This component is rendered once by Layout and appears on every page.
 * The active nav item is highlighted automatically by React Router's
 * NavLink (aria-current="page").
 *
 * To add a page: add an entry in src/data/site.js → navItems and a
 * matching <Route> in App.jsx.
 */
import { NavLink, Link } from 'react-router-dom'
import { site, navItems } from '../data/site.js'
import NavIcon from './NavIcons.jsx'

export default function Header() {
  return (
    <header className="top">
      <div className="wrap bar">
        {/* Brand / wordmark */}
        {/* Logo: light-pink portrait-shaped blob with "h", then the
            wordmark with the spark standing in for the dot on the final "i". */}
        <Link className="hansi-brand" to="/" aria-label={`${site.wordmark} homepage`}>
          <span className="brand-blob" aria-hidden="true"><span>h</span></span>
          <span className="hansi-wordmark" aria-hidden="true">
            {site.wordmark.slice(0, -1)}
            <span className="brand-i">
              ı
              <svg viewBox="0 0 24 24">
                <path d="M12 0c.9 6.4 5.6 11.1 12 12-6.4.9-11.1 5.6-12 12-.9-6.4-5.6-11.1-12-12C6.4 11.1 11.1 6.4 12 0z" />
              </svg>
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              // `end` is needed for the "/" route so it only matches exactly.
              end={item.path === '/'}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <NavIcon name={item.icon} />
              </svg>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
