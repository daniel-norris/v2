import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby';

import Hero from '../components/sections/hero';

const Home = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export default Home;