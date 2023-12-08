import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDB_z3XqbXkVNKU93jcWTQr28c9ZUYYefI",
  authDomain: "partymanagementapp.firebaseapp.com",
  projectId: "partymanagementapp",
  storageBucket: "partymanagementapp.appspot.com",
  messagingSenderId: "814206741489",
  appId: "1:814206741489:web:3fd5e7ffecef667a427250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

