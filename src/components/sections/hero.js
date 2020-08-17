import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

import { navLinks } from '../../config/index';

import { motion } from 'framer-motion';

const Hero = ({ content }) => {

    const { frontmatter, body } = content[0].node;
    const { button } = navLinks;

    const titleVariants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        display: {
            opacity: 1,
            x: 0,
        }
    }

    const introVariants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        display: {
            opacity: 1,
            x: 0,
        }
    }

    const bodyVariants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        display: {
            opacity: 1,
            x: 0,
        }
    }

    const buttonVariants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        display: {
            opacity: 1,
            x: 0,
        }
    }

    return (
        <section class="flex flex-col justify-center" style={{ height: "100vh" }}>
            <motion.p className="uppercase font-bold text-lg text-blue-500"
                variants={introVariants}
                initial="hidden"
                animate="display"
                transition={{ delay: 0.6 }}>
                {frontmatter.intro}
            </motion.p>
            <motion.h1 className="font-bold text-6xl"
                variants={titleVariants}
                initial="hidden"
                animate="display"
                transition={{ delay: 0.8 }}>
                {frontmatter.title}
            </motion.h1>
            <motion.div className="font-light text-2xl w-4/5"
                variants={bodyVariants}
                initial="hidden"
                animate="display"
                transition={{ delay: 1 }}>
                <MDXRenderer>{body}</MDXRenderer>
            </motion.div>

            <Link to={button.url}>
                <motion.button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-6"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="display"
                    transition={{ delay: 1.2 }}>
                    {button.name}
                </motion.button>
            </Link>

        </section>

    );
};

export default Hero;
