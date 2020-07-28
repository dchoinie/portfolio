import React, { useState } from "react"
import { Spring, animated } from "react-spring/renderprops"
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
                <li>Skills</li>
                <li>Projects</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </animated.ul>
            )}
          </Spring>
        </div>
      )}
    </header>
  )
}

export default MobileHeader
