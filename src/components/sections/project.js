import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Icon from '../../components/icons/index';
import Img from "gatsby-image";

const Project = ({ content }) => {

    // const sectionDetails = content[3].node;
    const projects = content.slice(1, content.length);

    console.log(projects);

    return (
        <section id="project" className="mt-6 flex-col mb-8">

            {projects.map((project, key) => {

                const { body, frontmatter } = project.node;

                return (
                    <div className="py-8 flex" key={frontmatter.position}>
                        <div className="w-1/3">
                            <div className="text-xs font-bold uppercase text-blue-500">
                                {frontmatter.category}
                            </div>
                            <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
                            <div className=" font-light text-lg flex justify-between">
                                <div>
                                    <MDXRenderer>{body}</MDXRenderer>
                                    <div className="flex text-sm font-bold text-blue-500 ">
                                        {frontmatter.tags.map((tag, key) => {
                                            return (
                                                <p className="mr-2 mt-6">{tag}</p>
                                            )
                                        })}
                                    </div>
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
                        </div>
                        <div className="w-full py-6">
                            <Img
                                fluid={frontmatter.screenshot.childImageSharp.fluid}
                            />
                        </div>
                    </div >
                )
            })}
        </section >
    );
};

export default Project;

