import { Component, OnInit } from '@angular/core';
import { Cosumo } from '../models/consumo';
import { Gastos } from '../models/gastos';
import { ConsumoServices } from '../services/consumo.service';
import { GastosServices } from '../services/gastos.servive';

@Component({
  selector: 'app-visualizar-inventario',
  templateUrl: './visualizar-inventario.component.html',
  styleUrls: ['./visualizar-inventario.component.css']
})
export class VisualizarInventarioComponent implements OnInit {

  listGastos: Gastos[] = [];
  listGastos1: Gastos[] = [];
  listConsumo: Cosumo[] = [];
  listConsumo1: Cosumo[] = [];

  constructor(private _gastoservices: GastosServices,
              private _consumoservices: ConsumoServices) { }

  ngOnInit(): void {
    this.obtenerConsumo();
    this.obtenerGastos();
    
  }

  obtenerGastos(){
    this._gastoservices.getVerGastos().subscribe( data => {
      console.log(data);
      this.listGastos = data;
    }, error => {
      console.log(error);
    })
        
  }
  obtenerConsumo(){ //cambiar
    this._consumoservices.getVerConsumo().subscribe( data => {
      console.log(data);
      this.listConsumo = data;
    }, error => {
      console.log(error);
    })
    
  }

  

}
