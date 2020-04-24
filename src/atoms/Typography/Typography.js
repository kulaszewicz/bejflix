import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Typography as BaseTypography } from '@material-ui/core';
import useTypographyStyles from './styles';

export const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']),
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
  ]),
};

const defaultProps = { variant: 'body2' };

const Typography = ({ children, className, component, variant }) => {
  const classes = useTypographyStyles();

  return (
    <BaseTypography
      className={clsx(classes.root, className)}
      component={component}
      variant={variant}
    >
      {children}
    </BaseTypography>
  );
};

Typography.displayName = 'Typography';
Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
