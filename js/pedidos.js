import { getFirestore, addDoc,  doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

import { db } from "./db.js";

// Initialize Firebase
const auth = getAuth();
let userId="";
let anon=true;

onAuthStateChanged(auth, (user) => {
  if (user) {
    userId = user.uid;
    anon=false;

    // ...
  } else {
    // User is signed out
    anon=true;
  }
});

window.realizarPedido=()=>{
    darPedido();
}

async function darPedido(){
    
    let sumaPrecios = parseInt(document.getElementById('sumaPrecios').innerHTML);
    let blanco = parseInt(document.getElementById('unidades-blanco').innerHTML);
    let rosado = parseInt(document.getElementById('unidades-rosado').innerHTML);
    let tinto = parseInt(document.getElementById('unidades-tinto').innerHTML);
  
    if(anon===false){
      const docRef = await addDoc(collection(db, "pedidos"), {
        UserId: userId,
        UnidadesBlanco: blanco,
        UnidadesRosado: rosado,
        UnidadesTinto: tinto,
        Precio: sumaPrecios,
        Pagado: false
      });  

      vaciarCarrito();
    }else{
      let message = "Tienes que iniciar sesión para poder realizar un pedido";
      window.alert(message);
    }

}