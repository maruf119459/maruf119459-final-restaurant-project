// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

/*

VITE_apiKey=AIzaSyBz57QT6AkxR2q15MBI1QGs_-ZZLC8F39E
VITE_authDomain=car-doctor-93ec9.firebaseapp.com
VITE_projectId=car-doctor-93ec9
VITE_storageBucket=car-doctor-93ec9.appspot.com
VITE_messagingSenderId=61982214857
VITE_appId=1:61982214857:web:f8adea66e951cea8f61b18
VITE_IMAGE_HOSTING_KEY=f4bad12b7d481fe4bafabe514b16b077
VITE_Payment_Gateway_PK=pk_test_51PQgfEEoY9oUlJD2IOjeJ9q6Ftc9H3y16LJQ9bdBp299b7xExckCeL4nXaGPiBO6pHsrCfod30LdMtOwJqGiqrnl00Zehe7Rt1


*/