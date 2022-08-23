import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCgwY_8x3Ox5kZh3NfPJXQ5AHUCxRR97Y",
  authDomain: "app-becb4.firebaseapp.com",
  databaseURL: "https://app-becb4-default-rtdb.firebaseio.com",
  projectId: "app-becb4",
  storageBucket: "app-becb4.appspot.com",
  messagingSenderId: "539100997199",
  appId: "1:539100997199:web:b73d70e2be1fa6df33ac3a",
  measurementId: "G-RRC3HY9ZHQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();
export { auth, provider };
export default db;
