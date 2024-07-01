// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMKVIkmpWP3uFrcXk8iW97wIKTdTvFiEM",
  authDomain: "real-estate-71347.firebaseapp.com",
  projectId: "real-estate-71347",
  storageBucket: "real-estate-71347.appspot.com",
  messagingSenderId: "424499641056",
  appId: "1:424499641056:web:3ad80aa423aed17f5a6e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()