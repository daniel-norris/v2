import React from 'react';
import { technology } from '../../config/index';
import Icon from '../../components/icons/index';
import { motion } from 'framer-motion';

const Technology = ({ content }) => {

    const { frontmatter } = content[0].node;

    return (
        <section id="technology" className="mt-6 flex flex-col justify-center" style={{ minHeight: "60vh" }}>
            <p className="text-base sm:text-lg font-light mb-6">{frontmatter.title}</p>
            <div className="hidden sm:flex w-full h-full justify-center flex-wrap">
                {technology.map(({ name }, key) => {
                    return (
                        <motion.div
                            whileHover={{ scale: 1.1, fill: '#4299E1' }}
                            whileTap={{ scale: 0.9 }}
                            className="w-20 p-4 m-2 shadow-md rounded-lg">
                            <Icon name={name} key={key} />
                        </motion.div>
                    )
                })}
            </div>
            <div className="sm:hidden flex w-full h-full justify-center flex-wrap" style={{ fill: "#4299E1" }}>
                {technology.map(({ name }, key) => {
                    return (
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            className="w-20 p-4">
                            <Icon name={name} key={key} />
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
};

export default Technology;

