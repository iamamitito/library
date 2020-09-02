import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIy2OQYs1ICkThbNDwqkU_kPdf1CwKVGM",
    authDomain: "iamamitito-library.firebaseapp.com",
    databaseURL: "https://iamamitito-library.firebaseio.com",
    projectId: "iamamitito-library",
    storageBucket: "iamamitito-library.appspot.com",
    messagingSenderId: "545859090063",
    appId: "1:545859090063:web:1483a734c50e6dfa85e2fa",
    measurementId: "G-YY13SXK8M5"
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };