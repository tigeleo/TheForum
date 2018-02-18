import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Theam } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class TheamlistService {

  constructor(private http: HttpClient) { }
    getById(theamid: number) {
        return this.http.get<Theam[]>(myGlobals.backendApiLinks.theamslist+theamid);
    }
    

}
