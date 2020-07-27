import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"
import { MdChatBubbleOutline } from "react-icons/md"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "dan.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "boxes.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundStack = [
    `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
    data.background.childImageSharp.fluid,
  ]

  const danStack = [
    `linear-gradient(rgba(176, 215, 255, 0.25), rgba(176, 215, 255, 0.25))`,
    data.hero.childImageSharp.fluid,
  ]

  return (
    <BackgroundImage fluid={backgroundStack} className="w-full h-full">
      <div
        className="flex w-full relative z-10 px-40 h-screen"
        style={{ marginTop: "-76px" }}
      >
        <div className="flex flex-col self-center w-1/2">
          <h1 className="text-5xl 2xl:text-6xl text-main-navy leading-tight tracking-wider">
            Frontend Developer
          </h1>
          <h4 className="text-main-blue text-2xl 2xl:text-3xl font-bold">
            helping businesses discover new possibilities
          </h4>
          <button className="flex justify-center bg-main-navy text-lg my-2 w-1/3 text-white lowercase py-2 px-8 rounded-md focus:outline-none tracking-wider hover:bg-blue-800">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Let's Chat
            </ScrollLink>
            <MdChatBubbleOutline className="self-center ml-2 text-2xl" />
          </button>
          <ul className="flex w-1/3 justify-between text-xl my-2 text-gray-400">
            <a
              href="https://github.com/dchoinie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-choiniere/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/DLChoiniere"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/dchoinie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/dchoinie/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main-navy"
            >
              <FaInstagram />
            </a>
          </ul>
        </div>
        <div className="flex w-1/2 self-center justify-center">
          <div className="bg-main-blue rounded-full shadow-md">
            <BackgroundImage
              fluid={danStack}
              className="rounded-full shadow-md"
              style={{
                width: "400px",
                height: "400px",
                transform: "translate(-40px, -20px)",
                overflow: "hidden",
                border: "5px solid white",
              }}
            ></BackgroundImage>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
