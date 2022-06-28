import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

var userId="";
auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        userId=firebaseUser.uid;
    }
});   
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const docId = urlParams.get('docId');

var precio=0, UnidadesBlanco=0, UnidadesRosado=0, UnidadesTinto=0;
async function getPedido() {
    const pedidosCol = collection(db, 'pedidos').withConverter(pedidosConverter);
    const pedidosSnapshot = await getDocs(pedidosCol);
    
    pedidosSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if(doc.id===docId){    
            actualizarDatosPedido(doc.data());
        }
    });

    return 0;
}

getPedido();

function actualizarDatosPedido(pedidoActual){
    precio=pedidoActual.precio;
    UnidadesBlanco=pedidoActual.blanco;
    UnidadesRosado=pedidoActual.rosado;
    UnidadesTinto=pedidoActual.tinto;

    document.getElementById('unidades-blanco').innerHTML=UnidadesBlanco;
    document.getElementById('unidades-tinto').innerHTML=UnidadesTinto;
    document.getElementById('unidades-rosado').innerHTML=UnidadesRosado;
}