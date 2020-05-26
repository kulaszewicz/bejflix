import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import withAuthentication from '~/services/auth/session/withAuthentication';
import { loginUser, loginWithGithub } from '~/services/redux/actions';
import withRedux from '~/services/redux/withRedux';
import BaseValidator from '~/services/validation/base.validation';
import { isEmail, isEmpty } from '~/services/validation/validators';
import Login from '~/templates/Login';
import loginActionTypes from '../services/redux/authStates';

const LoginPage = withRedux(
  withAuthentication(() => {
    const dispatch = useDispatch();
    const Router = useRouter();
    const loginValidator = new BaseValidator();
    const authState = useSelector((state) => state.auth);

    const [formValues, setFormValues] = useState({
      email: '',
      password: '',
    });

    const [emailValidation, setEmailValidation] = useState({
      error: false,
      helpertext: '',
    });
    const [passwordValidation, setPasswordValidation] = useState({
      error: false,
      helpertext: '',
    });

    const [formValidation, setFormValidation] = useState({
      error: false,
      helpertext: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const onChange = ({ target }) => {
      if (target.type === 'email') {
        loginValidator.validateInput(target.value, setEmailValidation, [
          isEmpty,
          isEmail,
        ]);
      } else if (target.type === 'password') {
        loginValidator.validateInput(target.value, setPasswordValidation, [
          isEmpty,
        ]);
      }
      setFormValidation({
        error: false,
        helpertext: '',
      });
      setFormValues({
        ...formValues,
        [target.name]: target.value,
      });
    };

    const onSubmit = () => {
      if (
        loginValidator.validateForm([
          {
            value: formValues.email,
            stateSetter: setEmailValidation,
            validators: [isEmpty, isEmail],
          },
          {
            value: formValues.password,
            stateSetter: setPasswordValidation,
            validators: [isEmpty],
          },
        ])
      ) {
        setIsLoading(true);
        dispatch(loginUser(formValues.email.trim(), formValues.password));
      }
    };

    const onWithGithubClick = () => {
      dispatch(loginWithGithub());
    };

    useEffect(() => {
      const {
        NOT_CONFIGURED,
        FULLY_CONFIGURED,
        UNKNOWN,
        LOGGED_OUT,
      } = loginActionTypes;
      if (authState.currentState === FULLY_CONFIGURED) {
        Router.push('/');
      } else if (authState.currentState === NOT_CONFIGURED) {
        // TODO: Redirect to profile creation view
      } else if (
        authState.currentState !== UNKNOWN ||
        authState.currentState !== LOGGED_OUT
      ) {
        if (authState.authErrorMessage) {
          setFormValidation({
            error: true,
            helpertext: authState.authErrorMessage,
          });
        } else if (
          typeof authState.firebaseUser.emailVerified === 'boolean' &&
          authState.firebaseUser.emailVerified === false
        ) {
          setFormValidation({
            error: true,
            helpertext: 'notVerified',
          });
        }
        setFormValues((formValues) => ({ ...formValues, password: '' }));
        setIsLoading(false);
      }
    }, [authState, Router]);

    return (
      <Login
        loginEmail={formValues.email}
        loginPassword={formValues.password}
        onChange={onChange}
        onSubmit={onSubmit}
        validationProps={{
          email: emailValidation,
          password: passwordValidation,
          form: formValidation,
        }}
        isLoading={isLoading}
        onWithGithubClick={onWithGithubClick}
      />
    );
  })
);

LoginPage.displayName = 'LoginPage';
LoginPage.getInitialProps = async () => ({
  namespacesRequired: [],
});

export default LoginPage;
