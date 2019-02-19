import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path:'rfq2q',
        loadChildren: './rfq2q/rfq2q.module#Rfq2qModule'
      },
      {
        path:'products',
        loadChildren: './products/products.module#ProductsModule'
      },
      {
        path:"*",
        pathMatch:'full',
        redirectTo:'products'
      },
      {
          path:"**",
          pathMatch:'full',
          redirectTo:"products"
      }
    ]
  },
  {
    path:"*",
    pathMatch:'full',
    redirectTo:'products'
  },
  {
      path:"**",
      pathMatch:'full',
      redirectTo:"products"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
