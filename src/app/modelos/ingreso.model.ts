import { Operacion } from './operacion.modelo';

/* Clase modelo que representa objetos "ingreso". Hereda de operacion y utiliza su constructor para instanciar objetos. Utiliza una propiedad estática con autoincremento como id del ingreso:
* idIngreso -> Identificador de la operacion de ingreso
*/
export class Ingreso extends Operacion{

    public static id:number = 0;
    public idIngreso:number;

    constructor(concepto:string, valor:number){
        super(concepto, valor);
        this.idIngreso = Ingreso.id;
        Ingreso.id++;
    };
}
