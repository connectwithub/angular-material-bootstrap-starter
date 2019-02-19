import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  createQuery(query, vars?){
    let querySubscription = this.apollo.watchQuery<any>({
      query: gql`${query}`,
      notifyOnNetworkStatusChange:true,
      variables:vars
    })
    return querySubscription
  }

  createMutation(query, vars?){
    let querySubscription = this.apollo.mutate({
      mutation: gql`${query}`,
      variables:vars
    })
    return querySubscription
  }

}
