import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/modelos/gasto.model';
import { Ingreso } from 'src/app/modelos/ingreso.model';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-form-operacion',
  templateUrl: './form-operacion.component.html',
  styleUrls: ['./form-operacion.component.css']
})
export class FormOperacionComponent implements OnInit {

  valorSelect:string = "ing";

  concepto:string;
  valor:number;

  constructor(public presupuestoServicio:PresupuestoService) { }

  ngOnInit(): void {
  }

  addIngreso(){
    this.presupuestoServicio.ingresosService.addIngreso(new Ingreso(this.concepto, this.valor));
  }

  addEgreso(){
    this.presupuestoServicio.gastosService.addGasto(new Gasto(this.concepto, this.valor));
  }

  changeSelect(){
    if (this.valorSelect == "ing") {
      this.valorSelect = "egr"
    } else {
      this.valorSelect = "ing"
    }
  }

}
