// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bc8bf.firebaseapp.com",
  projectId: "mern-auth-bc8bf",
  storageBucket: "mern-auth-bc8bf.appspot.com",
  messagingSenderId: "411629309067",
  appId: "1:411629309067:web:032b74f6b3f4947287988e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
