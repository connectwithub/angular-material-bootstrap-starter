import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public snackBar: MatSnackBar) { }

  show(msg='',duration=3000){
    this.snackBar.open(msg, 'Dismiss', { duration: duration, panelClass:['pt-5','mt-4'], verticalPosition: 'top' });
  }

}
