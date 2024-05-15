import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6l8Jzg-WZE4PI69vpVVv_5YYcCplP6Fk",
  authDomain: "netflix-870e4.firebaseapp.com",
  projectId: "netflix-870e4",
  storageBucket: "netflix-870e4.appspot.com",
  messagingSenderId: "571888255247",
  appId: "1:571888255247:web:8aeea3a88b4a1fcdc4fe7a",
  measurementId: "G-ZMCF1DMV32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
