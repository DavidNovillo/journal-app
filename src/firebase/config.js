// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDR9nk1q66N9rCP8SzPLH0nNft2m85NqOw",

  authDomain: "react-journal-app-e4e3d.firebaseapp.com",

  projectId: "react-journal-app-e4e3d",

  storageBucket: "react-journal-app-e4e3d.appspot.com",

  messagingSenderId: "80769989476",

  appId: "1:80769989476:web:87f2179c8a5e43ff83d871",
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
