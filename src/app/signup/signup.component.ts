import { Component, OnInit } from '@angular/core';
import * as Joi from '@hapi/joi';
import { Router } from '@angular/router';

const SIGNUP_URL = 'http://localhost:3000/auth/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: {
    name: string,
    email: string;
    password: string;
    confirmPassword: string;
  } = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

  errorMessage: string = null;

  signingUp: boolean = false;

  schema: Joi.Schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required().regex(/^\w+(?:\s+\w+)*$/),
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
    // validate the user input
    this.signup();
  }

  isUserValid() {
    this.errorMessage = null;
    const result = this.schema.validate(this.user);

    if (!result.error) {
      // valid user
      return true;
    } else if (result.error.details) {
      this.errorMessage = result.error.details[0].message;
    }
  }

  signup() {
    if (this.isUserValid()) {

      const body = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      };

      this.signingUp = true;
      fetch(SIGNUP_URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then(err => {
          throw new Error(err.message);
        });

      }).then(user => {
        this.signingUp = false;
        console.log(user);
        this.router.navigate(['login']);
      }).catch(error => {
        this.errorMessage = error.message;
      });
    }
  }

}
