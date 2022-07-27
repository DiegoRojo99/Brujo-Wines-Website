var tabla = document.getElementById("tabla-fechas");
var horaSeleccionada="";

function añadirFilaHoras(hora){ 
    var fila = document.createElement('tr');

    for(let index=0; index<7; index++){
        crearFila(hora, fila, index)
    }

    tabla.appendChild(fila);
}

function crearFila(hora, fila, index){
    
    var dato = document.createElement('td');
    var texto = document.createTextNode(hora);
    
    switch(index){
        case 0:
            dato.classList.add("lunes",hora);
            break;

        case 1:
            dato.classList.add("martes",hora);
            break;

        case 2:
            dato.classList.add("miercoles",hora);
            break;

        case 3:
            dato.classList.add("jueves",hora);
            break;
            
        case 4:
            dato.classList.add("viernes",hora);
            break;
            
        case 5:
            dato.classList.add("sabado",hora);
            break;
            
        case 6:
            dato.classList.add("domingo",hora);
            break;
    }
    dato.appendChild(texto);
    fila.appendChild(dato);
    
}

let horas=["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]

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

function getDiaSemana(){
    const fecha = new Date();
    const diaSemana = fecha.getDay();
    eliminarDiasPasados(diaSemana);
}

function eliminarDiasPasados(diaSemana){
    for(let i=1; i<diaSemana; i++){
        cambiarColorDia(i);
    }
}

function cambiarColorDia(diaSemana){
    let elementos=[];
    switch(diaSemana){
        case 1:
            elementos = document.getElementsByClassName('lunes');
            break;
            
        case 2:
            elementos = document.getElementsByClassName('martes');
            break;
            
        case 3:
            elementos = document.getElementsByClassName('miercoles');
            break;
            
        case 4:
            elementos = document.getElementsByClassName('jueves');
            break;
            
        case 5:
            elementos = document.getElementsByClassName('viernes');
            break;
            
        case 6:
            elementos = document.getElementsByClassName('sabado');
            break;
            
        case 7:
            elementos = document.getElementsByClassName('domingo');
            break;
    }

    for(var i = 0; i < elementos.length; i++){
        cancelarHoraDisponible(elementos[i]);
	}
}

function getHoraActual(){
    const fecha = new Date();
    const horas = fecha.getHours();
    const diaSemana = fecha.getDay();
    eliminarHorasPasadas(horas,diaSemana);
}

function eliminarHorasPasadas(horas,diaSemana){
    let elementos = [];
    switch(diaSemana){
        case 1:
            elementos = document.getElementsByClassName('lunes');
            break;
            
        case 2:
            elementos = document.getElementsByClassName('martes');
            break;
            
        case 3:
            elementos = document.getElementsByClassName('miercoles');
            break;
            
        case 4:
            elementos = document.getElementsByClassName('jueves');
            break;
            
        case 5:
            elementos = document.getElementsByClassName('viernes');
            break;
            
        case 6:
            elementos = document.getElementsByClassName('sabado');
            break;
            
        case 7:
            elementos = document.getElementsByClassName('domingo');
            break;
    }
    

    let elementosCambiables=[];
    for(var i = 0; i < elementos.length; i++){
        let cc=false;
		if(elementos[i].classList.contains("9:00")){
            cc=comprobarHora(9, horas);
        }else if(elementos[i].classList.contains("10:00")){
            cc=comprobarHora(10, horas);
        }else if(elementos[i].classList.contains("11:00")){
            cc=comprobarHora(11, horas);
        }else if(elementos[i].classList.contains("12:00")){
            cc=comprobarHora(12, horas);
        }else if(elementos[i].classList.contains("13:00")){
            cc=comprobarHora(13, horas);
        }else if(elementos[i].classList.contains("14:00")){
            cc=comprobarHora(14, horas);
        }else if(elementos[i].classList.contains("15:00")){
            cc=comprobarHora(15, horas);
        }else if(elementos[i].classList.contains("16:00")){
            cc=comprobarHora(16, horas);
        }else if(elementos[i].classList.contains("17:00")){
            cc=comprobarHora(17, horas);
        }else if(elementos[i].classList.contains("18:00")){
            cc=comprobarHora(18, horas);
        }
        if(cc){
            elementosCambiables.push(elementos[i]);
        }
	}

    
    for(var a = 0; a < elementosCambiables.length; a++){ 
        cancelarHoraDisponible(elementosCambiables[a]);
	}

}

function comprobarHora(horaPosible, horaActual){
    
    let cambiarColor=false;
    if(horaActual>=horaPosible){
        cambiarColor=true;
    }
    return cambiarColor;
}

function cancelarHoraDisponible(elemento){
    elemento.style.backgroundColor='grey';
    elemento.classList.add('no-disponible')
}

function actualizarMesCalendario(mes){
    let mesTexto=""
    switch(mes){
        case 1:
            mesTexto="ENERO";
            break;
        case 2:
            mesTexto="FEBRERO";
            break;
        case 3:
            mesTexto="MARZO";
            break;
        case 4:
            mesTexto="ABRIL";
            break;
        case 5:
            mesTexto="MAYO";
            break;
        case 6:
            mesTexto="JUNIO";
            break;
        case 7:
            mesTexto="JULIO";
            break;
        case 8:
            mesTexto="AGOSTO";
            break;
        case 9:
            mesTexto="SEPTIEMBRE";
            break;
        case 10:
            mesTexto="OCTUBRE";
            break;
        case 11:
            mesTexto="NOVIEMBRE";
            break;
        case 12:
            mesTexto="DICIEMBRE";
            break;
        default:
            mesTexto="ERROR";
            break;

    }
    document.getElementById('mes-calendario').innerHTML=mesTexto;
}
function mesActual(){
    const fecha = new Date();
    const mesActual = fecha.getMonth()+1;
    actualizarMesCalendario(mesActual);
}

getDiaSemana();
getHoraActual();
mesActual();

function hacerHorasClickables(){
    var tabla = document.getElementById("tabla-fechas");
    var trs = tabla.getElementsByTagName("tr");
    var tds = null;

    for (var i=0; i<trs.length; i++){
        tds = trs[i].getElementsByTagName("td");
        for (var n=0; n<tds.length;n++){
            if(!tds[n].classList.contains('no-disponible')){
                tds[n].onclick=function() { 
                    seleccionarHora(this);
                }
            }
        }
    }
}
function seleccionarHora(elemento){
    if(horaSeleccionada===""){
        horaSeleccionada=elemento;
    }else{
        horaSeleccionada.style.backgroundColor='lightblue'
        horaSeleccionada=elemento;
    }
    elemento.style.backgroundColor='green';
}

hacerHorasClickables();