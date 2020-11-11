import { Operacion } from './operacion.modelo';

/* Clase modelo que representa objetos "ingreso". Hereda de operacion y utiliza su constructor para instanciar objetos. Utiliza una propiedad estática con autoincremento como id del gasto:
* id -> Identificador de la operacion de egreso
*/
export class Gasto extends Operacion{

    public static id:number = 0;
    public idEgreso:number;

    constructor(concepto:string, valor:number){
        super(concepto, valor);
        this.idEgreso = Gasto.id;
        Gasto.id++;
    };
}
