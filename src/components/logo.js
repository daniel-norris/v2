import React from 'react';

import { siteShortTitle } from '../config/index';

const Logo = () => {
    return (
        <div className="bg-blue-500 rounded text-white px-1 py-0">
            <h1 className="text-3xl font-bold uppercase">{siteShortTitle}</h1>
        </div>
    );
};

export default Logo;