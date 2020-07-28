import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import MobileHeader from "./mobileHeader"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </>
  )
}

export default Layout
