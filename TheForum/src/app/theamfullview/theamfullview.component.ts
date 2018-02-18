import { Component, OnInit } from '@angular/core';
import { CommentslistComponent } from '../commentslist/commentslist.component';
import { CommnetsformComponent } from '../commnetsform/commnetsform.component';
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
     this.returnUrl = '/theamslist';

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
        this.theam = {id:id,title:title, body:body};    
      });


 }

}
