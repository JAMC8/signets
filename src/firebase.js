import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';
import 'firebase/storage';

// Config
const firebaseConfig = {
    apiKey: "AIzaSyCq8AIp4VBWtww6QRA2uaU2q_zcZ8CYlHY",
    authDomain: "panier-achats.firebaseapp.com",
    databaseURL: "https://panier-achats-default-rtdb.firebaseio.com",
    projectId: "panier-achats",
    storageBucket: "panier-achats.appspot.com",
    messagingSenderId: "786866074949",
    appId: "1:786866074949:web:13f102114ad3459400ba2c"
  };

  // Initialiser Firebase
  // if pour une seule fois
  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }

  // Initialiser Firestore
  export const firestore = firebase.firestore();

  // Initialiser Storage
  export const storage = firebase.storage();


  // Initialiser le widget Firebase
  export const widgetFirebaseui = new firebaseui.auth.AuthUI(firebase.auth());
