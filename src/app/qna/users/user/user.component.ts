import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_id: number;
  user: User;
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user_id = this.activatedRoute.snapshot.params['id'];
    this.userService.fetchUserWithId(this.user_id).subscribe(user => {
      this.user = user;
      this.loading = false;
    });
  }

}
