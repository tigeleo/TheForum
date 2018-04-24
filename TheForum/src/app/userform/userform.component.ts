import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/index';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserformService } from './userform.service';

@Component({
    selector: 'app-userform',
    templateUrl: './userform.component.html',
    styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

    selectedUser: User;
    unchangedUser: User;
    showAlertMessage=false;
    alertText="";
    loading = false;


    constructor(
        public userformservice: UserformService,
        public dialogRef: MatDialogRef<UserformComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.selectedUser = this.data;
        this.getunchangedUser(this.data.id);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    updateUser() {
        this.userformservice.updateUser(this.selectedUser).subscribe(res => {
            console.log("res:" + res);
            this.loading = true;
            this.dialogRef.close();
        },
            (error) => {
                this.getunchangedUser(this.data.id);
                console.log("Error occured " + error.error);
                this.alertText=error.error;
                this.selectedUser = this.unchangedUser;
                this.data = this.unchangedUser;
                this.showAlertMessage=true;             
                this.loading = false;
            }

        );



    }

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.selectedUser.avator = myReader.result;
        }
        myReader.readAsDataURL(file);
    }

    getunchangedUser(userid: number) {
        this.userformservice.getunchangedUser(userid).subscribe(
            user => {
                this.unchangedUser = user;
            });

    }
}