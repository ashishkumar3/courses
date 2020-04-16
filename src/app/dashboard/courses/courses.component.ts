import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.showCourses();
    console.log(this.courses);
  }

  private showCourses() {
    this.courses = this.coursesService.fetchCourses();
  }

  createCourse() {
    if (this.coursesService.checkUserPrivileges()) {
      // refer to some teaching website.
      console.log('Course created!');
    }
  }

}
