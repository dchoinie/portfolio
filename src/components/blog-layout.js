import React from "react"
import Header from "../components/blog-header"
import Footer from "../components/footer"

export default ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)
