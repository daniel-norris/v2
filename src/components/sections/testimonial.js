import React, { useState } from 'react';
import Icon from '../../components/icons/index';
import { motion } from 'framer-motion';

import { testimonials } from '../../config/index';

const Testimonial = () => {

    const [reference, setReference] = useState(0);

    return (
        <section id="testimonial" className="mt-6 flex flex-col justify-center" style={{ height: "60vh" }}>
            {/* https://medium.com/modex/css-tricks-expanding-beyond-a-parent-div-10d7b7204c21 */}
            <div className="flex justify-center ">
                <div>
                    <span className="text-6xl font-bold">
                        "<h1 className="text-3xl font-bold" style={{ display: "inline" }}>{testimonials[reference].quote}</h1>"
                    </span>
                    <p className="ml-8 mt-4 text-lg font-light">{testimonials[reference].referee} - {testimonials[reference].title}</p>
                </div>
            </div>

            <div className="flex mt-6 ml-8 justify-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mr-4"
                    onClick={() => setReference(reference > 0 ? reference - 1 : reference)}>
                    <Icon
                        name="arrow-left"
                        color="#4299e1"
                        className="mr-4"
                    />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setReference(reference < 2 ? reference + 1 : reference)}>
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

