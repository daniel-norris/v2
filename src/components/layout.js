import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';

const Layout = ({ children }) => {
    return (
        <div className="mx-auto container w-full min-h-full">
            <Header />
            <main>{children}</main>
            <footer className="bg-gray-300">
                footer
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;

