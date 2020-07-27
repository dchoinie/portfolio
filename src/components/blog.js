import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BlogCard from "../components/blogCard"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
        edges {
          node {
            frontmatter {
              exceprt
              date(formatString: "MMM DD, YYYY")
              title
              slug
              featuredImage {
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
          }
        }
      }
    }
  `)
  return (
    <div id="blog" className="h-screen">
      <div className="flex justify-center h-full w-full">
        <div className="w-full self-center px-40">
          <div className="flex flex-col items-center">
            <h2 className="text-main-navy text-5xl">Blog</h2>
            <p className="text-gray-600 text-xl text-center max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              omnis dicta, quo laboriosam eum nesciunt quis, voluptate aliquid,
              maiores beatae ducimus eveniet doloremque quas nulla!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default Blog
