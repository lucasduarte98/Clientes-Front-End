import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {path: 'clientes', component: ClienteListComponent},
  {path: 'create-cliente', component: ClienteFormComponent},
  {path: '', redirectTo: 'clientes', pathMatch: 'full'},
  {path: 'update-cliente/:id', component: ClienteFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
