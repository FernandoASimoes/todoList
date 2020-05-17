import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCoJDA9iF221GQzfpmdiPN1OONh9WTGP4M",
    authDomain: "todolist-642ce.firebaseapp.com",
    databaseURL: "https://todolist-642ce.firebaseio.com",
    projectId: "todolist-642ce",
    storageBucket: "todolist-642ce.appspot.com",
    messagingSenderId: "923128059132",
    appId: "1:923128059132:web:f1777bcc0ae3960194b379",
    measurementId: "G-840Z4D3FNG"
  };

  
  if(!firebase.apps.length){

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;