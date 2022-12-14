import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-21983.firebaseapp.com",
  projectId: "clone-21983",
  storageBucket: "clone-21983.appspot.com",
  messagingSenderId: "160441762231",
  appId: "1:160441762231:web:a1d7c6a6d984d2f386e832",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
