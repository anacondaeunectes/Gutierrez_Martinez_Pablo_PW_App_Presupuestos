import { Injectable } from '@angular/core';
import { EgresosService } from './egresos.service';
import { IngresosService } from './ingresos.service';

/*
* Este servicio busca controlar el presupuesto total, es decir la suma total de ingresos y gastos.
*/

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuestoTotal:number;

  constructor(public ingresosService:IngresosService, public gastosService:EgresosService) { }

  actualizarPresupuesto(){
    this.presupuestoTotal = this.ingresosService.calcularIngresoTotal() - this.gastosService.calcularEgresoTotal();
  }
}
