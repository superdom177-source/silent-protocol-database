// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Firebase konfigurace
const firebaseConfig = {
  apiKey: "AIzaSyA_6eKHjsMKbJ4l5PkhZuhyyoOLY-Ro80I",
  authDomain: "silent-protocol-foundation.firebaseapp.com",
  projectId: "silent-protocol-foundation",
  storageBucket: "silent-protocol-foundation.firebasestorage.app",
  messagingSenderId: "908197866917",
  appId: "1:908197866917:web:8e9d9eb3676f20449d4c4c"
};

// Inicializace Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export
export { auth };
