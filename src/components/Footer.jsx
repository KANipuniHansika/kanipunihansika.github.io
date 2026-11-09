/**
 * Footer — site footer with social links and copyright.
 *
 * Rendered once by Layout; appears at the bottom of every page.
 * The email and social URLs come from src/data/site.js.
 */
import SocialLinks from './SocialLinks.jsx'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="hansi-footer">
      <div className="wrap">
        <SocialLinks
          ariaLabel="Contact and social profiles"
          includeEmail={true}
        />
        <p>{site.copyright}</p>
      </div>
    </footer>
  )
}
