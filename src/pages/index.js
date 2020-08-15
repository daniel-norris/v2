import React from "react"
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Technology from "../components/sections/technology";
import Testimonial from "../components/sections/testimonial";
import Project from "../components/sections/project";

const Home = ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
            <About content={data.about.edges} />
            <Technology content={data.technology.edges} />
            <Testimonial />
            <Project />
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
}`