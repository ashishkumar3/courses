import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: HttpClient) { }

    getUserDetails() {
        return this.http.get<{ message: string; user: { email: string; exp: number; iat: number; id: number; }; }>('http://localhost:3000', {
            headers: new HttpHeaders({
                'authorization': `Bearer ${localStorage.token}`
            })
        });
    }
}