import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturarVentasComponent } from './facturar-ventas/facturar-ventas.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { IngresoConsumoComponent } from './ingreso-consumo/ingreso-consumo.component';
import { IngresoGastoComponent } from './ingreso-gasto/ingreso-gasto.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';
import { IngresoProveedorComponent } from './ingreso-proveedor/ingreso-proveedor.component';
import { LoginComponent } from './login/login.component';
import { MostarDashComponent } from './mostar-dash/mostar-dash.component';
import { PrincipalComponent } from './principal/principal.component';
import { VentasComponent } from './ventas/ventas.component';
import { VisualizarInventarioComponent } from './visualizar-inventario/visualizar-inventario.component';

const routes: Routes = [
  {path: 'dashboard', component: MostarDashComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ventas/visualizar', component: VentasComponent },
  {path: 'ventas/facturar', component: FacturarVentasComponent },
  {path: 'cliente', component: IngresoClienteComponent},
  {path: 'inventario', component: VisualizarInventarioComponent},
  {path: 'gastos', component: IngresoGastoComponent},
  {path: 'gastos/producto', component: IngresoProductoComponent},
  {path: 'gastos/proveedor', component: IngresoProveedorComponent},
  {path: 'consumo', component: IngresoConsumoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
