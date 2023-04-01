import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwJ7Z4U0SSU7WwmblOftkDuA07N_F1j10",
  authDomain: "hackprinceton-3b27c.firebaseapp.com",
  projectId: "hackprinceton-3b27c",
  storageBucket: "hackprinceton-3b27c.appspot.com",
  messagingSenderId: "727714078806",
  appId: "1:727714078806:web:bf226a3ca90aeabae55bf7",
};
// init firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
