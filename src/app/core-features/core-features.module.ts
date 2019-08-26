import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { LoadingComponent } from './loading/loading/loading.component';
import { DisableControlDirective } from "./directives/disable-control/disable-control.directive";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faCheckCircle, faTimesCircle, faChartLine, faQuoteLeft, faCaretDown, faCaretUp, faPuzzlePiece, faPlus, faTimes, faProjectDiagram, faEye, faEllipsisV, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ExcerptPipe } from './pipe/excerpt/excerpt.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
  ],
  declarations: [ LoadingComponent, DisableControlDirective, ExcerptPipe, ],
  exports:[
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
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
    library.add(faSignOutAlt, faCheckCircle, faTimesCircle, faChartLine, faQuoteLeft, faCaretDown, faCaretUp, faPuzzlePiece, faPlus, faTimes, faProjectDiagram, faEye, faEllipsisV, faTrash, faEdit )
  }

}
