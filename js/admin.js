

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, addDoc,  doc, getDoc, getDocs, collection, deleteDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { db } from "./db.js";

const auth = getAuth();
let userId="";
let admin=false;

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
                admin=true;
            }
        });

        if(admin===false){
            window.location="index.html";
        }

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

function mostrarDatos(){

    conseguirReservas();
    conseguirPedidos();
}

async function conseguirReservas(){
    
    const reservasCol = collection(db, 'reservas');
    const reservasSnapshot = await getDocs(reservasCol);
    
    reservasSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        mostrarReserva(doc.data(),doc.id);
        
    });
}

async function conseguirPedidos(){
    
    const pedidosCol = collection(db, 'pedidos');
    const pedidosSnapshot = await getDocs(pedidosCol);
    
    pedidosSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        mostrarPedido(doc.data(),doc.id);
        
    });
}

function mostrarReserva(data, id){
    let tablaReservas = document.getElementById('tabla-reservas');
    
    var fila = document.createElement('tr');
    crearFilaReserva(fila, data, id);

    tablaReservas.appendChild(fila);
}

function crearFilaReserva(fila, datos, docId){

    var dato = document.createElement('td');
    var texto = document.createTextNode(datos.UserId);

    var dato2 = document.createElement('td');
    var fecha = new Date(datos.FechaReserva.seconds*1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    
    var fech=(fecha.toLocaleDateString('es-ES', options)+" a las "+fecha.toLocaleTimeString('es-ES'));
    var texto2 = document.createTextNode(fech);
    
    var dato3 = document.createElement('td');
    let actividad="Visita a la bodega";
    if(datos.Tipo){
        actividad="Cata de vino";
    }
    var texto3 = document.createTextNode(actividad);
    
    var dato4 = document.createElement('td');
    var texto4 = document.createTextNode(datos.NumeroPersonas);
    
    dato.appendChild(texto);
    dato2.appendChild(texto2);
    dato3.appendChild(texto3);
    dato4.appendChild(texto4);

    fila.appendChild(dato);
    fila.appendChild(dato2);
    fila.appendChild(dato3);
    fila.appendChild(dato4);

    var dato5 = document.createElement('td');
    var botonEliminar= document.createElement('button');
    botonEliminar.classList="boton-eliminar-admin";
    botonEliminar.innerHTML="Eliminar Reserva";
    botonEliminar.addEventListener('click', function eliminarReserva(event) {
        
        deleteReserva(docId);
      });
    dato5.appendChild(botonEliminar);
    fila.appendChild(dato5);

    
    var dato7 = document.createElement('td');
    var botonEditar= document.createElement('button');
    botonEditar.classList="boton-editar-admin";
    botonEditar.innerHTML="Editar Reserva";
    botonEditar.addEventListener('click', function editarRes(event) {
        editarReserva(docId);
    });
    dato7.appendChild(botonEditar);
    fila.appendChild(dato7);

}
async function deleteReserva(docID){
    if(admin){
        await deleteDoc(doc(db, "reservas", docID));
        location.reload();
    }
}
async function deletePedido(docID){
    if(admin){
        await deleteDoc(doc(db, "pedidos", docID));
        location.reload();
    }
}

function mostrarPedido(data, id){
    let tablaReservas = document.getElementById('tabla-pedidos');
    
    var fila = document.createElement('tr');
    crearFilaPedido(fila, data, id);

    tablaReservas.appendChild(fila);
}

function crearFilaPedido(fila, datos, docId){

    var dato = document.createElement('td');
    var texto = document.createTextNode(datos.UserId);

    var dato2 = document.createElement('td');
    var texto2 = document.createTextNode(datos.UnidadesBlanco);
    
    var dato3 = document.createElement('td');
    var texto3 = document.createTextNode(datos.UnidadesTinto);
    
    var dato4 = document.createElement('td');
    var texto4 = document.createTextNode(datos.UnidadesRosado);
    
    var dato5 = document.createElement('td');
    var texto5 = document.createTextNode(datos.Precio);
    
    dato.appendChild(texto);
    dato2.appendChild(texto2);
    dato3.appendChild(texto3);
    dato4.appendChild(texto4);
    dato5.appendChild(texto5);

    fila.appendChild(dato);
    fila.appendChild(dato2);
    fila.appendChild(dato3);
    fila.appendChild(dato4);
    fila.appendChild(dato5);

    var dato6 = document.createElement('td');
    var botonEliminar= document.createElement('button');
    botonEliminar.classList="boton-eliminar-admin";
    botonEliminar.innerHTML="Eliminar Pedido";
    botonEliminar.addEventListener('click', function eliminarReserva(event) {
        
        deletePedido(docId);
      });
    dato6.appendChild(botonEliminar);
    fila.appendChild(dato6);

    var dato7 = document.createElement('td');
    fila.appendChild(dato7);

}

function editarReserva(docId){
   let url= "editar.html?docID="+docId;
   window.location=url;
}

mostrarDatos();

