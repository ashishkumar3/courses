import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  API_URL: string = 'http://localhost:3000';
  user;

  constructor(private router: Router) {
    // console.log(this.router.url);
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

}
