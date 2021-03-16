import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCCkWp_LCHVutJ2NypKay2AfU5GMOTPnfI',
  authDomain: 'reee-d37f6.firebaseapp.com',
  projectId: 'reee-d37f6',
  storageBucket: 'reee-d37f6.appspot.com',
  messagingSenderId: '256864988663',
  appId: '1:256864988663:web:94110bb3bb4bdcf53dd2f2',
  measurementId: 'G-TXKL5SC5DS',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
