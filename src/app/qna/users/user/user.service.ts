import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { Question } from '../../question.model';
import { Answer } from '../../answer.model';
import { ApiConstant } from 'src/app/api-constants';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    fetchUserWithId(id: number) {
        return this.http.get<User>(`${ApiConstant.API_URL}/api/v1/users/${id}`).pipe(map(user => user[0]));
    }

    fetchQuestionsByUser(id: number) {
        return this.http.get<Question[]>(`${ApiConstant.API_URL}/api/v1/users/${id}/questions`);
    }

    fetchAnswersByUser(id: number) {
        return this.http.get<Answer[]>(`${ApiConstant.API_URL}/api/v1/users/${id}/answers`);
    }

    fetchCommentsByUser(id: number) {
        return this.http.get<Answer[]>(`${ApiConstant.API_URL}/api/v1/users/${id}/comments`);
    }

}