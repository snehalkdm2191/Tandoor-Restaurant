// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Using the Project fe-firebase-setup credentials
const firebaseConfiguration = {
  apiKey: "AIzaSyDA65m7SAbIIfGeJG7-bu21VUOJzJ3t2ZI",
  authDomain: "tandoor-restaurant.firebaseapp.com",
  projectId: "tandoor-restaurant",
  storageBucket: "tandoor-restaurant.appspot.com",
  messagingSenderId: "448309429286",
  appId: "1:448309429286:web:1db6267876b5fe94c192e7",
};

const firebaseInstance = initializeApp(firebaseConfiguration);
export const fireStoreInstance = getFirestore(firebaseInstance);
