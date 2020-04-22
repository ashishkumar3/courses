import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiConstant } from '../api-constants';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: HttpClient) { }

    getUserDetails() {
        return this.http.get<{ message: string; user: { email: string; exp: number; iat: number; id: number; }; }>(ApiConstant.API_URL, {
            headers: new HttpHeaders({
                'authorization': `Bearer ${localStorage.token}`
            })
        });
    }
}