import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreFeaturesModule } from "../../core-features/core-features.module";
import { CoreModule } from "../../core/core.module";
import { ProductsRoutingModule } from './products-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [CreateComponent, ViewComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreFeaturesModule.forChild(),
    CoreModule.forChild(),
    MatRippleModule,
  ],
  exports:[
    CreateComponent
  ]
})
export class ProductsModule { }
