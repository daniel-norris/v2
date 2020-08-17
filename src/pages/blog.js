import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import FeaturedPosts from '../components/sections/featuredPosts';
import Posts from '../components/sections/posts';

import { motion } from 'framer-motion';

const Blog = ({ data }) => {

    const blogVariants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        display: {
            opacity: 1,
            x: 0,
        }
    }

    return (

        <Layout>
            <motion.section className="mt-6 flex flex-col justify-center" style={{ minHeight: "60vh" }}
                variants={blogVariants}
                initial="hidden"
                animate="display"
                transition={{ delay: 0.6 }}>
                <h1 className="text-5xl font-bold mb-6">Blog</h1>
                <p className="font-light text-lg">I've just started blogging again but I'm aiming to make this a more regular occurence. I'll be blogging about my journey as a Junior Developer and web development, in particular about <a className="text-blue-500 font-bold hover:underline" href="https://laravel.com/">Laravel</a>, <a className="text-blue-500 font-bold hover:underline" href="https://vuejs.org/">Vue</a> and <a className="text-blue-500 font-bold hover:underline" href="https://reactjs.org/">React</a>. </p>
            </motion.section>
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