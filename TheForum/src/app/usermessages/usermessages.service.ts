import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { UserMsg } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class UsermessagesService {
 
  constructor(private http: HttpClient) { }
    getAll() {
        return this.http.get<UserMsg[]>(myGlobals.backendApiLinks.usersmessages);
    }
    
    
    public createNewMessage(model: UserMsg) {
        //this.loading = true;
        return this.http.get<UserMsg[]>(myGlobals.backendApiLinks.usersmessages);
    }
}
