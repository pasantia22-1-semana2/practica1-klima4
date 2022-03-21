class Egreso extends Dato{
    contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._idEgreso = ++Egreso.contadorEgresos;
    }

    get idEgreso(){
        this._idEgreso;
    }
}