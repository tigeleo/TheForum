import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/index';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

    selectedUser: User;
    loading = false;
    
    constructor(
        public dialogRef: MatDialogRef<UserformComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    ngOnInit() {
        this.selectedUser=this.data;
	}

    onNoClick(): void {
       this.dialogRef.close();
    }
    
    update() {
        this.loading = true;
        this.dialogRef.close();
    }

}
