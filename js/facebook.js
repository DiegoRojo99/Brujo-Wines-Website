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
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

document.querySelector("#facebook-login").addEventListener("click", () => {
    signInWithPopup(auth, provider);
});
