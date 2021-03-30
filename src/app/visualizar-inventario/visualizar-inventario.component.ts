import { Component, OnInit } from '@angular/core';
import { Cosumo } from '../models/consumo';
import { ObtenerGastos } from '../models/obtenerGasto';
import { ObtenerCosumo } from '../models/obtenerConsumo';
import { ConsumoServices } from '../services/consumo.service';
import { GastosServices } from '../services/gastos.servive';

@Component({
  selector: 'app-visualizar-inventario',
  templateUrl: './visualizar-inventario.component.html',
  styleUrls: ['./visualizar-inventario.component.css']
})
export class VisualizarInventarioComponent implements OnInit {

  listGastos: ObtenerGastos[] =[];
  listGastos1: ObtenerGastos[] =[];
  listConsumo: ObtenerCosumo[] = [];

  constructor(private _gastoservices: GastosServices,
              private _consumoservices: ConsumoServices) { }

  ngOnInit(): void {
    this.obtenerConsumo();
    this.obtenerGastos();
  }

  obtenerGastos(){
    this._gastoservices.getGastoSumado().subscribe( data1 => {
      this.listGastos = data1;
      this.listGastos1 = data1;
      for (let i = 0; i < this.listGastos.length; i++) {
        for(let j = 0; j < this.listConsumo.length; j++){
          if(this.listGastos[i].producto_id == this.listConsumo[j].producto_id){
            this.listGastos1[i].total = this.listGastos1[i].total - this.listConsumo[j]?.total;
          }
        }
      }
      console.log(this.listGastos1)
    }, error => {
      console.log(error);
    })
  }
  
  obtenerConsumo(){ 
    this._consumoservices.getConsumoSumado().subscribe( data => {
      this.listConsumo = data;
    }, error => {
      console.log(error);
    })
    
  }
}
