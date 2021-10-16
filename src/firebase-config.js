// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-boom-b2297.firebaseapp.com",
  projectId: "fir-boom-b2297",
  storageBucket: "fir-boom-b2297.appspot.com",
  messagingSenderId: "274344481243",
  appId: "1:274344481243:web:f6769f25295837580897fe",
  measurementId: "G-R97XMHR3EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
