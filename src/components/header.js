import React from 'react';
import { Link } from 'gatsby';

import Logo from '../components/logo';
import Icon from '../components/icons/index';

import { navLinks } from '../config';

const Header = () => {

    const { menu } = navLinks;

    return (
        <header className="flex items-center justify-between">

            <Link to="/">
                <Logo />
            </Link>
            <nav className="flex items-center">
                {menu.map(({ name, url }, key) => {
                    return (
                        <Link className="text-sm font-bold px-3 py-2 rounded hover:bg-gray-200" key={key} to={url}>
                            {name}
                        </Link>
                    )
                })}
                <button className="hover:bg-gray-400 bg-gray-200 rounded w-8 h-8 p-1">
                    <Icon name="moon" />
                </button>
            </nav>

        </header >
    );
};

export default Header;