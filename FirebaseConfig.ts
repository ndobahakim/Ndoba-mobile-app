import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDdR3QZc-Pk5bk5D_qpqMfCIXBgtNCSvAE",
  authDomain: "nhauth-d5b20.firebaseapp.com",
  projectId: "nhauth-d5b20",
  storageBucket: "nhauth-d5b20.appspot.com",
  messagingSenderId: "839048708711",
  appId: "1:839048708711:web:98a40dad014176b2608ac2"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)