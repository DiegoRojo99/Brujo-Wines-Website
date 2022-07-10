import { signInWithPopup,  signInWithEmailAndPassword, fetchSignInMethodsForEmail, FacebookAuthProvider} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { auth} from './db.js';

const provider = new FacebookAuthProvider();
provider.addScope('email');
provider.setCustomParameters({
    'display': 'popup'
  });

function entrarFacebook(){
    
    signInWithPopup(auth, provider)
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
        fetchSignInMethodsForEmail(auth, email).then(function probandoCredencialesEmail(methods) {
            
            if (methods[0] === 'password') {
            // Asks the user their password.
            // In real scenario, you should handle this asynchronously.
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
            
            var provider = getProviderForProviderId(methods[0]);
            signInWithPopup(auth, provider).then(function(result) {
            
            result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
                // Facebook account successfully linked to the existing Firebase user.
                goToApp();
            });
            });
        });
        }
    });
}


document.querySelector("#facebook-login").addEventListener("click", () => {
    entrarFacebook();
});

function goToApp(){
    window.location="index.html";
}