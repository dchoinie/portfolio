import React from "react"
import { Link } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

const Header = () => (
  <header className="z-10 relative">
    <div className="flex w-full justify-between py-4">
      <div className="bg-main-navy rounded-tr-full rounded-br-full py-1">
        <Link
          to="/"
          className="text-2xl lowercase text-white tracking-wide pl-40 pr-4"
        >
          Dan Choiniere
        </Link>
      </div>
      <ul className="flex text-main-navy self-center lowercase pr-40">
        <li className="mr-4">
          <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
            <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </button>
        </li>
        <li className="mx-4">
          <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </button>
        </li>
        <li className="mx-4">
          <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </button>
        </li>
        <li className="mx-4">
          <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
            <ScrollLink to="blog" smooth={true} duration={500}>
              Blog
            </ScrollLink>
          </button>
        </li>
        <li className="ml-4">
          <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </button>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
