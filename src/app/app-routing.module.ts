import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseListComponent } from './case-list/case-list.component';
import { CreateCaseComponent } from './create-case/create-case.component';

const routes: Routes = [
  {path: 'cases', component: CaseListComponent},
  {path: 'create-case', component: CreateCaseComponent},
  {path: '', redirectTo: 'cases', pathMatch: 'full'},
  {path: 'update-case/:id', component: CreateCaseComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
