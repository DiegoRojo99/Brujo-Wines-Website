let rosadoExistente=false;
let tintoExistente=false;
let blancoExistente=false;

function añadirVino(tipoVino){
    switch(tipoVino){
        case "blanco":
            if(blancoExistente){
                
            }else{
                document.getElementById('titania-blanco-fila').style.display='contents';
                let unidadesExistentes = parseInt(document.getElementById('unidades-blanco').innerHTML);
                let ub = unidadesExistentes + 1;
                document.getElementById('unidades-blanco').innerHTML = ub;
            }
            console.log("Titania Blanco elegido");
            break;
        case "rosado":
            console.log("Titania Rosado elegido");
            break;
        case "tinto":
            console.log("Titania Tinto elegido");
            break;
    }
    mostrarCarrito();
}

function mostrarCarrito(){
    document.getElementById('carrito').style.display = 'block';
}


function cambiarCarrito(){
    if(document.getElementById('carrito').style.display === 'block'){
        document.getElementById('carrito').style.display = 'none';
        carritoMostrado=false;
    }else{
        document.getElementById('carrito').style.display = 'block';
        carritoMostrado = true;
    }
    
    console.log("Carrito display despues es: "+document.getElementById('carrito').display );
}

document.getElementById('carrito-tienda').addEventListener('click', cambiarCarrito);