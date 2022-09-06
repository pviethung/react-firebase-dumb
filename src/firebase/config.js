import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDaXmtMxIASnNrSLfR0sd-cViHG23aAniQ',
  authDomain: 'auth-and-db-6dfbb.firebaseapp.com',
  projectId: 'auth-and-db-6dfbb',
  storageBucket: 'auth-and-db-6dfbb.appspot.com',
  messagingSenderId: '968590275559',
  appId: '1:968590275559:web:13c129b7c45ebcf9f40342',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// firestore
export const db = getFirestore(app);

// auth
export const auth = getAuth(app);
