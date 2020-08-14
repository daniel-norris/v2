import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ text }) => {
    return (
        <h1 className="text-3xl font-bold uppercase">{text}</h1>
    );
};

Logo.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Logo;