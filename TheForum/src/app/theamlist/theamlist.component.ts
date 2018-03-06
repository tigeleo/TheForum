import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

import { TheamlistService } from './theamlist.service';
import { Theam } from '../_models/index';
import {MatListModule} from '@angular/material/list';
import { TheamfullviewComponent } from '../theamfullview/theamfullview.component';
import { TheamformComponent } from '../theamform/theamform.component';

@Component({
  selector: 'app-theamlist',
  templateUrl: './theamlist.component.html',
  styleUrls: ['./theamlist.component.css']
})
export class TheamlistComponent implements OnInit {
  theams: Theam[] = [
 //                        {"id":1,"title":"How long we may to live.",     "body": "How teach english sincers we may live very long if leaning control yourself" },
 //                       {"id":2,"title":"Script terminated by timeout - DNN Software.",     "body": "Sep 30, 2015 - DNN 7.4.1 limited number of modules on page or Error: Script terminated by timeout Hello all, on our index page are currently around 46 modules …" },
 //                       {"id":3,"title":"PHP: Connection handling - Manual.",     "body": "Your script can also be terminated by the built-in script timer. The default timeout is 30 seconds. It can be changed using the max_execution_time php.ini directive or the corresponding php_value max_execution_time Apache httpd.conf directive as well as with the set_time_limit() function. When the timer expires the script ..." },
 //                       {"id":4,"title":"How to troubleshoot error messages - Wowza",     "body": "Jun 23, 2017 - See a list of common error messages and steps on how to troubleshoot for Wowza media server software. ... Cause: When using the Load Test Tool, it's expected behavior that you'll see 2 Server license errors each time the performance script is run. ..... Cause: No stream connection within timeout value." },
 //                       {"id":5,"title":"JavaScript Tutorial: The Basics - NTU",     "body": "You are free to embed as many scripts into a single document as you like, using multiple <script>...</script> element. Lines 7-9 and Line 13-17 are two pieces of JavaScripts, placed in the HEAD and BODY sections, respectively. JavaScript statements are terminated by a semicolon ';' . The alert(aString) function (Line 8) ..." },
 //                       {"id":6,"title":"17.5. subprocess — Subprocess management — Python 3.6.4 ...",     "body": "If the timeout expires, the child process will be killed and waited for. The TimeoutExpired exception will be re-raised after the child process has terminated. The input argument is passed to Popen.communicate() and thus to the subprocess's stdin. If used it must be a byte sequence, or a string if encoding or errors is specified ..." },
 //                       {"id":7,"title":"sqlcmd Utility | Microsoft Docs",     "body": "Jul 27, 2017 - The sqlcmd utility lets you enter Transact-SQL statements, system procedures, and script files at the command prompt, in Query Editor in SQLCMD mode, in a ... sqlcmd -a packet_size -A (dedicated administrator connection) -b (terminate batch job if there is an error) -c batch_terminator -C (trust the server ..." },

      ];    
    returnUrl: string;
    theamid:number;
    
  constructor(        private route: ActivatedRoute,
        private router: Router,
        private theamlistService: TheamlistService,
        private alertService: AlertService) {
        
  }

    ngOnInit() {
        this.loadAllTheams();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }



    private loadAllTheams() {
        this.route.queryParams.filter(params => params.id).subscribe(
           params => {
             console.log(params); // {order: "popular"}

             this.theamid = params.id;
             console.log(this.theamid); // popular
          });

        this.theamlistService.getById(this.theamid).subscribe(
            theams => { this.theams=theams;
                        console.log(this.theams);
                

            }
        );
    }
    
    public openTeam(theamid){
        this.router.navigate(['theamfullview',{theamid:theamid}]);        
    }

    public backtoSubList(){
        this.router.navigate([this.returnUrl]);        
    }

}
