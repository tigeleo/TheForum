import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';
import { Comment } from '../_models/index';
import {MatListModule} from '@angular/material/list';
import { CommentslistService } from './commentslist.service';

@Component({
  selector: 'app-commentslist',
  templateUrl: './commentslist.component.html',
  styleUrls: ['./commentslist.component.css']
})
export class CommentslistComponent implements OnInit {
  comments: Comment[] = [ ];    
    returnUrl: string;
    @Input() discussionid:number;
  constructor(       private route: ActivatedRoute,
        private router: Router,
        private commentslistService: CommentslistService,
        private alertService: AlertService) { }

  ngOnInit() {
        this.loadAllTheams();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      
  }
    
    private loadAllTheams() {

        this.commentslistService.getById(this.discussionid).subscribe(
            comments => { this.comments=comments.comments;
                        console.log("Coments:");
                        console.log(this.comments);

            }
        );
    }
    
    public backtoSubList(){
        this.router.navigate([this.returnUrl]);        
    }    
    
}
