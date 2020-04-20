import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/signup/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    fetchUserWithId(id: number) {
        return this.http.get<User>(`http://localhost:3000/api/v1/users/${id}`);
    }
}