//ya tengo creado los objetos descripcion y valor.
//descripcion: ventas
//valor: Q250
//ya está creado el contador de ingresos y egresos 

class Ingreso extends Dato{
    contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._idIngreso = ++Ingreso.contadorIngresos;
    }

    get idIngreso(){
        this._idIngreso;
    }
}