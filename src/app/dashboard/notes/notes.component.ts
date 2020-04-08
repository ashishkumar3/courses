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

  notes: { created_at: ''; title: string; updated_at: string; descripton: string; }[] = [];
  selectedNote: { created_at: string; title: string; updated_at: string; description: string; };

  toggleNoteModal: boolean = false;
  toggleNoteCard: boolean = false;

  schema: Joi.Schema = Joi.object({
    title: Joi.string().trim().max(25),
    description: Joi.string().trim().max(500)
  });

  constructor() { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then(err => {
        throw new Error(err.message);
      });
    }).then(result => {
      console.log(result);
      this.notes = result;
    }).catch(err => this.errorMessage = err.errorMessage);
  }

  newNote() {
    this.toggleNoteModal = true;
  }

  closeNoteModal() {
    this.toggleNoteModal = false;
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

  showNoteCard(note) {
    this.selectedNote = note;
    this.toggleNote();
  }

  toggleNote() {
    this.toggleNoteCard = !this.toggleNoteCard;
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
          this.closeNoteModal();
          console.log(result);
          this.notes.push({
            created_at: result.note.created_at,
            title: result.note.title,
            updated_at: result.note.updated_at,
            descripton: result.note.description
          });
        }
      }).catch(err => this.errorMessage = err.errorMessage);
    }
  }

}
