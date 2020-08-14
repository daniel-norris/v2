import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
    return (
        <div className="mx-auto container w-full min-h-full mt-6">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;

