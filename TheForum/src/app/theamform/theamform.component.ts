import { Component, OnInit } from '@angular/core';
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
      
  constructor(private route: ActivatedRoute,
        private router: Router,
        private theamformService: TheamformService,
        private alertService: AlertService) { }

  ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
    



    createNewDiscution() {
        this.loading = true;
        this.theamformService.createNewDiscusion(this.model)
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
