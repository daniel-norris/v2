import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/layout';

export default ({ data }) => {

    const { frontmatter, body, timeToRead } = data.mdx;
    const { siteMetadata } = data.site;

    return (
        <Layout>
            <section className="mt-8" style={{ minHeight: "60vh" }}>
                <h1 className="text-5xl font-bold">{frontmatter.title}</h1>
                <div className="flex justify-between">
                    <p className="text-base text-gray-600">{siteMetadata.author} / {frontmatter.date}</p>
                    <p className="text-base text-gray-600">{timeToRead} min read</p>
                </div>
                <div className="mt-8 text-base font-light">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
            </section>


        </Layout>
    )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "Do MMM YYYY")
      }
    }
    site {
        siteMetadata {
          author
        }
    }
  }
`