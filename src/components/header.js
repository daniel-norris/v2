import React from 'react';
import { Link } from 'gatsby';

import Logo from '../components/logo';

import { navLinks } from '../config';

const Header = () => {

    const { menu } = navLinks;

    return (
        <header className="bg-gray-300 flex items-center justify-between">

            <Logo />
            <nav>
                {menu.map(({ name, url }, key) => {
                    return (
                        <Link className="text-sm ml-4" key={key} to={url}>
                            {name}
                        </Link>
                    )
                })}
            </nav>

        </header >
    );
};

export default Header;