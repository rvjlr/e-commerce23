// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc4Yj1llmCnQw-0Ad2LRJSRSx0tIBQ99c",
  authDomain: "my-secound-project-805d0.firebaseapp.com",
  projectId: "my-secound-project-805d0",
  storageBucket: "my-secound-project-805d0.appspot.com",
  messagingSenderId: "186631439290",
  appId: "1:186631439290:web:feeeacf03c1d56afe15383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth =getAuth(app);

export {fireDB,auth}