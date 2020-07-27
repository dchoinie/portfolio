import React from "react"
import { Link } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"

const BlogHeader = () => {
  return (
    <div className="flex justify-between w-full py-4">
      <div className="bg-main-navy rounded-tr-full rounded-br-full py-1">
        <Link
          to="/"
          className="text-2xl lowercase text-white tracking-wide pl-40 pr-4"
        >
          Dan Choiniere
        </Link>
      </div>
      <Link to="/" className="pr-40 flex">
        <FaArrowLeft className="self-center mr-2" />
        <p className="self-center">Return Home</p>
      </Link>
    </div>
  )
}

export default BlogHeader
