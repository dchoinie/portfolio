import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Wave from "../images/about.png"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      collage: file(relativePath: { eq: "collage2.jpg" }) {
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
      className="mt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-transparent px-6 lg:px-40 mb-12 lg:mb-0" id="about">
        <div className="flex flex-col items-center">
          <h2 className="text-main-navy text-3xl lg:text-5xl tracking-wider leading-tight">
            About Me
          </h2>
          <p className="text-gray-600 lg:max-w-4xl text-center text-base lg:text-xl">
            I am a freelance developer, digital assets manager &amp; former
            tennis teaching proffesional from Minneapolis, MN. I started doing
            freelance development in 2016 building some simple WordPress sites
            for friends &amp; family. I am constantly learning through online
            tutorials, podcasts, nerding out and reading documentation, watching
            twitch streams and many other ways. I have expanded my tech
            knowledge and have created #JAMstack marketing sites &amp; React.js
            web applications for numerous small businesses.
          </p>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex w-full lg:w-1/2 p-6">
              <Img
                fluid={data.collage.childImageSharp.fluid}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 lg:p-6 self-center">
              <h4 className="text-2xl text-main-blue">Things I like to do</h4>
              <div className="border-b border-gray-400 w-1/3 my-2"></div>
              <ul className="flex flex-col">
                <li className="text-main-navy comfortaa lowercase text-xl">
                  Play tennis &amp; pickleball
                </li>
                <p className="ml-4 text-sm text-gray-600 mb-2">
                  I played college tennis at Gustavus Adolphus College in St.
                  Peter, MN. I was a teaching professional for 9 years and
                  continue to play in leagues with my dad and my wife (and
                  hopefully my daughter someday soon!). Pickleball (for those of
                  you that don't know) is another racquet sport played on a
                  small court, with a wiffle ball &amp; a paddle, tons of fun!
                </p>
                <li className="text-main-navy comfortaa lowercase text-xl">
                  Go hiking, camping &amp; showshoeing
                </li>
                <p className="ml-4 text-sm text-gray-600 mb-2">
                  My wife Natasha and I love to go camping &amp; exploring
                  beautiful hiking trails all around the country. Some of my
                  favorite spots are Lutsen on the north shore of Minnesota,
                  Mount Rainier in Seattle (and really any trail in Washington)
                  &amp; Sedona, AZ. We have a long bucket list of places we hope
                  to visit!
                </p>
                <li className="text-main-navy comfortaa lowercase text-xl">
                  Play guitar, piano &amp; anything related to music
                </li>
                <p className="ml-4 text-sm text-gray-600 mb-2">
                  I actually majored in music business and dreamed of being in
                  the music industry before I fell in love with development.
                  Although I don't get to as much as I'd like these days, I love
                  to whip out my acoustic guitar and have some fun.
                </p>
                <li className="text-main-navy comfortaa lowercase text-xl">
                  Drink beer
                </li>
                <p className="ml-4 text-sm text-gray-600 mb-2">
                  I am a self-declared craft beer afficianado. My favorites are
                  dark beers like porters &amp; stouts but am fond of IPAs, sour
                  beers and will try anything. Follow me on{" "}
                  <a
                    href="https://untappd.com/user/dchoinie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-main-blue"
                  >
                    Untappd
                  </a>{" "}
                  to check out beers I've rated.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
