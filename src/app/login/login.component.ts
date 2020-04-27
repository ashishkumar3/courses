import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { LogInService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  errorMessage: string = null;

  rememberMe: boolean = false;

  user: User = {
    email: null,
    password: null
  };

  constructor(private router: Router, private http: HttpClient, private loginService: LogInService) { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   this.login();
  // }

  onSubmit(form: NgForm) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    // console.log(this.user);
    this.login();
  }

  private isUserValid() {
    this.errorMessage = null;
    const result = this.loginService.validateUser(this.user);

    if (!result.error) {
      return true;
    } else if (result.error.details) {
      this.errorMessage = result.error.details[0].message;
    }
  }

  private login() {
    if (this.isUserValid()) {
      this.loading = true;

      this.loginService.loginUser(this.user).subscribe(response => {
        localStorage.token = response.token;
        this.router.navigate(['dashboard']);
      }, error => {
        this.loading = false;
        this.errorMessage = error.error.message;
      });

    }
  }
}
