import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
import { FacturarVentasComponent } from './facturar-ventas/facturar-ventas.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { VisualizarInventarioComponent } from './visualizar-inventario/visualizar-inventario.component';
import { IngresoProveedorComponent } from './ingreso-proveedor/ingreso-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    LoginComponent,
    PrincipalComponent,
    FacturarVentasComponent,
    IngresoClienteComponent,
    VisualizarInventarioComponent,
    IngresoProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
