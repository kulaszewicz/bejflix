import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useVerticalLineStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {};

/** Short description of VerticalLine. */

const VerticalLine = forwardRef(({ className, style }, ref) => {
  const classes = useVerticalLineStyles();

  return (
    <div className={clsx(classes.root, className)} ref={ref} style={style} />
  );
});

VerticalLine.displayName = 'VerticalLine';
VerticalLine.propTypes = propTypes;
VerticalLine.defaultProps = defaultProps;

export default VerticalLine;
