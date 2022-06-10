class Reserva {
    constructor (tipo, numeroPersonas, fechaReserva, userId ) {
        this.numeroPersonas=numeroPersonas;
        this.tipo=tipo;
        this.fechaReserva=fechaReserva;
        this.userId=userId;
    }
    toString() {
        return this.userId + ':' + this.tipo + ' para ' + this.numeroPersonas+' personas el '+this.fechaReserva;
    }
}

// Firestore data converter
const reservasConverter = {
    toFirestore: (reserva) => {
        return {
            numeroPersonas: reserva.numeroPersonas,
            tipo: reserva.tipo,
            fechaReserva: reserva.fechaReserva,
            userId : reserva.userId
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Reserva(data.Tipo, data.NumeroPersonas, data.FechaReserva, data.UserId);
    }
};

class Pedido {
    constructor (precio, blanco, rosado, tinto, userId, pagado ) {
        this.precio=precio;
        this.tinto=tinto;
        this.rosado=rosado;
        this.blanco=blanco;
        this.userId=userId;
        this.pagado=pagado
    }
    toString() {
        let totalVinos=0; 
        let blancoNull=true, tintoNull=true, rosadoNull=true;
        let stringTinto=this.tinto+" Titania Tinto";
        let stringBlanco=this.blanco+" Titania Blanco";
        let stringRosado=this.rosado+" Titania Rosado";
        let sY=" y ";
        let string=this.tinto+" Titania Tinto, "+this.blanco+" Titania Blanco y "+this.rosado+" Titania Rosado";
        if(this.tinto!==0){
            totalVinos++;
            tintoNull=false;
        }if(this.blanco!==0){
            totalVinos++;
            blancoNull=false;
        }if(this.rosado!==0){
            totalVinos++;
            rosadoNull=false;
        }
        if(totalVinos===3){
            return string;
        }else if(totalVinos===2){
            if(blancoNull){
                return stringTinto+sY+stringRosado;
            }else if(tintoNull){
                return stringBlanco+sY+stringRosado;
            }else{
                return stringTinto+sY+stringBlanco;
            }
        }else if(totalVinos===1){
            if(!blancoNull){
                return stringBlanco;
            }else if(!rosadoNull){
                return stringRosado;
            }else{
                return stringTinto;
            }
        }else{
            return "El pedido esta vacío";
        }
    }
}

// Firestore data converter
const pedidosConverter = {
    toFirestore: (pedido) => {
        return {
            blanco: pedido.blanco,
            tinto: pedido.tinto,
            rosado: pedido.rosado,
            precio: pedido.precio,
            userId : pedido.userId,
            pagado : pedido.pagado
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Pedido(data.Precio, data.UnidadesBlanco, data.UnidadesRosado, data.UnidadesTinto, data.UserId, data.Pagado);
    }
};


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var year = a.getFullYear() - 1969;
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
  }

  
function timeConverter2(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear() - 1969;
    var month = a.getMonth()+1;
    if(month<10){
        month="0"+month;
    }
    var date = a.getDate();
    var hour = a.getHours();
    if(hour<10){
        hour="0"+hour;
    }
    var min = a.getMinutes();
    var time = year + '-' + month + '-' + date + 'T' + hour + ':' + min;
    return time;
  }
