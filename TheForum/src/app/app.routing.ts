import { Routes, RouterModule } from '@angular/router';

import { RegisterformComponent } from './registerform/index';
import { AuthGuard } from './_guards/index';
import { TheamscardsComponent } from './theamscards/index';
import { HomeComponent } from './home/index';
import { LoginformComponent } from './loginform/index';
import { TheamlistComponent } from './theamlist/index';
import { UserslistComponent } from './userslist/index';
import { TheamformComponent } from './theamform/index';
import { TheamfullviewComponent } from './theamfullview/index';

const appRoutes: Routes = [
    { path: '',  component: TheamscardsComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'loginform', component: LoginformComponent },
    { path: 'register', component: RegisterformComponent },
    { path: 'theamscards', component: TheamscardsComponent },
    { path: 'theamslist', component: TheamlistComponent },
    { path: 'userslist', component: UserslistComponent },
    { path: 'theamform', component: TheamformComponent },
    { path: 'theamfullview', component: TheamfullviewComponent },

    // otherwise redirect to home
    //{ path: '**',  redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);