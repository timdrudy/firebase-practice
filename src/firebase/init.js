// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlfwwn2e_3-0u_ymw6htMp83UzZdRs_KM",
  authDomain: "fir-practice-d71f4.firebaseapp.com",
  projectId: "fir-practice-d71f4",
  storageBucket: "fir-practice-d71f4.firebasestorage.app",
  messagingSenderId: "607749257972",
  appId: "1:607749257972:web:9c1c43ac522aa8a91b3ca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();