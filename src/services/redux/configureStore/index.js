import { getFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (initialState) => {
  const services = {
    getFirebase,
  };

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...[thunk.withExtraArgument(services)]))
  );
};

export default configureStore;
