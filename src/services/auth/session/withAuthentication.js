import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { auth } from '~/services/firebase/clientApp';
import { setAuthState } from '~/services/redux/actions';
import authStates from '~/services/redux/authStates';

// HOC for pages which you can't access while you're logged in
const withAuthentication = (Component) => (props) => {
  const [canAccess, setCanAccess] = useState(false);
  const dispatch = useDispatch();
  const Router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        dispatch(setAuthState(authStates.UNKNOWN));
        setCanAccess(true);
      } else if (authUser) {
        dispatch(setAuthState(authStates.FULLY_CONFIGURED));
        Router.push('/');
      }
    });
  }, [Router, dispatch]);

  return <>{canAccess && <Component {...props} />}</>;
};

export default withAuthentication;
