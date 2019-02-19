import { Component, OnInit } from '@angular/core';
import { NavbarService } from "../services/navbar/navbar.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'udb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navbars
  environment=environment

  constructor(private ns: NavbarService) { }

  getNav(){
    this.ns.getNav('sidebar').subscribe(res=>{
      this.navbars=res.data.navbars;
    })
  }

  clickHandler(functionName: string){
    this[functionName]()
  }

  ngOnInit() {
    this.getNav()
  }

}
