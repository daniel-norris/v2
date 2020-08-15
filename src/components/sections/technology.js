import React from 'react';
import { technology } from '../../config/index';
import Icon from '../../components/icons/index';

const Technology = ({ content }) => {

    console.log(technology);

    const { frontmatter } = content[0].node;

    return (
        <section id="technology" className="mt-6 flex-col" style={{ height: "60vh" }}>
            <p className="text-lg font-light mb-6">{frontmatter.title}</p>

            <div className="grid grid-flow-col grid-cols-9 grid-rows-2 gap-4">
                {technology.map(({ name }, key) => {
                    return (
                        <Icon name={name} key={key} />
                    )
                })}
            </div>

        </section>
    );
};

export default Technology;

