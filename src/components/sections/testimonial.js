import React, { useState } from "react"
import Icon from "../../components/icons/index"
import { motion } from "framer-motion"

import { Link } from "gatsby"

import { testimonials, socialMedia } from "../../config/index"

const Testimonial = () => {
  const [current, setCurrent] = useState(1)

  return (
    <div className="h-screen flex flex-col justify-center">
      <section
        id="testimonial"
        className="mt-6 flex flex-col justify-center rounded-lg shadow-lg px-4 py-8"
      >
        <div className="flex justify-center">
          <div>
            <span className="text-2xl sm:text-6xl font-bold">
              "
              <h1
                className="text-lg sm:text-3xl font-bold"
                style={{ display: "inline" }}
              >
                {testimonials[current].quote}
              </h1>
              "
            </span>
            <div className="mt-4 flex items-center justify-between">
              <p className="sm:ml-8 text-sm sm:text-lg font-light">
                {testimonials[current].referee} - {testimonials[current].title}
              </p>
              <a href={socialMedia[1].url}>
                <div className="sm:ml-8 text-xs flex sm:mr-8">
                  <span className="hover:underline">view on</span>
                  <div className="ml-1 w-4">
                    <Icon name="linkedin" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="flex mt-6 sm:ml-8 justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mr-4"
          onClick={() => setCurrent(current > 0 ? current - 1 : current)}
        >
          <Icon name="arrow-left" color="#4299e1" className="mr-4" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrent(current < 2 ? current + 1 : current)}
        >
          <Icon name="arrow-right" color="#4299e1" />
        </motion.button>
      </div>
    </div>
  )
}

export default Testimonial
