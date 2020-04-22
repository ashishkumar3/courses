import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../question.model';
import { Answer } from '../../answer.model';
import { User } from '../../users/user/user.model';
import { ApiConstant } from 'src/app/api-constants';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

    fetchQuestionDetails(id: number) {
        return this.http.get(ApiConstant.API_URL + `/api/v1/questions/${id}`);
    }
}