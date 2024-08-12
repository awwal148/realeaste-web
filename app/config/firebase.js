// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
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
export const auth = getAuth(app);
export const db = getFirestore(app)

















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  // apiKey: "AIzaSyBr3oY8Jfn6Jgf_jIhl-HWbIYgi_Pa2GMU",
  // authDomain: "real-estate-432122.firebaseapp.com",
  // projectId: "real-estate-432122",
  // storageBucket: "real-estate-432122.appspot.com",
  // messagingSenderId: "359287119099",
  // appId: "1:359287119099:web:8aa65991e73ea0e762e45e",
  // measurementId: "G-M7GNWX5R1R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app)
