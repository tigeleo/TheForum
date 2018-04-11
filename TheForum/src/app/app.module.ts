import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { routing }        from './app.routing';
// angular material
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { TheamscardsComponent } from './theamscards/theamscards.component';
import { TheamsCardsService } from './theamscards/theamscards.service';
import { TheamlistComponent } from './theamlist/theamlist.component';
import { TheamlistService } from './theamlist/theamlist.service';
import { CommentslistService } from './commentslist/commentslist.service';
import { TheamfullviewComponent } from './theamfullview/theamfullview.component';
import { TheamformComponent } from './theamform/theamform.component';
import { TheamformService } from './theamform/theamform.service';
import { CommentslistComponent } from './commentslist/commentslist.component';
import { CommentsformComponent } from './commentsform/commentsform.component';
import { UserformComponent } from './userform/userform.component';
import { CommentsformService } from './commentsform/commentsform.service';
import { UserslistComponent } from './userslist/userslist.component';
import { UserslistService } from './userslist/userslist.service';
import { PaginationComponent } from './paggination/pagination.component';
import { UsermessagesService } from './usermessages/usermessages.service';
import { UsermessagesComponent } from './usermessages/usermessages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginformComponent,
    RegisterformComponent,
    TheamscardsComponent,
    AlertComponent,
    TheamlistComponent,
    TheamfullviewComponent,
    TheamformComponent,
    CommentslistComponent,
    CommentsformComponent,
    UserslistComponent,
    UserformComponent,
    PaginationComponent,
    UsermessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    routing
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        TheamlistService,
        TheamformService,
        TheamsCardsService,
        CommentslistService,
        CommentsformService,
        UserslistService,
        {
            provide: MatDialogRef,
            useValue: {}
          }, 
          {
            provide: MAT_DIALOG_DATA,
            useValue: {} // Add any data you wish to test if it is passed/used correctly
          },
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        UsermessagesService,       
        // provider used to create fake backend
        //fakeBackendProvider
  ],
  entryComponents:[UserformComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
