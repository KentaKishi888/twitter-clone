// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo0yw3Xg4zHc9r0LVJr8Y6BnSKgaD9ETk",
  authDomain: "twitter-clone-2cb40.firebaseapp.com",
  projectId: "twitter-clone-2cb40",
  storageBucket: "twitter-clone-2cb40.appspot.com",
  messagingSenderId: "417615978534",
  appId: "1:417615978534:web:55b5770ee34851e8c586e7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;