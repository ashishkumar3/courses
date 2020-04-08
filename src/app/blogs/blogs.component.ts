import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: { title: string; description: string; }[] = [
    {
      title: 'Learn Anglar the easy way',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, animi qui natus asperiores necessitatibus nobis laboriosam aspernatur iure sed eligendi ullam porro ipsam saepe similique laborum. Nam laborum vel illum.'
    },
    {
      title: 'Firebase is easy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, animi qui natus asperiores necessitatibus nobis laboriosam aspernatur iure sed eligendi ullam porro ipsam saepe similique laborum. Nam laborum vel illum.'
    },
    {
      title: 'Better learn deno now!',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, animi qui natus asperiores necessitatibus nobis laboriosam aspernatur iure sed eligendi ullam porro ipsam saepe similique laborum. Nam laborum vel illum.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
