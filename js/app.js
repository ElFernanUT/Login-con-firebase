import {app} from "./firebase"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBJv-QyeXXPW1eak3_J1H0gKvD-Fws1NGU",
authDomain: "login-9e1c9.firebaseapp.com",
projectId: "login-9e1c9",
storageBucket: "login-9e1c9.appspot.com",
messagingSenderId: "567143214740",
appId: "1:567143214740:web:ef042462a8a2ad5cb24e81",
measurementId: "G-MEYNYZ4934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const form = document.forms['formlogin'];
form.addEventListener('submit', handleForSubmit);


function handleForSubmit(event){
  event.preventDefault();
  const email = form['correo'].value;
  const password = form['password'].value;

  return loginUser(email, password);
}

function loginUser(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario autenticado
      console.log('credenciales correctas', userCredential);
    })
    .catch((error) => {
      // Error en autenticación
      console.error('CREDENCIALES INCORRECTAS', error);
    });
}


