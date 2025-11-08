import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCaxwpEtn_kLjCygf_osXo7FuuSeMuDb2s",
  authDomain: "subscriptions-e0dba.firebaseapp.com",
  projectId: "subscriptions-e0dba",
  storageBucket: "subscriptions-e0dba.firebasestorage.app",
  messagingSenderId: "769695167141",
  appId: "1:769695167141:web:fcff8be6ff4eae18f6534c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
