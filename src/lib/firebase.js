// first account

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "chatsapp-59f77.firebaseapp.com",
//   projectId: "chatsapp-59f77",
//   storageBucket: "chatsapp-59f77.appspot.com",
//   messagingSenderId: "17048739176",
//   appId: "1:17048739176:web:0cade43bb392f5222a4add",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
// export const db = getFirestore();
// export const storage = getStorage();


// second account

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatsapp-b635b.firebaseapp.com",
  projectId: "chatsapp-b635b",
  storageBucket: "chatsapp-b635b.appspot.com",
  messagingSenderId: "290091363955",
  appId: "1:290091363955:web:8f2438b0be6d052d6b8406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();