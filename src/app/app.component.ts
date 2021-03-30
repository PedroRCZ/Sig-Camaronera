import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dash';
  esta = true; // cambiar a True

  inicioSeccion(estado: boolean){
    this.esta = estado;
  }

}
