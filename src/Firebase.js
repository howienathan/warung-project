import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAa_xGMNrzkjCOmBjZnyKC7cshu3uHpDew",
  authDomain: "pro-angkringan.firebaseapp.com",
  projectId: "pro-angkringan",
  storageBucket: "pro-angkringan.firebasestorage.app",
  messagingSenderId: "953487184082",
  appId: "1:953487184082:web:db7ac6e4d3d93e8b7b5d0b",
  measurementId: "G-5B983D6MGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;