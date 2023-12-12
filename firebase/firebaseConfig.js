// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChOu2TTDNT3AgulPcLDQ4vG16gp2Z9eEc",
  authDomain: "new-cdtn-70b20.firebaseapp.com",
  projectId: "new-cdtn-70b20",
  storageBucket: "new-cdtn-70b20.appspot.com",
  messagingSenderId: "1067213096749",
  appId: "1:1067213096749:web:c3be0028e1a76794a4f5a4",
  measurementId: "G-6VQJDB9SK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getFirestore(app)
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export {
    app,
    auth,
    googleProvider,
    twitterProvider
}