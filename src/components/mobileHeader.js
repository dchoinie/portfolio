import React, { useState } from "react"
import { Spring, animated } from "react-spring/renderprops"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { FaBars } from "react-icons/fa"

const MobileHeader = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  return (
    <header className="lg:hidden z-10 relative py-4 pr-6">
      <div className="flex justify-between w-full">
        <div className="flex bg-main-navy text-white pl-6 pr-2 py-1 rounded-tr-full rounded-br-full">
          <h1 className="text-2xl">Dan Choiniere</h1>
        </div>
        <div className="flex text-main-navy text-2xl">
          <button onClick={() => setBurgerOpen(!burgerOpen)}>
            <FaBars className="self-center" />
          </button>
        </div>
      </div>
      {burgerOpen && (
        <div className="flex justify-end">
          <Spring
            native
            force
            config={{ tension: 2000, friction: 100, precision: 1 }}
            from={{ height: burgerOpen ? 0 : "auto" }}
            to={{ height: burgerOpen ? "auto" : 0 }}
          >
            {props => (
              <animated.ul
                className="flex flex-col text-right text-xl"
                style={props}
              >
                <li>
                  <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
                    <ScrollLink to="skills" smooth={true} duration={500}>
                      Skills
                    </ScrollLink>
                  </button>
                </li>
                <li>
                  <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
                    <ScrollLink to="projects" smooth={true} duration={500}>
                      Projects
                    </ScrollLink>
                  </button>
                </li>
                <li>
                  <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
                    <ScrollLink to="about" smooth={true} duration={500}>
                      About
                    </ScrollLink>
                  </button>
                </li>
                <li>
                  <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
                    <ScrollLink to="blog" smooth={true} duration={500}>
                      Blog
                    </ScrollLink>
                  </button>
                </li>
                <li>
                  <button className="focus:outline-none lowercase comfortaa border-b-2 border-transparent hover:border-main-blue">
                    <ScrollLink to="contact" smooth={true} duration={500}>
                      Contact
                    </ScrollLink>
                  </button>
                </li>
              </animated.ul>
            )}
          </Spring>
        </div>
      )}
    </header>
  )
}

export default MobileHeader
