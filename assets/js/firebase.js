import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCLWcM4xIapAEgIbpK_93JSXK139XRErt4",
    authDomain: "info-5146-todo.firebaseapp.com",
    projectId: "info-5146-todo",
    storageBucket: "info-5146-todo.firebasestorage.app",
    messagingSenderId: "438512065808",
    appId: "1:438512065808:web:15f274f08b066c9ef4d995"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();