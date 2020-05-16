import React from 'react';
import withRedux from '~/services/redux/withRedux';
import Login from '~/templates/Login';

const LoginPage = withRedux(() => {
  return <Login />;
});

LoginPage.displayName = 'LoginPage';
LoginPage.getInitialProps = async () => ({
  namespacesRequired: [],
});

export default LoginPage;
