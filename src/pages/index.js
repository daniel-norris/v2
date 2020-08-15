import React from "react"
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';

const Home = ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
            <About content={data.about.edges} />
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
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}`