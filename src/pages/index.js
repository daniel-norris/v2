import React from "react"
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Technology from "../components/sections/technology";
import Testimonial from "../components/sections/testimonial";
import Project from "../components/sections/project";
import Articles from "../components/sections/articles";

const Home = ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
            <About content={data.about.edges} />
            <Technology content={data.technology.edges} />
            <Testimonial />
            <Project content={data.project.edges} />
            <Articles content={data.articles.edges} />
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
{
  hero: allMdx(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
    edges {
      node {
        body
        frontmatter {
            intro
            title
        }
      }
    }
  }
  about: allMdx(filter: {fileAbsolutePath: {regex: "/about/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  technology: allMdx(filter: {fileAbsolutePath: {regex: "/technology/"}}) {
    edges {
      node {
        frontmatter {
            title
        }
      }
    }
  }
  project: allMdx(filter: {fileAbsolutePath: {regex: "/project/"}, frontmatter: {visible: {eq: "true"}}}, sort: {fields: [frontmatter___position], order: ASC}) {
    edges {
      node {
        body
        frontmatter {
          title
          visible
          tags
          position
          github
          external
          category
          screenshot {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  articles: allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "Do MMM")
          title
        }
        excerpt(pruneLength: 50)
        id
        body
        timeToRead
      }
    }
  }
}`