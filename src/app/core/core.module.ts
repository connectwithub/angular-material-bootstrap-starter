import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    NgbModule.forRoot()
  ],
  providers: [],
  exports:[
    NgbModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders{
    return{
      ngModule:CoreModule,
    };
  }
  static forChild(): ModuleWithProviders{
    return{
      ngModule:CoreModule,
      providers:[
      ]
    };
  }
}
