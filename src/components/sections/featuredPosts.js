import React from "react"
import { Link } from "gatsby"

const FeaturedPosts = ({ content, cta = true }) => {
  return (
    <section id="blog" className="mt-6 h-screen flex flex-col justify-center">
      <h3 className="text-3xl sm:text-5xl font-bold mb-6">Featured Posts</h3>

      {content.map((featured, key) => {
        const {
          excerpt,
          id,
          body,
          frontmatter,
          timeToRead,
          fields,
        } = featured.node

        return (
          <Link to={fields.slug}>
            <section
              className="flex items-center justify-between mt-8"
              key={id}
            >
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-500">
                  {frontmatter.date}
                  <span className="sm:hidden">
                    {" "}
                    &bull; {timeToRead} min read
                  </span>
                </p>
                <h1 className="text-lg sm:text-2xl font-bold">
                  {frontmatter.title}
                </h1>
                <p className="text-sm sm:text-lg font-light">{excerpt}</p>
              </div>
              <p className="hidden sm:block text-sm font-bold text-gray-500">
                {timeToRead} min read
              </p>
            </section>
          </Link>
        )
      })}
      {!cta ? null : (
        <Link to="/blog" className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-6">
            See More
          </button>
        </Link>
      )}
    </section>
  )
}

export default FeaturedPosts
