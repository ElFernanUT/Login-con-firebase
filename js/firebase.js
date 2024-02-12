import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
     apiKey: "AIzaSyCcs5hjZ2RZHNeszQYR05LmA9eqsvs1VBE",
      authDomain: "web4-0-b2e16.firebaseapp.com",
        databaseURL: "https://web4-0-b2e16-default-rtdb.firebaseio.com",
         projectId: "web4-0-b2e16",
        storageBucket: "web4-0-b2e16.appspot.com",
        messagingSenderId: "339176202657",
    appId: "1:339176202657:web:20461812f889117c50ebe0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);