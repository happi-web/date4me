import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBhbjw5ddToCIKgaQWRxhKuLXuWndXkwzU",
    authDomain: "date4me.firebaseapp.com",
    projectId: "date4me",
    storageBucket: "date4me.appspot.com",
    messagingSenderId: "864068536118",
    appId: "1:864068536118:web:32f5fcd72a21e188b2d597",
    measurementId: "G-7FD8XQ6W70"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;