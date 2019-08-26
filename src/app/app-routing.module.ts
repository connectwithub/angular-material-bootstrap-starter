import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path:"*",
        pathMatch:'full',
        redirectTo:'dashboard'
      },
      {
          path:"**",
          pathMatch:'full',
          redirectTo:"dashboard"
      }
    ]
  },
  {
    path:"*",
    pathMatch:'full',
    redirectTo:'/user'
  },
  {
      path:"**",
      pathMatch:'full',
      redirectTo:"/user"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
