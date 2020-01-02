import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
  apiKey: "AIzaSyD_tsRUN_gBLFtJch4DizpAdrU_JLk-jLc",
  authDomain: "api-proj-263908.firebaseapp.com",
  databaseURL: "https://api-proj-263908.firebaseio.com",
  projectId: "youtube-api-proj-263908",
  storageBucket: "youtube-api-proj-263908.appspot.com",
  messagingSenderId: "782158811017",
  appId: "1:782158811017:web:72aebb4a9457a0acce1b58",
  measurementId: "G-553MSFG0E9"
});

var base = Rebase.createClass(app.database());

export const provider = new firebase.auth.GoogleAuthProvider();
export default base
