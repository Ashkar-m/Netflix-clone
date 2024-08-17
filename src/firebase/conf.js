import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAcxpTZGqm1KkPqnff5BjQOzvPTw8wM0Ck",
    authDomain: "netflix-project-22768.firebaseapp.com",
    projectId: "netflix-project-22768",
    storageBucket: "netflix-project-22768.appspot.com",
    messagingSenderId: "376600705333",
    appId: "1:376600705333:web:8da0ad2a1bfcf21d96747c",
    measurementId: "G-CK2DCYY80X"
  };

const Firebase= initializeApp(firebaseConfig);

export const auth = getAuth(Firebase); 

export default Firebase;