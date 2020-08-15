import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Blog = ({ data }) => {
    return (
        <Layout>
            {data.allMdx.nodes.map(({ excerpt, frontmatter }) => {
                return (
                    <>
                        <h1>{frontmatter.title}</h1>
                        <p>{frontmatter.date}</p>
                        <p>{excerpt}</p>
                    </>
                )
            })}
        </Layout>
    );
};

export default Blog;

export const query = graphql`
{
    allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}, frontmatter: {published: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD MMM YYYY")
        }
        id
        excerpt(pruneLength: 30)
      }
    }
}`