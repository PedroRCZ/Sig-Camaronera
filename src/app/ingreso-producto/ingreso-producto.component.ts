import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoServices } from '../services/producto.service';

@Component({
  selector: 'app-ingreso-producto',
  templateUrl: './ingreso-producto.component.html',
  styleUrls: ['./ingreso-producto.component.css']
})
export class IngresoProductoComponent implements OnInit {

  productoForm: FormGroup;
  constructor(private _productoservices:ProductoServices,
              private fb: FormBuilder,
              private toastr: ToastrService) {
                this.productoForm = this.fb.group({
                  id: ['', Validators.required], 
                  nombre: ['', Validators.required], 
                  precio: ['', Validators.required]
      })

  }

  ngOnInit(): void {
  }

  agregarProducto(){
    const PRODUCTO: Producto = {
      producto_id: this.productoForm.get('id')?.value,
      producto_nombre: this.productoForm.get('nombre')?.value,
      producto_precio: this.productoForm.get('precio')?.value,
    }

    console.log(PRODUCTO);
    this._productoservices.guardarProducto(PRODUCTO).subscribe( data => {
      this.toastr.success('El producto fue registrado con exito', 'Producto Registrado');
      this.productoForm.reset();
    },error =>{
      console.log(error);
      this.toastr.error('El producto No fue registrado con exito', 'Producto No Registrado');
    })
    
  }

}
