import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { GitHub } from '@material-ui/icons';
import Button from '~/atoms/Button';
import VerticalContainer from '~/atoms/containers/VerticalContainer';
import Typography from '~/atoms/Typography';
import InputWithLabel from '~/molecules/InputWithLabel';
import useLoginFormStyles from './styles';

export const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  loginValue: PropTypes.string,
  passwordValue: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onSignInClick: PropTypes.func,
  onWithGithubClick: PropTypes.func,
};

const defaultProps = {};

/** Short description of LoginForm. */

const LoginForm = ({
  className,
  style,
  title,
  loginValue,
  onChange,
  passwordValue,
  onSignInClick,
  onWithGithubClick,
}) => {
  const classes = useLoginFormStyles();

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
        <div className={classes.buttonContainer}>
          <Button
            startIcon={<GitHub />}
            color="secondary"
            onClick={onWithGithubClick}
            className={classes.button}
          >
            {'With Github'}
          </Button>
          <Button onClick={onSignInClick} className={classes.button}>
            {'Sign in'}
          </Button>
        </div>
      </VerticalContainer>
    </div>
  );
};

LoginForm.displayName = 'LoginForm';
LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
