import { Component, OnInit, Input } from '@angular/core';
import { TheamformService } from './theamform.service';
import { Theam } from '../_models/index';
import { AlertService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theamform',
  templateUrl: './theamform.component.html',
  styleUrls: ['./theamform.component.css']
})
export class TheamformComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
    @Input() theamid: number;
      
  constructor(private route: ActivatedRoute,
        private router: Router,
        private theamformService: TheamformService,
        private alertService: AlertService) { }

  ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      console.log("Dicussion list of theam : " + this.theamid);
  }
    



    createNewDiscution() {
        this.loading = true;
        this.theamformService.createNewDiscusion({"theamid":this.theamid, "theam": this.model})
            .subscribe(
                data => {
                    console.log(data);
                    this.loading = false;
                    this.router.navigate([this.returnUrl]);
                   
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }    
}
