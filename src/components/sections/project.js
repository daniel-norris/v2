import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Icon from '../../components/icons/index';
import Img from "gatsby-image";
import { motion } from 'framer-motion';
import { github } from '../../config/index';

const Project = ({ content }) => {

    // const sectionDetails = content[3].node;
    const projects = content.slice(0, content.length);

    return (
        <section id="project" className="mt-6 flex flex-col mb-8">
            <div className="pb-8">
                <h1 className="text-3xl sm:text-5xl font-bold">Projects</h1>
                <a href={github} >
                    <div className="text-xs flex items-center">
                        <p className="hover:underline">view all projects on</p>
                        <div className="ml-1 w-4">
                            <Icon name="github" />
                        </div>
                    </div>
                </a>
                <p className='mt-6 mb-10 font-light text-base'>It's worthwhile noting featured projects listed here were originally built either during or immediately after the bootcamp I completed in Aug, 2020. They're kept here for posterity sake.</p>
            </div >

            {
                projects.map((project, key) => {

                    const { body, frontmatter } = project.node;

                    return (
                        <>
                            <div className={`${frontmatter.position % 2 !== 0 ? "sm:flex sm:flex-row" : "sm:flex sm:flex-row-reverse"}`}>
                                <div>
                                    <div className="text-xs font-bold uppercase text-blue-500">
                                        {frontmatter.category}
                                    </div>
                                    <h3 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-0">{frontmatter.title}</h3>
                                </div>

                            </div>

                           
                            <div className={`py-8 flex-col flex ${frontmatter.position % 2 !== 0 ? "sm:flex sm:flex-row" : "sm:flex sm:flex-row-reverse"}`} key={frontmatter.position}>

                                <div className="order-3 sm:order-none flex flex-col sm:w-1/3">
                                    <div className="font-light text-base sm:text-lg flex justify-between">
                                        <div>
                                            <MDXRenderer>{body}</MDXRenderer>
                                            <div className={`px-1 justify-end ${frontmatter.position % 2 !== 0 ? "sm:justify-start" : "sm:justify-end"} flex mt-4`}>
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
                                                {frontmatter.external ?
                                                    <motion.a
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        href={frontmatter.external}
                                                        className="w-8 h-8">
                                                        <Icon name="external" color="gray" />
                                                    </motion.a>
                                                : null }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-2 sm:order-none w-full pb-6 ">
                                    <Img
                                        fluid={frontmatter.screenshot.childImageSharp.fluid}
                                    />
                                     <div className="p-4 text-sm font-bold text-blue-500">
                                        <ul className='grid grid-cols-2 px-12'>
                                            {frontmatter.tags.map((tag, key) => {
                                                return (
                                                    <li className='list-disc'>{tag}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div >
                        </>
                    )
                })
            }
        </section >
    );
};

export default Project;

