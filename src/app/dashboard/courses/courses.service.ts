import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor(private http: HttpClient) { }

    private courses: Course[] = [
        {
            id: 1,
            name: "Firebase",
            description: "Firestore, Realtime Database, Cloud Functions",
            instructor: "Ashish",
            date_applied: "12-12-12",
            rating: 5
        },
        {
            id: 2,
            name: "Angular",
            description: "Basics, Observables, Routing",
            instructor: "Ashish",
            date_applied: "12-1-18",
            rating: 5
        }
    ];

    fetchCourses(): Course[] {
        // make an http request to the courses end point and 
        return this.courses;
    }

    checkUserPrivileges(): boolean {
        // check if the user type is instructor only then we can create a course else we can redirect to some page to make a user (student by default) an instructor.
        return true;
    }

}