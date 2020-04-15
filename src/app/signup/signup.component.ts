import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { SignUpService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  errorMessage: string = null;

  signingUp: boolean = false;

  genders = ['Male', 'Female', 'Other'];

  constructor(private router: Router, private http: HttpClient, private signupService: SignUpService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.user.name = form.value.name;
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.user.confirmPassword = form.value.confirmPassword;
    this.signup();
  }

  private isUserValid() {
    this.errorMessage = null;
    const result = this.signupService.validateUserSchema(this.user);

    if (!result.error) {
      // valid user
      return true;
    } else if (result.error.details) {
      this.errorMessage = result.error.details[0].message;
    }
  }

  private signup() {
    if (this.isUserValid()) {

      const body = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      };

      this.signingUp = true;

      this.signupService.createUser(body).subscribe(response => {
        this.signingUp = false;

        localStorage.token = response.token;
        this.router.navigate(['/dashboard']);
      }, error => {
        this.signingUp = false;
        this.errorMessage = error.error.message;
      });

    }
  }

}
