import React, { useState } from 'react';
import Icon from '../../components/icons/index';
import { motion } from 'framer-motion';

import { Link } from 'gatsby';

import { testimonials, socialMedia } from '../../config/index';

const Testimonial = () => {

    const [current, setCurrent] = useState(0);

    return (
        <section id="testimonial" className="mt-6 flex flex-col justify-center" style={{ height: "60vh" }}>
            {/* https://medium.com/modex/css-tricks-expanding-beyond-a-parent-div-10d7b7204c21 */}
            <div className="flex justify-center">
                <div>
                    <span className="text-6xl font-bold">
                        "<h1 className="text-3xl font-bold" style={{ display: "inline" }}>{testimonials[current].quote}</h1>"
                    </span>
                    <div className="flex items-center justify-between">
                        <p className="ml-8 mt-4 text-lg font-light">{testimonials[current].referee} - {testimonials[current].title}</p>
                        <a href={socialMedia[1].url}>
                            <div className="ml-8 text-xs flex" style={{ marginTop: "-30px", marginRight: "2rem" }}>

                                <span className="hover:underline">view on</span>
                                <div className="ml-1 w-4">
                                    <Icon name="linkedin" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex mt-6 ml-8 justify-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mr-4"
                    onClick={() => setCurrent(current > 0 ? current - 1 : current)}>
                    <Icon
                        name="arrow-left"
                        color="#4299e1"
                        className="mr-4"
                    />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrent(current < 2 ? current + 1 : current)}>
                    <Icon
                        name="arrow-right"
                        color="#4299e1"
                    />
                </motion.button>
            </div>
        </section >
    );
};

export default Testimonial;

