import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChLxawlYs-NFM2xgtV_tpeZT7RV9aFUPs",
  authDomain: "crwn-db-807d5.firebaseapp.com",
  databaseURL: "https://crwn-db-807d5.firebaseio.com",
  projectId: "crwn-db-807d5",
  storageBucket: "crwn-db-807d5.appspot.com",
  messagingSenderId: "384940434572",
  appId: "1:384940434572:web:09acab4ee951902276c7a9",
  measurementId: "G-CYC8FKBYB8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;