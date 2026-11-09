/**
 * Layout — wraps every page with the skip link, header, and footer.
 *
 * Usage:  <Layout> <Routes>...</Routes> </Layout>
 *
 * The skip link is an accessibility feature: keyboard users can jump
 * straight to the main content without tabbing through the nav.
 */
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main className="wrap" id="main">{children}</main>
      <Footer />
    </>
  )
}
