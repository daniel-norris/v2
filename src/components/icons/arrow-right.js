import React from "react"
import PropTypes from "prop-types"

const ArrowRight = ({ color }) => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill={color}
            id="arrow-circle-right"
            class="w-8 h-8 text-gray-100">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd">
            </path>
        </svg>
    )
}

ArrowRight.propTypes = {
    color: PropTypes.string,
}

ArrowRight.defaultProps = {
    color: "#000000",
}

export default ArrowRight;
