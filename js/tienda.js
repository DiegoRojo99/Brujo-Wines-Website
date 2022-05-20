let rosadoExistente=true;
let tintoExistente=true;
let blancoExistente=true;


function añadirVino(tipoVino){
    switch(tipoVino){
        case "blanco":
            if(!blancoExistente){
                document.getElementById('titania-blanco-fila').style.display='contents';
                blancoExistente=true;
            }
            sumarUnidad("blanco");
            break;
        case "rosado":
            if(!rosadoExistente){
                document.getElementById('titania-rosado-fila').style.display='contents';
                rosadoExistente=true;
            }
            sumarUnidad("rosado");
            break;
        case "tinto":
            if(!tintoExistente){
                document.getElementById('titania-tinto-fila').style.display='contents';
                tintoExistente=true;
            }
            sumarUnidad("tinto");
            break;
    }
    mostrarCarrito();
}

function vaciarCarrito(){
    document.getElementById('unidades-rosado').innerHTML = 0; 
    document.getElementById('unidades-tinto').innerHTML = 0;
    document.getElementById('unidades-blanco').innerHTML = 0;
}

function sumarUnidad(vino){
    switch(vino){
        case "blanco":
            let unidadesBlancoExistentes = parseInt(document.getElementById('unidades-blanco').innerHTML);
            let ub = unidadesBlancoExistentes + 1;
            document.getElementById('unidades-blanco').innerHTML = ub;
            break;
        
        case "tinto":
            let unidadesTintoExistentes = parseInt(document.getElementById('unidades-tinto').innerHTML);
            let ut = unidadesTintoExistentes + 1;
            document.getElementById('unidades-tinto').innerHTML = ut;
            break;
                
        case "rosado":
            let unidadesRosadoExistentes = parseInt(document.getElementById('unidades-rosado').innerHTML);
            let ur = unidadesRosadoExistentes + 1;
            document.getElementById('unidades-rosado').innerHTML = ur;
            break;
    }
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