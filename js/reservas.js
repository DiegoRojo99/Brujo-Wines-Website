    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBqFvsjkgTdQuinpZhAWLKPcghZa4gk0eU",
      authDomain: "brujowines.firebaseapp.com",
      databaseURL: "https://brujowines-default-rtdb.firebaseio.com",
      projectId: "brujowines",
      storageBucket: "brujowines.appspot.com",
      messagingSenderId: "1017605599237",
      appId: "1:1017605599237:web:8faf234b61927b164eac6c",
      measurementId: "G-NW2R0GGXKB"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore();

    const reservasCollection=collection(firestore,'reservas');
    async function addNewDocument(){
        const newDoc=await addDoc(reservasCollection,{
            Tipo: true,
            'Numero Personas':10,
            'UserId':szrkOnHhVRVeWrMWSuI2gvluz383,
            'Fecha Reserva':'30 de mayo de 2022, 15:30:00 UTC+2'
        });
    }

    function cambiarDatosReserva(){
        document.getElementById("email-usuario").innerHTML="Young Dred";
        document.getElementById("tipo-reserva").innerHTML=true,
        document.getElementById("numero-personas").innerHTML=10,
        document.getElementById("fecha-reserva").innerHTML='30 de mayo de 2022, 15:30:00 UTC+2'
    }