import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
            apiKey: "AIzaSyBJv-QyeXXPW1eak3_J1H0gKvD-Fws1NGU",
            authDomain: "login-9e1c9.firebaseapp.com",
            projectId: "login-9e1c9",
            storageBucket: "login-9e1c9.appspot.com",
            messagingSenderId: "567143214740",
            appId: "1:567143214740:web:ef042462a8a2ad5cb24e81",
            measurementId: "G-MEYNYZ4934"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);