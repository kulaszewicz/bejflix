import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Input, { propTypes as InputProptypes } from '~/atoms/Input';
import Typography from '~/atoms/Typography';
import useInputWithLabelStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  ...InputProptypes,
};

const defaultProps = {};

/** Short description of InputWithLabel. */

const InputWithLabel = ({
  className,
  style,
  type,
  name,
  value,
  onChange,
  label,
}) => {
  const classes = useInputWithLabelStyles();

  return (
    <div className={clsx(classes.root, className)} style={style}>
      <Typography className={classes.label} variant={'body1'} component={'p'}>
        {label}
      </Typography>
      <Input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

InputWithLabel.displayName = 'InputWithLabel';
InputWithLabel.propTypes = propTypes;
InputWithLabel.defaultProps = defaultProps;

export default InputWithLabel;
