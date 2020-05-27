import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  date: any = null;

  constructor() { }

  ngOnInit(): void {
    this.date = this.setDate();
  }

  setDate() {
    return new Date();
  }

}
