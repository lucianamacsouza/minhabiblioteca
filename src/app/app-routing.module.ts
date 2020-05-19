import { CadastroProprietariosComponent } from './components/cadastro-proprietarios/cadastro-proprietarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'proprietarios', component: CadastroProprietariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
