// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIRrMMJWwVpTzmPYP8NfEd4XB08cZhF94",
  authDomain: "diplom-2a55c.firebaseapp.com",
  projectId: "diplom-2a55c",
  storageBucket: "diplom-2a55c.appspot.com",
  messagingSenderId: "756675856897",
  appId: "1:756675856897:web:357b6e105fd12035f4ce00",
  measurementId: "G-GGSV607T1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
