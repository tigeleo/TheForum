import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';
import * as myGlobals from '../_helpers/globals';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(myGlobals.backendApiLinks.users);
    }

    getById(id: number) {
        return this.http.get(myGlobals.backendApiLinks.users + id);
    }

    create(user: User) {
        return this.http.post(myGlobals.backendApiLinks.users, user);
    }

    update(user: User) {
        return this.http.put(myGlobals.backendApiLinks.users + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(myGlobals.backendApiLinks.users + id);
    }
}