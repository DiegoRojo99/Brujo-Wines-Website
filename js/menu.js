import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore,  doc, getDoc, getDocs, collection, deleteDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { db } from "./db.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// Initialize Firebase
const auth = getAuth();
let userId="";

onAuthStateChanged(auth, (user) => {
    if (user) {
    userId = user.uid;
    } 
});

async function getAdmin() {
        
    var admins=[];
    var arrayPedidosID=[];
    const adminCol = collection(db, 'admin');
    const adminSnapshot = await getDocs(adminCol);
    
    adminSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if(doc.data().userId===userId){
            cambiarUsuarioAdmin();
        }
    });

    return 0;
}

function cambiarUsuarioAdmin(){
    var link = document.getElementById("link-usuario");
    link.innerHTML="Admin";
    link.href="admin.html";
}
    getAdmin();
