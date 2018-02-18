import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
//import getContent from 'md-content';
import { TheamsCardsService } from './theamscards.service';

@Component({
  selector: 'app-theamscards',
  templateUrl: './theamscards.component.html',
  styleUrls: ['./theamscards.component.css']
})
export class TheamscardsComponent implements OnInit {
	private theams;
	
  constructor( 
        private theamsCardService: TheamsCardsService) { }

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
    


}
