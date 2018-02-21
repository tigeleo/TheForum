import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Comment } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class CommentsformService {

  constructor(private http: HttpClient) { }
    
    createNewComment(comment: Comment) {
        return this.http.post<any>(myGlobals.backendApiLinks.commentadd, comment)
            .map(theam => {

                console.log(theam);
                return theam;
            });    
    }
    
    

}
