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

    
  constructor(        private route: ActivatedRoute,
        private router: Router,
        private userslistService: UserslistService,
        private alertService: AlertService) {
        
  }

    ngOnInit() {
        this.loadAllTheams();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }



    private loadAllTheams() {
 
        this.userslistService.getAll().subscribe(
            users => { this.users=users;
                        console.log(this.users);
                

            }
        );
    }
    

}
