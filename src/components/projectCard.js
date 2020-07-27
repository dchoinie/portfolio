import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export default class projectCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    stack: PropTypes.string,
    tech1: PropTypes.string,
    tech2: PropTypes.string,
    tech3: PropTypes.string,
    tech4: PropTypes.string,
    tech5: PropTypes.string,
    tech6: PropTypes.string,
  }

  render() {
    return (
      <div className="shadow-md rounded-md p-4 border border-gray-300">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-main-navy">{this.props.title}</h2>
            <p className="text-gray-600 text-center">{this.props.desc}</p>
          </div>
          <div className="flex">
            <Img
              fluid={this.props.img}
              className="w-full my-3"
              style={{ height: "400px" }}
            />
          </div>
          <ul className="flex flex-col text-center">
            <li className="text-main-navy underline">Tech Stack:</li>
            {this.props.tech1 && (
              <li className="text-gray-600">{this.props.tech1}</li>
            )}
            {this.props.tech2 && (
              <li className="text-gray-600">{this.props.tech2}</li>
            )}
            {this.props.tech3 && (
              <li className="text-gray-600">{this.props.tech3}</li>
            )}
            {this.props.tech4 && (
              <li className="text-gray-600">{this.props.tech4}</li>
            )}
            {this.props.tech5 && (
              <li className="text-gray-600">{this.props.tech5}</li>
            )}
            {this.props.tech6 && (
              <li className="text-gray-600">{this.props.tech6}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
