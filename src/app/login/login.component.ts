import { Component, OnInit } from '@angular/core';
import * as Joi from '@hapi/joi';
import { Router } from '@angular/router';

const LOGIN_URL = 'http://localhost:3000/auth/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logingIn: boolean = false;
  errorMessage: string = null;

  user: { email: string; password: string; } = {
    email: null,
    password: null
  };

  schema: Joi.Schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirmPassword: Joi.ref('password')
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.login();
  }

  isUserValid() {
    this.errorMessage = null;
    const result = this.schema.validate(this.user);

    if (!result.error) {
      return true;
    } else if (result.error.details) {
      this.errorMessage = result.error.details[0].message;
    }
  }

  login() {
    console.log(this.user.email, this.user.password);
    if (this.isUserValid()) {
      this.logingIn = true;
      fetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify(this.user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        this.logingIn = false;
        if (res.ok) return res.json();
        return res.json().then(err => {
          throw new Error(err.message);
        });
      }).then(user => {
        console.log(user);
        this.router.navigate(['home']);
      }).catch(err => {
        this.errorMessage = err.message;
      });
    }
  }

}
