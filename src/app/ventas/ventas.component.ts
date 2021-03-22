import { Component, OnInit } from '@angular/core';
import { Factura } from '../models/factura';
import { VerVentasServices } from '../services/ver-venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  listFacturas: Factura[] = [];
  constructor( private _verventasSevices: VerVentasServices) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this._verventasSevices.getVerVentas().subscribe(data =>{
      console.log(data);
      this.listFacturas = data;
    }, error => {
      console.log(error);
    })
  }

}
