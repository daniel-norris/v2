import React from 'react';
import { technology } from '../../config/index';
import Icon from '../../components/icons/index';

const Technology = ({ content }) => {

    const { frontmatter } = content[0].node;

    return (
        <section id="technology" className="mt-6 flex flex-col justify-center" style={{ minHeight: "60vh" }}>
            <p className="text-lg font-light mb-6">{frontmatter.title}</p>
            <div className="w-full h-full flex flex-wrap">
                {technology.map(({ name }, key) => {
                    return (
                        <div className="w-20 p-4">
                            <Icon name={name} key={key} />
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Technology;

