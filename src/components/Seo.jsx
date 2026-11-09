/**
 * Seo — sets the document title and meta description per page.
 *
 * In the original HTML portfolio each page had its own <title> and
 * <meta name="description">. This component replicates that for the
 * React SPA by updating document.head on mount.
 *
 * Usage:  <Seo title="Research · Nipuni Hansika" description="..." />
 *
 * No external dependency needed — just direct DOM manipulation,
 * which is the simplest approach for a static portfolio.
 */
import { useEffect } from 'react'

export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }
  }, [title, description])

  return null
}
