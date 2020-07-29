import React from "react"
import { Link } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"

const BlogHeader = () => {
  return (
    <div className="flex justify-between w-full py-4">
      <div className="bg-main-navy rounded-tr-full rounded-br-full py-1">
        <Link
          to="/"
          className="flex bg-main-navy text-white pl-6 pr-2 py-1 rounded-tr-full rounded-br-full"
        >
          <h1 className="text-2xl">Dan Choiniere</h1>
        </Link>
      </div>
      <Link to="/" className="pr-6 lg:pr-40 flex">
        <FaArrowLeft className="self-center mr-2" />
        <p className="self-center">Return Home</p>
      </Link>
    </div>
  )
}

export default BlogHeader
