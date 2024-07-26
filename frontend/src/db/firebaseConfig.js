import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjgHGfwolZsullIv3ZDXK9lkKlCDOBWSc",
  authDomain: "ecomreact-57750.firebaseapp.com",
  projectId: "ecomreact-57750",
  storageBucket: "ecomreact-57750.appspot.com",
  messagingSenderId: "472687474141",
  appId: "1:472687474141:web:d9aabcb08de6b5c4e8f234",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;