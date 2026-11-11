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
import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="top">
      <div className="wrap bar">
        {/* Brand / logo (see Logo.jsx) */}
        <Link className="hansi-brand" to="/" aria-label={`${site.wordmark} homepage`}>
          <Logo />
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
