        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
        import { getFirestore, addDoc,  doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
  
        //Sacamos el usuario id     
        var userId = "";
        auth.onAuthStateChanged((firebaseUser) => {
          if (firebaseUser) {
            userId=firebaseUser.uid;
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
          
            const docRef = await addDoc(collection(db, "pedidos"), {
                UserId: userId,
                UnidadesBlanco: blanco,
                UnidadesRosado: rosado,
                UnidadesTinto: tinto,
                Precio: sumaPrecios
            });
  
  
        }