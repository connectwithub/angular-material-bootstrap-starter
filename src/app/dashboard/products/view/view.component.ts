import { Component, OnInit } from '@angular/core';

import { ProductService } from "../services/product/product.service";
import { NavbarService } from "../../services/navbar/navbar.service";
import { tap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'udb-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  productsSub
  products
  environment=environment

  constructor(private ns: NavbarService, private ps: ProductService) { }

  getProducts(){
    this.productsSub=this.ps.getProducts().pipe(
      tap((res)=>{
      this.products=res.data.products
    }))
  }

  ngOnInit() {
    this.getProducts()
    this.ns.title='View Products'
  }

}
