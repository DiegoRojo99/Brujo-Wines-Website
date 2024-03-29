// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBqFvsjkgTdQuinpZhAWLKPcghZa4gk0eU",
authDomain: "brujowines.firebaseapp.com",
databaseURL: "https://brujowines-default-rtdb.firebaseio.com",
projectId: "brujowines",
storageBucket: "brujowines.appspot.com",
messagingSenderId: "1017605599237",
appId: "1:1017605599237:web:8e99097db35e91e44eac6c",
measurementId: "G-W6882XRRHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

async function deleteReserva(docID){
    await deleteDoc(doc(db, "reservas", docID));
    volverAUsuario();
}
async function deletePedido(docID){
    await deleteDoc(doc(db, "pedidos", docID));
    volverAUsuario();
}

function volverAUsuario(){
    window.location="usuario.html";
}

export function eliminarReservaConURL(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const di = urlParams.get('docId');
    deleteReserva(di);
}
export function eliminarPedidoConURL(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const di = urlParams.get('docId');
    deletePedido(di);
}

export function editarReservaConURL(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const di = urlParams.get('docId');
    window.location="editar.html?docID="+di;
}

export {firebaseConfig, db, app, auth}