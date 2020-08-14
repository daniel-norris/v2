import React from "react"

import IconMoon from './moon';
import IconGithub from './github';
import IconLinkedin from './linkedin';
import IconMedium from './medium';
import IconDev from './dev';
import IconTwitter from './twitter';

const Icon = ({ name, color }) => {
    switch (name.toLowerCase()) {
        case "moon":
            return <IconMoon color={color} />
        case "github":
            return <IconGithub color={color} />
        case "linkedin":
            return <IconLinkedin color={color} />
        case "dev":
            return <IconDev color={color} />
        case "medium":
            return <IconMedium color={color} />
        case "twitter":
            return <IconTwitter color={color} />
        default:
            return null
    }
}

export default Icon;