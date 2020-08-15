import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Dump from '../components/dump';


const Blog = ({ data }) => {
    return (
        <Layout>
            <Dump data={data} />
            {data.allMdx.nodes.map(({ excerpt, frontmatter, id, fields }) => {
                return (
                    <div key={id}>
                        <Link to={fields.slug}>
                            <h1>{frontmatter.title}</h1>
                            <p>{frontmatter.date}</p>
                            <p>{excerpt}</p>
                        </Link>
                    </div>
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
        fields {
            slug
        }
      }
    }
}`