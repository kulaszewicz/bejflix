import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '~/atoms/Button';
import VerticalContainer from '~/atoms/containers/VerticalContainer';
import Typography from '~/atoms/Typography';
import InputWithLabel from '~/molecules/InputWithLabel';
import useRegisterFormStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  loginValue: PropTypes.string,
  passwordValue: PropTypes.string,
  passwordAgainValue: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onRegister: PropTypes.func,
};

const defaultProps = {};

/** Short description of RegisterForm. */

const RegisterForm = ({
  className,
  style,
  loginValue,
  onChange,
  passwordValue,
  passwordAgainValue,
  onRegister,
  title,
}) => {
  const classes = useRegisterFormStyles();

  return (
    <div className={clsx(classes.root, className)} style={style}>
      <VerticalContainer gutter={10}>
        <Typography variant="h4" component={'h4'} className={classes.title}>
          {title}
        </Typography>
        <InputWithLabel
          type={'email'}
          name={'email'}
          value={loginValue}
          onChange={onChange}
          label={'email'}
          className={classes.input}
        />
        <InputWithLabel
          type={'password'}
          name={'password'}
          value={passwordValue}
          onChange={onChange}
          label={'password'}
          className={classes.input}
        />
        <InputWithLabel
          type={'password'}
          name={'passwordAgain'}
          value={passwordAgainValue}
          onChange={onChange}
          label={'password again'}
          className={classes.input}
        />
        <div className={classes.buttonContainer}>
          <Button onClick={onRegister} className={classes.button}>
            {'Register'}
          </Button>
        </div>
      </VerticalContainer>
    </div>
  );
};

RegisterForm.displayName = 'RegisterForm';
RegisterForm.propTypes = propTypes;
RegisterForm.defaultProps = defaultProps;

export default RegisterForm;
