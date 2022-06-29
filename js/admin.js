

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, addDoc,  doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
let userId="";
let admin=false;

onAuthStateChanged(auth, (user) => {
    if (user) {
    userId = user.uid;
    } 
});

async function getAdmin() {
    // Get a list of cities from your database 
        
        var admins=[];
        var arrayPedidosID=[];
        const adminCol = collection(db, 'admin');
        const adminSnapshot = await getDocs(adminCol);
        
        adminSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            if(doc.data().userId===userId){
                addAdmin();
            }
        });

        return 0;
    }

    getAdmin();


//Si el usuario es admin añadir una pagina de admin a nav
function addAdmin(){
    var adminLi = document.createElement("li");
    adminLi.className="nav-item";
    adminLi.innerHTML='<a href="admin.html" class="nav-link">Admin</a>';
    document.getElementById('nav-menu').appendChild(adminLi);
}

if(false){
    addAdmin();
}