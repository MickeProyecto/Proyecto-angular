import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { UsuariosComponent } from './paginas/administrador/usuarios/usuarios.component';
import { AirsoftComponent } from './paginas/airsoft/airsoft.component';
import { PolicialClienteComponent } from './paginas/policial/policial.component';
import { PolicialAdminComponent } from './paginas/administrador/productos/policial.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'policialCliente', component: PolicialClienteComponent },
  { path: 'policialAdmin', component: PolicialAdminComponent },
  { path: 'airsoft', component: AirsoftComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
