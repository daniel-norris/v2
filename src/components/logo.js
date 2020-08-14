import React from 'react';
import PropTypes from 'prop-types';

import { siteShortTitle } from '../config/index';

const Logo = () => {
    return (
        <h1 className="text-3xl font-bold uppercase">{siteShortTitle}</h1>
    );
};

Logo.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Logo;