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
    new Ingreso("Test", 300, 1),
    new Ingreso("Test 2", 120, 2)
  ];

  constructor() { }

  addIngreso(ingreso:Ingreso){
    this.listadoIngresos.push(ingreso);
  }
  
  deleteIngreso(id:number){
    var indice = this.listadoIngresos.find(x => x.id == id).id;
    //Controlar el caso en el que no encuentre nada. ¿No ejevutar el splice?
    this.listadoIngresos.splice(indice, 1);
  }

  calcularIngresoTotal():number{
    var total:number;
    this.listadoIngresos.forEach(x => total += x.valor);
    return total;
  }
}
