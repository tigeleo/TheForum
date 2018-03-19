//
// ===== File globals.ts    
//
'use strict';

export const sep='/';
export const version: string="22.2.2";

//export const API_BASE_NAME="http://localhost:8080/TheForumApi/theforum";
export const API_BASE_NAME="";

export const backendApiLinks = {
    //authenticate : API_BASE_NAME+"/api/authenticate",
    authenticate : API_BASE_NAME+"/api/login/authenticate",
    users: API_BASE_NAME+"/api/users",
    users_regexp: /\/api\/users\/\d+$/,
    theamslist: API_BASE_NAME+'/api/theamslist/',
    theamslist_delete: API_BASE_NAME+'/api/theamslist/delete/',
    theamslist_add: API_BASE_NAME+'/api/theamslist/add/',
    theamadd: API_BASE_NAME+'/api/theams/add',
    theamslist_regexp: /\/api\/theamslist\/\d+$/,
    commentslist: API_BASE_NAME+'/api/commentslist/',
    commentslist_regexp: /\/api\/commentslist\/\d+$/,
    commentadd: API_BASE_NAME+'/api/comments/add',
    userslist:API_BASE_NAME+"/api/users/list/all",
    userslistpage:API_BASE_NAME+"/api/users/list/page",
    userupdate:API_BASE_NAME+"/api/users/update",
    
    
};


