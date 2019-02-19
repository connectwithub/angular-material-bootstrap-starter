import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidatorFn } from "@angular/forms";

import { ProductService } from "../services/product/product.service";
import { LoadingService } from "../../../core-features/loading/loading.service";
import { NavbarService } from "../../services/navbar/navbar.service";

export const PRODUCT_TYPES={
  BASIC:'basic',
  COMPOSITE:'composite'
}

@Component({
  selector: 'udb-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  products=[]
  createProductForm: FormGroup
  PRODUCT_TYPES=PRODUCT_TYPES
  objectVals=Object.values
  showCompositeForm=false
  get createProductFormRelatedNumber():any{return this.createProductForm.get('related_number')}

  constructor(private ps: ProductService, private ls: LoadingService, private ns: NavbarService) {
    this.createForms()
  }

  createForms(){
    this.createProductForm=new FormGroup({
      name: new FormControl('',[Validators.required]),
      productId: new FormControl('',[Validators.required,this.productIdValidator(this)]),
      description: new FormControl('',[Validators.required]),
      sp: new FormControl(1,[Validators.required,Validators.min(0)]),
      type: new FormControl(PRODUCT_TYPES.BASIC,[Validators.required]),
      tax: new FormControl(0,[Validators.min(0)]),
      related_number: new FormArray([])
    })
    this.showCompositeForm=false
  }

  productIdValidator(vm): ValidatorFn{
    return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && vm.products.map(product=>product.productId).includes(control.value)) {
      return { 'productIdExists': true };
    }
    return null;
  }
}

  addProduct(productId='',units=1){
    (<FormArray>this.createProductFormRelatedNumber).push(new FormGroup({
      units: new FormControl(units||1,[Validators.required,Validators.min(1)]),
      product: new FormControl(productId||'',[Validators.required]),
    }));
  }

  typeChange(){
    const type= this.createProductForm.value.type
    if(type=='composite'){
      if(this.createProductFormRelatedNumber.value.length==0){
        this.addProduct()
      }
      this.showCompositeForm=true
    }
    else{
      while (this.createProductFormRelatedNumber.length !== 0) {
        this.createProductFormRelatedNumber.removeAt(0)
      }
      this.showCompositeForm=false
    }
  }

  relatedProductSelect(ev){
    console.log(ev)
  }

  getProducts(){
    this.ps.getProducts().subscribe((res)=>{
      this.products=res.data.products
    })
  }

  saveProduct(){
    this.ls.start()
    const data={
      productId:this.createProductForm.value.productId,
      name:this.createProductForm.value.name,
      description:this.createProductForm.value.description,
      SP:this.createProductForm.value.sp,
      type:this.createProductForm.value.type,
      tax:this.createProductForm.value.tax,
    }
    let relationData:any=null
    if(this.createProductForm.value.type==PRODUCT_TYPES.COMPOSITE){
      relationData={
        parent:this.createProductFormRelatedNumber.value.map(relation=>relation.product.id),
        related_number:this.createProductFormRelatedNumber.value.map(relation=>{
          relation.productId=relation.product.productId
          delete relation.product
          return relation
        })
      }
    }
    this.ps.addProduct({product:{data}},relationData).subscribe(res=>{
      this.createForms()
      this.ls.stop(true,'Product Saved')
    },err=>this.ls.stop(false,err))
  }

  deleteRelatedProduct(index){
    if(this.createProductFormRelatedNumber.length==1){
      return
    }
    this.createProductFormRelatedNumber.removeAt(index)
  }

  ngOnInit() {
    this.getProducts()
    this.ns.title='Create Products'
  }

}
