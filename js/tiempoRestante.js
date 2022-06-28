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


async function getReserva() {
    const reservasCol = collection(db, 'reservas').withConverter(reservasConverter);
    const reservasSnapshot = await getDocs(reservasCol);
    
    reservasSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if(doc.id===docId){    
            mostrarReserva(doc.data());
        }
    });

    return 0;
}

getReserva();


function mostrarReserva(reservaActual){

    calcularTiempoRestante(reservaActual);



}

function calcularTiempoRestante(reservaActual){
    
    var d=0,m=0,h=0;
    
    var fechaAhora = Math.floor(new Date().getTime() / 1000);

    var segundosRestantes=reservaActual.fechaReserva.seconds - fechaAhora;
    
    if(segundosRestantes>0){
        
    d= Math.floor(segundosRestantes/3600/24);
    segundosRestantes=segundosRestantes-(3600*24*d);
    h= Math.floor(segundosRestantes/3600);
    segundosRestantes=segundosRestantes-(3600*h);
    m=Math.floor(segundosRestantes/60);

    actualizarCountdown(d,h,m);
    }
}

function actualizarCountdown(d,h,m){
    document.getElementById('dias-restantes').innerHTML=d;
    document.getElementById('horas-restantes').innerHTML=h;
    document.getElementById('minutos-restantes').innerHTML=m;
}