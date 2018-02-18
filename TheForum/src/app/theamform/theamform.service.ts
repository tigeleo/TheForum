import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Theam } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class TheamformService {

  constructor(private http: HttpClient) { }
    
    createNewDiscusion(theam: Theam) {
        return this.http.post<any>(myGlobals.backendApiLinks.theamadd, theam)
            .map(theam => {

                console.log(theam);
                return theam;
            });    
    }
    

}
