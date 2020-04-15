import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as MarkdownIt from 'markdown-it';
import * as emoji from 'markdown-it-emoji';
import { Note } from './note.model';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  md = new MarkdownIt();

  title: string = '';
  description: string = '';
  successMessage: boolean;
  errorMessage: string;

  notes: Note[] = [];
  selectedNote: Note;

  toggleNoteModal: boolean = false;
  toggleNoteCard: boolean = false;



  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
    this.md.use(emoji);
  }

  renderMarkdown(note) {
    return this.md.render(note);
  }

  getAllNotes() {
    this.noteService.fetchNotes().subscribe(notes => {
      this.notes = notes;
    }, error => {
      this.errorMessage = error.message;
    });
  }

  newNote() {
    this.toggleNoteModal = true;
  }

  closeNoteModal() {
    this.toggleNoteModal = false;
  }

  isNoteValid(note) {
    this.errorMessage = null;
    const result = this.noteService.validateNote(note);
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

      if (!this.isNoteValid(form.value)) {
        this.errorMessage = "Write something atleast!";
        return;
      }

      this.noteService.createNote(form.value).subscribe(response => {
        if (response.success) {
          this.successMessage = true;
          this.notes.unshift({
            created_at: response.note.created_at,
            title: response.note.title,
            updated_at: response.note.updated_at,
            description: response.note.description
          });
        }
      }, error => {
        this.errorMessage = error.error.message;
      });
      this.closeNoteModal();
    }
  }

}
