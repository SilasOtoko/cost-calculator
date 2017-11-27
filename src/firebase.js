import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD4iX3Wfak7sS4wdItJV1RqMb6K11bCVPw',
  authDomain: 'food-cost-calculator-b6896.firebaseapp.com',
  databaseURL: 'https://food-cost-calculator-b6896.firebaseio.com',
  projectId: 'food-cost-calculator-b6896',
  storageBucket: 'food-cost-calculator-b6896.appspot.com',
  messagingSenderId: '409011029026'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
