// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAID4sYe5q2G8OS7HdWW_Imq-IMP6wAoI4",
  authDomain: "e-shop-vd.firebaseapp.com",
  projectId: "e-shop-vd",
  storageBucket: "e-shop-vd.appspot.com",
  messagingSenderId: "751357668307",
  appId: "1:751357668307:web:ce011d4e9481f4000a9d26",
  measurementId: "G-HR7627PYGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;