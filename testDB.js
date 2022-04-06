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