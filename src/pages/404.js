import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const fourOhFour = () => {
    return (
        <Layout>
            <section className="mt-6 flex flex-col items-center justify-center" style={{ minHeight: "80vh" }}>
                <h3 className="text-5xl font-bold mb-6">404</h3>
                <div className="font-light text-lg flex flex-col items-center">
                    <p className="mb-4">Woops. There's nothing here... </p>
                    <p>Why don't you check out one of my featured blog posts
                        <Link to="/#blog" className="ml-1 text-blue-500 font-bold hover:underline">
                            here
                        </Link>
                        .
                    </p>

                </div>
            </section>
        </Layout>
    );
};

export default fourOhFour;