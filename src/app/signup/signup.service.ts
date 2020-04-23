import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Joi from '@hapi/joi';

import { User } from './user-signup.model';
import { ApiConstant } from '../api-constants';

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    private SIGNUP_URL = ApiConstant.API_URL + '/auth/signup';

    schema: Joi.Schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required().regex(/^\w+(?:\s+\w+)*$/),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirmPassword: Joi.ref('password')
    });

    constructor(private http: HttpClient) { }

    createUser(body: { name: string, email: string, password: string; }): Observable<{ success: boolean; message: string; token: string; }> {
        // handle post req
        return this.http.post<{ success: boolean; message: string; token: string; }>(this.SIGNUP_URL, body);
    }

    validateUserSchema(user: User): Joi.ValidationResult {
        return this.schema.validate(user);
    }

}