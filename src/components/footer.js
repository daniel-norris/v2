import React from 'react';
import Logo from '../components/logo';
import Icon from '../components/icons/index';
import { Link } from 'gatsby';

import { socialMedia } from '../config/index';

const Footer = () => {
    return (
        <footer className="flex items-center justify-between">
            <Link to="/" >
                <Logo />
            </Link>
            <div className="flex">
                {socialMedia.map(({ name, url }, key) => {
                    return (
                        <a className="w-6 h-6" href={url} alt={`${name} icon`}>
                            <Icon name={name} />
                        </a>
                    )
                })}
            </div>
        </footer >
    );
};

export default Footer;