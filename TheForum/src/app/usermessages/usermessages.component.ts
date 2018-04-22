import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from '../_services/index';
import { AuthenticationService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

import { UsermessagesService } from './usermessages.service';
import {MatListModule} from '@angular/material/list';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelectModule, MatOptionModule} from '@angular/material';

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
    users: User[] = [];
    returnUrl: string;
    formTop: number;
    formLeft: number;
    curUser: User;
    model: UserMsg = { id: -1, fromUserName: "", toUserName: "", text: "", author_role: "", author_avator: "", created: "" };
    loading = false;
    thirdSubscription;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private usermessagesService: UsermessagesService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {

    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.curUser = this.authenticationService.currentUser;
        this.loadAllMessages();
        this.loadAllUsers();
    }



    private loadAllMessages() {
        this.curUser = this.authenticationService.currentUser;
        if (this.authenticationService.isAuthenticated) {
            this.usermessagesService.getAll(this.curUser.id).subscribe(
                messages => {
                    this.messages = messages;
                    console.log(this.messages);
                }
            );

            this.thirdSubscription = Observable.interval(10000).subscribe((val) => {
                this.usermessagesService.getAll(this.curUser.id).subscribe(
                    messages => {
                        this.messages = messages;
                        console.log(this.messages);
                    }
                );
            });
        }




    }

    private loadAllUsers() {

        this.usermessagesService.getAllUsers().subscribe(
            users => {
                this.users = users;
                console.log(this.users);
            }
        );
    }


    // Multi value observables must manually
    // unsubscribe to prevent memory leaks.
    ngOnDestroy() {
        if(this.thirdSubscription)
            this.thirdSubscription.unsubscribe();
    }
    public createNewMessage() {
        //this.loading = true;

        this.model.fromUserName = this.curUser.username;
        this.usermessagesService.createNewMessage(this.model).subscribe(
            messages => {
                if(messages && messages.length>0){
                    this.messages = messages;
                }

            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    public get isAuthenticated() {
        //console.log("isAuthenticated:this.authenticationService.isAuthenticated="+this.authenticationService.isAuthenticated);
        return this.authenticationService.isAuthenticated;
    }

    public get isNotAuthenticated() {
        // console.log("isNotAuthenticated:this.authenticationService.isAuthenticated="+this.authenticationService.isAuthenticated);
        return !this.authenticationService.isAuthenticated;
    }

        
    deleteUserMessage(messageid){
        this.usermessagesService.deleteUserMessage(messageid).subscribe(
                messages => { 
                    this.messages=this.messages.filter(e=>e.id!=messageid);
                }
        );
    }
    
    replyUser(fromUserName){
        this.model.toUserName=fromUserName;
    }
    
}
