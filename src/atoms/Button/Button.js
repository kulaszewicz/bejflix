import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button as BaseButton } from '@material-ui/core';
import useButtonStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const defaultProps = {
  variant: 'contained',
  color: 'primary',
};

/** Short description of Button. */

const Button = forwardRef(
  ({ className, style, variant, color, children, onClick, startIcon }, ref) => {
    const classes = useButtonStyles();

    return (
      <BaseButton
        className={clsx(classes.root, className)}
        ref={ref}
        style={style}
        variant={variant}
        color={color}
        onClick={onClick}
        startIcon={startIcon}
      >
        {children}
      </BaseButton>
    );
  }
);

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
