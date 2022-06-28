// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBqFvsjkgTdQuinpZhAWLKPcghZa4gk0eU",
    authDomain: "brujowines.firebaseapp.com",
    databaseURL: "https://brujowines-default-rtdb.firebaseio.com",
    projectId: "brujowines",
    storageBucket: "brujowines.appspot.com",
    messagingSenderId: "1017605599237",
    appId: "1:1017605599237:web:8faf234b61927b164eac6c",
    measurementId: "G-NW2R0GGXKB"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.querySelector("#todavia-no-registrado").addEventListener("click", () => {
    showRegistration();
});

const showRegistration = () => {
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.add("hide");
};

document.querySelector("#ya-registrado").addEventListener("click", () => {
    showLogin();
});

const showLogin = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
    document.querySelector("#homepage").classList.add("hide");
};

document.querySelector("#signout").addEventListener("click", () => {
    signOut();
});

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
    auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
        });
    }
};

document.querySelector("#register").addEventListener("click", () => {
    register();
});

//register when you hit the enter key
document
    .querySelector("#registration-password")
    .addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
        e.preventDefault();

        register();
    }
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

document.querySelector("#login").addEventListener("click", () => {
    login();
});

//Iniciar Sesión when you hit enter
document
    .querySelector("#login-password")
    .addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
        e.preventDefault();

        login();
    }
    });

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
};

const showHomepage = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.remove("hide");
};

const signOut = () => {
    firebase
    .auth()
    .signOut()
    .then(function () {
        location.reload();
    })
    .catch(function (error) {
        alert("Error al cerrar sesión, compruebe la conexión");
    });
};

auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
    showHomepage();
    }
});

document
    .querySelector("#forgot-password")
    .addEventListener("click", () => {
    const email = document.querySelector("#login-email").value;
    if (email.trim() == "") {
        alert("Introduzca el email");
    } else {
        forgotPassword(email);
    }
    });

const forgotPassword = (email) => {
    auth
    .sendPasswordResetEmail(email)
    .then(function () {
        alert("El email ha sido enviado");
    })
    .catch(function (error) {
        alert("Hay un error. Compruebe su email o su conexión.");
    });
};