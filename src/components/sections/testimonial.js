import React from 'react';
import Quote from '../../components/quote';
import Icon from '../../components/icons/index';
import { Link } from 'gatsby';

const Testimonial = ({ content }) => {

    const { frontmatter } = content[0].node;

    return (
        <section id="testimonial" className="mt-6 flex-col" style={{ height: "60vh" }}>
            {/* https://medium.com/modex/css-tricks-expanding-beyond-a-parent-div-10d7b7204c21 */}
            <div className="grid grid-cols-3 gap-6" style={{ width: "300%", marginLeft: "-80%" }}>
                <Quote
                    text={frontmatter.firstTestimonial}
                    referee={frontmatter.firstReferee}
                    title={frontmatter.firstTitle} />
                <Quote
                    text={frontmatter.secondTestimonial}
                    referee={frontmatter.secondReferee}
                    title={frontmatter.secondTitle} />
                <Quote
                    text={frontmatter.thirdTestimonial}
                    referee={frontmatter.thirdReferee}
                    title={frontmatter.thirdTitle} />
            </div>

            <div className="flex mt-6 ml-8 justify-center">
                <Link to="/" className="mr-4">
                    <Icon name="arrow-left" color="#4299e1" />
                </Link>
                <Link to="/">
                    <Icon name="arrow-right" color="#4299e1" />
                </Link>
            </div>
        </section>
    );
};

export default Testimonial;

