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
