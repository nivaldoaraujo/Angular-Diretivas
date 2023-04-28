import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { DiretivaListComponent } from './componentes/diretiva-list/diretiva-list.component';
DiretivasComponent

const routes: Routes = [
  {path: 'exemplos', component: DiretivasComponent},
  {path: 'listar', component: DiretivaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
