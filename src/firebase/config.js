import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAqW-9E0XCm3VgMoFkJzeKAxpKwzSJPP8",
  authDomain: "firegallery-gayankod.firebaseapp.com",
  projectId: "firegallery-gayankod",
  storageBucket: "firegallery-gayankod.appspot.com",
  messagingSenderId: "793676751638",
  appId: "1:793676751638:web:1b708810128088c3186637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export {projectStorage, projectFireStore};