import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

import { navLinks } from '../../config/index';

const Hero = ({ content }) => {

    const { frontmatter, body } = content[0].node;
    const { button } = navLinks;



    return (
        <section class="flex flex-col justify-center" style={{ height: "100vh" }}>
            <p className="uppercase font-bold text-lg text-blue-500">
                {frontmatter.intro}
            </p>
            <h1 className="font-bold text-6xl">
                {frontmatter.title}
            </h1>
            <div className="font-light text-2xl w-4/5">
                <MDXRenderer>{body}</MDXRenderer>
            </div>

            <Link to={button.url}>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-6">
                    {button.name}
                </button>
            </Link>

        </section>

    );
};

export default Hero;
