import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react';
import React from 'react'
import Layout from '../components/layout';

export default ({ data }) => {

    const { frontmatter, body, timeToRead } = data.mdx;
    const { siteMetadata } = data.site;

    return (
        <MDXProvider
            components={{
                p: props => <p {...props} className="text-sm font-light mb-4" />,
                h1: props => <p {...props} className="text-2xl font-bold mb-8" />,
                h2: props => <p {...props} className="text-xl font-bold mb-8" />,
                h3: props => <p {...props} className="text-lg font-bold mb-8" />,
                strong: props => <p {...props} className="font-bold" style={{ display: "inline" }} />,
                a: props => <p {...props} className="font-bold text-blue-500 hover:underline cursor-pointer" style={{ display: "inline" }} />,
                ul: props => <p {...props} className="list-disc text-sm font-light ml-4 mb-4" />,
                blockquote: props => <p {...props} role="alert" className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 ml-4 mb-4" />,

            }}
        >
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
        </MDXProvider >
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