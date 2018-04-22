import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { UserMsg } from '../_models/index';
import { User } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class UsermessagesService {
 
  constructor(private http: HttpClient) { }
    getAll(userid) {
        return this.http.get<UserMsg[]>(myGlobals.backendApiLinks.usersmessages+ userid);
    }
       
    getAllUsers() {
        return this.http.get<User[]>(myGlobals.backendApiLinks.userslist);
    } 
    
    public createNewMessage(model: UserMsg) {
        return this.http.post<UserMsg[]>(myGlobals.backendApiLinks.usersmessages_add,model);

    }

}
