import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QnaService {
    constructor(private http: HttpClient) { }

    fetchAllQuestions() {
        return this.http.get<Question[]>('http://localhost:3000/api/v1/questions');
    }
}