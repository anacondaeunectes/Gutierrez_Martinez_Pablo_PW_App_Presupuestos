import { Injectable } from '@angular/core';
import { Ingreso } from '../modelos/ingreso.model';

/*
* Este servicio se encarga de manejar todos los ingresos ademas de ofrecer funcionalidades relacionadas con estos.
*/

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  listadoIngresos:Ingreso[] = [
    new Ingreso("Test", 300), //0
    new Ingreso("Test 2", 120)//1
  ];

  constructor() { }

  addIngreso(ingreso:Ingreso){
    this.listadoIngresos.push(ingreso);
  }
  
  deleteIngreso(id:number){
    var indice = this.listadoIngresos.find(x => x.idIngreso == id).idIngreso;

    //Dado el problema que da el metodo splice cuando tan solo queda un elemento en el array, se opta por utilizar el metodo pop en tal caso.
    if(this.listadoIngresos.length > 1){
      this.listadoIngresos.splice(indice, 1);
    }else{
      this.listadoIngresos.pop();
    }
  }

  calcularIngresoTotal():number{
    var total:number;
    this.listadoIngresos.forEach(x => total += x.valor);
    return total;
  }
}
