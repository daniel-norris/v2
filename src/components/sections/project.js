import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Icon from '../../components/icons/index';
import Img from "gatsby-image";
import { motion } from 'framer-motion';

import { github } from '../../config/index';

const Project = ({ content }) => {

    // const sectionDetails = content[3].node;
    const projects = content.slice(1, content.length);

    return (
        <section id="project" className="mt-6 flex flex-col mb-8">
            <div className="pb-8">
                <h1 className="text-5xl font-bold">Projects</h1>
                <a href={github} >
                    <div className="text-xs flex items-center">
                        <p className="hover:underline">view all projects on</p>
                        <div className="ml-1 w-4">
                            <Icon name="github" />
                        </div>
                    </div>
                </a>
            </div >

            {
                projects.map((project, key) => {

                    const { body, frontmatter } = project.node;

                    return (

                        <div className={`py-8 ${frontmatter.position % 2 !== 0 ? "flex" : "flex flex-row-reverse"}`} key={frontmatter.position}>

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
                                            {frontmatter.npm ?
                                                <motion.a
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    href={frontmatter.npm} className="w-8 h-8 mr-4">
                                                    <Icon name="npm" color="gray" />
                                                </motion.a>
                                                : null}
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                href={frontmatter.github}
                                                className="w-8 h-8 mr-4">
                                                <Icon name="github" color="gray" />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                href={frontmatter.external}
                                                className="w-8 h-8">
                                                <Icon name="external" color="gray" />
                                            </motion.a>
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
                })
            }
        </section >

    );
};

export default Project;

