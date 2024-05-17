// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzHbvF_yNNEeGPPIGIRQx4H8J3smdWd3Y",
  authDomain: "portfolio-site-8cd06.firebaseapp.com",
  projectId: "portfolio-site-8cd06",
  storageBucket: "portfolio-site-8cd06.appspot.com",
  messagingSenderId: "667969232123",
  appId: "1:667969232123:web:630d3ade35e91ee31aa45e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
