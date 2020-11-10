/*
* Clase modelo que representa una operación. Por ello cuenta con:
* concepto:string -> Concepto o descripción del ingreso
* valor:number -> Cuantía del ingreso
* id:number -> ID de la operación
*/
export class Operacion {
    constructor(public concepto:string, public valor:number, public id:number){}
}
