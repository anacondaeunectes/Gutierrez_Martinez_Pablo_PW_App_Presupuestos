import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/modelos/ingreso.model';
import { IngresosService } from 'src/app/servicios/ingresos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  @Input()
  ingreso:Ingreso;

  constructor(public ingresosService:IngresosService) { }

  ngOnInit(): void {
  }

}
