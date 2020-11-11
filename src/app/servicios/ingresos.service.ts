import { Injectable } from '@angular/core';
import { Ingreso } from '../modelos/ingreso.model';
import { PresupuestoService } from './presupuesto.service';

/*
* Este servicio se encarga de manejar todos los ingresos ademas de ofrecer funcionalidades relacionadas con estos.
*/

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  listadoIngresos:Ingreso[] = [
    new Ingreso("Subvención", 300.35),
    new Ingreso("Venta producto 1", 120.90),
    new Ingreso("Venta producto 2", 30.00),
    new Ingreso("Acciones", 180.50),
  ];

  constructor() { }

  addIngreso(ingreso:Ingreso){
    if (ingreso.concepto != null && ingreso.valor != null) {
      this.listadoIngresos.push(ingreso);
    }
  }
  
  deleteIngreso(id:number){
    var indice = this.listadoIngresos.indexOf(this.listadoIngresos.find(x => x.idIngreso == id));

    this.listadoIngresos.splice(indice, 1);
  }

  calcularIngresoTotal():number{
    var total:number;
    // this.listadoIngresos.forEach(x => total += x.valor);

    total = this.listadoIngresos.reduce( (acc, curVal) => acc + curVal.valor, 0);

    return total;
  }
}
