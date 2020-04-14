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
      title: 'Markdown in nodejs app',
      description: 'lorem'
    },
    {
      id: 2,
      title: 'Learn Angular the easy way',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, animi qui natus asperiores necessitatibus nobis laboriosam aspernatur iure sed eligendi ullam porro ipsam saepe similique laborum. Nam laborum vel illum.'
    },
    {
      id: 3,
      title: 'Firebase is easy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, animi qui natus asperiores necessitatibus nobis laboriosam aspernatur iure sed eligendi ullam porro ipsam saepe similique laborum. Nam laborum vel illum.'
    },
    {
      id: 4,
      title: 'Better learn deno now!',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, animi qui natus asperiores necessitatibus nobis laboriosam aspernatur iure sed eligendi ullam porro ipsam saepe similique laborum. Nam laborum vel illum.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
