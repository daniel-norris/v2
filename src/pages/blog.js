import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import FeaturedPosts from '../components/sections/featuredPosts';
import Posts from '../components/sections/posts';

const Blog = ({ data }) => {

    return (


        // <section className="flex items-center justify-between mt-8" key={id} >
        //     <div>
        //         <p className="text-sm font-bold text-gray-500">{frontmatter.date}</p>
        //         <h1 className="text-2xl font-bold">{frontmatter.title

        // <section id="blog" className="mt-6 flex-col">
        // <h3 className="text-5xl font-bold mb-6">Featured Posts</h3>

        <Layout>
            <section className="mt-6">
                <h1 className="text-5xl font-bold">Blog</h1>
                <p className="font-light text-lg">I've just started blogging again but I'm aiming to make this a more regularly occurence. So join in and leave a comment if you like what you're reading. I'll be blogging about my journey as a Junior Developer and web development, in particular about Laravel, Vue and React. </p>
            </section>
            <FeaturedPosts cta={false} content={data.featured.edges} />
            <Posts content={data.posts.edges} />
        </Layout>
    );
};

export default Blog;

export const query = graphql`
{
    featured: allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}, frontmatter: {published: {eq: true}, featured: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "Do MMM")
              title
            }
            excerpt(pruneLength: 100)
            id
            body
            timeToRead
          }
        }
      }

       posts: allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}, frontmatter: {published: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
          edges {
            node {
              fields {
                slug
              }
              body
              timeToRead
              frontmatter {
                title
                date(formatString: "Do MMM")
              }
              id
              excerpt(pruneLength: 100)
            }
          }
        }


}`