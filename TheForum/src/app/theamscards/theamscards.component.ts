import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
//import getContent from 'md-content';
import { TheamsCardsService } from './theamscards.service';
import { TheamCard } from '../_models/index';
import { AlertService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theamscards',
  templateUrl: './theamscards.component.html',
  styleUrls: ['./theamscards.component.css']
})
export class TheamscardsComponent implements OnInit {
	private theams;
    model: TheamCard = {id:-1,title:"",text:"",img:""};	
    loading = false;
    returnUrl: string;
    
  constructor( 
        private theamsCardService: TheamsCardsService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

  ngOnInit() {
  		this.loadAllTheams();
  }
    private loadAllTheams() {
        this.theamsCardService.getAll().subscribe(
            theams => { this.theams=theams;
                        console.log(this.theams);

            }
        );
    }    
    public get Theams(){
        return this.theams;
    }
    
    public deleteTheams(theamid){
        this.theamsCardService.deleteTheam(theamid).subscribe(
            theams => { this.theams=theams;
                        console.log(this.theams);

            }
        );        
    }
    
     public createNewTheam() {
        this.loading = true;
        this.theamsCardService.createNewTheam(this.model)
            .subscribe(
                data => {
                    console.log(data);
                    this.theams=data;
                    this.loading = false;
                    //this.router.navigate([this.returnUrl]);
                   
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }    

}
