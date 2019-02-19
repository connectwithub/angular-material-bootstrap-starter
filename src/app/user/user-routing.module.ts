import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:"*",
    pathMatch:'full',
    redirectTo:'login'
  },
  {
      path:"**",
      redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
