import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as baseIcons from './baseIcons';
import useIconStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  colorVariant: PropTypes.oneOf(['bright', 'dark', 'error', 'success']),
  isFa: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

const defaultProps = {
  colorVariant: 'dark',
  isFa: false,
  size: 2,
};

const Icon = ({ className, colorVariant, isFa, name, size }) => {
  const classes = useIconStyles({ colorVariant, size });

  if (isFa) {
    return <i className={clsx(classes.root, 'fa', `fa-${name}`, className)} />;
  } else {
    const BaseIcon = baseIcons[name];
    return <BaseIcon className={clsx(classes.root, className)} />;
  }
};

Icon.displayName = 'Icon';
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
