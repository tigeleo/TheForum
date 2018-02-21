import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Comment } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class CommentslistService {

  constructor(private http: HttpClient) { }
    getById(discussionid: number) {
        return this.http.get<any>(myGlobals.backendApiLinks.commentslist+discussionid);
    }
    

}
