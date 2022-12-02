import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CadastroDeCarrosComponent } from './cadastro-de-carros/cadastro-de-carros.component';
import { RouterModule } from '@angular/router';
import { ListaDeCarrosComponent } from './lista-de-carros/lista-de-carros.component';
import { DetalhesDoCarroComponent } from './detalhes-do-carro/detalhes-do-carro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroDeCarrosComponent, ListaDeCarrosComponent, DetalhesDoCarroComponent],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    RouterModule,
    FormsModule,
  ], exports: [
    CadastroDeCarrosComponent,
    DetalhesDoCarroComponent,
    ListaDeCarrosComponent
  ]
})
export class CarrosModule { }
