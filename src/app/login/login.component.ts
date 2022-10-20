import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Login} from './login'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent {
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;
  login = new Login();
  
 users: Login[] = [
     {username : "user1", password : "pass"},

     {username: "user2", password : "pass"}
 ];

  onSubmit() {
    this.submitted = true;
    const user = this.users.find(currUser => currUser.username === this.login.username && currUser.password === this.login.password);
    console.log(this.login.username);
    console.log(this.login.password);
    if (user) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
  
}
