import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  @Output () acceso = new EventEmitter <boolean> ();

  usuarioInput:string = "";
  contraInput:string = "";

  inicioSec():void{
    this.acceso.emit(false)
  }

  login(form:NgForm){
    const usuario = form.value.user;
    const password = form.value.password;
  }
}
