import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteServices } from '../services/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../models/cliente';
import { CamaronServices } from '../services/camaron.service';
import { Camaron } from '../models/camaron';
import { Factura } from '../models/facturaAgregar';
import { VerVentasServices } from '../services/ver-venta.service';

@Component({
  selector: 'app-facturar-ventas',
  templateUrl: './facturar-ventas.component.html',
  styleUrls: ['./facturar-ventas.component.css']
})
export class FacturarVentasComponent implements OnInit {

  facturarFrom: FormGroup;
  listCliente: Cliente[] = [];
  listCamaron: Camaron[] = [];
  //CLiente
  idcli: string = "";
  tecli: number = 0;
  dicli: string = "";
  cicli: string = "";
  nomcli: string = "";
  //Camaron
  idCamaron: string = "";
  tallaCam: number = 0;
  pesoCam: number = 0;
  // factura
  date = new Date();
  Iva : number = 0.12;
  sub_t : number = 0;
  cantidad_lb: number = 0;
  precio_cam: number = 0;
  total_fac: number = 0;

  constructor(private _clienteservices: ClienteServices,
              private _camaronservices: CamaronServices,
              private _verventasservices: VerVentasServices,
              private fb: FormBuilder,
              private toastr: ToastrService) { 
                this.facturarFrom = this.fb.group({
                  id_factura: [{value: '' , disabled: true}, Validators.required],
                  fecha_factura: ['', Validators.required],
                  id: ['', Validators.required],
                  nombre: [{value: '' , disabled: true}, Validators.required],
                  ciudad: [{value: '' , disabled: true}, Validators.required],
                  direcc: [{value: '' , disabled: true}, Validators.required],
                  tel: [{value: '' , disabled: true}, Validators.required],
                  idCam: ['', Validators.required],
                  talla: [{value: '' , disabled: true}, Validators.required],
                  peso: [{value: '' , disabled: true}, Validators.required],
                  precio: ['', Validators.required],
                  cantidad: ['', Validators.required],
                  sub_total: [{value: '' , disabled: true}, Validators.required],
                  IVA: [{value: '' , disabled: true}, Validators.required],
                  total: [{value: '' , disabled: true}, Validators.required],
                })
              }


  ngOnInit(): void {
  }

  agregarFactura(){
    const FACTURA: Factura = {
      factura_id: 2, 
      factura_fecha: this.facturarFrom.get('fecha_factura')?.value, 
      cliente_id: this.facturarFrom.get('id')?.value, 
      camaron_id: this.facturarFrom.get('idCam')?.value, 
      factura_precio_camaron: this.facturarFrom.get('precio')?.value, 
      factura_subtotal: this.cantidad_lb * this.precio_cam,
      factura_iva: this.facturarFrom.get('IVA')?.value * 100, 
      factura_precio_final: this.cantidad_lb * this.precio_cam * this.Iva + (this.cantidad_lb * this.precio_cam),
      monto_peso: this.facturarFrom.get('cantidad')?.value,
    }
    console.log(FACTURA);
    if(this.pesoCam >=  this.cantidad_lb){
      this._verventasservices.guardarVentas(FACTURA).subscribe( data => {
        console.log(data)
        this.toastr.success('El Factura fue registrado con exito', 'Factura Registrada');
        this.listCamaron[0].camaron_peso = this.pesoCam - this.cantidad_lb;
        console.log(this.listCamaron[0].camaron_peso);
        this._camaronservices.decrementoCamaron(this.facturarFrom.get('idCam')?.value,  this.listCamaron[0]).subscribe(data4 =>{
          console.log(data4)
        }, error => {
          console.log(error);
        })
        this.facturarFrom.reset();
      },error =>{
        console.log(error);
        this.toastr.error('El Factura No fue registrado con exito', 'Factura No Registrada');
        this.facturarFrom.reset();
      })
    }else{
      this.toastr.error('El Peso del la compra no puede ser mayor Peso Total', 'Factura No Registrada');
    }
    
  }

  consultarCamaron(){
    this._camaronservices.getCamaronById(this.facturarFrom.get('idCam')?.value).subscribe( data1 =>{
      if(Object.keys(data1).length === 0){
        console.log(this.facturarFrom.get('id')?.value)
        this.toastr.error('El Camaron No se encuentra registrado', 'Camaron No Registrado');
        this.idCamaron = "";
        this.tallaCam = 0;
        this.pesoCam = 0;
      }else{
        this.toastr.success('El Camaron fue consultado con exito', 'Camaron Exite');
        this.listCamaron = data1;
        this.idCamaron = this.listCamaron[0].camaron_id + "";
        this.tallaCam = this.listCamaron[0].camaron_talla;
        this.pesoCam = this.listCamaron[0].camaron_peso;
        console.log(data1);
      } 
    }, error => {
      console.log(error);
    })
  }

  consultarCliente(){
    this._clienteservices.getClienteByID(this.facturarFrom.get('id')?.value).subscribe( data2 => { 
      if(Object.keys(data2).length === 0){
        console.log(this.facturarFrom.get('id')?.value)
        this.toastr.error('El Cliente No se encuentra registrado', 'Cliente No Registrado');
        this.idcli = "";
        this.tecli = 0;
        this.dicli = "";
        this.cicli = "";
        this.nomcli = "";
      }else{
        this.toastr.success('El Cliente fue consultado con exito', 'Cliente Exite');
        this.listCliente = data2;
        this.idcli = this.listCliente[0].cliente_id + "";
        this.tecli = this.listCliente[0].cliente_telefono;
        this.dicli = this.listCliente[0].cliente_direccion;
        this.cicli = this.listCliente[0].cliente_ciudad;
        this.nomcli =this.listCliente[0].cliente_nombre;
        console.log(data2);
      } 
    }, error => {
      console.log(error);
    })
  }
}
