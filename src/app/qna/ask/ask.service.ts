import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../question.model';

import { ApiConstant } from '../../api-constants';

@Injectable({
    providedIn: 'root'
})
export class AskService {
    constructor(private http: HttpClient) { }

    postQuestion(question: { title: string; description: string; }) {
        return this.http.post<{ question: Question; success: boolean; }>(ApiConstant.API_URL + '/api/v1/questions/ask', question, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.token}`
            })
        });
    }
}