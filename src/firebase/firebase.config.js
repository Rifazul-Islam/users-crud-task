// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLg75phCy3N1VH1yufJCl1dZfloRIYN3w",
  authDomain: "users-crud-68f85.firebaseapp.com",
  projectId: "users-crud-68f85",
  storageBucket: "users-crud-68f85.appspot.com",
  messagingSenderId: "980178861385",
  appId: "1:980178861385:web:e361f1298552ce36592e98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
