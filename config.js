// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzJZsZiA0wqEUsNginGojKbDNbANdIX20",
  authDomain: "test-30f0b.firebaseapp.com",
  projectId: "test-30f0b",
  storageBucket: "test-30f0b.appspot.com",
  messagingSenderId: "215020580946",
  appId: "1:215020580946:web:7ee5787d6b11acdf366f8b",
  measurementId: "G-6PX2BE3BLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;