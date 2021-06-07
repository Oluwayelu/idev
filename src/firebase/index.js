import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDKmnhGf91r_WWclKgNWxhrIqv_m2hiF44",
  authDomain: "idev-3b8db.firebaseapp.com",
  projectId: "idev-3b8db",
  storageBucket: "idev-3b8db.appspot.com",
  messagingSenderId: "199546981544",
  appId: "1:199546981544:web:f8171cef318f8f1d8c069d",
  measurementId: "G-NMX19RZNCY"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var firestore = firebase.firestore();

export { auth, firestore, firebase };
