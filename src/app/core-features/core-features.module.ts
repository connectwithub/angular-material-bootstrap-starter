import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading/loading.component';
import { DisableControlDirective } from "./directives/disable-control/disable-control.directive";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  declarations: [ LoadingComponent, DisableControlDirective, ],
  exports:[
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    DisableControlDirective,
    ReactiveFormsModule,
    FormsModule,
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

}
