import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4d8b5.firebaseapp.com",
  projectId: "mern-auth-4d8b5",
  storageBucket: "mern-auth-4d8b5.appspot.com",
  messagingSenderId: "1049101143229",
  appId: "1:1049101143229:web:9937236c9191ba8cfefbd4",
};

export const app = initializeApp(firebaseConfig);
