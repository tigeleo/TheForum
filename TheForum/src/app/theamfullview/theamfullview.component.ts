import { Component, OnInit,Input } from '@angular/core';
import { CommentslistComponent } from '../commentslist/commentslist.component';
import { CommentsformComponent } from '../commentsform/commentsform.component';
import { Theam } from '../_models/index';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-theamfullview',
  templateUrl: './theamfullview.component.html',
  styleUrls: ['./theamfullview.component.css']
})
export class TheamfullviewComponent implements OnInit {
  theam:Theam;
  returnUrl: string;

    
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    /*
       this.activatedRoute.params.subscribe((params: Params) => {
           let t=params["x"];
         let id = params["id"];
        let title = params["title"];
        let body = params["body"];
        this.theam = {id:id,title:title, body:body};    
        console.log(t);
      });
*/
       this.activatedRoute.queryParams.subscribe((params: Params) => {
        let id = params["id"];
        let title = params["title"];
        let body = params["body"];
        let author = params["author"];
        let author_role = params["author_role"];
        let watchers = params["watchers"];
        let comments = params["comments"];
        let created = params["created"];
        this.theam = {id:id,title:title, body:body,author:author,author_role:author_role,watchers:watchers,comments:comments,created:created};    
      });
     this.returnUrl = '/theamslist';


 }

}
