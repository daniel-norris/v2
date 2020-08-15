import React from "react"
import PropTypes from "prop-types"

const ArrowLeft = ({ color }) => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill={color}
            id="arrow-circle-left"
            className="w-8 h-8">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd">
            </path>
        </svg>
    )
}

ArrowLeft.propTypes = {
    color: PropTypes.string,
}

ArrowLeft.defaultProps = {
    color: "#000000",
}

export default ArrowLeft;
