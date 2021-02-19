import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXGD5FVZmj6F8RvyRJ5Riy9vdRjK3_UTQ",
  authDomain: "clone-29adc.firebaseapp.com",
  projectId: "clone-29adc",
  storageBucket: "clone-29adc.appspot.com",
  messagingSenderId: "183260885777",
  appId: "1:183260885777:web:7006ecfe1337a85675d2b0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
