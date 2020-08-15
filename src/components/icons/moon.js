import React from 'react';
import PropTypes from 'prop-types';

const Moon = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill={color}>
            <path d="M22,21c-6.627,0-12-5.373-12-12c0-1.95,0.475-3.785,1.3-5.412C6.485,5.148,3,9.665,3,15c0,6.627,5.373,12,12,12 c4.678,0,8.72-2.682,10.7-6.588C24.534,20.79,23.292,21,22,21z">
            </path>
        </svg>
    );
};

Moon.propTypes = {
    color: PropTypes.string,
};

Moon.defaultProps = {
    color: "#000",
};

export default Moon;