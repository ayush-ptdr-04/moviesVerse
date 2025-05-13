// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbvslC11xmFL_xKApK5fi_tDW1uQRk9BY",
  authDomain: "moviesverse-f6ebd.firebaseapp.com",
  projectId: "moviesverse-f6ebd",
  storageBucket: "moviesverse-f6ebd.firebasestorage.app",
  messagingSenderId: "473819876531",
  appId: "1:473819876531:web:b1cbde32ce5b5beb9df4c6",
  measurementId: "G-GG41DXPKXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
