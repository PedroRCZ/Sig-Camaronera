import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturarVentasComponent } from './facturar-ventas/facturar-ventas.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { VisualizarInventarioComponent } from './visualizar-inventario/visualizar-inventario.component';
import { IngresoProveedorComponent } from './ingreso-proveedor/ingreso-proveedor.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';
import { IngresoGastoComponent } from './ingreso-gasto/ingreso-gasto.component';
import { IngresoConsumoComponent } from './ingreso-consumo/ingreso-consumo.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    LoginComponent,
    PrincipalComponent,
    FacturarVentasComponent,
    IngresoClienteComponent,
    VisualizarInventarioComponent,
    IngresoProveedorComponent,
    IngresoProductoComponent,
    IngresoGastoComponent,
    IngresoConsumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
