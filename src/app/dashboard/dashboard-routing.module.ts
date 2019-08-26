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
        loadChildren: () => import('./rfq2q/rfq2q.module').then(m => m.Rfq2qModule)
      },
      {
        path:'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
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
