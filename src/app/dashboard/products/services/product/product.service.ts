import { Injectable } from '@angular/core';
import { GraphqlService } from "../../../../services/graphql/graphql.service";
import { share, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_DETAILS=`
  fragment productDetails on Product {
    id
    name
    productId
    description
    SP
    tax
    type
    gallery{
      url
    }
  }
  `

  constructor(private gql: GraphqlService) { }

  getProducts(type='all',parent=true){
    let query = `
    query ProductQuery($parent:Boolean=true, ${type=='all'?'':'$type:ENUM_PRODUCT_TYPE=composite'}) {
      products${type=='all'?'':'(where:{type:$type})'} {
        ...productDetails
        parent_relations @include(if: $parent) {
          id
        }
      }
    }
    ${this.PRODUCT_DETAILS}
    `;
    return this.gql.createQuery(query,{parent,type})
      .valueChanges
      .pipe(
        share()
      )
  }

  addProduct(productData,relationData?){

    const ADD_PRODUCT_MUTATION=`
    mutation AddProduct($product:createProductInput){
      createProduct(input:$product){
        product{
          ...productDetails
        }
      }
    }
    ${this.PRODUCT_DETAILS}
    `;
    const CREATE_RELATION_MUTATION=`
    mutation RelateProduct($pr:createProductrelationsInput){
      createProductrelations(input:$pr){
        productrelation{
          id
        }
      }
    }
    `

    let addProduct = this.gql.createMutation(ADD_PRODUCT_MUTATION,productData)
    if(!relationData){
      return addProduct;
    }
    else{
      return addProduct.pipe(
        switchMap(res=>{
          const child=res.data.createProduct.product.id
          const data={
            child,
            ...relationData
          }
          return this.gql.createMutation(CREATE_RELATION_MUTATION,{pr:{data}})
        }),
        // switchMap(res=>{
        //   const relationId=res.data.productrelation.id;
        //   return this.gql.createMutation()
        // })
      )
    }
  }

}
