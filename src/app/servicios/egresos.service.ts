import { Injectable } from '@angular/core';
import { Gasto } from '../modelos/gasto.model';

/*
* Este servicio se encarga de manejar todos los ingresos ademas de ofrecer funcionalidades relacionadas con estos.
*/

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  listadoGastos:Gasto[]= [
    new Gasto("Alquiler servidor1", 180.60),
    new Gasto("Alquiler servidor2", 180.60),
    new Gasto("Alquiler servidor3", 70.60),
  ];

  constructor() { }

  addGasto(Gasto:Gasto){
    this.listadoGastos.push(Gasto);
  }
  
  deleteGasto(id:number){
    var indice = this.listadoGastos.find(x => x.idEgreso == id).idEgreso;

    //Dado el problema que da el metodo splice cuando tan solo queda un elemento en el array, se opta por utilizar el metodo pop en tal caso.
    if(this.listadoGastos.length > 1){
      this.listadoGastos.splice(indice, 1);
    }else{
      this.listadoGastos.pop();
    }  }

  calcularEgresoTotal():number{
    var total:number = 0;
    this.listadoGastos.forEach(x => total += x.valor);
    return total;
  }

}
