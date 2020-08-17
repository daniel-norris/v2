import React from "react"

import IconMoon from './moon';
import IconGithub from './github';
import IconLinkedin from './linkedin';
import IconMedium from './medium';
import IconDev from './dev';
import IconTwitter from './twitter';
import IconNpm from './npm';

import IconAws from './tech/aws';
import IconCss3 from './tech/css3';
import IconGatsby from './tech/gatsby';
import IconGulp from './tech/gulp';
import IconHtml5 from './tech/html5';
import IconJavascript from './tech/javascript';
import IconJest from './tech/jest';
import IconLaravel from './tech/laravel';
import IconLinux from './tech/linux';
import IconNode from './tech/node';
import IconPhp from './tech/php';
import IconReact from './tech/react';
import IconRedux from './tech/redux';
import IconSass from './tech/sass';
import IconTailwind from './tech/tailwind';
import IconVue from './tech/vue';

import IconArrowLeft from './arrow-left';
import IconArrowRight from './arrow-right';
import IconExternal from './external';

import IconLogo from './logo';

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
        case "arrow-left":
            return <IconArrowLeft color={color} />
        case "arrow-right":
            return <IconArrowRight color={color} />
        case "external":
            return <IconExternal color={color} />
        case "npm":
            return <IconNpm color={color} />
        case "logo":
            return <IconLogo color={color} />
        default:
            return null
    }
}

export default Icon;