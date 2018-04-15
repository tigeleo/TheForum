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
    loading = false;
    
    constructor(
        public userformservice: UserformService,
        public dialogRef: MatDialogRef<UserformComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    ngOnInit() {
        this.selectedUser=this.data;
	}

    onNoClick(): void {
       this.dialogRef.close();
    }
    
    updateUser() {
        this.userformservice.updateUser(this.selectedUser).subscribe(
            users => { 
                console.log(users);
            }
        );;
        this.loading = true;
        this.dialogRef.close();
    }

}
