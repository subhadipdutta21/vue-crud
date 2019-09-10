import firebase from 'firebase/app';
// import firestore from 'firebase/firestore';
import 'firebase/firestore'
var config = {
    apiKey: "AIzaSyA80jUTLVPt6BSBxbIE0xMvXjay7BTVJg8",
    authDomain: "smoothies-f09d6.firebaseapp.com",
    databaseURL: "https://smoothies-f09d6.firebaseio.com",
    projectId: "smoothies-f09d6",
    storageBucket: "smoothies-f09d6.appspot.com",
    messagingSenderId: "1049833478573",
    appId: "1:1049833478573:web:878134f57301810d406924"
  };

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();