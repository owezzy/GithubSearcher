import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'  ;
import 'rxjs/add/operator/do' ;


import {User} from "../../models/user.interface";
import {USER_LIST} from "../../mocks/user.mock";
import {Repository} from "../../models/repository.interface";
import {REPOSITORY_LIST} from "../../mocks/repository.mock";

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

private baseUrl: string = 'https://api.github.com/users';
private reposUrl:string = 'repos'
  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  //this collects the username provided
  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)  
    .catch(this.handleError)
  }

//this gets the users repositories
getRepositoryInformation(username: string): Observable<Repository[]>{
  return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
  .do(this.logData)
  .map(this.extractData)
  .do(this.logData)  
  .catch(this.handleError)
}

  /*
  * we find the username from within USER_LIST, equal to the username passed in.
  * Return the result as an observable.*/
  mockGetUserInformation(username: string): Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }
  /*
   * we find the username from within REPOSITORY_LIST, equal to the username passed in.
   * Return the result as an observable.*/
  mockGetRepositoryInformation(username: string): Observable<Repository[]>{
return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }

  private handleError(error: Response | any){
    return Observable.throw(error.json() || "Server Error")
  }

  private extractData(response:Response){
    return response.json();
  }

  private logData(response: Response){
    console.log(response);
  }
}
