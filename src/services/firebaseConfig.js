// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import.meta.env.VITE_APP_APIKEY
const firebaseConfig = {
  apiKey: "AIzaSyCnrnusw9vEp863iyVte-hZ82TCw4DWyeM",
  authDomain: "productos-feme.firebaseapp.com",
  projectId: "productos-feme",
  storageBucket: "productos-feme.appspot.com",
  messagingSenderId: "224308155640",
  appId: "1:224308155640:web:6ad1c8098632c0f201970d"
};

// Initialize Firebase  import.meta.env
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
