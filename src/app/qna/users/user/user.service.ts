import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { Question } from '../../question.model';
import { Answer } from '../../answer.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    fetchUserWithId(id: number) {
        return this.http.get<User>(`http://localhost:3000/api/v1/users/${id}`).pipe(map(user => user[0]));
    }

    fetchQuestionsByUser(id: number) {
        return this.http.get<Question[]>(`http://localhost:3000/api/v1/users/${id}/questions`);
    }

    fetchAnswersByUser(id: number) {
        return this.http.get<Answer[]>(`http://localhost:3000/api/v1/users/${id}/answers`);
    }

    fetchCommentsByUser(id: number) {
        return this.http.get<Answer[]>(`http://localhost:3000/api/v1/users/${id}/comments`);
    }

}