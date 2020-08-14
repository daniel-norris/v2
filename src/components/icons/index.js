import React from "react"

import IconMoon from './moon';

const Icon = ({ name, color }) => {
    switch (name.toLowerCase()) {
        case "moon":
            return <IconMoon color={color} />
        default:
            return null
    }
}

export default Icon;