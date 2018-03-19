import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { TheamCard } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class TheamsCardsService {

  constructor(private http: HttpClient) { }
    getAll() {
        return this.http.get<TheamCard[]>(myGlobals.backendApiLinks.theamslist);
    }
    
    deleteTheam(theamid) {
        return this.http.get<TheamCard[]>(myGlobals.backendApiLinks.theamslist_delete+theamid);
    }
    
    createNewTheam(theamcard: TheamCard) {
        return this.http.post<any>(myGlobals.backendApiLinks.theamslist_add, theamcard)
            .map(theam => {

                return theam;
            });    
    }
    
}
