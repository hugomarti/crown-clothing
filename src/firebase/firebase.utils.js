import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDInt9GRjz4KXb7B11_3GKjyJgkUQllxOM",
    authDomain: "crown-db-1cbe0.firebaseapp.com",
    databaseURL: "https://crown-db-1cbe0.firebaseio.com",
    projectId: "crown-db-1cbe0",
    storageBucket: "crown-db-1cbe0.appspot.com",
    messagingSenderId: "299538126865",
    appId: "1:299538126865:web:9611e8bfb811db6c43f9b0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;