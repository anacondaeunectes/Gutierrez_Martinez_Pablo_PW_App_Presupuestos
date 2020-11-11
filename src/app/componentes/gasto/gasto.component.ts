import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from 'src/app/modelos/gasto.model';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  @Input()
  gasto:Gasto

  constructor(public presupuestoServicio:PresupuestoService) { }

  ngOnInit(): void {
  }

}
