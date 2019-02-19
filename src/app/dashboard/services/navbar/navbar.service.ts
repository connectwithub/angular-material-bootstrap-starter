import { Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { environment } from "../../../../environments/environment";
import { GraphqlService } from "../../../services/graphql/graphql.service";
import { share } from "rxjs/operators";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _title:Subject<any>;

  constructor(private gql: GraphqlService, private titleS:Title) {
    this._title=new Subject<any>()
    this.title='Dashboard'
    this.titleS.setTitle(`Dashboard | ${environment.app.name}`)
  }

  get title(){
    return this._title.pipe(
      debounceTime(100)
    );
  }

  set title(title:any){
    this._title.next(title);
    this.titleS.setTitle(`${title} | ${environment.app.name}`)
  }

  getNav(location='top'){
    let query=`
    query NavbarQuery($isChild:Boolean=true, $location:ENUM_NAVBAR_LOCATION=top) {
      navbars(where:{location:$location,hasParent:false}) {
        ...navDetails
        child @include(if: $isChild) {
          ...navDetails
        }
      }
    }

    fragment navDetails on Navbar {
      title
      link
      icon
      display
      virtual
    }
    `
    return this.gql.createQuery(query,{isChild:true,location:location})
      .valueChanges
      .pipe(
        share()
      )
  }

}
