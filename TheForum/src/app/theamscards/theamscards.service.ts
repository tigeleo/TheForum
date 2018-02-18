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
    

}
