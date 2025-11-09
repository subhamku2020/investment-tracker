// firebase-config.js

// Import modular functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn8R7_sqLIouUmAZQK98t40t4ZpkXa_6Y",
  authDomain: "investment-tracker-rrt0im.firebaseapp.com",
  projectId: "investment-tracker-rrt0im",
  storageBucket: "investment-tracker-rrt0im.firebasestorage.app",
  messagingSenderId: "782669695072",
  appId: "1:782669695072:web:fe51903382a225fa941b05"
};

// Initialize Firebase and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export so other scripts can use
export { auth, provider, signInWithPopup, signOut };
