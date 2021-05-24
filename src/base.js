import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAf1T2ptafO9qAa09FX9GZpiw7eYcls5fo",
  authDomain: "catch-of-the-day-nathan-d3e6d.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day-nathan-d3e6d-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-nathan-d3e6d",
  storageBucket: "catch-of-the-day-nathan-d3e6d.appspot.com",
  messagingSenderId: "12332425132",
  appId: "1:12332425132:web:d44fe21888ba6e663f2409",
  measurementId: "G-5FK0X3KZ6J",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
