import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MobileHero from "../components/mobileHero"
import Hero from "../components/hero"
import Skills from "../components/skills"
import Projects from "../components/projects"
import About from "../components/about"
import Blog from "../components/blog"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MobileHero />
    <Hero />
    <Skills />
    <Projects />
    <About />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
