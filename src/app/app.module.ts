import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { PesqProprietariosComponent } from './components/pesq-proprietarios/pesq-proprietarios.component';
import { CadastroProprietariosComponent } from './components/cadastro-proprietarios/cadastro-proprietarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CardInicialComponent } from './components/card-inicial/card-inicial.component';
import { PesqLivrosComponent } from './components/pesq-livros/pesq-livros.component';
import { CadastroLivrosComponent } from './components/cadastro-livros/cadastro-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    PesqProprietariosComponent,
    CadastroProprietariosComponent,
    CardInicialComponent,
    PesqLivrosComponent,
    CadastroLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
