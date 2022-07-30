// Import the functions you need from the SDKs you need
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


function mostrarOtraReserva(tipo, numero, fecha, documentoID){
    var d1 = document.createElement('div');
    d1.className="datos-reserva-ind";
    
    var p1 = document.createElement('p');
    p1.className="info-reserva";
    var i1 = document.createElement('i');
    i1.className='fa-solid fa-wine-bottle';
    var s1 = document.createElement('span');
    s1.id='tipo-reserva-info';
    var t1=document.createTextNode(tipo);
    s1.appendChild(t1);
    i1.appendChild(s1);
    p1.appendChild(i1);

    var p2 = document.createElement('p');
    p2.className="info-reserva";
    var i2 = document.createElement('i');
    i2.className='fa-solid fa-person';
    var s2 = document.createElement('span');
    s2.id='tipo-reserva-info';
    var t2=document.createTextNode(numero);
    s2.appendChild(t2);
    i2.appendChild(s2);
    p2.appendChild(i2);

    
    var p3 = document.createElement('p');
    p3.className="info-reserva";
    var i3 = document.createElement('i');
    i3.className='fa-solid fa-calendar-day';
    var s3 = document.createElement('span');
    s3.id='tipo-reserva-info';
    var t3=document.createTextNode(fecha);
    s3.appendChild(t3);
    i3.appendChild(s3);
    p3.appendChild(i3);

    var b1= document.createElement('button');
    b1.className="verDetallesReserva";
    b1.onclick=function() {
        location.href = 'detallesReserva.html?docId='+documentoID;
    }
    var t4=document.createTextNode("Ver Detalles Reserva");
    b1.appendChild(t4);

    d1.appendChild(p1);
    d1.appendChild(p2);
    d1.appendChild(p3);
    d1.appendChild(b1);
    document.getElementById("datos-reserva").appendChild(d1);
}

var arrayID=[];
async function getReservas() {

    const reservasCol = collection(db, 'reservas').withConverter(reservasConverter);
    const reservasSnapshot = await getDocs(reservasCol);
    
    reservasSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if(doc.data().userId===userId){
            if(!(arrayID.includes(doc.id))){     
                cargarDatosReserva(doc.data(), doc.id);
                arrayID.push(doc.id);
            }
        }
    });

    return 0;
}



var pedidosID=[];
async function getPedidos() {
    
    const pedidosCol = collection(db, 'pedidos').withConverter(pedidosConverter);
    const pedidosSnapshot = await getDocs(pedidosCol);
    
    pedidosSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if(doc.data().userId===userId){
            if(!(pedidosID.includes(doc.id))){     
                cargarDatosPedido(doc.data(), doc.id);
                pedidosID.push(doc.id);
            }
        }
    });

    return 0;
}



function cargarDatosReserva(reservaActual, documentoID){
    
    var n="",t="",f="";
    let plural=""
    if(reservaActual.numeroPersonas>1){
      plural="s"
    }
    
    n=reservaActual.numeroPersonas+" persona"+plural;
    var fechaReservaActual=timeConverter(reservaActual.fechaReserva);
    let minutos = fechaReservaActual.substring(fechaReservaActual.length-2, fechaReservaActual.length)
    if(minutos===':0'){
      fechaReservaActual+='0'
    }
    f=fechaReservaActual;

    if(reservaActual.tipo){                
        t="Cata de Vinos";
    }else{
        t="Visita a la bodega";
    }

    mostrarOtraReserva(t,n,f, documentoID);
}


function cargarDatosPedido(pedidoActual, documentoID){

    nuevoPedidoLayout(pedidoActual.blanco, pedidoActual.tinto, pedidoActual.rosado, pedidoActual.precio, documentoID);
}

function nuevoPedidoLayout(blanco, tinto, rosado, precio, documentoID){

    var d1 = document.createElement('div');
    d1.className="datos-reserva-ind-2";

    var d2=document.createElement('div');
    d2.className="pedido-titania";
    var i1= document.createElement('img');
    i1.src="./../img/TitaniaBlanco.png";
    i1.className='imagen-pedido';    
    var p1= document.createElement('p');
    var t1=document.createTextNode(blanco);
    p1.appendChild(t1);
    d2.appendChild(i1);
    d2.appendChild(p1);

    
    var d3=document.createElement('div');
    d3.className="pedido-titania";
    var i2= document.createElement('img');
    i2.src="./../img/TitaniaTinto.png";
    i2.className='imagen-pedido';  
    var p2= document.createElement('p');
    var t2=document.createTextNode(tinto);
    p2.appendChild(t2);
    d3.appendChild(i2);
    d3.appendChild(p2);
    
    var d4=document.createElement('div');
    d4.className="pedido-titania";
    var i3= document.createElement('img');
    i3.src="./../img/TitaniaRosado.png";
    i3.className='imagen-pedido';  
    var p3= document.createElement('p');
    var t3=document.createTextNode(rosado);
    p3.appendChild(t3);
    d4.appendChild(i3);
    d4.appendChild(p3);
     
    var p4= document.createElement('p');
    var i1 = document.createElement('i');
    i1.className='fa-solid fa-money-bill';
    var t4=document.createTextNode("  "+precio+" €");
    p4.appendChild(i1);
    p4.appendChild(t4);

    var b1= document.createElement('button');
    b1.id="verDetallesPedido";
    b1.onclick=function() {
        location.href = 'detallesPedido.html?docId='+documentoID;
    }
    var t4=document.createTextNode("Ver Detalles Pedido");
    b1.appendChild(t4);

    d1.appendChild(d2);
    d1.appendChild(d3);
    d1.appendChild(d4);
    d1.appendChild(p4);
    d1.appendChild(b1);
    document.getElementById("datos-pedido").appendChild(d1);
}

function obtenerDatos(){
    getReservas();
    getPedidos();
}

obtenerDatos();