import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public presupuestoService:PresupuestoService) { }

  ngOnInit(): void {
  }

}
