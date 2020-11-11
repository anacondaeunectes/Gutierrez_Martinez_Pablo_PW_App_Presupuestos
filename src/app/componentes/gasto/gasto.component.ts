import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from 'src/app/modelos/gasto.model';
import { EgresosService } from 'src/app/servicios/egresos.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  @Input()
  gasto:Gasto

  constructor(public egresoService:EgresosService) { }

  ngOnInit(): void {
  }

}
