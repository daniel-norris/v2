import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Icon from '../../components/icons/index';

const Project = ({ content }) => {

    // const sectionDetails = content[3].node;
    const projects = content.slice(1, content.length);

    console.log(projects);

    return (
        <section id="project" className="mt-6 flex-col mb-8">

            {projects.map((project, key) => {

                const { body, frontmatter } = project.node;

                return (
                    <div className="py-8" key={frontmatter.position}>
                        <div className="text-xs font-bold mt-8 uppercase text-blue-500">
                            {frontmatter.category}
                        </div>
                        <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
                        <div className=" font-light text-lg flex justify-between">
                            <div className="w-1/2">
                                <MDXRenderer>{body}</MDXRenderer>
                                <div className="flex mt-4">
                                    <a href={frontmatter.github} className="w-8 h-8 mr-4">
                                        <Icon name="github" />
                                    </a>
                                    <a href={frontmatter.external} className="w-8 h-8">
                                        <Icon name="external" />
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div >
                )
            })}
        </section >
    );
};

export default Project;

