import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from '../_services/index';
import { AuthenticationService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

import { UsermessagesService } from './usermessages.service';
import {MatListModule} from '@angular/material/list';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//import { UserformComponent } from '../userform/userform.component';
import { UserMsg } from '../_models/index';
import { User } from '../_models/index';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'app-usermessages',
    templateUrl: './usermessages.component.html',
    styleUrls: ['./usermessages.component.css']
})
export class UsermessagesComponent implements OnInit {
    messages: UserMsg[] = [];
    returnUrl: string;
    formTop: number;
    formLeft: number;
    curUser: User;
    model: UserMsg={id: -1, author: "", text: "", author_role: "", author_avator:""  };
    loading = false;
    thirdSubscription;
    
    constructor(private route: ActivatedRoute,
        private router: Router,
        private usermessagesService: UsermessagesService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {

    }

    ngOnInit() {
        this.loadAllMessages();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.curUser = this.authenticationService.currentUser;
        
    }

    private loadAllMessages() {

        this.usermessagesService.getAll().subscribe(
            messages => {
                this.messages = messages;
                console.log(this.messages);
            }
        );
        
        this.thirdSubscription=Observable.interval(10000).subscribe((val) => {
            this.usermessagesService.getAll().subscribe(
                    messages => {
                        this.messages = messages;
                        console.log(this.messages);
                    }
             );
        });        
        
        
    }
    // Multi value observables must manually
    // unsubscribe to prevent memory leaks.
    ngOnDestroy() {
      this.thirdSubscription.unsubscribe();
    }
    public createNewMessage() {
        //this.loading = true;
   
        this.model.author = this.curUser.username;
        this.usermessagesService.createNewMessage(this.model)
            .subscribe(
            messages => {
                console.log(messages); 
                this.messages = messages;
                   
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
