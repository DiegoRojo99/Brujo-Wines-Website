var tabla = document.getElementById("tabla-fechas");

function añadirFilaHoras(hora){ 
    var fila = document.createElement('tr');

    for(let index=0; index<7; index++){
        crearFila(hora, fila)
    }

    tabla.appendChild(fila);
}

function crearFila(hora, fila){
    
    var dato = document.createElement('td');
    var texto = document.createTextNode(hora);
    dato.appendChild(texto);
    fila.appendChild(dato);
    
}

let horas=["9:00","10:00","11:00","12:00"]

function rellenarCalendario(){
    for(let t=0; t<horas.length; t++){
        añadirFilaHoras(horas[t]);
    }
}

rellenarCalendario();

function a(){
    
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