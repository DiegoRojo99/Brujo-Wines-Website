var tabla = document.getElementById("tabla-fechas");
var horaSeleccionada="";
var fechaVisualizada=new Date();
var fechaVisualizadaAnterior=new Date(fechaVisualizada.getFullYear(),fechaVisualizada.getMonth(),fechaVisualizada.getDate()-fechaVisualizada.getDay());

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

let horas=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]

function rellenarCalendario(){
    for(let t=0; t<horas.length; t++){
        añadirFilaHoras(horas[t]);
    }
}

rellenarCalendario();

function getDiaSemana(){
    const fecha = fechaVisualizada;
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
    const fecha = fechaVisualizada;
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

function actualizarMesCalendario(mes, año){
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
    mesTexto=mesTexto+" "+año;
    document.getElementById('mes-calendario').innerHTML=mesTexto;
}
function mesActual(){
    const fecha = fechaVisualizada;
    const mesActual = fecha.getMonth()+1;
    const año = fecha.getFullYear();
    actualizarMesCalendario(mesActual, año);
}

function actualizarDiasHeader(){
    const fecha = fechaVisualizada;
    const diaSemana = fecha.getDay();
    const diaMes = fecha.getDate();
    
    adh(diaSemana, diaMes);

}
function adh(diaSemana, diaMes){

    let dateSemanaAnterior = new Date(fechaVisualizada.getFullYear(), fechaVisualizada.getMonth(), fechaVisualizada.getDate()-diaSemana)

    actualizarTitulo(1, dateSemanaAnterior);
    actualizarTitulo(2, dateSemanaAnterior);
    actualizarTitulo(3, dateSemanaAnterior);
    actualizarTitulo(4, dateSemanaAnterior);
    actualizarTitulo(5, dateSemanaAnterior);
    actualizarTitulo(6, dateSemanaAnterior);
    actualizarTitulo(7, dateSemanaAnterior);

}

function actualizarTitulo(diaSemana,dateSemanaAnterior){
    
    let nuevoDia = new Date(dateSemanaAnterior);
    switch(diaSemana){
        case 1:
            nuevoDia.setDate(nuevoDia.getDate()+1);
            document.getElementById('lunes-header').innerHTML="Lunes "+(nuevoDia.getDate());
            break;
            
        case 2:
            nuevoDia.setDate(nuevoDia.getDate()+2);
            document.getElementById('martes-header').innerHTML="Martes "+(nuevoDia.getDate());
            break;
            
        case 3:
            nuevoDia.setDate(nuevoDia.getDate()+3);
            document.getElementById('miercoles-header').innerHTML="Miércoles "+(nuevoDia.getDate());
            break;
            
        case 4:
            nuevoDia.setDate(nuevoDia.getDate()+4);
            document.getElementById('jueves-header').innerHTML="Jueves "+(nuevoDia.getDate());
            break;
            
        case 5:
            nuevoDia.setDate(nuevoDia.getDate()+5);
            document.getElementById('viernes-header').innerHTML="Viernes "+(nuevoDia.getDate());
            break;
            
        case 6:
            nuevoDia.setDate(nuevoDia.getDate()+6);
            document.getElementById('sabado-header').innerHTML="Sábado "+(nuevoDia.getDate());
            break;
            
        case 7:
            nuevoDia.setDate(nuevoDia.getDate()+7);
            document.getElementById('domingo-header').innerHTML="Domingo "+(nuevoDia.getDate());
            break;
    }
}

getDiaSemana();
getHoraActual();
mesActual();
actualizarDiasHeader();

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
    let dia=obtenerDia(elemento);
    let mes=obtenerMes(dia);
    let año=obtenerAño(0,0);
    let hora=elemento.innerHTML;
    hora = hora.substr(0,2);
    let dateSeleccionada=new Date(año,mes,dia);
    dateSeleccionada.setHours(hora);
}

