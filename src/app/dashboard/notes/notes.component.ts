import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Joi from '@hapi/joi';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  title: string = '';
  description: string = '';
  successMessage: boolean;
  errorMessage: string;

  schema: Joi.Schema = Joi.object({
    title: Joi.string().trim().max(25),
    description: Joi.string().trim().max(500)
  });

  constructor() { }

  ngOnInit(): void {
  }

  isNoteValid(note) {
    this.errorMessage = null;
    const result = this.schema.validate(note);
    if (!result.error) {
      return true;
    } else if (result.error.details) {
      this.errorMessage = result.error.details[0].message;
    }
  }

  onSubmit(form: NgForm) {
    if (form.value) {
      // post the note

      if (!this.isNoteValid(form.value)) {
        this.errorMessage = "Write something atleast!";
        return;
      }
      fetch('http://localhost:3000/api/v1/notes/create', {
        method: 'POST',
        body: JSON.stringify(form.value),
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.token}`
        }
      }).then(res => {
        if (res.ok) {
          console.log('RESPONSE IS OK!');
          return res.json();
        }
        return res.json().then(err => {
          throw new Error(err.message);
        });

      }).then(result => {
        if (result.success) {
          this.successMessage = true;
        }
      }).catch(err => this.errorMessage = err.errorMessage);
    }
  }

}
