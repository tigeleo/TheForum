import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Theam } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class TheamfullviewService {

  constructor(private http: HttpClient) { }
    getById(diccutionid: number) {
        return this.http.get<Theam>(myGlobals.backendApiLinks.theamget + diccutionid);
    }
    
    theamWatcher(diccutionid: number) {
        return this.http.get<any>(myGlobals.backendApiLinks.theamwatcher + diccutionid);
    }
    

}
