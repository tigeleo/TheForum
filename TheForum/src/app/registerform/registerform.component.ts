import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

    model: any = {};
    loading = false;
    image;
    
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
    
    ngOnInit() {
	}
	
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/loginform']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
    
    public onUploadFinished($event){
        debugger;
        console.log($event);
    }
    public onUploadStateChanged($event){
        debugger;
        console.log($event);
    }
    public onUpload($event){
        debugger;
        console.log($event);
    }
    changeListener($event) : void {
        this.readThis($event.target);
      }

      readThis(inputValue: any): void {
        var file:File = inputValue.files[0];
        var myReader:FileReader = new FileReader();

        myReader.onloadend = (e) => {
          this.image = myReader.result;
          this.model.avator=this.image;
        }
        myReader.readAsDataURL(file);
      }
}
