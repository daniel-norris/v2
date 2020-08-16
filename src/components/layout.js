import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
    return (
        <MDXProvider components={{
            p: props => <p {...props} className="mb-4" />,
            a: props => <a {...props} className="font-bold text-blue-500 hover:underline" style={{ display: "inline" }} />,
        }}>
            <div className="mx-auto container w-3/5 mt-6 " style={{ display: "grid", minHeight: "100%", gridTemplateRows: "auto 1fr auto" }}>
                <Header />
                <main >{children}</main>
                <Footer />
            </div>
        </MDXProvider >
    );
};

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;

