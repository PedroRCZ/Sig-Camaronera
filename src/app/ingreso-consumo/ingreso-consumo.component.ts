import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { Piscina} from '../models/piscina';
import { ProductoServices } from '../services/producto.service';
import { ConsumoServices } from '../services/consumo.service';
import { Corrida } from '../models/corrida';

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
  listProducto: Producto[] = [];
  listPiscina: Piscina[] = [];
  listCorrida: Corrida[] = [];

  consumoForm: FormGroup;
  constructor(private fb: FormBuilder,
              private _productoservices: ProductoServices,
              private _consumoservices: ConsumoServices,
              private toastr: ToastrService
              ) { this.consumoForm = this.fb.group({
                id: ['', Validators.required], 
                idCorrida: ['', Validators.required], 
                idPisina: [{value: '' , disabled: true}, Validators.required],
                idProducto: ['', Validators.required],
                nomProduc: [{value: '' , disabled: true}, Validators.required],
                cantidad: ['', Validators.required],
    })}

  ngOnInit(): void {
  }

  agregarConsumo(){
    
  }
  consultarPisina(){
    this._consumoservices.getCorridaById(this.consumoForm.get('idCorrida')?.value).subscribe(data1 => {
      if(Object.keys(data1).length === 0){
        this.toastr.error('El Corrida No se encuentra registrado', 'Corrida No Registrado');
        this.idPis = " ";
        this.idCor = " ";
      }else{
        this.toastr.success('El Corrida fue consultado con exito', 'Corrida Exite');
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
