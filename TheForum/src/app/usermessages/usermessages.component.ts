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
    model: UserMsg;
    loading = false;

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
        let userMsg:UserMsg =  {id: -1, fromUserName: this.curUser.username, toUserName: "", title: "", text: ""  };
        
        this.model = userMsg;
    }

    private loadAllMessages() {

        this.usermessagesService.getAll().subscribe(
            messages => {
                this.messages = messages;
                console.log(this.messages);
            }
        );
    }
    public createNewMessage() {
        //this.loading = true;
        this.usermessagesService.createNewMassage(this.model)
            .subscribe(
            data => {
                console.log(data); 
                //                    this.theams=data;
                //                    this.loading = false;
                //this.router.rnUrl]);
                   
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
