import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from "@angular/material";
import { NavbarService } from "../services/navbar/navbar.service";

@Component({
  selector: 'udb-d-navbar',
  templateUrl: './d-navbar.component.html',
  styleUrls: ['./d-navbar.component.scss']
})
export class DNavbarComponent implements OnInit {

  @Input('menu') menu:MatSidenav;
  navbars
  title:string='Dashboard';
  template:any={};

  constructor(private ns: NavbarService) {
    this.ns.title.subscribe(title=>this.setTitle(title));
  }

  setTitle(title){
    if(title=='titleTemplate1'){
      this.template[title]=true;
      this.title='';
    }
    else{
      this.title=title
      this.template={};
    }
  }

  toggleMenu(){
    this.menu.toggle();
  }

  getNav(){
    this.ns.getNav('top').subscribe(res=>{
      this.navbars=res.data.navbars;
    })
  }

  clickHandler(functionName: string){
    this[functionName]()
  }

  logout(){
    alert('loged out');
  }

  ngOnInit() {
    this.getNav()
  }

}
