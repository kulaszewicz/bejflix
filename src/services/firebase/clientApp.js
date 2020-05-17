import 'firebase/analytics'; // If you need it
import 'firebase/auth';
import firebase from 'firebase/app';

const clientCredentials = {
  apiKey: 'AIzaSyBT6Z7bkrRzghUfKJSjbwHPKE8FefC61-M',
  authDomain: 'bejflix.firebaseapp.com',
  databaseURL: 'https://bejflix.firebaseio.com',
  projectId: 'bejflix',
  storageBucket: 'bejflix.appspot.com',
  messagingSenderId: '965703537011',
  appId: '1:965703537011:web:20f336198f3cee3f16b506',
  measurementId: 'G-S58X13MGQQ',
};

// Check that `window` is in scope for the analytics module!
if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export const auth = firebase.auth();

export default firebase;

export const reduxFirebaseConfig = {
  useFirestoreForProfile: false,
  enableLogging: true,
};
