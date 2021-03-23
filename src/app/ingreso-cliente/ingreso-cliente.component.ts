import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../models/cliente';
import { ClienteServices } from '../services/cliente.service';

@Component({
  selector: 'app-ingreso-cliente',
  templateUrl: './ingreso-cliente.component.html',
  styleUrls: ['./ingreso-cliente.component.css']
})
export class IngresoClienteComponent implements OnInit {

  clienteForm: FormGroup;
  listCliente: Cliente[] = [];
  constructor(private _clienteservices: ClienteServices,
            private fb: FormBuilder,
            private toastr: ToastrService) { 
      this.clienteForm = this.fb.group({
        id: ['', Validators.required],
        nombre: ['', Validators.required],
        ciudad: ['', Validators.required],
        direcc: ['', Validators.required],
        tel: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente(){
    this._clienteservices.getVerCliente().subscribe( data => {
      console.log(data);
      this.listCliente = data;
    }, error => {
      console.log(error);
    })
  }

  agregarCliente(){
    const CLIENTE: Cliente = {
      cliente_id: this.clienteForm.get('id')?.value,
      cliente_nombre: this.clienteForm.get('nombre')?.value,
      cliente_ciudad: this.clienteForm.get('ciudad')?.value,
      cliente_direccion: this.clienteForm.get('direcc')?.value,
      cliente_telefono: this.clienteForm.get('tel')?.value,
    }

    console.log(CLIENTE);
    this._clienteservices.guardarCliente(CLIENTE).subscribe( data => {
      this.toastr.success('El cliente fue registrado con exito', 'Cliente Registrado');
      this.obtenerCliente();
    },error =>{
      console.log(error);
      this.toastr.error('El cliente No fue registrado con exito', 'Cliente No Registrado');
      this.clienteForm.reset();
    })
    
  }

}
