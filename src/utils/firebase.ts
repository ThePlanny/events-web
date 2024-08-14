// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnfiw2i70tqhlwCOODUj5A2N37dldGqKs",
  authDomain: "planny-events.firebaseapp.com",
  projectId: "planny-events",
  storageBucket: "planny-events.appspot.com",
  messagingSenderId: "156637940173",
  appId: "1:156637940173:web:41e6437b890c6372dedc84"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
