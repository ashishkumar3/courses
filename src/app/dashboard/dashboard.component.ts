import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  API_URL: string = 'http://localhost:3000';
  user;

  breadcrumbs: string[];

  constructor(private router: Router, private dashboardService: DashboardService, private authService: AuthService) {
    // console.log(this.router.url);
    this.breadcrumbs = this.router.url.split('/');
    // console.log(this.breadcrumbs);
  }

  ngOnInit(): void {

    this.dashboardService.getUserDetails().subscribe(response => {
      if (response.user) {
        this.user = response.user;
      } else {
        this.logout();
      }
    }, error => {
      // handle error
      console.log(error);
    });
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
