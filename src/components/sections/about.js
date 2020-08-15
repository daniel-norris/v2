import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from "gatsby-image";


const About = ({ content }) => {

    const { frontmatter, body } = content[0].node;

    return (
        <section id="about" className="mt-6 flex-col" style={{ height: "60vh" }}>
            <h3 className="text-5xl font-bold mb-6">{frontmatter.title}</h3>
            <div className=" font-light text-lg flex justify-between">
                <div className="w-1/2">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
                <div className="w-1/4">
                    <Img fluid={frontmatter.image.childImageSharp.fluid} />
                </div>
            </div>
        </section>
    );
};

export default About;

