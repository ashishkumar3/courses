import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  API_URL: string = 'http://localhost:3000';
  user = localStorage.token;

  constructor(private router: Router, private profileService: ProfileService, private authService: AuthService) { }

  ngOnInit(): void {
    this.showProfileDetails();
  }

  private showProfileDetails() {
    this.profileService.getProfileDetails().subscribe(response => {

      if (response.user) {
        this.user = response.user;
      } else {
        this.authService.removeToken();
        this.router.navigate(['/login']);
      }
    }, error => {
      // handle error
      console.log(error);
    });
  }

}
