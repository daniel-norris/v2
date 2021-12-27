import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, referee, title }) => {
    return (
        <div>
            <span className="text-6xl font-bold">
                "<h1 className="text-3xl font-bold" style={{ display: "inline" }}>{text}</h1>"
            </span>
            <p className="ml-8 mt-4 text-lg font-light">{referee} - {title}</p>
        </div>
    );
};

export default Quote;

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    referee: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}