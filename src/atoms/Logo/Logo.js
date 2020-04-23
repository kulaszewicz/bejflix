import React from 'react';
import useLogoStyles from './styles';

const Logo = () => {
    const classes = useLogoStyles();

    return (
        <img className={classes.logo} src={'/logo.svg'} alt="Bejflix logo" />
    );
};

Logo.displayName = 'Logo';

export default Logo;
