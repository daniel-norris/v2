import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

import { navLinks } from '../../config/index';

const Hero = ({ content }) => {

    const { frontmatter, body } = content[0].node;
    const { button } = navLinks;

    return (
        <section>
            <p className="uppercase font-bold text-lg">
                {frontmatter.intro}
            </p>
            <h1 className="font-bold text-6xl">
                {frontmatter.title}
            </h1>
            <MDXRenderer>{body}</MDXRenderer>

            <Link to={button.url}>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    {button.name}
                </button>
            </Link>
        </section>

    );
};

export default Hero;
