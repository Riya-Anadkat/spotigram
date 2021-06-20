import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD71CrMyDkYkcXTSKpFYKDU-G9N8rnfqE4",
    authDomain: "spotigram-7fd14.firebaseapp.com",
    projectId: "spotigram-7fd14",
    storageBucket: "spotigram-7fd14.appspot.com",
    messagingSenderId: "582031614980",
    appId: "1:582031614980:web:8dbd8c1672e9281dd64151",
    measurementId: "G-0GN0CVXFLT"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
