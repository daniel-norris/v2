import React from "react"

import IconMoon from './moon';

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
    switch (name.toLowerCase()) {
        case "moon":
            return <IconMoon color={color} />
        default:
            return null
    }
}

export default Icon;