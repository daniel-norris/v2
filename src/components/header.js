import React from 'react';
import { Link } from 'gatsby';

import Logo from '../components/logo';
import Icon from '../components/icons/index';

import { navLinks, siteShortTitle } from '../config';

const Header = () => {

    const { menu } = navLinks;

    return (
        <header className="flex items-center justify-between">

            <Logo text={siteShortTitle} />
            <nav>
                {menu.map(({ name, url }, key) => {
                    return (
                        <Link className="text-sm font-bold p-3 rounded hover:bg-gray-200" key={key} to={url}>
                            {name}
                        </Link>
                    )
                })}

            </nav>

        </header >
    );
};

export default Header;