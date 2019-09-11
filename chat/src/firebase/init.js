import firebase from 'firebase'
import firestore from 'firebase/firestore'

 var firebaseConfig = {
    apiKey: "AIzaSyAhqbZfPss-EPA2MaMtp3-6Vk70XIIuJDw",
    authDomain: "chat-92b9d.firebaseapp.com",
    databaseURL: "https://chat-92b9d.firebaseio.com",
    projectId: "chat-92b9d",
    storageBucket: "chat-92b9d.appspot.com",
    messagingSenderId: "38101709896",
    appId: "1:38101709896:web:78af4b02e92b5708eb147d"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 export default firebaseApp.firestore()