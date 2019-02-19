import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreFeaturesModule } from "../../core-features/core-features.module";
import { Rfq2qRoutingModule } from './rfq2q-routing.module';
import { Rfq2qComponent } from './rfq2q.component';

@NgModule({
  declarations: [Rfq2qComponent],
  imports: [
    CommonModule,
    Rfq2qRoutingModule,
    CoreFeaturesModule
  ]
})
export class Rfq2qModule { }
