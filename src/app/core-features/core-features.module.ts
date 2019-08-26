import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingComponent } from './loading/loading/loading.component';
import { DisableControlDirective } from "./directives/disable-control/disable-control.directive";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { ExcerptPipe } from './pipe/excerpt/excerpt.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
  ],
  declarations: [ LoadingComponent, DisableControlDirective, ExcerptPipe, ],
  exports:[
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    DisableControlDirective,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    ExcerptPipe,
  ],
  entryComponents:[ LoadingComponent ]
})
export class CoreFeaturesModule {
  static forRoot(): ModuleWithProviders{
    return{
      ngModule:CoreFeaturesModule,
      providers: [
      ]
    };
  }
  static forChild(): ModuleWithProviders{
    return{
      ngModule:CoreFeaturesModule,
      providers:[
      ]
    };
  }

  constructor(){
    library.add(faSignOutAlt)
  }

}
