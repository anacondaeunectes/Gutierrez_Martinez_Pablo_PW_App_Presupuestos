import { Operacion } from './operacion.modelo';

/* Clase modelo que representa objetos "ingreso". Hereda de operacion y utiliza su constructor para instanciar objetos.*/
export class Gasto extends Operacion{
    constructor(concepto:string, valor:number, id:number){
        super(concepto, valor, id);
    };
}
