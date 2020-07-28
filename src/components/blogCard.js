import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaArrowRight } from "react-icons/fa"

export default class blogCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    exceprt: PropTypes.string,
    img: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
  }

  render() {
    return (
      <Link
        to={this.props.slug}
        className="shadow-md rounded-md border border-gray-300"
      >
        <div className="flex flex-col p-4">
          <h2 className="text-2xl text-center text-main-navy">
            {this.props.title}
          </h2>
          <p className="text-center text-main-blue italic">{this.props.date}</p>
          <Img
            fluid={this.props.img}
            className="w-full my-4 shadow-md rounded-md"
          />
          <p className="text-gray-600">{this.props.exceprt}</p>
          <p className="flex justify-center bg-main-navy text-lg mt-2 text-white lowercase py-2 px-8 rounded-md focus:outline-none tracking-wider hover:bg-blue-800 whitespace-no-wrap">
            Read More <FaArrowRight className="self-center ml-2" />
          </p>
        </div>
      </Link>
    )
  }
}
