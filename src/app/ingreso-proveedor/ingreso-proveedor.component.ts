import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../models/proveedor';
import { ProveedorServices } from '../services/proveedor.services';

@Component({
  selector: 'app-ingreso-proveedor',
  templateUrl: './ingreso-proveedor.component.html',
  styleUrls: ['./ingreso-proveedor.component.css']
})
export class IngresoProveedorComponent implements OnInit {

  proveedorForm: FormGroup;
  listProveedor: Proveedor[] = [];
  constructor(private _proveedorservices: ProveedorServices,
            private fb: FormBuilder,
            private toastr: ToastrService){
      this.proveedorForm = this.fb.group({
        id: ['', Validators.required], 
        nombre: ['', Validators.required], 
        ciudad: ['', Validators.required],
        direc: ['', Validators.required], 
        tel: ['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  agregarProveedor(){
    console.log('ya nada')
    const PROVEEDOR: Proveedor = {
      proveedor_id: this.proveedorForm.get('id')?.value,
      proveedor_nombre: this.proveedorForm.get('nombre')?.value,
      proveedor_ciudad: this.proveedorForm.get('ciudad')?.value,
      proveedor_direccion: this.proveedorForm.get('direc')?.value,
      proveedor_telefono: this.proveedorForm.get('tel')?.value,
    } 

    console.log(PROVEEDOR);
    this._proveedorservices.gruardarProveedor(PROVEEDOR).subscribe(data =>{
      this.toastr.success('El Proveedor fue registrado con exito', 'Proveedor Registrado');
      this.proveedorForm.reset();
    },error =>{
      console.log(error);
      this.toastr.error('El Proveedor No fue registrado con exito', 'Proveedor No Registrado');
      this.proveedorForm.reset();
    })
  }

}
