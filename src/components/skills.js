import React from "react"
import { FaCode, FaDatabase, FaTools } from "react-icons/fa"
import SkillsCard from "../components/skillsCard"

const Skills = () => {
  return (
    <div className="bg-white h-screen" id="skills">
      <div className="flex justify-center h-full w-full">
        <div className="w-full self-center px-40">
          <div className="flex flex-col items-center">
            <h2 className="text-main-navy text-5xl">Tech Skills</h2>
            <p className="text-gray-600 text-xl text-center max-w-4xl">
              Self-taught developer specializing in frontend technologies. I
              love to help small businesses expand their online presence.
              Whether you need a blazing-fast marketing site, a full-stack web
              app, or e-commerce functionality, I would love to help!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-24">
            <SkillsCard
              icon={<FaCode />}
              title="Frontend"
              skill1="Html"
              skill2="Css"
              skill3="JavaScript"
              skill4="React"
              skill5="Gatsby"
              skill6="Next"
            />
            <SkillsCard
              icon={<FaDatabase />}
              title="Backend"
              skill1="Node / NPM"
              skill2="GraphQL"
              skill3="Express"
              skill4="RESTful APIs"
              skill5="Headless CMSs"
              skill6="Servless Functions"
            />
            <SkillsCard
              icon={<FaTools />}
              title="Tools"
              skill1="Github"
              skill2="VS Code"
              skill3="Netlify"
              skill4="Figma"
              skill5="Tailwind CSS"
              skill6="Styled Components"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

// Html
// Css
// JavaScript
// React
// Gatsby
// Next
// Vue
// Node / NPM
// GraphQL
// Express
// RESTful APIs
// Headless CMSs
// TailwindCSS
// SCSS
// Styled Components
// Bootstrap
// Bulma
// Figma
// VS Code
// Netlify
// Github
