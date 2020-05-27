import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: { id: number, title: string; description: string; }[] = [
    {
      id: 1,
      title: "Title",
      description: "Description"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
