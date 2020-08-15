import React from 'react';
import { technology } from '../../config/index';

const Technology = ({ content }) => {

    console.log(technology);

    const { frontmatter } = content[0].node;

    return (
        <section id="technology" className="mt-6 flex-col" style={{ height: "60vh" }}>
            <p className="text-lg font-light mb-6">{frontmatter.title}</p>



        </section>
    );
};

export default Technology;

