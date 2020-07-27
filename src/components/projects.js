import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectCard from "../components/projectCard"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      danceland: file(relativePath: { eq: "danceland.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      navisavi: file(relativePath: { eq: "navisavi.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      pmi: file(relativePath: { eq: "pmi.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      mpk: file(relativePath: { eq: "mpk.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      pmi: file(relativePath: { eq: "pmi.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="projects" className="px-40">
      <div className="flex h-full w-full">
        <div className="w-full self-center">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-main-navy text-5xl">Projects</h2>
            <p className="text-gray-600 text-xl text-center max-w-4xl">
              Check out a few of my most recent projects.
            </p>
          </div>
          <div className="grid grid-cols-4 w-full gap-6">
            <ProjectCard
              title="Navi Savi"
              desc="Travel app based out of NYC"
              img={data.navisavi.childImageSharp.fluid}
              tech1="Gatsby.js"
              tech2="React.js"
              tech3="Tailwind CSS"
              tech4="Contentful CMS"
              tech5="Cloudinary"
            />
            <ProjectCard
              title="Mini Pop Kids"
              desc="Canada's #1 kids music brand"
              img={data.mpk.childImageSharp.fluid}
              tech1="Gatsby.js"
              tech2="React.js"
              tech3="Airtable CMS"
              tech4="Auth0"
              tech5="Shopify"
            />
            <ProjectCard
              title="PMI Total Fitness"
              desc="Gym/fitness center"
              img={data.pmi.childImageSharp.fluid}
              tech1="Gatsby.js"
              tech2="React.js"
              tech3="Tailwind CSS"
              tech4="Snipcart"
              tech5="Contentful CMS"
            />
            <ProjectCard
              title="Danceland"
              desc="History of a music venue"
              img={data.danceland.childImageSharp.fluid}
              tech1="Gatsby.js"
              tech2="React.js"
              tech3="Tailwind CSS"
              tech4="Airtable CMS"
              tech5="Algolia"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
