import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisrationComponent } from './regisration/regisration.component';


const routes: Routes = [
  {path:'',redirectTo:"/", pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisrationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
