import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'book-ride', component: BookRideComponent },
    { path: 'ride-details', component: RideDetailsComponent },
    { path: 'offer-ride', component: OfferRideComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
