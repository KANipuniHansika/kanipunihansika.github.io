import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * useScrollToTop — scrolls to the top of the page on every route change.
 *
 * In a traditional multi-page site the browser does this automatically.
 * In a React SPA (single-page application) we need to do it ourselves,
 * otherwise navigating to a new page leaves you at the same scroll position.
 *
 * If the URL contains a hash (e.g. "/research#motus") we scroll to that
 * element instead of the top.
 */
export default function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}
