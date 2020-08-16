import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
    return (
        <MDXProvider
            components={{
                p: props => <p {...props} className="text-sm font-light mb-4" />,
                h1: props => <p {...props} className="text-2xl font-bold mb-8" />,
                h2: props => <p {...props} className="text-xl font-bold mb-8" />,
                h3: props => <p {...props} className="text-lg font-bold mb-8" />,
                strong: props => <p {...props} className="font-bold" style={{ display: "inline" }} />,
                a: props => <p {...props} className="font-bold text-blue-500 hover:underline cursor-pointer" style={{ display: "inline" }} />,
                ul: props => <p {...props} className="list-disc text-sm font-light ml-4 mb-4" />,
                blockquote: props => <p {...props} role="alert" className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 ml-4 mb-4" />,

            }}
        >

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

