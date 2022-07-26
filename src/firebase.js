// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWFmAzvfgkUYQxqLQcyyld94m7yP9tfkA",
  authDomain: "netflix-6c465.firebaseapp.com",
  projectId: "netflix-6c465",
  storageBucket: "netflix-6c465.appspot.com",
  messagingSenderId: "955358036642",
  appId: "1:955358036642:web:585c9bed8da944b6498dfb",
  measurementId: "G-YR9F6BSTF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);