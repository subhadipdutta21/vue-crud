import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC1v57VxHw9-LiVUJFblKpQhdCaB9juM6A",
    authDomain: "geo-app-f9809.firebaseapp.com",
    databaseURL: "https://geo-app-f9809.firebaseio.com",
    projectId: "geo-app-f9809",
    storageBucket: "",
    messagingSenderId: "331575598541",
    appId: "1:331575598541:web:9fec7a4f9d66e963c93884"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 export default firebaseApp.firestore()