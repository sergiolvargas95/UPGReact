import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDP4S7-1270nDNnc9pnBJN5-KDKL3TABx8",
    authDomain: "upggalery.firebaseapp.com",
    projectId: "upggalery",
    storageBucket: "upggalery.appspot.com",
    messagingSenderId: "841482181706",
    appId: "1:841482181706:web:52532ff779234ab0579ab3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };