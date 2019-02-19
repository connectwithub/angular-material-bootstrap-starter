import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, map } from "rxjs/operators";

@Component({
  selector: 'udb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  sidebarOpened=true
  screenWidth
  subscriptions=[]

  constructor() {
    this.screenWidth = (<any>window).innerWidth;
  }

  setScreenWidth(){
    const source = fromEvent(window,'resize').pipe(
      throttleTime(500),
      map(() => (<any>window).innerWidth),
      distinctUntilChanged()
    );
    let subscription = source.subscribe((screenWidth)=>{
      this.screenWidth = screenWidth;
    })
    this.subscriptions.push(subscription)
  }

  ngOnInit() {
    this.setScreenWidth()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subs)=>{
      subs.unsubscribe();
    })
  }

}
