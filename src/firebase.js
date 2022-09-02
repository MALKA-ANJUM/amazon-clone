import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEvd2QXvIvxE-iYORFb-i0fF1WceVSeIA",
  authDomain: "clone-68117.firebaseapp.com",
  projectId: "clone-68117",
  storageBucket: "clone-68117.appspot.com",
  messagingSenderId: "686840175599",
  appId: "1:686840175599:web:cb17b2bc2803594058f41a",
  measurementId: "G-WJ64DJ00BD"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };