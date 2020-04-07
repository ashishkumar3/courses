import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: { date: string; name: string; instructor: string; progress: string; }[] = [
    {
      date: '07-04-2020',
      name: 'MEAN Stack',
      instructor: 'Mosh',
      progress: '10'
    },
    {
      date: '17-12-2019',
      name: 'MERN Stack',
      instructor: 'Academind',
      progress: '25'
    },
    {
      date: '01-04-2020',
      name: 'ELK Stack',
      instructor: 'Fireship',
      progress: '60'
    }, {
      date: '27-02-2020',
      name: 'Angular',
      instructor: 'Mosh',
      progress: '15'
    },
    {
      date: '13-03-2020',
      name: 'NodeJS',
      instructor: 'Bucky Roberts',
      progress: '35'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
