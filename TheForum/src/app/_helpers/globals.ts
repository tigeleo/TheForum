//
// ===== File globals.ts    
//
'use strict';

export const sep = '/';
export const version: string = "22.2.2";

export const API_BASE_NAME = "http://localhost:8080/TheForum/rest";
//export const API_BASE_NAME="http://localhost:8080/TheForumApi/theforum";
//export const API_BASE_NAME="";

export const backendApiLinks = {

    authenticate: API_BASE_NAME + "/api/login/authenticate",
    users: API_BASE_NAME + "/api/users", //user registration
    users_regexp: /\/api\/users\/\d+$/,
    theamslist: API_BASE_NAME + '/api/theamslist/', //display all forums cards
    theamslist_delete: API_BASE_NAME + '/api/theamslist/delete/', //forum delete
    theamslist_add: API_BASE_NAME + '/api/theamslist/add/', //forum add
    theamadd: API_BASE_NAME + '/api/discusse/add', //discussion add
    theamslist_regexp: /\/api\/theamslist\/\d+$/, //display all  discussions by forum id
    commentslist: API_BASE_NAME + '/api/commentslist/',// display all  comments by discussion id
    commentslist_regexp: /\/api\/commentslist\/\d+$/,
    commentadd: API_BASE_NAME + '/api/commentslist/add', //add comment
    userslist: API_BASE_NAME + "/api/users/list/all", // display all registred users
    userslistpage: API_BASE_NAME + "/api/users/list/page", //pagination  registred users
    userupdate: API_BASE_NAME + "/api/users/update", // update user date
    usersmessages: API_BASE_NAME + "/api/usermessages/getallbyuser", // get all message by user_to
    usersmessages_regexp: /\/api\/usersmessages\/\d+$/, // get all message by user_to
    
    
    //    authenticate: API_BASE_NAME + "/api/login/authenticate",
    //    users: API_BASE_NAME + "/api/users",
    //    users_regexp: /\/api\/users\/\d+$/,
    //    theamslist: API_BASE_NAME + '/api/theamslist/',
    //    theamslist_delete: API_BASE_NAME + '/api/theamslist/delete/',
    //    theamslist_add: API_BASE_NAME + '/api/theamslist/add/',
    //    theamadd: API_BASE_NAME + '/api/theams/add',
    //    theamslist_regexp: /\/api\/theamslist\/\d+$/,
    //    commentslist: API_BASE_NAME + '/api/commentslist/',
    //    commentslist_regexp: /\/api\/commentslist\/\d+$/,
    //    commentadd: API_BASE_NAME + '/api/comments/add',
    //    userslist: API_BASE_NAME + "/api/users/list/all",
    //    userslistpage: API_BASE_NAME + "/api/users/list/page",
    //    userupdate: API_BASE_NAME + "/api/users/update",

};


