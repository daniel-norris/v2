import React from 'react';
import Logo from '../components/logo';
import Icon from '../components/icons/index';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import { socialMedia } from '../config/index';

const Footer = () => {
    return (
        <footer className="flex items-center justify-between py-8 border-t-2 border-gray-200 mt-8">
            <Link to="/" aria-label="home">
                <Logo />
            </Link>
            <div className="flex sm:w-1/4 sm:justify-between">
                {socialMedia.map(({ name, url }, key) => {
                    return (
                        <motion.a
                            whileHover={{ scale: 1.1, fill: "#4299E1" }}
                            whileTap={{ scale: 0.9 }}
                            className="ml-6 sm:ml-0 w-6 h-6" href={url} key={key} alt={`${name} icon`}>
                            <Icon name={name} />
                        </motion.a>
                    )
                })}
            </div>
        </footer >
    );
};

export default Footer;