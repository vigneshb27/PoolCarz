import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from './login'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;
  login = new Login();

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() 
  {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

 users: Login[] = [
     {username : "user1", password : "pass"},

     {username: "user2", password : "pass"}
 ];

  onSubmit() {
   // this.submitted = true;
    this.loginForm.markAllAsTouched();
    if(!this.loginForm.controls.username.errors && !this.loginForm.controls.password.errors)
    {
      this.submitted = true;
    }
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
