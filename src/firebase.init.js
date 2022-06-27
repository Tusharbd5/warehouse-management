// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe0G75DP4NWuJzs9l9cywPFUCcV3bgTmU",
    authDomain: "warehouse-management-b76ea.firebaseapp.com",
    projectId: "warehouse-management-b76ea",
    storageBucket: "warehouse-management-b76ea.appspot.com",
    messagingSenderId: "426944884967",
    appId: "1:426944884967:web:5155cd5f88a0c8078e7242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
