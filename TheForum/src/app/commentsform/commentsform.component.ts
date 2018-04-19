import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  model: Comment = {id:-1,discussionid:-1,author:"",author_role:"",author_join:"",author_avator:"",body:"",answeredid:-1,created:""};
  loading = false;
  display:boolean =true;
  returnUrl: string;
  @Input() discussionid:number;
  @Input() answeredid:number=-1;
    
  @Output() hideform = new EventEmitter<number>();
    
  constructor(private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router,
        private commnetsformService: CommentsformService,
        private alertService: AlertService) { }

  ngOnInit() {
      this.model.discussionid=this.discussionid;
      this.model.answeredid=this.answeredid;
  }
    public get isAuthenticated(){
        return this.authenticationService.isAuthenticated;
    }

    createNewComment() {
        this.loading = true;
       this.model.author=this.authenticationService.currentUser.username;
       this.commnetsformService.createNewComment( this.model)
            .subscribe(
                data => {
                    console.log(data);
                    this.model.body=""; 
                    this.loading = false;
                   
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
       
    } 
    
    
    cancelComment(){
        this.model.body="";
    }

}
