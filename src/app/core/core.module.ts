import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphQLModule } from '../graphql.module';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    GraphQLModule
  ],
  providers: [],
  exports:[
    NgbModule,
    GraphQLModule
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
