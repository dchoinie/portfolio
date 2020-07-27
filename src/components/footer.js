import React from "react"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaGit,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-main-navy py-4">
      <div className="flex justify-center w-full text-white mb-3">
        <p>&copy; {new Date().getFullYear()} Dan Choiniere</p>
      </div>
      <div className="flex justify-center w-full">
        <ul className="flex gap-6">
          <li>
            <a
              href="https://github.com/dchoinie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-lg"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-choiniere/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-lg"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/DLChoiniere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-lg"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/dchoinie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-lg"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dchoinie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-lg"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
