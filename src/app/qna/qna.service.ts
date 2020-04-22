import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.model';
import { map } from 'rxjs/operators';
import { ApiConstant } from '../api-constants';

@Injectable({
    providedIn: 'root'
})
export class QnaService {
    constructor(private http: HttpClient) { }

    fetchAllQuestions() {
        return this.http.get<Question[]>(ApiConstant.API_URL + '/api/v1/questions');
    }
}