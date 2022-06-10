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
    document.getElementById('sumaUnidades').innerHTML = 0;
    document.getElementById('sumaPrecios').innerHTML = 0+"€";
    document.getElementById('carrito').style.display = 'none';
}

function sumarPrecio(vino){
    
    let sumaPrecios = parseInt(document.getElementById('sumaPrecios').innerHTML);
    let nuevaSuma=0;
    
    switch(vino){
        case "blanco":
            nuevaSuma = sumaPrecios + 30;
            document.getElementById('sumaPrecios').innerHTML = nuevaSuma+"€";
            break;
        
        case "tinto":
            nuevaSuma = sumaPrecios + 40;
            document.getElementById('sumaPrecios').innerHTML = nuevaSuma+"€";
            break;
                
        case "rosado":
            nuevaSuma = sumaPrecios + 25;
            document.getElementById('sumaPrecios').innerHTML = nuevaSuma+"€";
            break;
    }
}

function sumarUnidad(vino){

    let sumaUnidadesExistentes = parseInt(document.getElementById('sumaUnidades').innerHTML);
    let nuevaSuma = sumaUnidadesExistentes + 1;
    document.getElementById('sumaUnidades').innerHTML = nuevaSuma;
    
    switch(vino){
        case "blanco":
            let unidadesBlancoExistentes = parseInt(document.getElementById('unidades-blanco').innerHTML);
            let ub = unidadesBlancoExistentes + 1;
            document.getElementById('unidades-blanco').innerHTML = ub;
            sumarPrecio("blanco");
            break;
        
        case "tinto":
            let unidadesTintoExistentes = parseInt(document.getElementById('unidades-tinto').innerHTML);
            let ut = unidadesTintoExistentes + 1;
            document.getElementById('unidades-tinto').innerHTML = ut;
            sumarPrecio("tinto");
            break;
                
        case "rosado":
            let unidadesRosadoExistentes = parseInt(document.getElementById('unidades-rosado').innerHTML);
            let ur = unidadesRosadoExistentes + 1;
            document.getElementById('unidades-rosado').innerHTML = ur;
            sumarPrecio("rosado");
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
}

document.getElementById('carrito-tienda').addEventListener('click', cambiarCarrito);