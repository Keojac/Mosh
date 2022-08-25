// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2MokDYSkpKI_IW2HprzO7TUtSie8kxDo",
  authDomain: "mosh-97e83.firebaseapp.com",
  projectId: "mosh-97e83",
  storageBucket: "mosh-97e83.appspot.com",
  messagingSenderId: "848505776330",
  appId: "1:848505776330:web:71fa7a0c5fe589bfbeec33",
  measurementId: "G-7LCY6KD0TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
