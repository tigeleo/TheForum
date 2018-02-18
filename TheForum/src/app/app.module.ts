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
import { TheamfullviewComponent } from './theamfullview/theamfullview.component';
import { TheamformComponent } from './theamform/theamform.component';
import { TheamformService } from './theamform/theamform.service';
import { CommentslistComponent } from './commentslist/commentslist.component';
import { CommnetsformComponent } from './commnetsform/commnetsform.component';


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
    CommnetsformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    routing
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        TheamlistService,
        TheamformService,
        TheamsCardsService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
