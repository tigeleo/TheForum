import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../_models/index';
import { AuthenticationService } from '../_services/index';
import { AlertService } from '../_services/index';
import { CommentsformService } from './commentsform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commentsform',
  templateUrl: './commentsform.component.html',
  styleUrls: ['./commentsform.component.css']
})
export class CommentsformComponent implements OnInit {
  model: Comment = {id:-1,parentid:-1,author:"",body:""};
  loading = false;
  returnUrl: string;
  @Input() discussionid:number;
    
  constructor(private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router,
        private commnetsformService: CommentsformService,
        private alertService: AlertService) { }

  ngOnInit() {
      this.model.parentid=this.discussionid;
      this.model.author=this.authenticationService.currentUser.username;
  }
    public get isAuthenticated(){
        console.log("isAuthenticated:this.authenticationService.isAuthenticated="+this.authenticationService.isAuthenticated);
        return this.authenticationService.isAuthenticated;
    }

    createNewComment() {
        this.loading = true;
        this.commnetsformService.createNewComment( this.model)
            .subscribe(
                data => {
                    console.log(data);
                    this.loading = false;
                   
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }  

}
