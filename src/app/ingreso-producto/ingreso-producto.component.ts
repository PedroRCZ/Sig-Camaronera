import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProveedorServices } from '../services/proveedor.services';

@Component({
  selector: 'app-ingreso-producto',
  templateUrl: './ingreso-producto.component.html',
  styleUrls: ['./ingreso-producto.component.css']
})
export class IngresoProductoComponent implements OnInit {

  productoForm: FormGroup;
  constructor(private _proveedorservices:ProveedorServices,
              private fb: FormBuilder,
              private toastr: ToastrService) {
                this.productoForm = this.fb.group({
                  id: ['', Validators.required], 
                  nombre: ['', Validators.required], 
                  precio: ['', Validators.required],
                  idProducto: ['', Validators.required], 
                  nombreProducto: ['', Validators.required]
      })

  }

  ngOnInit(): void {
  }

  consultarProveedor(){
    this._proveedorservices.getProveedorByID(this.productoForm.get('idProducto')?.value).subscribe(data => {
      this.toastr.success('El Proveedor fue registrado con exito', 'Proveedor Registrado');
      console.log(data);
    })
  }

  agregarProducto(){

  }

}
