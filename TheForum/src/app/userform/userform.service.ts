import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class UserformService {


    constructor(private http: HttpClient) { }

    //    updateUser(user: User){
    //        return this.http.post<any>(myGlobals.backendApiLinks.userupdate, user)
    //            .map(user => {  
    //               return user;
    //            });    
    //    }

    getunchangedUser(userid: number) {
        return this.http.get<User>(myGlobals.backendApiLinks.user_by_id + userid);
    }

    updateUser(user: User) {
        return this.http.post<any>(myGlobals.backendApiLinks.userupdate, user)
            .map(data => {
                return data;
            });


    }
}