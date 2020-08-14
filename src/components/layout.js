import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            <header>
                header
            </header>
            <main>{children}</main>
            <footer>
                footer
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;

