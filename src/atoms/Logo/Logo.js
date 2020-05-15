import React from 'react';
import clsx from 'clsx';
import useLogoStyles from './styles';

const Logo = ({ src, className }) => {
  const classes = useLogoStyles();

  return (
    <img
      className={clsx(classes.logo, className)}
      src={src || '/logo.svg'}
      alt="Bejflix logo"
    />
  );
};

Logo.displayName = 'Logo';

export default Logo;
