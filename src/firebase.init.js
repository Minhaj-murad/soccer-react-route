// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVccY_amHOOvmbShP4X4mVClek9HvR088",
  authDomain: "soccer-hero-auth.firebaseapp.com",
  projectId: "soccer-hero-auth",
  storageBucket: "soccer-hero-auth.appspot.com",
  messagingSenderId: "1042470298538",
  appId: "1:1042470298538:web:07557288d1dd8a6aafc1d3",
  measurementId: "G-Y5RYFFV2L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;