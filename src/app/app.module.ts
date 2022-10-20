import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { MouseHoverDirective } from './mouse-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponent,
    MouseHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [BookRideComponent]
})
export class AppModule { }
