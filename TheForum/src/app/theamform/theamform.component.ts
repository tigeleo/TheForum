import { Component, OnInit, Input, Inject } from '@angular/core';
import { TheamformService } from './theamform.service';
import { Discussion, Theam } from '../_models/index';
import { AlertService } from '../_services/index';
import { AuthenticationService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-theamform',
  templateUrl: './theamform.component.html',
  styleUrls: ['./theamform.component.css']
})
export class TheamformComponent implements OnInit {
  model: Theam = {id:-1,title:"",body:"",author:"",author_role:"",watchers:0,comments:0,created:""};
  loading = false;
  returnUrl: string;
    @Input() theamid: number;
      
  constructor(private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router,
        private theamformService: TheamformService,
        private alertService: AlertService,
        public dialogRef: MatDialogRef<TheamformComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = '/theamslist';
        this.theamid=this.data;
  }
    



    createNewDiscution() {
        this.loading = true;
        debugger;
        this.model.author=this.authenticationService.currentUser.username;
        this.model.author_role=this.authenticationService.currentUser.role;
        this.model.created=(new Date()).toString();
        
        this.theamformService.createNewDiscusion({theamid:this.theamid, theam: this.model})
            .subscribe(
                data => {
                    console.log(data);
                    console.log(this.theamid);
                    this.loading = false;
                    //this.router.navigate([this.returnUrl], { queryParams: {id:this.theamid} });
                    this.dialogRef.close({'data':data});
                  
                },
                error => {
                    this.alertService.error(error.message);
                    this.loading = false;
                    this.dialogRef.close();
                });
    }  
    
    

}
