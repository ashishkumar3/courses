import * as Joi from '@hapi/joi';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note.model';

import { ApiConstant } from '../../api-constants';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    constructor(private http: HttpClient) { }

    schema: Joi.Schema = Joi.object({
        title: Joi.string().trim().max(25),
        description: Joi.string().trim().max(500)
    });

    validateNote(note): Joi.ValidationResult {
        return this.schema.validate(note);
    }

    fetchNotes() {
        return this.http.get<Note[]>(ApiConstant.API_URL + '/api/v1/notes', {
            headers: new HttpHeaders({
                'authorization': `Bearer ${localStorage.token}`
            })
        });
    }

    createNote(body) {
        return this.http.post<{ success: boolean; note: Note; }>(ApiConstant.API_URL + '/api/v1/notes/create', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.token}`
            })
        });
    }
}