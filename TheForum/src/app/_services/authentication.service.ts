import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as myGlobals from '../_helpers/globals';
import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
    currentUser:User;
    isAuthenticated:boolean=false;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(myGlobals.backendApiLinks.authenticate, { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                debugger;
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                this.currentUser=user;
                this.isAuthenticated=true;
                return user;
            });
    }

    logout() {
        this.currentUser=null;
        this.isAuthenticated=false;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}