import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { MdChatBubbleOutline } from "react-icons/md"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

const MobileHero = () => {
  const data = useStaticQuery(graphql`
    {
      dan: file(relativePath: { eq: "dan.png" }) {
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
    <div
      className="flex justify-center bg-white px-6 lg:hidden"
      style={{ height: "calc(100vh - 76px)" }}
    >
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col w-full items-center">
          <h1 className="text-main-navy leading-tight tracking-wider text-3xl text-center">
            Frontend Developer
          </h1>
          <h2 className="text-lg text-center text-main-blue">
            Helping businesses discover <br /> new possibilities
          </h2>
        </div>
        <div className="flex flex-col w-full">
          <Img
            fluid={data.dan.childImageSharp.fluid}
            className="w-3/4 mx-auto rounded-full"
          />
          <button className="flex self-center justify-center bg-main-navy text-lg my-2 text-white lowercase py-2 px-8 rounded-md focus:outline-none tracking-wider hover:bg-blue-800">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Let's Chat
            </ScrollLink>
            <MdChatBubbleOutline className="self-center ml-2 text-2xl" />
          </button>
          <ul className="flex justify-center text-xl my-2 text-gray-400">
            <a
              href="https://github.com/dchoinie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy mr-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-choiniere/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy mx-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/DLChoiniere"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy mx-2"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/dchoinie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy mx-2"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/dchoinie/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy ml-2"
            >
              <FaInstagram />
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileHero
