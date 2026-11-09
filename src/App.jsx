import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import useScrollToTop from './hooks/useScrollToTop.js'
import Home from './pages/Home.jsx'
import Research from './pages/Research.jsx'
import ResearchDetail from './pages/ResearchDetail.jsx'
import Publications from './pages/Publications.jsx'
import Experience from './pages/Experience.jsx'
import Teaching from './pages/Teaching.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

/**
 * App — top-level route table.
 *
 * To add a new page:
 *   1. Create the page component in src/pages/.
 *   2. Add a <Route> below, wrapping it in <Layout>.
 *   3. Add the nav entry in src/data/site.js → navItems.
 *
 * Research detail pages are dynamic: /research/:slug
 * The :slug matches the `slug` field in src/data/projects.js.
 */
export default function App() {
  // Scrolls to the top of the page whenever the route changes.
  useScrollToTop()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:slug" element={<ResearchDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
