// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "online-learning-7b1cf.firebaseapp.com",
  projectId: "online-learning-7b1cf",
  storageBucket: "online-learning-7b1cf.appspot.com",
  messagingSenderId: "975351796057",
  appId: "1:975351796057:web:863fbcdc415279fa1dfc48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);