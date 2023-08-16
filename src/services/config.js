import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-commerce-789e6.firebaseapp.com",
  projectId: "e-commerce-789e6",
  storageBucket: "e-commerce-789e6.appspot.com",
  messagingSenderId: "241414061981",
  appId: "1:241414061981:web:e8e7bfd32f820164577974"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);