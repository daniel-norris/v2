import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';


const Contact = ({ content }) => {

    const { frontmatter, body } = content[0].node;

    return (
        <section id="contact" className="mt-6 flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
            <div className="w-3/4 sm:w-1/2">
                <h3 className="text-3xl sm:text-5xl font-bold mb-6 text-center">{frontmatter.title}</h3>
                <div className=" font-light text-base sm:text-lg">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
            </div>
            <a href="mailto:dan.norris@hotmail.com">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-6">
                    Say Hello
                </button>
            </a>
        </section>
    );
};

export default Contact;

