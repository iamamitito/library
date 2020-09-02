import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: `${process.env.FIREBASE_KEY}`,
    authDomain: "iamamitito-library.firebaseapp.com",
    databaseURL: "https://iamamitito-library.firebaseio.com",
    projectId: "iamamitito-library",
    storageBucket: "iamamitito-library.appspot.com",
    messagingSenderId: "545859090063",
    appId: `${process.env.FIREBASE_ID}`,
    measurementId: "G-YY13SXK8M5"
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };