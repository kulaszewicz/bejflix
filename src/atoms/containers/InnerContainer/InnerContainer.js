import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useInnerContainerStyles from './styles';

export const propTypes = {
  height: PropTypes.number,
  leftChild: PropTypes.node,
  middleChild: PropTypes.node,
  rightChild: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  colorVariant: 'dark',
  height: 12,
};

/** If you do not know how to use it please check Header or Footer */

const InnerContainer = ({
  height,
  leftChild,
  middleChild,
  rightChild,
  className,
}) => {
  const classes = useInnerContainerStyles({ height });

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.leftChild}>{leftChild}</div>
      <div className={classes.middleChild}>{middleChild}</div>
      <div className={classes.rightChild}>{rightChild}</div>
    </div>
  );
};

InnerContainer.displayName = 'InnerContainer';
InnerContainer.propTypes = propTypes;
InnerContainer.defaultProps = defaultProps;

export default InnerContainer;
