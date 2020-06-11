import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { auth } from '~/services/firebase/clientApp';
import { setAuthState } from '~/services/redux/actions';
import authStates from '~/services/redux/authStates';

// HOC for pages which you can't access while you're not logged in
const withAuthorization = (Component) => (props) => {
  const [canAccess, setCanAccess] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const Router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        Router.push('/login');
        dispatch(setAuthState(authStates.UNKNOWN));
      } else {
        setUser({ ...authUser });
        dispatch(setAuthState(authStates.FULLY_CONFIGURED));
        setCanAccess(true);
      }
    });
  }, [Router, dispatch]);

  return <>{canAccess && <Component {...props} authUser={user} />}</>;
};

export default withAuthorization;
