import React from 'react';
import PropTypes from 'prop-types';
import useCenteringContainerStyles from './styles';

export const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

/** Short description of CenteringContainer. */

const CenteringContainer = ({ children, style }) => {
  const classes = useCenteringContainerStyles();

  return (
    <div className={classes.root} style={style}>
      {children}
    </div>
  );
};

CenteringContainer.displayName = 'CenteringContainer';
CenteringContainer.propTypes = propTypes;

export default CenteringContainer;
