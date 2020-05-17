import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { CircularProgress as BaseCircularProgress } from '@material-ui/core';
import useCircularProgressStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {};

const CircularProgress = ({ className, ...rest }) => {
  const classes = useCircularProgressStyles();

  return (
    <BaseCircularProgress
      {...rest}
      classes={{
        root: clsx(classes.root, className),
      }}
    />
  );
};

CircularProgress.displayName = 'CircularProgress';
CircularProgress.propTypes = propTypes;
CircularProgress.defaultProps = defaultProps;

export default CircularProgress;
