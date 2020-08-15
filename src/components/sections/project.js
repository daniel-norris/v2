import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const Project = ({ content }) => {

    const { frontmatter, body } = content[0].node;

    const projects = content.slice(1, content.length);

    console.log(frontmatter);
    console.log(body);

    return (
        <section id="project" className="mt-6 flex-col" style={{ height: "60vh" }}>

            <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
            <div className=" font-light text-lg flex justify-between">
                <div className="w-1/2">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>

            </div>
        </section>
    );
};

export default Project;

