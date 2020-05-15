import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useInputStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

const defaultProps = {};

/** Short description of Input. */

const Input = forwardRef(
  ({ className, style, type, name, value, onChange }, ref) => {
    const classes = useInputStyles();

    return (
      <input
        style={style}
        ref={ref}
        className={clsx(classes.root, className)}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    );
  }
);

Input.displayName = 'Input';
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
