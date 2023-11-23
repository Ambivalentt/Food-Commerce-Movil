import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJy1wXlUOkOV5WdYOw68NdyfoSevMrhkI",
  authDomain: "food-commerce-44e84.firebaseapp.com",
  projectId: "food-commerce-44e84",
  storageBucket: "food-commerce-44e84.appspot.com",
  messagingSenderId: "1085401846218",
  appId: "1:1085401846218:web:17c34a8b3b7ef4fa5b3f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)