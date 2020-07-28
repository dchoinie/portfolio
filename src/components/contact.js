import React from "react"
import { FiSend } from "react-icons/fi"

const Contact = () => {
  return (
    <div id="contact" className="mt-24">
      <div className="bg-white h-screen">
        <div className="flex justify-center h-full w-full">
          <div className="w-full self-center px-40">
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-main-navy text-5xl">contact</h2>
              <p className="text-gray-600 text-xl text-center max-w-4xl">
                Let's get in touch! If you want to talk about a project, have a
                spot on your team I might be a fit for, or just want to say hi,
                I'd love to hear from you.
              </p>
            </div>
            <div className="flex w-full">
              <form
                action=""
                className="flex flex-col w-full text-lg text-main-navy"
              >
                <div className="flex gap-6 mb-3">
                  <label htmlFor="first" className="hidden"></label>
                  <input
                    type="text"
                    name="first"
                    id="first"
                    placeholder="First Name"
                    className="w-full shadow-md rounded-md p-4 border border-gray-300 focus:outline-none focus:border focus:border-main-navy"
                    required
                  />
                  <label htmlFor="last" className="hidden"></label>
                  <input
                    type="text"
                    name="last"
                    id="last"
                    placeholder="Last Name"
                    className="w-full shadow-md rounded-md p-4 border border-gray-300 focus:outline-none focus:border focus:border-main-navy"
                    required
                  />
                </div>
                <div className="flex gap-6 mb-3">
                  <label htmlFor="email" className="hidden"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full shadow-md rounded-md p-4 border border-gray-300 focus:outline-none focus:border focus:border-main-navy"
                    required
                  />
                  <label htmlFor="phone" className="hidden"></label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    className="w-full shadow-md rounded-md p-4 border border-gray-300 focus:outline-none focus:border focus:border-main-navy"
                  />
                </div>
                <label htmlFor="message" className="hidden"></label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="my-2 shadow-md rounded-md p-4 border border-gray-300 focus:outline-none focus:border focus:border-main-navy"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="flex self-start bg-main-navy my-2 text-white lowercase py-2 px-8 rounded-md focus:outline-none tracking-wider hover:bg-blue-800"
                >
                  Send <FiSend className="self-center ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
