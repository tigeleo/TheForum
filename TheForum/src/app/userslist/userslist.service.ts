import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class UserslistService {

    
  constructor(private http: HttpClient) { }
    getAll() {
        return this.http.get<User[]>(myGlobals.backendApiLinks.userslist);
    }
    updateUser(user: User){
        return this.http.get<User[]>(myGlobals.backendApiLinks.userupdate);
    }
}
