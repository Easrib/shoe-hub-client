// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrVxRAcBfD8CNfK33hYwoPD0o5-Lubd-8",
    authDomain: "shoe-hub-c43f7.firebaseapp.com",
    projectId: "shoe-hub-c43f7",
    storageBucket: "shoe-hub-c43f7.appspot.com",
    messagingSenderId: "564327680672",
    appId: "1:564327680672:web:e2b62fa6b260922971d7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;