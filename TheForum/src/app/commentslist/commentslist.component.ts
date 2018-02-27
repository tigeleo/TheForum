import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../_services/index';
import { AuthenticationService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';
import { Comment } from '../_models/index';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommentslistService } from './commentslist.service';

@Component({
  selector: 'app-commentslist',
  templateUrl: './commentslist.component.html',
  styleUrls: ['./commentslist.component.css']
})
export class CommentslistComponent implements OnInit {
    @Input() comments: Comment[] = [ ];    
    returnUrl: string;
    @Input() discussionid:number;
    answeredtoid={};
  constructor(      private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router,
        private commentslistService: CommentslistService,
        private alertService: AlertService) { }

  ngOnInit() {
        this.loadAllTheams();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      
  }
    public get isAuthenticated(){
        return this.authenticationService.isAuthenticated;
    }
    
    private loadAllTheams() {
        if(this.comments.length<1){
            this.commentslistService.getById(this.discussionid).subscribe(
                comments => { this.comments=comments.comments;
                            console.log("Comments:");
                            console.log(this.comments);
                            this.comments.forEach(item => {
                                //var obj = {};
                                //var valObj = {};  
                                //obj[item.id]=false;
                                this.answeredtoid[item.id]=false;
                            });
                            console.log(this.answeredtoid);
                }
            );
        }else{
                            console.log("Comments set as parameter:");
                            console.log(this.comments);
        }
    }
    
    public backtoSubList(){
        this.router.navigate([this.returnUrl]);        
    }  
    
    public doReplay(commentId:number){
        this.answeredtoid[commentId]=true;
        console.log(this.answeredtoid);
    }
    
    hideReplayed(commentId:number){
        console.log("hideReplayed:"+commentId);
        this.answeredtoid[commentId]=false;
    }
    
    isReplayed(commentId:number){
        return this.answeredtoid[commentId];
    }
    
    doLike(commentId:number){
        console.log("Comment like:" + commentId);
    }
    
    doDislike(commentId:number){
        console.log("Comments dislike: " + commentId);
    }
    
    
 }
