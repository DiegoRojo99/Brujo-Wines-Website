import { auth} from './db.js';
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

document.querySelector("#login-button").addEventListener("click", () => {
    login();
});

const login = () => {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    if (email.trim() == "") {
        alert("Introduzca el email");
    } else if (password.trim() == "") {
        alert("Introduzca la contraseña");
    } else {
        authenticate(email, password);
    }
};

const authenticate = (email, password) => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

const register = () => {
    const email = document.querySelector("#registration-email").value;
    const reemail = document.querySelector("#registration-reemail").value;
    const password = document.querySelector("#registration-password").value;

    if (email.trim() == "") {
    alert("Introduzca el email");
    } else if (password.trim().length < 6) {
    alert("La contraseña tiene que ser de al menos 6 caracteres");
    } else if (email != reemail) {
    alert("Los correos no coinciden");
    } else {
        createUserWithEmailAndPassword(auth, email, password)
        .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
        });
    }
};