import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoreFeaturesModule } from "../core-features/core-features.module";
import { CoreModule } from "../core/core.module";
import { SidenavComponent } from '../dashboard/sidenav/sidenav.component';
import { DNavbarComponent } from './d-navbar/d-navbar.component';
import { SafePipePipe } from './pipe/safe-pipe/safe-pipe.pipe';

@NgModule({
  declarations: [DashboardComponent, SidenavComponent, DNavbarComponent, SafePipePipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreFeaturesModule,
    CoreModule
  ]
})
export class DashboardModule { }
