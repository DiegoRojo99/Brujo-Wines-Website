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

auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
    showHomepage();
    }
});
