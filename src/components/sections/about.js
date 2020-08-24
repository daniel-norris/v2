import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <section id="about" className="mt-6 flex flex-col">
      <h3 className="text-3xl sm:text-5xl font-bold mb-6">
        {frontmatter.title}
      </h3>
      <div className="text-base sm:text-lg font-light flex flex-col sm:flex sm:flex-row justify-between">
        <div className="sm:w-1/2 mr-4">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="order-first sm:order-none sm:h-full sm:w-1/2 mb-4 sm:mb-0 shadow-lg rounded-lg pb-6 overflow-hidden">
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  )
}

export default About
