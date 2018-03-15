import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

import * as myGlobals from './globals'; //<==== this one
import * as myData from './fake-data'; //<==== this one

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        // wrap in delayed observable to simulate server api call
        return Observable.of(null).mergeMap(() => {

            // authenticate
            if (request.url.endsWith(myGlobals.backendApiLinks.authenticate) && request.method === 'POST') {
                
                users = myData.DATA_USERS;
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };

                    return Observable.of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return Observable.throw('Username or password is incorrect');
                }
            }
            
            // get discussion list
            if (request.url.endsWith(myGlobals.backendApiLinks.theamslist) && request.method === 'GET') {
                
                let theams=myData.DATA_THEAMS;

 
                return Observable.of(new HttpResponse({ status: 200, body: theams }));
            }
             
            // get discussion list
            if (request.url.endsWith(myGlobals.backendApiLinks.userslist) && request.method === 'GET') {
                
                let users=myData.DATA_USERS;

 
                return Observable.of(new HttpResponse({ status: 200, body: users }));
            }
             
            // get discussion list
            if (request.url.endsWith(myGlobals.backendApiLinks.userslistpage) && request.method === 'POST') {
                let userPageDef=request.body;
                let users=myData.DATA_USERS;
                
                let funct=function(user,index){
                    //console.log(user + " -- " + index + " -- " +  userPageDef.pageIndex + " -- " + (userPageDef.pageIndex+1)*userPageDef.pageSize);
                    return userPageDef.pageIndex*userPageDef.pageSize <= index && index < (userPageDef.pageIndex+1)*userPageDef.pageSize;
                };
                
                let userslist = users.filter(funct);  
 
                return Observable.of(new HttpResponse({ status: 200, body: userslist }));
            }
             
            // add new discussion
            if (request.url.endsWith(myGlobals.backendApiLinks.theamadd) && request.method === 'POST') {
                
                let discussion=request.body;

                console.log(discussion.theamid);
                console.log(discussion.theam);
                let theamid=discussion.theamid;
                
                let theamlist =myData.DATA_DISCUTIONS.discussions;
                
                let filteredtheamlist = theamlist.filter(theam => {
                    return theam.theamid == theamid;
                });  
                 console.log(filteredtheamlist);
               filteredtheamlist[0].theams=filteredtheamlist[0].theams.concat(discussion.theam);
                
                return Observable.of(new HttpResponse({ status: 200, body: discussion }));
            }
           
            // add new comment
            if (request.url.endsWith(myGlobals.backendApiLinks.commentadd) && request.method === 'POST') {
                
                let comment=request.body;

                console.log(comment);

                let discussionid=comment.discussionid;
                let answeredid=comment.answeredid;
                
                let commentlist =myData.DATA_COMMENCTS;
                
                let filteredComments  = commentlist.commentslist.filter(comment => {
                        return comment.discussionid==discussionid;
                 });
                 
                 console.log("Comments filters:");
                 console.log(filteredComments);
               filteredComments[0].comments=filteredComments[0].comments.concat({"id":comment.id,"author":comment.author,     "body":comment.body });
                
                return Observable.of(new HttpResponse({ status: 200, body: filteredComments[0] }));
            }
           
            // get users
            if (request.url.endsWith(myGlobals.backendApiLinks.users) && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Observable.of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Unauthorised');
                }
            }

            
            // get theamslist /\/api\/theamslist\/\d+$/
            if (request.url.match(myGlobals.backendApiLinks.theamslist_regexp) && request.method === 'GET') {
                // find user by id in users array
                let urlParts = request.url.split('/');
                let theamid = parseInt(urlParts[urlParts.length - 1]);               
                
                let theamlist =myData.DATA_DISCUTIONS.discussions;
                
                let filteredtheamlist = theamlist.filter(theam => {
                    return theam.theamid === theamid;
                });                
                let filteredTheams  = filteredtheamlist[0].theams;
                
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (filteredTheams) {
                    return Observable.of(new HttpResponse({ status: 200, body: filteredTheams }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('No theams found.');
                }
            }

            // get comments list
            if (request.url.match(myGlobals.backendApiLinks.commentslist_regexp) && request.method === 'GET') {
                // find user by id in users array
                let urlParts = request.url.split('/');
                let discussionid = parseInt(urlParts[urlParts.length - 1]);               
                
                let commentlist =myData.DATA_COMMENCTS;
                
                let filteredComments  = commentlist.commentslist.filter(comment => {
                        return comment.discussionid==discussionid;
                    });
                
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (filteredComments) {
                     let arrayComments= filteredComments[0].comments.map(c => {return {id:c.id,discussionid:discussionid,author:c.author,body:c.body,answeredid:-1};});
                   console.log("arrayComments:");
                   console.log(filteredComments[0]);
                    
                    
                    return Observable.of(new HttpResponse({ status: 200, body: {comments:arrayComments} }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('No comment found.');
                }
            }            
            
          
            
            // get user by id
            if (request.url.match(myGlobals.backendApiLinks.users_regexp) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;

                    return Observable.of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Unauthorised');
                }
            }

            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                let newUser = request.body;

                // validation
                let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return Observable.throw('Username "' + newUser.username + '" is already taken');
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return Observable.of(new HttpResponse({ status: 200 }));
            }

            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return Observable.of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Unauthorised');
                }
            }

            // pass through any requests not handled above
            return next.handle(request);
            
        })

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .materialize()
        .delay(500)
        .dematerialize();
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};