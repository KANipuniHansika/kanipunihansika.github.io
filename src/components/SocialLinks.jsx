/**
 * SocialLinks — reusable row of social / contact icon links.
 *
 * Used on the homepage profile, the footer, and the contact page.
 *
 * @param {object} props
 * @param {string} props.ariaLabel  — aria-label for the group container
 * @param {boolean} props.includeEmail — show the email icon (footer/yes, profile/yes)
 *
 * The URLs come from src/data/site.js → site.social.
 * To add a new social link: add it to site.social, add the SVG here,
 * and it will appear everywhere SocialLinks is used.
 */
import { site } from '../data/site.js'

export default function SocialLinks({ ariaLabel = 'Social profiles', includeEmail = true }) {
  return (
    <div className="social-links" role="group" aria-label={ariaLabel}>
      {includeEmail && (
        <a
          className="social-icon"
          href={`mailto:${site.email}`}
          aria-label="Email Nipuni Hansika"
          title="Email"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 6 9 7 9-7" />
          </svg>
        </a>
      )}

      {/* GitHub */}
      <a
        className="social-icon"
        href={site.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub — opens in a new tab"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.01-.12-.29-.5-1.43.11-2.97 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.09-1.15 3.09-1.15.62 1.54.23 2.68.12 2.97.72.78 1.15 1.78 1.15 3.01 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
          />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        className="social-icon"
        href={site.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn — opens in a new tab"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M5.5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 9h3v12H4V9Zm5 0h3v1.6c.7-1.1 1.8-1.9 3.7-1.9 3.3 0 4.3 2.1 4.3 5.2V21h-3v-6.3c0-1.7-.3-3-2.2-3-2 0-2.8 1.4-2.8 3.5V21H9V9Z"
          />
        </svg>
      </a>

      {/* Google Scholar */}
      <a
        className="social-icon"
        href={site.social.scholar}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Scholar — opens in a new tab"
        title="Google Scholar"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-7 10v4c0 2.2 3.1 4 7 4s7-1.8 7-4v-4l-7 3.8L5 13Z"
          />
        </svg>
      </a>
    </div>
  )
}
