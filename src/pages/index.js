import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import Hero from '../components/sections/hero';

const Home = ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
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
}
`