import React from 'react';
import PropTypes from 'prop-types';
import useVerticalContainerStyles from './styles';

export const propTypes = {
  children: PropTypes.node.isRequired,
  gutter: PropTypes.number,
};

const defaultProps = {
  gutter: 0,
};

/** Short description of VerticalContainer. */

const VerticalContainer = ({ children, gutter }) => {
  const classes = useVerticalContainerStyles({ gutter });
  return <div className={classes.container}>{children}</div>;
};

VerticalContainer.displayName = 'VerticalContainer';
VerticalContainer.propTypes = propTypes;
VerticalContainer.defaultProps = defaultProps;

export default VerticalContainer;
