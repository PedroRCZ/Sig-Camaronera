import { Component, EventEmitter, Output } from '@angular/core';

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
}
