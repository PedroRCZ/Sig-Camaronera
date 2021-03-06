import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { Piscina} from '../models/piscina';
import { ProductoServices } from '../services/producto.service';
import { ConsumoServices } from '../services/consumo.service';
import { Corrida } from '../models/corrida';
import { Cosumo } from '../models/consumo';
import { ObtenerGastos } from '../models/obtenerGasto';
import { GastosServices } from '../services/gastos.servive';


@Component({
  selector: 'app-ingreso-consumo',
  templateUrl: './ingreso-consumo.component.html',
  styleUrls: ['./ingreso-consumo.component.css']
})
export class IngresoConsumoComponent implements OnInit {
  
  idPro: string = "";
  nomPro: string = "";
  idPis : string = "";
  idCor : string = "";
  estado: boolean = false;
  listProducto: Producto[] = [];
  listPiscina: Piscina[] = [];
  listCorrida: Corrida[] = [];
  listGastos: ObtenerGastos[] =[];

  consumoForm: FormGroup;
  constructor(private fb: FormBuilder,
              private _productoservices: ProductoServices,
              private _consumoservices: ConsumoServices,
              private _gastoservices: GastosServices,
              private toastr: ToastrService
              ) { this.consumoForm = this.fb.group({
                id: [{value: '' , disabled: true}, Validators.required],
                idCorrida: ['', Validators.required], 
                idPisina: [{value: '' , disabled: true}, Validators.required],
                idProducto: ['', Validators.required],
                nomProduc: [{value: '' , disabled: true}, Validators.required],
                cantidad: ['', Validators.required],
    })}

  ngOnInit(): void {
    this.obtenerGastos();
  }

  obtenerGastos(){
    this._gastoservices.getGastoSumado().subscribe( data1 => {
      this.listGastos = data1;
      console.log(this.listGastos)
    }, error => {
      console.log(error);
    })
  }

  agregarConsumo(){
    const CONSUMO: Cosumo = {
      consumo_id: 1,
      corrida_id: this.consumoForm.get('idCorrida')?.value,
      producto_id: this.consumoForm.get('idProducto')?.value,
      consumo_cantidad: this.consumoForm.get('cantidad')?.value,
    }
    for (let i = 0; i < this.listGastos.length; i++) {
      if(this.listGastos[i].producto_id == CONSUMO.producto_id){
        if(this.listGastos[i].total > CONSUMO.consumo_cantidad){
          this.estado = true;
        }
      }
    }
    console.log(this.estado);
    if(this.estado){
      console.log(CONSUMO);
      this._consumoservices.guardarConsumo(CONSUMO).subscribe( data => {
      this.toastr.success('El Consumo fue registrado con exito', 'Consumo Registrado');
      this.consumoForm.reset();
      },error =>{
        console.log(error);
        this.toastr.error('El Consumo No fue registrado con exito', 'Consumo No Registrado');
      })
    }else{
      this.toastr.error('El Consumo no puede ser mayor Peso al Stock', 'Consumo No Registrado');
    }
    
    
  }
  consultarPisina(){
    this._consumoservices.getCorridaById(this.consumoForm.get('idCorrida')?.value).subscribe(data1 => {
      if(Object.keys(data1).length === 0){
        this.toastr.error('La Corrida No se encuentra registrado', 'Corrida No Registrado');
        this.idPis = " ";
        this.idCor = " ";
      }else{
        this.toastr.success('La  Corrida fue consultado con exito', 'Corrida Exite');
        this.listCorrida = data1;
        console.log(data1);
        this.idPis = this.listCorrida[0].piscina_id;
      } 
    },error =>{
      console.log(error);
    })
  }
  consultarProducto(){
    this._productoservices.getProductoByID(this.consumoForm.get('idProducto')?.value).subscribe(data => {
      if(Object.keys(data).length === 0){
        this.toastr.error('El Producto No se encuentra registrado', 'Producto No Registrado');
        this.nomPro = " ";
        this.idPro = " ";
      }else{
        this.toastr.success('El Producto fue consultado con exito', 'Producto Exite');
        this.listProducto = data;
        this.nomPro = this.listProducto[0].producto_nombre;
        console.log(data);
      } 
    },error =>{
      console.log(error);
    })
  }

}
