import { Injectable } from '@angular/core';
import { Gasto } from '../modelos/gasto.model';

/*
* Este servicio se encarga de manejar todos los ingresos ademas de ofrecer funcionalidades relacionadas con estos.
*/

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  listadoGastos:Gasto[];

  constructor() { }

  addGasto(Gasto:Gasto){
    this.listadoGastos.push(Gasto);
  }
  
  deleteGasto(id:number){
    var indice = this.listadoGastos.find(x => x.id == id).id;
    //Controlar el caso en el que no encuentre nada. ¿No ejevutar el splice?
    this.listadoGastos.splice(indice, 1);
  }

  calcularEgresoTotal():number{
    var total:number;
    this.listadoGastos.forEach(x => total += x.valor);
    return total;
  }
  
}
