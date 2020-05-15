import React from 'react';
import Login from '~/templates/Login';

const LoginPage = () => {
  return <Login />;
};

LoginPage.displayName = 'LoginPage';
LoginPage.getInitialProps = async () => ({
  namespacesRequired: [],
});

export default LoginPage;
