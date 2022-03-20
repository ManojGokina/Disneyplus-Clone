import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwsbfaNCImPRXCcP6Q_kdNKbPLtEvkl1U",
    authDomain: "disney-clone-1c1dc.firebaseapp.com",
    projectId: "disney-clone-1c1dc",
    storageBucket: "disney-clone-1c1dc.appspot.com",
    messagingSenderId: "1066440389348",
    appId: "1:1066440389348:web:019d740c110306a123b2f1",
    measurementId: "G-KMRNG733J5"
  };
  

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);

