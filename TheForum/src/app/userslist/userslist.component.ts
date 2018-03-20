import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

import { UserslistService } from './userslist.service';
import { User } from '../_models/index';
import {MatListModule} from '@angular/material/list';

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
        private alertService: AlertService) {
        
  }

    ngOnInit() {
        this.loadUsersPage();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }



    private loadAllTheams() {
 
        this.userslistService.getAll().subscribe(
            users => { this.users=users;
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
        console.log(event.currentTarget);
        let hel:Element=<Element>event.currentTarget;
        this.formTop=hel.getBoundingClientRect().top;
        this.formLeft=hel.getBoundingClientRect().left;
      
        console.log(this.formTop + " + " + this.formLeft);
        this.selectedUser = user;
    }    
    updateUser(user: User): void {
        this.selectedUser = user;
    }  
    
    // ?:PageEvent
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

}
