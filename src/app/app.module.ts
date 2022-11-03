import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { MouseHoverDirective } from './mouse-hover.directive';
import { RideFilterPipe } from './ride-filter.pipe';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    MouseHoverDirective,
    RideFilterPipe,
    RideDetailsComponent,
    OfferRideComponent,
    NavbarComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
