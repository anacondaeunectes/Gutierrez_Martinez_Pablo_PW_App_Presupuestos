import { Injectable } from '@angular/core';
import { Gasto } from '../modelos/gasto.model';
import { PresupuestoService } from './presupuesto.service';

/*
* Este servicio se encarga de manejar todos los ingresos ademas de ofrecer funcionalidades relacionadas con estos.
*/

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  listadoGastos:Gasto[]= [
    new Gasto("Alquiler servidor Grande 1", 180.60),
    new Gasto("Alquiler servidor Grande 2", 180.60),
    new Gasto("Alquiler servidor pequeño", 70.60),
  ];

  constructor() { }

  addGasto(gasto:Gasto){
    if (gasto.concepto != null && gasto.valor != null) {
          this.listadoGastos.push(gasto);
    }
  }
  
  deleteGasto(id:number){
    var indice = this.listadoGastos.indexOf(this.listadoGastos.find(x => x.idEgreso == id));

    this.listadoGastos.splice(indice, 1);
  }

  calcularEgresoTotal():number{
    var total:number;
    // this.listadoGastos.forEach(x => total += x.valor);

    total = this.listadoGastos.reduce( (acc, curVal) => acc + curVal.valor, 0);

    return total;
  }

}
