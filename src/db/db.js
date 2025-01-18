import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADI1Bp_1V5aXteEeX8h9uhM_Uhp4PtCeI",
  authDomain: "ecommerce-proyecto-cb05b.firebaseapp.com",
  projectId: "ecommerce-proyecto-cb05b",
  storageBucket: "ecommerce-proyecto-cb05b.firebasestorage.app",
  messagingSenderId: "32579774526",
  appId: "1:32579774526:web:9b90701fc18d35b461496f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
