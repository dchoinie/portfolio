import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BlogCard from "../components/blogCard"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      blog: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
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
    <div className="px-6 lg:px-40 lg:mt-24 mb-12 lg:mb-0">
      <div className="flex justify-center h-full w-full" id="blog">
        <div className="w-full self-center lg:px-40">
          <div className="flex flex-col items-center">
            <h2 className="text-main-navy text-3xl lg:text-5xl tracking-wider leading-tight">
              Blog
            </h2>
            <p className="text-gray-600 text-base lg:text-xl text-center lg:max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              omnis dicta, quo laboriosam eum nesciunt quis, voluptate aliquid,
              maiores beatae ducimus eveniet doloremque quas nulla!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {data.blog.edges.map(({ node: blog }) => {
          return (
            <BlogCard
              key={blog.id}
              slug={blog.frontmatter.slug}
              title={blog.frontmatter.title}
              exceprt={blog.frontmatter.exceprt}
              img={blog.frontmatter.featuredImage.childImageSharp.fluid}
              date={blog.frontmatter.date}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Blog
