import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from '../_services/index';
import { AuthenticationService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

import { UserslistService } from './userslist.service';
import { User } from '../_models/index';
import {MatListModule} from '@angular/material/list';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserformComponent } from '../userform/userform.component';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users: User[] = [      ];    
    returnUrl: string;
    selectedUser: User;
    formTop: number;
    formLeft: number;
    
    userPage={pageIndex: 0, pageSize: 10, length: 100};
    
  constructor(        private route: ActivatedRoute,
        private router: Router,
        private userslistService: UserslistService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        public dialog: MatDialog) {
        
  }

    ngOnInit() {
        this.loadUsersPage();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }



    private loadAllTheams() {
 
        this.userslistService.getAll().subscribe(
            users => { 
                debugger;
                this.users=users;
                console.log(this.users);
                

            }
        );
    }
    

    private loadUsersPage(){
        this.userslistService.getUsersPage(this.userPage).subscribe(
            users => { this.users=users;
                        console.log(this.users);
                

            }
        );
    }
    
    onSelect(user: User): void {
        
        let dialogRef = this.dialog.open(UserformComponent, {
            width: '250px',
            data: user

          });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.selectedUser = result;

          });
        
        /*
        console.log(event.currentTarget);
        let hel:Element=<Element>event.currentTarget;
        this.formTop=hel.getBoundingClientRect().top;
        this.formLeft=hel.getBoundingClientRect().left;
      
        console.log(this.formTop + " + " + this.formLeft);
        this.selectedUser = user;
        */
    }    
    updateUser(user: User): void {
        this.selectedUser = user;
    }  
    
    
    public getServerData(event){
        console.log(event);
        this.userPage=event;
        this.loadUsersPage();
        /*
      this.fooService.getdata(event).subscribe(
        response =>{
          if(response.error) {
            // handle error
          } else {
            this.datasource = response.data;
            this.pageIndex = response.pageIndex;
            this.pageSize = response.pageSize;
            this.length = response.length;
          }
        },
        error =>{
          // handle error
        }
      );
        */
      return event;
    }    

    public get isAuthenticated() {
        //console.log("isAuthenticated:this.authenticationService.isAuthenticated="+this.authenticationService.isAuthenticated);
        return this.authenticationService.isAuthenticated;
    }

    public get isNotAuthenticated() {
        // console.log("isNotAuthenticated:this.authenticationService.isAuthenticated="+this.authenticationService.isAuthenticated);
        return !this.authenticationService.isAuthenticated;
    }
    
     public get isAdmin(){
         return this.authenticationService.isAuthenticated && this.authenticationService.currentUser.role=='ADMIN';
     }     
    
    deleteUser(userid){
        this.userslistService.deleteUser(userid).subscribe(
                users => { 
                    this.users=this.users.filter(e=>e.id!=userid);
                }
        );
    }
}


/*
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class DialogOverviewExampleDialog {

    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  }
*/