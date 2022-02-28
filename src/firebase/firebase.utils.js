import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAFhs-wz14SxJ2a70PDPCuzhddHF6fMrYk",
    authDomain: "crwn-db-a2457.firebaseapp.com",
    projectId: "crwn-db-a2457",
    storageBucket: "crwn-db-a2457.appspot.com",
    messagingSenderId: "847393949749",
    appId: "1:847393949749:web:4ac7d1e6a75906f4a7497c",
    measurementId: "G-0TE6BCRJVG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // trigger Google pop-up for auth and sign-in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// TODO: add other auth options

export default firebase;