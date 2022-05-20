        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
        import { getFirestore, addDoc,  doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
        import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth();
        let userId="";

        onAuthStateChanged(auth, (user) => {
          if (user) {
            userId = user.uid;

            // ...
          } else {
            // User is signed out
            // ...
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