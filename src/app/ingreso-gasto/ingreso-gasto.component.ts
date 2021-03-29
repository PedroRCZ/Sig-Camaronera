import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { Proveedor } from '../models/proveedor';
import { GastosServices } from '../services/gastos.servive';
import { ProductoServices } from '../services/producto.service';
import { ProveedorServices } from '../services/proveedor.services';
import { ProdProvServices } from '../services/prodprov.service';
import { Gastos } from '../models/gastos';
import { ProdProv } from '../models/prodprov';

@Component({
  selector: 'app-ingreso-gasto',
  templateUrl: './ingreso-gasto.component.html',
  styleUrls: ['./ingreso-gasto.component.css']
})
export class IngresoGastoComponent implements OnInit {
  nomPro: string = "";
  nomProd: string = "";
  idPro: string = "";
  idProd: string = "";
  proprov: number = 0;
  gastosForm: FormGroup;
  listProveedor: Proveedor[] = [];
  listProducto: Producto[] = [];
  listProdProv: ProdProv[] = [];
  
  constructor(private _proveedorservices: ProveedorServices,
              private _productoservices: ProductoServices,
              private _gastosservices: GastosServices,
              private _prodprovservices: ProdProvServices,
              private fb: FormBuilder,
              private toastr: ToastrService) { 
              this.gastosForm = this.fb.group({
                id_gasto: ['', Validators.required], 
                idProveedor: ['', Validators.required], 
                nombreProveedor: [{value: '' , disabled: true}, Validators.required],
                idProducto: ['', Validators.required], 
                nombreProducto: [{value: '' , disabled: true}, Validators.required],
                descripcion: ['', Validators.required],
                cantidad: ['', Validators.required],
                monto: ['', Validators.required]
              })
  }

  ngOnInit(): void {
    
  }

  consultarProducto(){
    this._productoservices.getProductoByID(this.gastosForm.get('idProducto')?.value).subscribe(data => {
      if(Object.keys(data).length === 0){
        this.toastr.error('El Producto No se encuentra registrado', 'Producto No Registrado');
        this.nomProd = " ";
        this.idProd = " ";
      }else{
        this.toastr.success('El Producto fue consultado con exito', 'Producto Exite');
        this.listProducto = data;
        this.nomProd = this.listProducto[0].producto_nombre;
        console.log(data);
      } 
    },error =>{
      console.log(error);
    })
  }

  agregarGasto(){
    console.log("HO")
    const PRODPROV: ProdProv = {
      producto_proveedor_id: this.proprov, //pendiente
      proveedor_id:this.gastosForm.get('idProveedor')?.value,
      producto_id:this.gastosForm.get('idProducto')?.value,
    }
    const GASTOS: Gastos = {
      gasto_id: this.gastosForm.get('id_gasto')?.value,
      producto_proveedor_id: this.proprov,//pendiente
      gasto_descripcion: this.gastosForm.get('descripcion')?.value,
      gasto_cantidad: this.gastosForm.get('cantidad')?.value,
      gastos_monto: this.gastosForm.get('monto')?.value,
    }
    console.log('Hola');
    this._prodprovservices.getVerProdProvEx(PRODPROV).subscribe(data => {
      if(Object.keys(data).length === 0){
        console.log('nada')
        this._prodprovservices.guardarPro(PRODPROV).subscribe(data1 => {
          console.log(data1);
        },error =>{
          console.log(error);
        })
      }else{
        this.listProdProv = data;
        this.proprov = this.listProdProv[0].producto_proveedor_id;
        this._gastosservices.guardarGastos(GASTOS).subscribe(data3 => {
          console.log(data3);
          this.toastr.success('El Gasto fue registrado con exito', 'Gasto Registrado');
          this.gastosForm.reset();
        },error =>{
          console.log(error);
          this.toastr.error('El Gasto No fue registrado con exito', 'Gasto No Registrado');
           this.gastosForm.reset();
        })
        console.log(data);
      } 
    },error =>{
      console.log(error);
    }) 
    
  }

  
  
  consultarProveedor(){
    this._proveedorservices.getProveedorByID(this.gastosForm.get('idProveedor')?.value).subscribe(data => {
      if(Object.keys(data).length === 0){
        this.toastr.error('El Proveedor No se encuentra registrado', 'Proveedor No Registrado');
        this.nomPro = " ";
        this.idPro = " ";
      }else{
        this.toastr.success('El Proveedor fue consultado con exito', 'Proveedor Exite');
        this.listProveedor = data;
        this.nomPro = this.listProveedor[0].proveedor_nombre;
        console.log(data);
      } 
    },error =>{
      console.log(error);
    })
  }

}