function obtenerDia(elemento){
    let diaTexto="";
    if(elemento.classList.contains('lunes')){
        diaTexto=document.getElementById('lunes-header').innerHTML;
    }else if(elemento.classList.contains('martes')){
        diaTexto=document.getElementById('martes-header').innerHTML;
    }else if(elemento.classList.contains('miercoles')){
        diaTexto=document.getElementById('miercoles-header').innerHTML;
    }else if(elemento.classList.contains('jueves')){
        diaTexto=document.getElementById('jueves-header').innerHTML;
    }else if(elemento.classList.contains('viernes')){
        diaTexto=document.getElementById('viernes-header').innerHTML;
    }else if(elemento.classList.contains('sabado')){
        diaTexto=document.getElementById('sabado-header').innerHTML;
    }else if(elemento.classList.contains('domingo')){
        diaTexto=document.getElementById('domingo-header').innerHTML;
    }
    
    diaTexto = diaTexto.substr(-2, 2);
    return diaTexto;
}
function obtenerMes(diaElegido){
    let mes=fechaVisualizadaAnterior.getMonth();
    let da=fechaVisualizadaAnterior.getDate();
    if(da>20 && diaElegido<8 && mes!==12){
        mes++;
    }else if(da>20 && diaElegido<8 && mes===12){
        mes=0;
    }
    return mes;
}
function obtenerAño(dia, mes){
    let año=document.getElementById('mes-calendario').innerHTML;
    año = año.substr(-4, 4);
    return año;
}

hacerHorasClickables();
flechasClickables();

function semanaAnterior(){
    fechaVisualizada = new Date(fechaVisualizada.getFullYear(), fechaVisualizada.getMonth(), fechaVisualizada.getDate() - 7);
    fechaVisualizadaAnterior=new Date(fechaVisualizada.getFullYear(),fechaVisualizada.getMonth(),fechaVisualizada.getDate()-fechaVisualizada.getDay());
    actualizarCalendarioCompleto();
}
function semanaSiguiente(){
    fechaVisualizada = new Date(fechaVisualizada.getFullYear(), fechaVisualizada.getMonth(), fechaVisualizada.getDate() + 7);
    fechaVisualizadaAnterior=new Date(fechaVisualizada.getFullYear(),fechaVisualizada.getMonth(),fechaVisualizada.getDate()-fechaVisualizada.getDay());
    casillasAzules();
    actualizarCalendarioCompleto();
}

function eliminarSemanasPasadas(){
    let diaSemana = fechaVisualizada.getDay();
    let diaAnteriorSemana=new Date(fechaVisualizada.getFullYear(), fechaVisualizada.getMonth(), fechaVisualizada.getDate()-diaSemana);

    for(let ind=1; ind<8;ind++){
        let fechaCalculada = new Date(diaAnteriorSemana.getFullYear(), diaAnteriorSemana.getMonth(), diaAnteriorSemana.getDate()+ind);
        let diaActual= new Date();

        if(fechaCalculada.getFullYear()===diaActual.getFullYear() &&
        fechaCalculada.getMonth()===diaActual.getMonth() &&
        fechaCalculada.getDate()===diaActual.getDate()){
            eliminarHorasPasadas(diaActual.getHours(), diaSemana);
        }else if(fechaCalculada<diaActual){
            cambiarColorDia(ind);
        }
    }
}

function flechasClickables(){
    let flechaIzquierda = document.getElementById('left-arrow');
    flechaIzquierda.onclick=function() { 
        semanaAnterior();
    }
    let flechaDerecha = document.getElementById('right-arrow');
    flechaDerecha.onclick=function() { 
        semanaSiguiente();
    }
}
function casillasAzules(){
    document.getElementById('tabla-fechas').innerHTML='<tr><th id="lunes-header">Lunes</th><th id="martes-header">Martes</th><th id="miercoles-header">Miércoles</th><th id="jueves-header">Jueves</th><th id="viernes-header">Viernes</th><th id="sabado-header">Sábado</th><th id="domingo-header">Domingo</th></tr>'
    rellenarCalendario();
}

function actualizarCalendarioCompleto(){
    actualizarDiasHeader();
    eliminarDiasPasados();
    mesActual();
    getHoraActual();
    eliminarSemanasPasadas();
    hacerHorasClickables();
}