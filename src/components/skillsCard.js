import React, { Component } from "react"
import PropTypes from "prop-types"

export default class skillsCard extends Component {
  static propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    skill1: PropTypes.string,
    skill2: PropTypes.string,
    skill3: PropTypes.string,
    skill4: PropTypes.string,
    skill5: PropTypes.string,
    skill6: PropTypes.string,
    skill7: PropTypes.string,
  }

  render() {
    return (
      <div className="rounded-md bg-gray-100 shadow-md">
        <div className="flex justify-center text-5xl -mt-12">
          <h4 className="bg-main-navy p-5 text-white rounded-full">
            {this.props.icon}
          </h4>
        </div>
        <div className="flex flex-col rounded-md p-6">
          <h2 className="text-center text-2xl font-bold text-main-navy">
            {this.props.title}
          </h2>
          <ul className="flex flex-col items-center text-gray-700">
            {this.props.skill1 && <li>{this.props.skill1}</li>}
            {this.props.skill2 && <li>{this.props.skill2}</li>}
            {this.props.skill3 && <li>{this.props.skill3}</li>}
            {this.props.skill4 && <li>{this.props.skill4}</li>}
            {this.props.skill5 && <li>{this.props.skill5}</li>}
            {this.props.skill6 && <li>{this.props.skill6}</li>}
            {this.props.skill7 && <li>{this.props.skill7}</li>}
          </ul>
        </div>
      </div>
    )
  }
}
