// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCjkIovwr4UbuANFzkrGPeNBz2q913PPg",
  authDomain: "b12-a09-68876.firebaseapp.com",
  projectId: "b12-a09-68876",
  storageBucket: "b12-a09-68876.firebasestorage.app",
  messagingSenderId: "1026730295333",
  appId: "1:1026730295333:web:2ab105155bcc2232ae7fcc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);