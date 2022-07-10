import { signInWithPopup,  signInWithEmailAndPassword, fetchSignInMethodsForEmail, FacebookAuthProvider,
    GoogleAuthProvider, linkWithPopup, signInWithCredential, linkWithCredential, OAuthProvider } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { auth} from './db.js';

const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope('email');
facebookProvider.setCustomParameters({
    'display': 'popup'
  });
  
const googleProvider = new GoogleAuthProvider();

function entrarFacebook(){
    
    signInWithPopup(auth, facebookProvider)
    .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
    })
    .catch((error) => {
    if (error.code === 'auth/account-exists-with-different-credential') {


        var pendingCred = error.credential;
        var email = error.email;

        // Get sign-in methods for this email.
        fetchSignInMethodsForEmail(auth, email).then(function probandoOtrasCredenciales(methods) {
            
            if (methods[0] === 'password') {
            window.alert("Este correo ya está registrado con otro servicio");
            var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
            signInWithEmailAndPassword(auth, email, password).then(function(result) {
                // Step 4a.
                return result.user.linkWithCredential(pendingCred);
            }).then(function() {
                // Facebook account successfully linked to the existing Firebase user.
                goToApp();
            }).catch((e) => {
                console.log(e.code)
            });
            return;
            }
            
            var facebookProvider = getProviderForProviderId(methods[0]);
            signInWithPopup(auth, facebookProvider).then(function(result) {
            
            result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
                // Facebook account successfully linked to the existing Firebase user.
                goToApp();
            });
            });
        });
        }
    });
}

function entrarGoogle(){
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}

document.querySelector("#facebook-login").addEventListener("click", () => {
    entrarFacebook();
});

document.querySelector("#google-login").addEventListener("click", () => {
    entrarGoogle();
});

function goToApp(){
    window.location="usuario.html";
}
