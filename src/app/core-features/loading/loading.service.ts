import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingComponent } from "./loading/loading.component";


export interface loadingModel {
  processing:boolean;
  success:boolean;
  error:boolean;
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingModel:loadingModel={
    processing:false,
    success:false,
    error:false,
    message:""
  };
  private modal:MatDialogRef<LoadingComponent>;
  private started=false;

  constructor(private dialog: MatDialog) { }

  start(msg="Loading, Please Wait"){
    if(!this.started){
      this.loadingModel.processing=true;
      this.loadingModel.success=false;
      this.loadingModel.success=false;
      this.loadingModel.message=msg;
      this.modal=this.dialog.open(LoadingComponent, {data:this.loadingModel, minWidth:'25%', disableClose: true, closeOnNavigation: true});
      this.started=true;
    }
  }

  stop(success=true,message="",time=3001){
    this.loadingModel.processing=false;
    this.loadingModel.success=success;
    this.loadingModel.error=!success;
    this.loadingModel.message=message;
    setTimeout(()=>{
      this.modal.close()
      this.started=false;
      // this.modal.result.then((res)=>{});
    },time);
  }

}
