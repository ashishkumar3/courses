import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  API_URL: string = 'http://localhost:3000';
  user;

  constructor(private router: Router) { }

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
