import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpOyvJVHVT__VhZElJVZdETFH5Yf1L2yg",
  authDomain: "electro-database.firebaseapp.com",
  projectId: "electro-database",
  storageBucket: "electro-database.appspot.com",
  messagingSenderId: "794577285336",
  appId: "1:794577285336:web:c06d5856fd6600ef8a67ad",
  measurementId: "G-H95KGJVDFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
