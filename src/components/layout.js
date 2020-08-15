import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
    return (
        <div className="mx-auto container w-3/5 mt-6 " style={{ overflow: "hidden", display: "grid", minHeight: "100%", gridTemplateRows: "auto 1fr auto" }}>
            <Header />
            <main >{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;

