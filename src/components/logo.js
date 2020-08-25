import React from 'react';
import { motion } from 'framer-motion';

import { siteShortTitle } from '../config/index';

const headerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    display: {
      opacity: 1,
      y: 0,
    },
  }


const Logo = () => {
    return (
        <motion.div
            whileHover={(animate) =>
                animate = {
                    // scale: [.9, 1, 1, 1, 1],
                    rotate: [0, -30, 10, -5, 0],
                    // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }
            }
            className="bg-blue-500 rounded text-white px-1 py-0" >
            <h1 className="text-3xl font-bold uppercase">{siteShortTitle}</h1>
        </motion.div >
    );
};

export default Logo;