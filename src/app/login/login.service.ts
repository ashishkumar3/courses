import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Joi from '@hapi/joi';

import { User } from './user.model';
import { Observable } from 'rxjs';

import { ApiConstant } from '../api-constants';

@Injectable({
    providedIn: 'root'
})
export class LogInService {

    schema: Joi.Schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });

    private LOGIN_URL = 'http://localhost:3000/auth/login';

    constructor(private http: HttpClient) { }

    validateUser(user: User): Joi.ValidationResult {
        return this.schema.validate(user);
    }

    loginUser(body: User): Observable<{ success: boolean; message: string; token: string; }> {
        return this.http.post<{ success: boolean; message: string; token: string; }>(ApiConstant.API_URL + '/auth/login', body);
    }

}