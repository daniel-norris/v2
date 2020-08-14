import React from "react"
import PropTypes from "prop-types"

const Vue = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>Vue.js icon</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" /></svg>
    )
}

Vue.propTypes = {
    color: PropTypes.string,
}

Vue.defaultProps = {
    color: "#000000",
}

export default Vue