import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

    public get isAuthenticated(){
        //console.log("isAuthenticated:this.authenticationService.isAuthenticated="+this.authenticationService.isAuthenticated);
        return this.authenticationService.isAuthenticated;
    }
    
    public get isNotAuthenticated(){
       // console.log("isNotAuthenticated:this.authenticationService.isAuthenticated="+this.authenticationService.isAuthenticated);
        return !this.authenticationService.isAuthenticated;
    }
    
    public get currectUser(){
        return this.authenticationService.currentUser;
    }
    
    public logout(){
        this.authenticationService.logout();
       // console.log("logout:processed");
    }
}
