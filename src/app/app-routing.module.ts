import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginformComponent } from './loginform/loginform.component';
import { RegformComponent } from './regform/regform.component';

const routes: Routes = [
  {path:'login',component:LoginformComponent},
  {path:'reg',component:RegformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
