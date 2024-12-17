import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1jjalXSgxJDZI10fE5sfXcVi7fNYvo7c",
  authDomain: "redsocial-e5135.firebaseapp.com",
  projectId: "redsocial-e5135",
  storageBucket: "redsocial-e5135.firebasestorage.app",
  messagingSenderId: "388583778589",
  appId: "1:388583778589:web:1690bb0b9bb2583ce0d9f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
