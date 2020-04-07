import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  API_URL: string = 'http://localhost:3000';
  user;

  breadcrumbs: string[];

  constructor(private router: Router) {
    // console.log(this.router.url);
    this.breadcrumbs = this.router.url.split('/');
    console.log(this.breadcrumbs);
  }

  ngOnInit(): void {
    fetch(this.API_URL, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.token}`
      }
    }).then(res => res.json()).then(result => {
      console.log("RESULT", result);
      if (result.user) {
        this.user = result.user;
      } else {
        this.logout();
      }
    }).catch(err => console.log(err));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
