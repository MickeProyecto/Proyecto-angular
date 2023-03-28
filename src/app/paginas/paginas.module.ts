import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasRoutingModule } from "./paginas-routing.module";
import { TiendaComponent } from './tienda/tienda.component';
import { AirsoftComponent } from './airsoft/airsoft.component';
import { PolicialClienteComponent } from './policial/policial.component';
import { PolicialAdminComponent } from './administrador/productos/policial.component';
import { UsuariosComponent } from './administrador/usuarios/usuarios.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    TiendaComponent,
    AirsoftComponent,
    PolicialClienteComponent,
    PolicialAdminComponent,
    UsuariosComponent,
    CarritoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class PaginasModule {
}
