import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'create',
        component: CreateComponent
      },
      {
        path:'view',
        component: ViewComponent
      },
      {
        path:"*",
        pathMatch:'full',
        redirectTo:'create'
      },
      {
          path:"**",
          pathMatch:'full',
          redirectTo:"create"
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
