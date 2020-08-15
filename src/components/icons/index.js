import React from "react"

import IconMoon from './moon';
import IconGithub from './github';
import IconLinkedin from './linkedin';
import IconMedium from './medium';
import IconDev from './dev';
import IconTwitter from './twitter';
import IconAws from './aws';
import IconCss3 from './css3';
import IconGatsby from './gatsby';
import IconGulp from './gulp';
import IconHtml5 from './html5';
import IconJavascript from './javascript';
import IconJest from './jest';
import IconLaravel from './laravel';
import IconLinux from './linux';
import IconNode from './node';
import IconPhp from './php';
import IconReact from './react';
import IconRedux from './redux';
import IconSass from './sass';
import IconTailwind from './tailwind';
import IconVue from './vue';

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
        case "aws":
            return <IconAws color={color} />
        case "css3":
            return <IconCss3 color={color} />
        case "gatsby":
            return <IconGatsby color={color} />
        case "gulp":
            return <IconGulp color={color} />
        case "html5":
            return <IconHtml5 color={color} />
        case "javascript":
            return <IconJavascript color={color} />
        case "jest":
            return <IconJest color={color} />
        case "laravel":
            return <IconLaravel color={color} />
        case "linux":
            return <IconLinux color={color} />
        case "node":
            return <IconNode color={color} />
        case "php":
            return <IconPhp color={color} />
        case "react":
            return <IconReact color={color} />
        case "redux":
            return <IconRedux color={color} />
        case "sass":
            return <IconSass color={color} />
        case "tailwind":
            return <IconTailwind color={color} />
        case "vue":
            return <IconVue color={color} />
        default:
            return null
    }
}

export default Icon;