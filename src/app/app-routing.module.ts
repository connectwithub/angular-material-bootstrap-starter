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
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path:'user',
        loadChildren: './user/user.module#UserModule'
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
