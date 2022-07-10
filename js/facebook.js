import { signInWithPopup,  signInWithRedirect , getRedirectResult, FacebookAuthProvider} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { auth} from './db.js';

const provider = new FacebookAuthProvider();
provider.addScope('email');
provider.setCustomParameters({
    'display': 'popup'
  });

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

        console.log("ERROR ENCONTRADO");

        var pendingCred = error.credential;
        var email = error.email;

        // Get sign-in methods for this email.
        auth.fetchSignInMethodsForEmail(email).then(function(methods) {
            
          if (methods[0] === 'password') {
            // Asks the user their password.
            // In real scenario, you should handle this asynchronously.
            var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
            auth.signInWithEmailAndPassword(email, password).then(function(result) {
              // Step 4a.
              return result.user.linkWithCredential(pendingCred);
            }).then(function() {
              // Facebook account successfully linked to the existing Firebase user.
              goToApp();
            });
            return;
          }
          
          var provider = getProviderForProviderId(methods[0]);
          auth.signInWithPopup(provider).then(function(result) {
            
            result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
              // Facebook account successfully linked to the existing Firebase user.
              goToApp();
            });
          });
        });
      }else{
        console.log("ERROR SIN DEFINIR");
      }
  });

document.querySelector("#facebook-login").addEventListener("click", () => {
    signInWithPopup(auth, provider);
});

function goToApp(){
    window.location="index.html";
}