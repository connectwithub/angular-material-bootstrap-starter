import { Component, OnInit } from '@angular/core';

import { ProductService } from "../products/services/product/product.service";
import { LoadingService } from "../../core-features/loading/loading.service";
import { NavbarService } from "../services/navbar/navbar.service";

@Component({
  selector: 'udb-rfq2q',
  templateUrl: './rfq2q.component.html',
  styleUrls: ['./rfq2q.component.scss']
})
export class Rfq2qComponent implements OnInit {

  products

  constructor(private ps: ProductService, private ls: LoadingService, private ns: NavbarService) { }

  getProducts(){
    setTimeout(()=>{
      this.ls.start()
    },10)
    this.ps.getProducts()
    .subscribe(({ data, loading }) => {
      if(loading){
        return
      }
      this.ls.stop(true,'Data Loaded',500)
      this.products = data.products;
    });
  }

  ngOnInit() {
    this.getProducts()
    this.ns.title='RFQ2Q'
  }

}
