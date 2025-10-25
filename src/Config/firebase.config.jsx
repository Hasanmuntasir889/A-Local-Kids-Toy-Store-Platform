// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlY-6movQc6FMtXdZamzLOQt97e50RsNU",
    authDomain: "tradesmart-1ad40.firebaseapp.com",
    projectId: "tradesmart-1ad40",
    storageBucket: "tradesmart-1ad40.firebasestorage.app",
    messagingSenderId: "228645519773",
    appId: "1:228645519773:web:61d4da2e993a5c1e682f74",
    measurementId: "G-QTZN77P48W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);