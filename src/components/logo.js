import React from 'react';

import { siteShortTitle } from '../config/index';

const Logo = () => {
    return (
        <h1 className="text-3xl font-bold uppercase">{siteShortTitle}</h1>
    );
};

export default Logo;