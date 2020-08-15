import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image";


const About = ({ content }) => {

    const { frontmatter, body } = content[0].node;

    return (
        <>
            <p>test</p>
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </>
    );
};

export default About;

