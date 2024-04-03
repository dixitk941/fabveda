// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvEMr-_GeeAFDfLD3w2oB_s3jPjrPQyZs",
    authDomain: "fragveda.firebaseapp.com",
    projectId: "fragveda",
    storageBucket: "fragveda.appspot.com",
    messagingSenderId: "709002213779",
    appId: "1:709002213779:web:c406148941ed9918cd5066"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
