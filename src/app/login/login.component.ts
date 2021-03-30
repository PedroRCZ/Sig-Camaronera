import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { login } from '../models/login';
import { LoginServices } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Output () acceso = new EventEmitter <boolean> ();

  usuarioInput:string = "";
  contraInput:string = "";
  ingreso: boolean = true;
  listlogin: login[] = [];
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _loginservices: LoginServices,
    private toastr: ToastrService) { 
      this.loginForm = this.fb.group({
              usu: [ '' , Validators.required],
              contra: ['', Validators.required],
      })
  
  }

  inicioSec(){
    this.acceso.emit(this.ingreso)
  }

  ngOnInit(): void {
  }

  login(){
    const LOGIN : login = {
      id: "1",
      usuario_nombre: this.loginForm.get('usu')?.value,
      usuario_password: this.loginForm.get('contra')?.value,
    }
    this._loginservices.getVerLogin(LOGIN).subscribe(data =>{
      this.listlogin = data;
      console.log(data);
      if(Object.keys(data).length === 0){ 
        this.toastr.error('Usuario o Contraseña incorrecto', 'Login no exitoso');
      }else{
        this.ingreso = false;
        console.log(this.ingreso)
        this.acceso.emit(this.ingreso)
        this.loginForm.reset();
      }
    },error =>{
      console.log(error);
    })
  }
}
