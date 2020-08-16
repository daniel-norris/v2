import React from 'react';
import { Link } from 'gatsby';

const Posts = ({ content }) => {

    return (

        <section id="blog" className="mt-6 flex-col">
            <h3 className="text-5xl font-bold mb-6">All Posts</h3>


            {content.map((posts, key) => {

                const { excerpt, id, body, frontmatter, timeToRead, fields } = posts.node;

                return (
                    <Link to={fields.slug}>
                        <section className="flex items-center justify-between mt-8" key={id} >
                            <div>
                                <p className="text-sm font-bold text-gray-500">{frontmatter.date}</p>
                                <h1 className="text-2xl font-bold">{frontmatter.title}</h1>
                                <p className="text-lg font-light">{excerpt}</p>
                            </div>
                            <p className="text-sm font-bold text-gray-500">{timeToRead} min read</p>
                        </section>
                    </Link>
                )
            })}
        </section>
    )
}

export default Posts;