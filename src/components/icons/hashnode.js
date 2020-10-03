import React from "react"
import PropTypes from "prop-types"

const Hashnode = ({ color }) => {
    return (
        <svg class="w-5 h-5 fill-current" viewBox="0 0 200 200" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z">
            </path>
        </svg>
    )
}

Hashnode.propTypes = {
    color: PropTypes.string,
}

Hashnode.defaultProps = {
    color: "#000000",
}

export default Hashnode
